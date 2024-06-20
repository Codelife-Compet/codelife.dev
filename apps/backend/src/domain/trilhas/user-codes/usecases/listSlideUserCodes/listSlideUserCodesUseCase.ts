import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UserCode } from "@/domain/trilhas/@entities/userCode";
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository";

interface ListSlideUserCodesUseCaseRequest {
    id: string
}

type ListSlideUserCodesUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { usercodes: UserCode[] }
>

export class ListSlideUserCodesUseCase {

    constructor(private slidesRepository: UserCodesRepository) { }

    async execute({ id } : ListSlideUserCodesUseCaseRequest): Promise<ListSlideUserCodesUseCaseResponse> {

        const usercodes = await this.slidesRepository.listBySlideId(id);

        return right({ usercodes })
    }
}