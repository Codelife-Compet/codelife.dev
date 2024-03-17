import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "../../repositories/exercisesRepository"
import { FindExerciseByNameUseCase } from "../findExerciseByName/findExerciseByNameUseCase"

interface CreateExerciseUseCaseRequest {
    link: string
    name: string
    difficulty: string
    exercisesListId: string
    description: string
}

type CreateExerciseUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercise: Exercise }
>

export class CreateExerciseUseCase {

    constructor(private exercisesRepository: ExercisesRepository) { }

    async execute({ difficulty, exercisesListId, link, name, description }: CreateExerciseUseCaseRequest): Promise<CreateExerciseUseCaseResponse> {

        const findExerciseByNameUseCase = new FindExerciseByNameUseCase(this.exercisesRepository)
        const possibleExercise = await findExerciseByNameUseCase.execute({ name })
        if (possibleExercise.isRight()) 
            return left({ error: new ResourceAlreadyExistsError(`Exercise ${name}`) })

        const exercise = await this.exercisesRepository.create({ difficulty, exercisesListId, link, name, exerciseStatus: [], inouts: [], description})

        return right({ exercise })
    }
}