import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"
import { UserCode } from "@/domain/trilhas/@entities/userCode"

interface FindUserCodeByIdRequest {
    id: string
}

type FindUserCodeByIdResponse = Either<
    { error: ResourceNotFoundError },
    { usercode: UserCode }
>

export class FindUserCodeByIdUseCase {

    constructor(private usercodesRepository: UserCodesRepository) { }

    async execute({ id }: FindUserCodeByIdRequest): Promise<FindUserCodeByIdResponse> {

        const usercode = await this.usercodesRepository.findById(id)
        if (!usercode)
            return left({ error: new ResourceNotFoundError(`UserCode ${id}`) })

        return right({ usercode })
    }
}