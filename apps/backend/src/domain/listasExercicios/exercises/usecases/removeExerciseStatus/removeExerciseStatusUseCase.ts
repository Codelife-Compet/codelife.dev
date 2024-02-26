import { Either, left, right } from "@/core/types/either"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { ExercisesRepository } from "../../repositories/exercisesRepository"
import { ExerciseStatusRepository } from "@/domain/listasExercicios/exerciseStatus/repositories/exerciseStatusRepository"
import { FindExerciseByNameUseCase } from "../findExerciseByName/findExerciseByNameUseCase"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { FindExerciseStatusByIdUseCase } from "@/domain/listasExercicios/exerciseStatus/usecases/findExerciseStatusById/findIsExerciseStatusByIdUseCase"

interface RemoveExerciseStatusUseCaseRequest {
    exerciseName: string
    exerciseStatusId: string
}

type RemoveExerciseStatusUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exerciseStatus: ExerciseStatus[] }
>

export class RemoveExerciseStatusUseCase {

    constructor(private exercisesRepository: ExercisesRepository,
        private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ exerciseName, exerciseStatusId }: RemoveExerciseStatusUseCaseRequest): Promise<RemoveExerciseStatusUseCaseResponse> {

        const findExerciseByNameUseCase = new FindExerciseByNameUseCase(this.exercisesRepository)
        const possibleExercise = await findExerciseByNameUseCase.execute({ name: exerciseName })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise '${exerciseName}'`) })

        const findExerciseStatusUseCase = new FindExerciseStatusByIdUseCase(this.exerciseStatusRepository)
        const exercisestatus = await findExerciseStatusUseCase.execute({ id: exerciseStatusId })
        if (exercisestatus.isLeft())
            return left({ error: new ResourceNotFoundError(`ExerciseStatus '${exerciseStatusId}'`) })

        const currentexerciseStatus = await this.exercisesRepository.fetchExerciseStatus(possibleExercise.value.exercise.id.toString())
        const exerciseStatusAlreadyInExercise = currentexerciseStatus.find(exercisestatus => exercisestatus.id.toString() === exerciseStatusId)
        if (!exerciseStatusAlreadyInExercise)
            return left({ error: new ResourceNotFoundError(`ExerciseStatus '${exerciseStatusId}' in exercise '${exerciseName}'`) })

        const exerciseStatus = await this.exercisesRepository.removeExerciseStatus(exerciseStatusId, exerciseName)

        return right({ exerciseStatus })
    }
}