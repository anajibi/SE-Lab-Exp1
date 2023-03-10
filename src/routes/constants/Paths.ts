/**
 * Express router paths go here.
 */

import {Immutable} from '@src/other/types';

const Paths = {
    Base: '/api',
    Sample: {
        Base: "/sample",
    }
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
