export class InvalidInputError  extends Error{
    constructor(input: string) {
        super(`Input [${input}] is invalid`)
    }
}