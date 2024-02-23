import { execSync } from 'child_process';
import { Either, left, right } from '../types/either';
import { ResourceNotFoundError } from '../errors/resource-not-found-error';

type GetPythonPathResponse = Either<
  { error: ResourceNotFoundError },
  { python_path: string }
>

export function getPythonPath(): GetPythonPathResponse {
    const isWin = process.platform === "win32";
    const isLinux = process.platform === "linux";
  
    if (isLinux)
      return right({ python_path: execSync('which python3').toString().trim() })
  
    if (isWin)
      return right({ python_path: 'python' })
  
    return left({ error: new ResourceNotFoundError("Operational System for Python") })
  }