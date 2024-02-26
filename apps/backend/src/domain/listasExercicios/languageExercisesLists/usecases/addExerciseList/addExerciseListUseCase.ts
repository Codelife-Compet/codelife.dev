import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { ExercisesListsRepository } from "@/domain/listasExercicios/exercisesLists/repositories/exercisesListsRepository"
import { FindLanguageExercisesListByLanguageUseCase } from "../findLanguageExercisesListsByLanguage/findLanguageExerciseListByLanguageUseCase"
import { FindExercisesListByIdUseCase } from "@/domain/listasExercicios/exercisesLists/usecases/findExerciseListById/findExerciseListByIdUseCase"

interface AddExercisesListUseCaseRequest {
    exercisesListId: string
    languageExercisesListLanguage: string
}

type AddExercisesListUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercisesLists: ExercisesList[] }
>

export class AddExercisesListUseCase {

    constructor(private languageExercisesListsRepository: LanguageExercisesListsRepository,
        private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ languageExercisesListLanguage, exercisesListId }: AddExercisesListUseCaseRequest): Promise<AddExercisesListUseCaseResponse> {

        const findExerciseListByTopicUseCase = new FindLanguageExercisesListByLanguageUseCase(this.languageExercisesListsRepository)
        const possibleExercise = await findExerciseListByTopicUseCase.execute({ language: languageExercisesListLanguage })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Language Exercise List '${languageExercisesListLanguage}'`) })

        const findExerciseUseCase = new FindExercisesListByIdUseCase(this.exercisesListsRepository)
        const exercise = await findExerciseUseCase.execute({ id: exercisesListId })
        if (exercise.isRight())
            return left({ error: new ResourceAlreadyExistsError(`ExercisesList '${exercisesListId}' in exercise '${languageExercisesListLanguage}'`) })

        const currentExercise = await this.exercisesListsRepository.fetchExercises(possibleExercise.value.languageExercisesList.id.toString())
        const exerciseAlreadyInExercise = currentExercise.map(exercise => exercise.id.toString() === exercisesListId)
        if (exerciseAlreadyInExercise)
            return left({ error: new ResourceAlreadyExistsError(`ExercisesList '${exercisesListId}' in LanguageExercisesList '${languageExercisesListLanguage}'`) })

        const exercisesLists = await this.languageExercisesListsRepository.addExercisesList(exercisesListId, languageExercisesListLanguage)

        return right({ exercisesLists })
    }
}