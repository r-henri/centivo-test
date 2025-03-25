import express from 'express';

import { UserService } from '../services/user-service.js';

const router = express.Router();

router.get('/users/:id', async (request, response) => {
    const id = request.params.id; 
    const userService = UserService.getInstance();

    if (!userService.isIdFormatValid(id)) {
        response.status(400).send('Invalid id format');
        return;
    }

    const user = await userService.getUser(id, 21);
    if (!user) {
        response.status(404).send(`Unable to find user ${id}`);
        return;
    }

    response.json(user);
  });

export default router;
