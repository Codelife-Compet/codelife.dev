import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Inout } from "@/domain/listasExercicios/@entities/inout"
import { InoutRepository } from "../../repositories/inoutRepository"
import { FindInoutByExerciseIdUseCase } from "../findInoutByExerciseId/findInoutByExerciseIdUseCase"

interface CreateInoutUseCaseRequest {
    exerciseId: string
    input: string
    output: string
}

type CreateInoutUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { inout: Inout }
>

export class CreateInoutUseCase {

    constructor(private inoutRepository: InoutRepository) { }

    async execute({ exerciseId, input, output}: CreateInoutUseCaseRequest): Promise<CreateInoutUseCaseResponse> {

        const findInoutByNameUseCase = new FindInoutByExerciseIdUseCase(this.inoutRepository)
        const possibleInout = await findInoutByNameUseCase.execute({ exerciseId })
        if (possibleInout.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Inout ${exerciseId}`) })

        const inout = await this.inoutRepository.create({ exerciseId, input, output })

        return right({ inout })
    }
}