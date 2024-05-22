import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Ponctuation, UpdatePonctuationProps } from "@/domain/trilhas/@entities/ponctuation"

interface UpdatePonctuationUseCaseRequest {
    id: string
    data: UpdatePonctuationProps
}

type UpdatePonctuationUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { ponctuation: Ponctuation }
>

export class UpdatePonctuationUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ id, data }: UpdatePonctuationUseCaseRequest): Promise<UpdatePonctuationUseCaseResponse> {

        const ponctuation = await this.ponctuationsRepository.update(id, data)

        if (!ponctuation)
            return left({ error: new ResourceNotFoundError(`Ponctuation ${id}`) })

        return right({ ponctuation })
    }
}