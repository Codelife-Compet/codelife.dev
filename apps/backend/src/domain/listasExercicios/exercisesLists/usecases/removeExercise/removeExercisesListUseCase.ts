import { Either, left, right } from "@/core/types/either"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesRepository } from "@/domain/listasExercicios/exercises/repositories/exercisesRepository"
import { FindExerciseByIdUseCase } from "@/domain/listasExercicios/exercises/usecases/findExerciseById/findExerciseByIdUseCase"
import { FindExercisesListByTopicUseCase } from "../findExerciseListByTopic/findExerciseListByTopicUseCase"

interface RemoveExerciseUseCaseRequest {
    exerciseId: string,
    exercisesListTopic: string,
}

type RemoveExerciseUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercises: Exercise[] }
>

export class RemoveExerciseUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository,
        private exercisesRepository: ExercisesRepository) { }

    async execute({ exerciseId, exercisesListTopic }: RemoveExerciseUseCaseRequest): Promise<RemoveExerciseUseCaseResponse> {

        const findExerciseByTopicUseCase = new FindExercisesListByTopicUseCase(this.exercisesListsRepository)
        const possibleExercise = await findExerciseByTopicUseCase.execute({ topic: exercisesListTopic })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise '${exercisesListTopic}'`) })

        const findExerciseUseCase = new FindExerciseByIdUseCase(this.exercisesRepository)
        const exercise = await findExerciseUseCase.execute({ id: exerciseId })
        if (exercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise '${exerciseId}'`) })

        const currentExercises = await this.exercisesListsRepository.fetchExercises(possibleExercise.value.exercisesList.id.toString())
        const exerciseAlreadyInExercise = currentExercises.find(exercise => exercise.id.toString() === exerciseId)
        if (!exerciseAlreadyInExercise)
            return left({ error: new ResourceNotFoundError(`Exercise '${exerciseId}' in exercise '${exercisesListTopic}'`) })

        const exercises = await this.exercisesListsRepository.removeExercise(exerciseId, exercisesListTopic)

        return right({ exercises })
    }
}