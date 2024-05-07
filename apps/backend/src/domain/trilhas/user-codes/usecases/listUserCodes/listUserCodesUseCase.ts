import { Either, left, right } from "@/core/types/either"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository";
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { UserCode } from "@/domain/trilhas/@entities/userCode";

type ListUserCodesUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { usercodes: UserCode[] }
>

export class ListUserCodesUseCase {

    constructor(private usercodesRepository: UserCodesRepository) { }

    async execute(): Promise<ListUserCodesUseCaseResponse> {

        const usercodes = await this.usercodesRepository.list();

        return right({ usercodes })
    }
}