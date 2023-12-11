import { PythonShell, PythonShellError } from "python-shell";
import { PythonVenvNotActivatedError } from "../errors/pythonVenvNotActivatedError";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { partial_to_full_path, readJsonFileRequest } from "../path/partialToFullPath";
import { Either, left, right } from "../types/either";
import { getPythonPath } from "./getPythonPath";
import * as path from 'path';

interface ExecutePythonScriptRequest {
    args?: string[],
    pathRequest: readJsonFileRequest
}

type executePythonScriptResponse = Either<
    { error: ResourceNotFoundError | PythonShellError | PythonVenvNotActivatedError | Error },
    { response: string[] }
>

export async function EexecutePythonScript({ args, pathRequest }: ExecutePythonScriptRequest): Promise<executePythonScriptResponse> {

    if (!args) args = []

    const scriptPath = partial_to_full_path(pathRequest);
    const pythonPathResponse = getPythonPath();

    if (pythonPathResponse.isLeft()) {
        return left({ error: pythonPathResponse.value.error });
    }

    const pythonPath = pythonPathResponse.value.python_path

    const scriptDirectory = path.dirname(scriptPath);
    const options = { pythonPath, args, cwd: scriptDirectory };
    
    console.log("Script path:", scriptPath);
    console.log("Options:", options);


    try {
        const response = await PythonShell.run(scriptPath, options);
        if (!response)
            return left({ error: new PythonShellError() });

        console.dir({ response }, { depth: null });

        return right({ response });

    } catch (error: any) {
        console.error(error);
        if (error.message.includes("No module named") || error.stack.includes("No module named"))
            return left({ error: new PythonVenvNotActivatedError() });
        return left({ error: error })
    }
}
