import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { ExercisesRepository } from "../../repositories/exercisesRepository"
import { ExerciseStatusRepository } from "@/domain/listasExercicios/exerciseStatus/repositories/exerciseStatusRepository"
import { FindExerciseByNameUseCase } from "../findExerciseByName/findExerciseByNameUseCase"
import { ExerciseStatus } from "@/domain/listasExercicios/@entities/exerciseStatus"
import { FindExerciseStatusByIdUseCase } from "@/domain/listasExercicios/exerciseStatus/usecases/findExerciseStatusById/findIsExerciseStatusByIdUseCase"

interface AddExerciseStatusUseCaseRequest {
    exerciseStatusId: string
    exerciseName: string
}

type AddExerciseStatusUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError | ResourceNotFoundError },
    { exerciseslists: ExerciseStatus[] }
>

export class AddExerciseStatusUseCase {

    constructor(private exercisesRepository: ExercisesRepository,
                private exerciseStatusRepository: ExerciseStatusRepository) { }

    async execute({ exerciseName, exerciseStatusId }: AddExerciseStatusUseCaseRequest): Promise<AddExerciseStatusUseCaseResponse> {

        const findExerciseByNameUseCase = new FindExerciseByNameUseCase(this.exercisesRepository)
        const possibleExercise = await findExerciseByNameUseCase.execute({ name: exerciseName })
        if (possibleExercise.isLeft())
            return left({ error: new ResourceNotFoundError(`Exercise '${exerciseName}'`) })

        const findExerciseStatusByIdUseCase = new FindExerciseStatusByIdUseCase(this.exerciseStatusRepository)
        const exerciseslist = await findExerciseStatusByIdUseCase.execute({ id: exerciseStatusId})
        if (exerciseslist.isRight())
            return left({ error: new ResourceAlreadyExistsError(`ExerciseStatus '${exerciseStatusId}' in exercise '${exerciseName}'`) })

        const currentExerciseStatus = await this.exercisesRepository.fetchExerciseStatus(possibleExercise.value.exercise.id.toString())
        const exerciseStatusAlreadyInExercise = currentExerciseStatus.map(exerciseStatus => exerciseStatus.id.toString() === exerciseStatusId)
        if (exerciseStatusAlreadyInExercise)
            return left({ error: new ResourceAlreadyExistsError(`ExerciseStatus '${exerciseStatusId}' in exercise '${exerciseName}'`) })

        const exerciseslists = await this.exercisesRepository.addExerciseStatus(exerciseStatusId, exerciseName)

        return right({ exerciseslists })
    }
}