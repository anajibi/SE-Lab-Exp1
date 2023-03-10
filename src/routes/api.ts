import {Router} from 'express';

import Paths from './constants/Paths';
import logTypesRouter from '@src/routes/LogTypeRouter';
import genSettingsRouter from '@src/routes/GenSettingsRouter';


// **** Variables **** //

const apiRouter = Router();

// **** Export default **** //


export default apiRouter;
