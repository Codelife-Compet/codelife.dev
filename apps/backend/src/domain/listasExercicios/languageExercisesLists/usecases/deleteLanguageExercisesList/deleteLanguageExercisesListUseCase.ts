import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { LanguageExercisesList } from "@/domain/listasExercicios/@entities/languageExercisesLists"
import { LanguageExercisesListsRepository } from "../../repositories/languageExercisesListRepository"
import { FindLanguageExercisesListByIdUseCase } from "../findLanguageExercisesListsById/findLanguageExercisesListsByIdUseCase"

interface DeleteLanguageExercisesListUseCaseRequest {
    id: string
}

type DeleteLanguageExercisesListUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { languageExercisesList: LanguageExercisesList }
>

export class DeleteLanguageExercisesListUseCase {

    constructor(private languageExercisesListsRepository: LanguageExercisesListsRepository) { }

    async execute({ id }: DeleteLanguageExercisesListUseCaseRequest): Promise<DeleteLanguageExercisesListUseCaseResponse> {

        const findLanguageExercisesListByIdUseCase = new FindLanguageExercisesListByIdUseCase(this.languageExercisesListsRepository)
        const possibleLanguageExercisesList = await findLanguageExercisesListByIdUseCase.execute({ id })
        if (possibleLanguageExercisesList.isRight()) 
            return left({ error: new ResourceAlreadyExistsError(`LanguageExercisesList ${id}`) })

        const languageExercisesList = await this.languageExercisesListsRepository.delete(id)

        return right({ languageExercisesList })
    }
}