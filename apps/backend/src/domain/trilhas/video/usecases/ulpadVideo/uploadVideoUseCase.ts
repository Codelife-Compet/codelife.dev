import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { EexecutePythonScript } from "@/core/python/executePythonScript"

interface UploadVideoUseCaseRequest {
    directory: string
}

type UploadVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { videoID: string }
>

export class UploadVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ directory }: UploadVideoUseCaseRequest): Promise<UploadVideoUseCaseResponse> {

        const file = "video.mp4";
        const title = "Video Teste";
        const description = "Video Teste Description";
        const privacyStatus = "private"

        const executePythonScriptResponse = await EexecutePythonScript({
            pathRequest: {
                dirname: __dirname,
                partialPath: "upload.py"
            },
            args: ["--file", file, "--title", title, "--description", description, "--privacyStatus", privacyStatus]
        })

/*
        args = [
            "--file",
            "video.mp4",
            "--title",
            "teste",
            "--description",
            "joao",
        ]
        */

        if (executePythonScriptResponse.isLeft()) {
            return left({ error: executePythonScriptResponse.value.error })
        }

        //const success = await this.videosRepository.upload(directory)

        return right({ videoID: executePythonScriptResponse.value.response[0] })
    }
}