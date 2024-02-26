import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { FindExercisesListByIdUseCase } from "../findExerciseListById/findExerciseListByIdUseCase"

interface UpdateExerciseListUseCaseRequest {
    id: string
    languageExercisesListId?: string
    topic?: string
}

type UpdateExerciseListUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercisesList: ExercisesList }
>

export class UpdateExerciseListUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ id, ...data }: UpdateExerciseListUseCaseRequest): Promise<UpdateExerciseListUseCaseResponse> {

        const findExercisesListByIdUseCase = new FindExercisesListByIdUseCase(this.exercisesListsRepository)
        const possibleExercisesList = await findExercisesListByIdUseCase.execute({ id })
        if (possibleExercisesList.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Exercise ${id}`) })

        const exercisesList = await this.exercisesListsRepository.update(id, data)

        return right({ exercisesList })
    }
}