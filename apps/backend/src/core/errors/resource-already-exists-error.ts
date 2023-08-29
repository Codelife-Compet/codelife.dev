import { UseCaseError } from "./use-case-errors";

export class ResourceAlreadyExistsError extends Error implements UseCaseError {
    constructor(resource: string) {
        super(`Resource already exists (${resource})`)
    }
}