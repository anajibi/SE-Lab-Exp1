import {Router} from 'express';
import jetValidator from 'jet-validator';


export default function sampleRouter() {
    const logTypesRouter = Router();
    const validate = jetValidator();

    return logTypesRouter;
}
