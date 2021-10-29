import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController;
  let usersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();

    usersService = moduleRef.get(UsersService);
    usersController = moduleRef.get(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });
});