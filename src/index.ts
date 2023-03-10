import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import runServer from './server';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' +
  EnvVars.Port.toString());


runServer()
  .then(srv =>
    srv.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG)));
