import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"
import { UserCode } from "@/domain/trilhas/@entities/userCode"

interface UpdateUserCodeUseCaseRequest {
    id: string
    userName?: string
    code?: string
}

type UpdateUserCodeUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { usercode: UserCode }
>

export class UpdateUserCodeUseCase {

    constructor(private usercodesRepository: UserCodesRepository) { }

    async execute({id, ...data}: UpdateUserCodeUseCaseRequest): Promise<UpdateUserCodeUseCaseResponse> {

        const usercode = await this.usercodesRepository.update(id, data)

        if (!usercode)
            return left({ error: new ResourceNotFoundError(`UserCode ${id}`) })

        return right({ usercode })
    }
}