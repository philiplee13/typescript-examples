interface UserInterface {
    userId: string;
    name: string;
    age: number;
}

export class User implements UserInterface {
    public userId: string;
    public name: string;
    public age: number;

    constructor(userId: string, name: string, age: number) {
        this.userId = userId;
        this.name = name;
        this.age = age;
    }
}

// row mapper
export function mapUsers(queryResults: any[]): User[] {
    let results: User[] = [];
    for (let i: number = 0; i < queryResults.length; i++) {
        const user = queryResults[i];
        results.push(new User(user.user_id, user.name, user.age));
    }
    return results;
}