
export interface ISnippet {
    title: string;
    content: string;
    language: string;
    description?: string;
    tags?: string[];
    owner: string;
    collectionId: string;
    isPublic: boolean;
    stars?: number;
    viewCount?: number;
}