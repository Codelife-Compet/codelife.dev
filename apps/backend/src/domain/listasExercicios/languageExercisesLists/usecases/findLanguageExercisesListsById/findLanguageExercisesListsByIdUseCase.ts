import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { LanguageExercisesList } from "@/domain/listasExercicios/@entities/languageExercisesLists"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"

interface FindLanguageExercisesListByIdUseCaseRequest {
    id: string
}

type FindLanguageExercisesListByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { languageExercisesList: LanguageExercisesList }
>

export class FindLanguageExercisesListByIdUseCase {

    constructor(private exerciselistsRepository: LanguageExercisesListsRepository) { }

    async execute({ id }: FindLanguageExercisesListByIdUseCaseRequest): Promise<FindLanguageExercisesListByIdUseCaseResponse> {

        const languageExercisesList = await this.exerciselistsRepository.findById(id)
        if (!languageExercisesList)
            return left({ error: new ResourceNotFoundError(`LanguageExercisesList ${id}`) })

        return right({ languageExercisesList })
    }
}