export interface Account {
    readonly username: string;
    readonly uuid: string;
    readonly active: boolean;
    readonly source: AccountSource;
}

export interface AccountSource {
    readonly name: string;
    readonly icon: string;
}