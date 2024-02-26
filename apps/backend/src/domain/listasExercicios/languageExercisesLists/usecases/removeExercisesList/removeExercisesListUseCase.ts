import { Either, left, right } from "@/core/types/either"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"
import { ExercisesListsRepository } from "@/domain/listasExercicios/exercisesLists/repositories/exercisesListsRepository"
import { FindLanguageExercisesListByLanguageUseCase } from "../findLanguageExercisesListsByLanguage/findLanguageExerciseListByLanguageUseCase"
import { FindExercisesListByIdUseCase } from "@/domain/listasExercicios/exercisesLists/usecases/findExerciseListById/findExerciseListByIdUseCase"

interface RemoveExercisesListUseCaseRequest {
    exerciseslistId: string
    language: string
}

type RemoveExercisesListUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseslists: ExercisesList[] }
>

export class RemoveExercisesListUseCase {

    constructor(private languageexerciseslistsRepository: LanguageExercisesListsRepository,
        private exerciseslistsRepository: ExercisesListsRepository) { }

    async execute({ language, exerciseslistId }: RemoveExercisesListUseCaseRequest): Promise<RemoveExercisesListUseCaseResponse> {

        const findLanguageExercisesListByNameUseCase = new FindLanguageExercisesListByLanguageUseCase(this.languageexerciseslistsRepository)
        const possibleLanguageExercisesList = await findLanguageExercisesListByNameUseCase.execute({ language })
        if (possibleLanguageExercisesList.isLeft())
            return left({ error: new ResourceNotFoundError(`LanguageExercisesList '${language}'`) })

        const findExercisesListUseCase = new FindExercisesListByIdUseCase(this.exerciseslistsRepository)
        const exerciseslist = await findExercisesListUseCase.execute({ id: exerciseslistId })
        if (exerciseslist.isLeft())
            return left({ error: new ResourceNotFoundError(`ExercisesList '${exerciseslistId}'`) })

        const currentExercisesLists = await this.languageexerciseslistsRepository.fetchExercisesLists(possibleLanguageExercisesList.value.languageExercisesList.id.toString())
        const exerciseslistAlreadyInLanguageExercisesList = currentExercisesLists.find(exerciseslist => exerciseslist.id.toString() === exerciseslistId)
        if (!exerciseslistAlreadyInLanguageExercisesList)
            return left({ error: new ResourceNotFoundError(`ExercisesList '${exerciseslistId}' in languageexerciseslist '${language}'`) })

        const exerciseslists = await this.languageexerciseslistsRepository.removeExercisesList(exerciseslistId, language)

        return right({ exerciseslists })
    }
}