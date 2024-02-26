import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "../../repositories/exercisesRepository"

interface FindExerciseByNameUseCaseRequest {
    name: string
}

type FindExerciseByNameUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercise: Exercise }
>

export class FindExerciseByNameUseCase {

    constructor(private exercisesRepository: ExercisesRepository) { }

    async execute({ name }: FindExerciseByNameUseCaseRequest): Promise<FindExerciseByNameUseCaseResponse> {

        const exercise = await this.exercisesRepository.findByName(name)
        if (!exercise)
            return left({ error: new ResourceNotFoundError(`Exercise '${name}'`) })

        return right({ exercise })
    }
}