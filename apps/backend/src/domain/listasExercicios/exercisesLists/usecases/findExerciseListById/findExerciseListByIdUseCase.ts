import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"

interface FindExercisesListByIdUseCaseRequest {
    id: string
}

type FindExercisesListByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercisesList: ExercisesList }
>

export class FindExercisesListByIdUseCase {

    constructor(private exerciselistsRepository: ExercisesListsRepository) { }

    async execute({ id }: FindExercisesListByIdUseCaseRequest): Promise<FindExercisesListByIdUseCaseResponse> {

        const exercisesList = await this.exerciselistsRepository.findById(id)
        if (!exercisesList)
            return left({ error: new ResourceNotFoundError(`ExerciseList '${id}'`) })

        return right({ exercisesList })
    }
}