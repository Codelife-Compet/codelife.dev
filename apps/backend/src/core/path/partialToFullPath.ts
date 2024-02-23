import * as path from "path";

export interface readJsonFileRequest {
    dirname: string,
    partialPath: string
}

export function partial_to_full_path({ dirname, partialPath }: readJsonFileRequest): string {
    return path.join(dirname, partialPath);
}