import { Either, left, right } from "@/core/types/either"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "../../repositories/exercisesRepository"
import { FindExerciseByIdUseCase } from "../findExerciseById/findExerciseByIdUseCase"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface DeleteExerciseUseCaseRequest {
    id: string
}

type DeleteExerciseUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercise: Exercise }
>

export class DeleteExerciseUseCase {

    constructor(private exercisesRepository: ExercisesRepository) { }

    async execute({ id }: DeleteExerciseUseCaseRequest): Promise<DeleteExerciseUseCaseResponse> {

        const findExerciseByIdUseCase = new FindExerciseByIdUseCase(this.exercisesRepository)
        const possibleExercise = await findExerciseByIdUseCase.execute({ id })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise ${id}`) })

        const exercise = await this.exercisesRepository.delete(id)

        return right({ exercise })
    }
}