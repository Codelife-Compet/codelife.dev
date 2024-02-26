import { Either, left, right } from "@/core/types/either"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindExercisesListByIdUseCase } from "../findExerciseListById/findExerciseListByIdUseCase"

interface DeleteExerciseListUseCaseRequest {
    id: string
}

type DeleteExerciseListUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercisesList: ExercisesList }
>

export class DeleteExerciseListUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ id }: DeleteExerciseListUseCaseRequest): Promise<DeleteExerciseListUseCaseResponse> {

        const findExercisesListByIdUseCase = new FindExercisesListByIdUseCase(this.exercisesListsRepository)
        const possibleExercisesList = await findExercisesListByIdUseCase.execute({ id })
        if (possibleExercisesList.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise List ${id}`) })

        const exercisesList = await this.exercisesListsRepository.delete(id)

        return right({ exercisesList })
    }
}