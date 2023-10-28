import { GeneralError } from '@feathersjs/errors';
import { Application, Params } from '@feathersjs/feathers';

class PasswordUpdateService {
  app: Application;
  configuration: { hashSize: number };

  constructor(options: { app: Application }) {
    this.app = options.app;
    this.configuration = { hashSize: 10 };
  }

  async update(id: string, data: { password: string }, params: Params) {
    try {
      const userService = this.app.service('users');

      const user = await userService.get(id);

      if (!user) {
        throw new GeneralError('User with this ID does not exist');
      }

      if (data.password) {
        await userService.patch(id, { password: data.password });
      }

      return { message: 'Password updated successfully' };
    } catch (error: any) {
      return { message: 'Error updating password: ' + error.message };
    }
  }
}

export default function (app: Application): void {
  app.use('/password-update', new PasswordUpdateService({ app }));
}
