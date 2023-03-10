import {Router} from 'express';

import SampleRouter from '@src/routes/SampleRouter';
import Paths from "@src/routes/constants/Paths";


// **** Variables **** //

const apiRouter = Router();

const sampleRouter = SampleRouter()

apiRouter.use(Paths.Sample.Base, sampleRouter)
// **** Export default **** //


export default apiRouter;
