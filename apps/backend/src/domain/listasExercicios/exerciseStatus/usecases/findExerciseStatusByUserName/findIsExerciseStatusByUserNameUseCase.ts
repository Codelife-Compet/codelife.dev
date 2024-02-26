import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { ExerciseStatusRepository } from "../../repositories/exerciseStatusRepository"

interface FindExerciseStatusByUserNameUseCaseRequest {
    userName: string
}

type FindExerciseStatusByUserNameUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseStatus: ExerciseStatus }
>

export class FindExerciseStatusByUserNameUseCase {

    constructor(private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ userName }: FindExerciseStatusByUserNameUseCaseRequest): Promise<FindExerciseStatusByUserNameUseCaseResponse> {

        const exerciseStatus = await this.exerciseStatusRepository.findByUserName(userName)
        if (!exerciseStatus)
            return left({ error: new ResourceNotFoundError(`Exercise Status '${userName}'`) })

        return right({ exerciseStatus })
    }
}