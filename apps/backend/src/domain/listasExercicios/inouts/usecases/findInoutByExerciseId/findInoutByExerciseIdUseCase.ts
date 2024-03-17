import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Inout } from "@/domain/listasExercicios/@entities/inout"
import { InoutRepository } from "../../repositories/inoutRepository"

interface FindInoutByExerciseIdUseCaseRequest {
    exerciseId: string
}

type FindInoutByExerciseIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { inout: Inout }
>

export class FindInoutByExerciseIdUseCase {

    constructor(private inoutRepository: InoutRepository) { }

    async execute({ exerciseId }: FindInoutByExerciseIdUseCaseRequest): Promise<FindInoutByExerciseIdUseCaseResponse> {

        const inout = await this.inoutRepository.findByExerciseId(exerciseId)
        if (!inout)
            return left({ error: new ResourceNotFoundError(`Inout from '${exerciseId}'`) })

        return right({ inout })
    }
}