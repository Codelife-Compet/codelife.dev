import { Either, left, right } from "@/core/types/either"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Exercise } from "@/domain/listasExercicios/@entities/exercise"
import { ExercisesRepository } from "@/domain/listasExercicios/exercises/repositories/exercisesRepository"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { FindExerciseByIdUseCase } from "@/domain/listasExercicios/exercises/usecases/findExerciseById/findExerciseByIdUseCase"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { FindExercisesListByTopicUseCase } from "../findExerciseListByTopic/findExerciseListByTopicUseCase"

interface AddExerciseUseCaseRequest {
    exerciseId: string,
    exerciseTopic: string
}

type AddExerciseUseCaseResponse = Either<
    { error: ResourceNotFoundError | ResourceAlreadyExistsError },
    { exercises: Exercise[] }
>

export class AddExerciseUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository,
        private exercisesRepository: ExercisesRepository) { }

    async execute({ exerciseId, exerciseTopic }: AddExerciseUseCaseRequest): Promise<AddExerciseUseCaseResponse> {

        const findExerciseListByTopicUseCase = new FindExercisesListByTopicUseCase(this.exercisesListsRepository)
        const possibleExercise = await findExerciseListByTopicUseCase.execute({ topic: exerciseTopic })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise List '${exerciseTopic}'`) })

        const findExerciseUseCase = new FindExerciseByIdUseCase(this.exercisesRepository)
        const exercise = await findExerciseUseCase.execute({ id: exerciseId })
        if (exercise.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Exercise '${exerciseId}' in exercise '${exerciseTopic}'`) })

        const currentExercise = await this.exercisesListsRepository.fetchExercises(possibleExercise.value.exercisesList.id.toString())
        const exerciseAlreadyInExercise = currentExercise.map(exercise => exercise.id.toString() === exerciseId)
        if (exerciseAlreadyInExercise)
            return left({ error: new ResourceAlreadyExistsError(`Exercise '${exerciseId}' in exercise '${exerciseTopic}'`) })

        const exercises = await this.exercisesListsRepository.addExercise(exerciseId, exerciseTopic)

        return right({ exercises })
    }
}