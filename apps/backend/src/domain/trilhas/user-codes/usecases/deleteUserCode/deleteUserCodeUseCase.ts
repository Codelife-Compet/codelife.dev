import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"
import { UserCode } from "@/domain/trilhas/@entities/userCode"

interface DeleteUserCodeUseCaseRequest {
    id: string
}

type DeleteUserCodeUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { usercode: UserCode }
>

export class DeleteUserCodeUseCase {

    constructor(private usercodesRepository: UserCodesRepository) { }

    async execute({ id }: DeleteUserCodeUseCaseRequest): Promise<DeleteUserCodeUseCaseResponse> {

        const usercode = await this.usercodesRepository.delete(id)
        if (!usercode)
            return left({ error: new ResourceNotFoundError(`UserCode ${id}`) })

        return right({ usercode })
    }
}