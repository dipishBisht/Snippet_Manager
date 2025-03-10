
export interface ISnippet {
    title: string;
    content: string;
    language: string;
    tags?: string[];
    owner: string;
    collectionId: string;
    isPublic: boolean;
    isStarred: boolean;
    stars?: number;
    viewCount?: number;
}