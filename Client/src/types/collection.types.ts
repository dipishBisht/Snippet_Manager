import { ISnippet } from "./snippet.types";

export interface ICollection {
    name: string;
    description?: string;
    owner: string;
    isPublic: boolean;
    snippet: ISnippet[]
}