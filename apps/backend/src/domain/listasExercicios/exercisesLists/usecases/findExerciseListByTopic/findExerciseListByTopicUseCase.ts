import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"

interface FindexErcisesListByTopicUseCaseRequest {
    topic: string
}

type FindexErcisesListByTopicUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { exercisesList: ExercisesList }
>

export class FindExercisesListByTopicUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ topic }: FindexErcisesListByTopicUseCaseRequest): Promise<FindexErcisesListByTopicUseCaseResponse> {

        const exercisesList = await this.exercisesListsRepository.findByTopic(topic)
        if (!exercisesList)
            return left({ error: new ResourceNotFoundError(`ExercisesList '${topic}'`) })

        return right({ exercisesList })
    }
}