import { UseCaseError } from "./use-case-errors";

export class ResourceNotFoundError extends Error implements UseCaseError {
    constructor(resource: string) {
        super(`Resource not found (${resource})`)
    }
}