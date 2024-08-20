import { UsersEntity } from "./users.entity";

describe('user class', () => {
    it('user that has undefined', () => {
        const user: UsersEntity = new UsersEntity();
        expect(user).toBeTruthy();
        expect(user.name).toBe(undefined);
        expect(user.age).toBe(undefined);
    });

    it("user with fields", () => {
        const user: UsersEntity = new UsersEntity();
        user.name = "test"
        user.age = 100
        expect(user.name).toBe("test")
        expect(user.age).toBe(100)
    })
});