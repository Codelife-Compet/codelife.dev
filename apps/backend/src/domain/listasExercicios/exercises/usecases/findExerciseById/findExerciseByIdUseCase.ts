import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "../../repositories/exercisesRepository"

interface FindExerciseByIdUseCaseRequest {
    id: string
}

type FindExerciseByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercise: Exercise }
>

export class FindExerciseByIdUseCase {

    constructor(private exercisesRepository: ExercisesRepository) { }

    async execute({ id }: FindExerciseByIdUseCaseRequest): Promise<FindExerciseByIdUseCaseResponse> {

        const exercise = await this.exercisesRepository.findById(id)
        if (!exercise)
            return left({ error: new ResourceNotFoundError(`Exercise '${id}'`) })

        return right({ exercise })
    }
}