import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Team } from "../../../@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"

type ListTeamsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { teams: Team[] }
>

export class ListTeamsUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute(): Promise<ListTeamsUseCaseResponse> {

        const teams = await this.teamsRepository.list();

        return right({ teams })
    }
}