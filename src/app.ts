import express from 'express';

import userRoutes from './routes/users-route.js'
import { UserService } from './services/user-service.js'

const port = 3000;

const app = express();

await UserService.getInstance().initialize('mongodb://localhost:27017', 'Centivo');

app.use(userRoutes);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
