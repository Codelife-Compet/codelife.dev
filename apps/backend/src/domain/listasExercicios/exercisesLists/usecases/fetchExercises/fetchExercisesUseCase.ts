import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { FindExercisesListByIdUseCase } from "../findExerciseListById/findExerciseListByIdUseCase"

interface FetchExercisesUseCaseRequest {
    id: string
}

type FetchExercisesUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercises: Exercise[] }
>

export class FetchExercisesUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ id }: FetchExercisesUseCaseRequest): Promise<FetchExercisesUseCaseResponse> {

        const findExercisesListByIdUseCase = new FindExercisesListByIdUseCase(this.exercisesListsRepository)
        const possibleExercisesList = await findExercisesListByIdUseCase.execute({ id })
        if (possibleExercisesList.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Exercise ${id}`) })

        const exercises = await this.exercisesListsRepository.fetchExercises(id)

        return right({ exercises })
    }
}