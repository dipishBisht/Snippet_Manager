export interface IUser {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    preferences: IPreferences;
}

export interface IPreferences {
    theme: string;
    editorSettings: Record<string, any>;
    defaultlanguage: string;
}
