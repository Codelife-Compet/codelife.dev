import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Ponctuation } from "../../../@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

type ListPonctuationsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { ponctuations: Ponctuation[] }
>

export class ListPonctuationsUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute(): Promise<ListPonctuationsUseCaseResponse> {

        const ponctuations = await this.ponctuationsRepository.list();

        return right({ ponctuations })
    }
}