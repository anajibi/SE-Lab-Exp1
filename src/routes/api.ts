import {Router} from 'express';

import Paths from './constants/Paths';
import logTypesRouter from '@src/routes/LogTypeRouter';
import genSettingsRouter from '@src/routes/GenSettingsRouter';
import {Knex} from "knex";

// **** Variables **** //

const apiRouter = Router();

// This is a modification to creat a merge conflict, it is not for any other purpose
// **** Export default **** //


export default apiRouter;
