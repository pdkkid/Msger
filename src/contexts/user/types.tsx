export interface IUser {
    displayName: string;
    email: string;
}

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void
    logout: () => Promise<void>
}