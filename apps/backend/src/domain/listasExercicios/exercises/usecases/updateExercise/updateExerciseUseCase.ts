import { Either, left, right } from "@/core/types/either"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "../../repositories/exercisesRepository"
import { FindExerciseByIdUseCase } from "../findExerciseById/findExerciseByIdUseCase"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface UpdateExerciseUseCaseRequest {
    link?: string
    name?: string
    difficulty?: string
    exercisesListId?: string
    description?: string
    id: string
}

type UpdateExerciseUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercise: Exercise }
>

export class UpdateExerciseUseCase {

    constructor(private exercisesRepository: ExercisesRepository) { }

    async execute({ id, ...data }: UpdateExerciseUseCaseRequest): Promise<UpdateExerciseUseCaseResponse> {

        const findExerciseByIdUseCase = new FindExerciseByIdUseCase(this.exercisesRepository)

        const possibleExercise = await findExerciseByIdUseCase.execute({ id })

        if (possibleExercise.isRight()) {
            return left({ error: new ResourceNotFoundError(`Exercise ${name}`) })
        }

        const exercise = await this.exercisesRepository.update(id, data)

        return right({ exercise })
    }
}