import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ExercisesListsRepository } from "../../repositories/exercisesListsRepository"
import { ExercisesList } from "@/domain/listasExercicios/@entities/exercisesLists"
import { FindExercisesListByTopicUseCase } from "../findExerciseListByTopic/findExerciseListByTopicUseCase"

interface CreateExerciseListUseCaseRequest {
    languageExercisesListId: string
    topic: string
}

type CreateExerciseListUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { exercisesList: ExercisesList }
>

export class CreateExerciseListUseCase {

    constructor(private exercisesListsRepository: ExercisesListsRepository) { }

    async execute({ languageExercisesListId, topic }: CreateExerciseListUseCaseRequest): Promise<CreateExerciseListUseCaseResponse> {

        const findExercisesListByTopicUseCase = new FindExercisesListByTopicUseCase(this.exercisesListsRepository)
        const possibleExercisesList = await findExercisesListByTopicUseCase.execute({ topic })
        if (possibleExercisesList.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Exercise ${topic}`) })

        const exercisesList = await this.exercisesListsRepository.create({ languageExercisesListId, topic, exercises: [] })

        return right({ exercisesList })
    }
}