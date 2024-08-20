import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UsersEntity } from './users.entity';
import { CustomResponse } from '../common/responses/responses.model';

const userArray = [
    new UsersEntity('test user 1', 10, "1"),
    new UsersEntity('test user 2', 10, "2"),
    new UsersEntity('test user 3', 10, "3"),
];

describe('Cat Controller', () => {
    let controller: UsersController;
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UserService,
                    useValue: {
                        findAll: jest.fn().mockReturnValue(new CustomResponse({
                            message: 'Get all',
                            responseCode: 200,
                            data: userArray
                        }))
                    },
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it("test index route", () => {
        const response = new CustomResponse({
            message: "Get all",
            responseCode: 200,
            data: userArray
        });
        expect(controller.index()).toEqual(response)
    });
});