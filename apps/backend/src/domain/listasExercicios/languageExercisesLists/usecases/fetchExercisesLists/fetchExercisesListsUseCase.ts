import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { FindLanguageExercisesListByIdUseCase } from "../findLanguageExercisesListsById/findLanguageExercisesListsByIdUseCase"

interface FetchExercisesUseCaseRequest {
    id: string
}

type FetchExercisesUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercisesLists: ExercisesList[] }
>

export class FetchExercisesUseCase {

    constructor(private languageExercisesListsRepository: LanguageExercisesListsRepository) { }

    async execute({ id }: FetchExercisesUseCaseRequest): Promise<FetchExercisesUseCaseResponse> {

        const findLanguageExercisesListByIdUseCase = new FindLanguageExercisesListByIdUseCase(this.languageExercisesListsRepository)
        const possibleLanguageExercisesList = await findLanguageExercisesListByIdUseCase.execute({ id })

        if (possibleLanguageExercisesList.isRight()) 
            return left({ error: new ResourceAlreadyExistsError(`LanguageExercisesList ${id}`) })

        const exercisesLists = await this.languageExercisesListsRepository.fetchExercisesLists(id)

        return right({ exercisesLists })
    }
}