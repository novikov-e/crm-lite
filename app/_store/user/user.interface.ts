export interface IUserState {
    email: string;
    role: string;
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null
    isLoading: boolean
}

export interface IEmailPassword {
    email: string
    password: string
    role: string
}

export interface IUser {
    id: string
    email: string
    password: string
    createdAt: string
    role: string

}

export interface IAuthResponse extends ITokens {
    user: IUser & {
        role: string
    }
}