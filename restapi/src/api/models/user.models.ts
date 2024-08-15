interface UserInterface {
    userId?: string;
    name: string;
    age: number;
}

export class User implements UserInterface {
    public userId?: string;
    public name: string;
    public age: number;

    // obj constructor
    constructor(options: UserInterface) {
        if (typeof options.userId !== "undefined" && options.userId !== null) {
            this.userId = options.userId;
        }
        this.name = options.name;
        this.age = options.age;
    }
}

// row mapper
export function mapUsers(queryResults: any[]): User[] {
    let results: User[] = [];
    for (let i: number = 0; i < queryResults.length; i++) {
        const user = queryResults[i];
        results.push(
            new User({
                userId: user.user_id,
                name: user.name,
                age: user.age,
            })
        );
    }
    return results;
}
