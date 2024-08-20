import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UserService } from './users.service';
import { CustomResponse } from '../common/responses/responses.model';
import exp from 'constants';
import { ExternalExceptionFilterContext } from '@nestjs/core/exceptions/external-exception-filter-context';

const userToCreate = new UsersEntity("test create", 100, "1");

const userArray = [
    new UsersEntity('Test 2', 3),
    new UsersEntity('Test 3', 2),
];


const user = new UsersEntity("test", 100)


describe('CatService', () => {
    let service: UserService;
    let repo: Repository<UsersEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(UsersEntity),
                    // define all the methods that you use from the catRepo
                    // give proper return values as expected or mock implementations, your choice
                    useValue: {
                        find: jest.fn().mockResolvedValue(userArray),
                        insert: jest.fn().mockResolvedValue(user.user_id),
                        delete: jest.fn()
                    },
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        repo = module.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('get', () => {
        it('should return an array of users', async () => {
            const response = await service.findAll();
            const expected = new CustomResponse({
                message: "Get all",
                responseCode: 200,
                data: userArray
            })
            expect(response).toEqual(expected);
        });
    });

    describe('create', () => {
        it('should successfully insert a user', () => {
            const expected = new CustomResponse({
                message: `created user with user id ${userToCreate.user_id}`,
                responseCode: 200
            })
            expect(
                service.create(userToCreate),
            ).resolves.toEqual(expected);
        });
    });

    describe('delete', () => {
        it('should successfully delete', () => {
            const expected = new CustomResponse({
                message: `Deleted user with id of ${userToCreate.user_id}`,
                responseCode: 200
            })
            expect(
                service.delete(userToCreate.user_id)
            ).resolves.toEqual(expected);
        });
    });
});
