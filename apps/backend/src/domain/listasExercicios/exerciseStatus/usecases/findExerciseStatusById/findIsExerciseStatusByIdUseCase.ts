import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { ExerciseStatusRepository } from "../../repositories/exerciseStatusRepository"

interface FindExerciseStatusByIdUseCaseRequest {
    id: string
}

type FindExerciseStatusByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseStatus: ExerciseStatus }
>

export class FindExerciseStatusByIdUseCase {

    constructor(private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ id }: FindExerciseStatusByIdUseCaseRequest): Promise<FindExerciseStatusByIdUseCaseResponse> {

        const exerciseStatus = await this.exerciseStatusRepository.findById(id)
        if (!exerciseStatus)
            return left({ error: new ResourceNotFoundError(`Exercise Status '${id}'`) })

        return right({ exerciseStatus })
    }
}