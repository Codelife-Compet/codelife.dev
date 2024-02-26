import { Either, left, right } from "@/core/types/either"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { ExerciseStatusRepository } from "../../repositories/exerciseStatusRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindExerciseStatusByIdUseCase } from "../findExerciseStatusById/findIsExerciseStatusByIdUseCase"

interface updateExerciseStatusUseCaseRequest {
    id: string
    userName?: string
    status?: string
    exerciseId?: string
}

type updateExerciseStatusUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseStatus: ExerciseStatus }
>

export class updateExerciseStatusUseCase {

    constructor(private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ id, ...data }: updateExerciseStatusUseCaseRequest): Promise<updateExerciseStatusUseCaseResponse> {

        const findExerciseStatusByIdUseCase = new FindExerciseStatusByIdUseCase(this.exerciseStatusRepository)
        const possibleExerciseStatus = await findExerciseStatusByIdUseCase.execute({ id })
        if (possibleExerciseStatus.isLeft())
            return left({ error: new ResourceNotFoundError(`ExerciseStatus ${id}`) })

        const exerciseStatus = await this.exerciseStatusRepository.update(id, data)

        return right({ exerciseStatus })
    }
}