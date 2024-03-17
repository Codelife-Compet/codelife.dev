import { Either, left, right } from "@/core/types/either"
import { Inout } from "@/domain/listasExercicios/@entities/inout"
import { InoutRepository } from "../../repositories/inoutRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindInoutByIdUseCase } from "../findInoutById/findIsInoutByIdUseCase"

interface updateInoutUseCaseRequest {
    id: string
    input?: string
    output?: string
}

type updateInoutUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { inout: Inout }
>

export class updateInoutUseCase {

    constructor(private inoutRepository: InoutRepository) { }

    async execute({ id, ...data }: updateInoutUseCaseRequest): Promise<updateInoutUseCaseResponse> {

        const findInoutByIdUseCase = new FindInoutByIdUseCase(this.inoutRepository)
        const possibleInout = await findInoutByIdUseCase.execute({ id })
        if (possibleInout.isLeft())
            return left({ error: new ResourceNotFoundError(`Inout ${id}`) })

        const inout = await this.inoutRepository.update(id, data)

        return right({ inout })
    }
}