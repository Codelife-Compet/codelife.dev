import { Either, left, right } from "@/core/types/either"
import { Inout } from "@/domain/listasExercicios/@entities/inout"
import { InoutRepository } from "../../repositories/inoutRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindInoutByIdUseCase } from "../findInoutById/findIsInoutByIdUseCase"

interface DeleteInoutUseCaseRequest {
    id: string
}

type DeleteInoutUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { inout: Inout }
>

export class DeleteInoutUseCase {

    constructor(private inoutRepository: InoutRepository) { }

    async execute({ id }: DeleteInoutUseCaseRequest): Promise<DeleteInoutUseCaseResponse> {

        const findInoutByIdUseCase = new FindInoutByIdUseCase(this.inoutRepository)
        const possibleInout = await findInoutByIdUseCase.execute({ id })
        if (possibleInout.isLeft())
            return left({ error: new ResourceNotFoundError(`Inout ${id}`) })

        const inout = await this.inoutRepository.delete(id)

        return right({ inout })
    }
}