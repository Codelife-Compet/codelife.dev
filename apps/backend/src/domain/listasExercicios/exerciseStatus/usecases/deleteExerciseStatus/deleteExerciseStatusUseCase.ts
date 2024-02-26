import { Either, left, right } from "@/core/types/either"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { ExerciseStatusRepository } from "../../repositories/exerciseStatusRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindExerciseStatusByIdUseCase } from "../findExerciseStatusById/findIsExerciseStatusByIdUseCase"

interface DeleteExerciseStatusUseCaseRequest {
    id: string
}

type DeleteExerciseStatusUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseStatus: ExerciseStatus }
>

export class DeleteExerciseStatusUseCase {

    constructor(private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ id }: DeleteExerciseStatusUseCaseRequest): Promise<DeleteExerciseStatusUseCaseResponse> {

        const findExerciseStatusByIdUseCase = new FindExerciseStatusByIdUseCase(this.exerciseStatusRepository)
        const possibleExerciseStatus = await findExerciseStatusByIdUseCase.execute({ id })
        if (possibleExerciseStatus.isLeft())
            return left({ error: new ResourceNotFoundError(`ExerciseStatus ${id}`) })

        const exerciseStatus = await this.exerciseStatusRepository.delete(id)

        return right({ exerciseStatus })
    }
}