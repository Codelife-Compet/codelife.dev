import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { LanguageExercisesList } from "@/domain/listasExercicios/@entities/languageExercisesLists"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"
import { FindLanguageExercisesListByLanguageUseCase } from "../findLanguageExercisesListsByLanguage/findLanguageExerciseListByLanguageUseCase"

interface CreateLanguageExercisesListUseCaseRequest {
    language: string
}

type CreateLanguageExercisesListUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { languageExercisesList: LanguageExercisesList }
>

export class CreateLanguageExercisesListUseCase {

    constructor(private languageExercisesListsRepository: LanguageExercisesListsRepository) { }

    async execute({ language }: CreateLanguageExercisesListUseCaseRequest): Promise<CreateLanguageExercisesListUseCaseResponse> {

        const findLanguageExercisesListByNameUseCase = new FindLanguageExercisesListByLanguageUseCase(this.languageExercisesListsRepository)
        const possibleLanguageExercisesList = await findLanguageExercisesListByNameUseCase.execute({ language })
        if (possibleLanguageExercisesList.isRight()) 
            return left({ error: new ResourceAlreadyExistsError(`LanguageExercisesList ${language}`) })

        const languageExercisesList = await this.languageExercisesListsRepository.create({ exercisesLists: [], language })

        return right({ languageExercisesList })
    }
}