"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.mapUsers = mapUsers;
class User {
    constructor(userId, name, age) {
        this.userId = userId;
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
// row mapper
function mapUsers(queryResults) {
    let results = [];
    for (let i = 0; i < queryResults.length; i++) {
        const user = queryResults[i];
        results.push(new User(user.user_id, user.name, user.age));
    }
    return results;
}
