import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { ExerciseStatusRepository } from "../../repositories/exerciseStatusRepository"
import { FindExerciseStatusByUserNameUseCase } from "../findExerciseStatusByUserName/findIsExerciseStatusByUserNameUseCase"

interface CreateExerciseStatusUseCaseRequest {
    userName: string
    status: string
    exerciseId: string
}

type CreateExerciseStatusUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exerciseStatus: ExerciseStatus }
>

export class CreateExerciseStatusUseCase {

    constructor(private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ exerciseId, status, userName }: CreateExerciseStatusUseCaseRequest): Promise<CreateExerciseStatusUseCaseResponse> {

        const findExerciseStatusByNameUseCase = new FindExerciseStatusByUserNameUseCase(this.exerciseStatusRepository)
        const possibleExerciseStatus = await findExerciseStatusByNameUseCase.execute({ userName })
        if (possibleExerciseStatus.isRight())
            return left({ error: new ResourceAlreadyExistsError(`ExerciseStatus ${userName}`) })

        const exerciseStatus = await this.exerciseStatusRepository.create({ exerciseId, status, userName })

        return right({ exerciseStatus })
    }
}