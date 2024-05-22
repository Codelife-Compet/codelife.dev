import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Ponctuation } from "@/domain/trilhas/@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

interface DeletePonctuationUseCaseRequest {
    id: string
}

type DeletePonctuationUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { ponctuation: Ponctuation }
>

export class DeletePonctuationUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ id }: DeletePonctuationUseCaseRequest): Promise<DeletePonctuationUseCaseResponse> {

        const ponctuation = await this.ponctuationsRepository.delete(id)
        if (!ponctuation)
            return left({ error: new ResourceNotFoundError(`Ponctuation ${id}`) })

        return right({ ponctuation })
    }
}