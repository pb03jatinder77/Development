import { Service, Application, Params } from '@feathersjs/feathers';

// Define the password reset service class
class PasswordResetService {
  app: Application;

  constructor(options: { app: Application }) {
    this.app = options.app;
  }

  async create(data: { email: string }, params: Params) {
    const { email } = data;

    // Check if a user with the provided email exists
    const userService = this.app.service('users'); // Assuming you have a 'users' service
    try {
      const user = await userService.find({
        query: {
          email,
        },
      });

      if (user.data.length === 0) {
        // User with the provided email does not exist
        return { message: 'User with this email does not exist' };
      }

      // User with the provided email exists, you can return the user ID
      return { userId: user.data[0]._id };
    } catch (error) {
      // Handle any errors that occur during the user lookup
      return { message: 'Error checking user existence' };
    }
  }
}

export default function (app: Application): void {
  // Initialize the password reset service
  app.use('/password-reset', new PasswordResetService({ app }));
}
