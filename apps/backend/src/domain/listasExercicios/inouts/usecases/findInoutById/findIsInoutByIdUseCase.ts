import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Inout } from "@/domain/listasExercicios/@entities/inout"
import { InoutRepository } from "../../repositories/inoutRepository"

interface FindInoutByIdUseCaseRequest {
    id: string
}

type FindInoutByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { inout: Inout }
>

export class FindInoutByIdUseCase {

    constructor(private inoutRepository: InoutRepository) { }

    async execute({ id }: FindInoutByIdUseCaseRequest): Promise<FindInoutByIdUseCaseResponse> {

        const inout = await this.inoutRepository.findById(id)
        if (!inout)
            return left({ error: new ResourceNotFoundError(`Exercise Status '${id}'`) })

        return right({ inout })
    }
}