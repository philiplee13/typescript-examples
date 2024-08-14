"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.mapUsers = mapUsers;
class User {
    // obj constructor
    constructor(options) {
        if (typeof options.userId !== 'undefined' && options.userId !== null) {
            this.userId = options.userId;
        }
        ;
        this.name = options.name;
        this.age = options.age;
    }
    ;
}
exports.User = User;
// row mapper
function mapUsers(queryResults) {
    let results = [];
    for (let i = 0; i < queryResults.length; i++) {
        const user = queryResults[i];
        results.push(new User({
            userId: user.user_id,
            name: user.name,
            age: user.age
        }));
    }
    return results;
}
