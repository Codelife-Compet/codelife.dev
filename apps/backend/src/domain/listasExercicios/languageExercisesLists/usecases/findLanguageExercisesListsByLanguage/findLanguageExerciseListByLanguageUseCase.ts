import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { LanguageExercisesList } from "@/domain/listasExercicios/@entities/languageExercisesLists"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"

interface FindLanguageExercisesListByLanguageUseCaseRequest {
    language: string
}

type FindLanguageExercisesListByLanguageUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { languageExercisesList: LanguageExercisesList }
>

export class FindLanguageExercisesListByLanguageUseCase {

    constructor(private languageExercisesListsRepository: LanguageExercisesListsRepository) { }

    async execute({ language }: FindLanguageExercisesListByLanguageUseCaseRequest): Promise<FindLanguageExercisesListByLanguageUseCaseResponse> {

        const languageExercisesList = await this.languageExercisesListsRepository.findByLanguage(language)
        if (!languageExercisesList)
            return left({ error: new ResourceNotFoundError(`LanguageExercisesList '${language}'`) })

        return right({ languageExercisesList })
    }
}