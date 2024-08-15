import { Pool } from "pg";
import { userService } from "../../../src/api/service/user.service";

// setup for to mock pg
jest.mock("pg", () => {
    const mPool = {
        connect: function () {
            return { query: jest.fn() };
        },
        query: jest.fn(),
        end: jest.fn(),
        on: jest.fn(),
    };
    return { Pool: jest.fn(() => mPool) };
});
describe("test for handle relay action", () => {
    let pool: Pool;
    // before each test case
    beforeEach(() => {
        pool = new Pool();
    });
    // clean up after each test case done
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should test", async () => {
        await userService.getUsers();
        expect(pool.query).toHaveBeenCalled();
        expect(pool.query).toHaveBeenCalledTimes(1);
    });
});
