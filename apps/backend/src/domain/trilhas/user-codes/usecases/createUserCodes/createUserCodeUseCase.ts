import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UserCode } from "../../../@entities/userCode"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"
import { FindUserCodeByUserNameUseCase } from "../findUserCodeByUserName/findUserCodeByUserNameUseCase"

interface CreateUserCodeUseCaseRequest {
    userName: string
    slideId: string
    code?: string
}

type CreateUserCodeUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { usercode: UserCode }
>

export class CreateUserCodeUseCase {

    constructor(private userCodesRepository: UserCodesRepository) { }

    async execute({ code, userName, slideId }: CreateUserCodeUseCaseRequest): Promise<CreateUserCodeUseCaseResponse> {

        const findUserCodeByUserNameUseCase = new FindUserCodeByUserNameUseCase(this.userCodesRepository)

        const possibleUserCode = await findUserCodeByUserNameUseCase.execute({ userName })

        if (possibleUserCode.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`UserCode's ${userName} username`) })
        }

        const usercode = await this.userCodesRepository.create({ slideId, userName, code })

        return right({ usercode })
    }
}