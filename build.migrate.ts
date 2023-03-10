/**
 * This is the build tool for the migration.
 * Remove old files, build new files, and copy files.
 */

import fs from 'fs-extra';
import logger from 'jet-logger';
import childProcess from 'child_process';


/**
 * Start
 */
(async () => {
  try {
    // Remove current build
    await remove('./dist.migrate/');
    // Copy back-end files
    await exec('tsc --build tsconfig.migrate.json', './');
    // Copy env files
    await copy('./env', './dist.migrate/env');
  } catch (err) {
    logger.err(err);
  }
})();

/**
 * Remove file
 */
function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Copy file.
 */
function copy(src: string, dest: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, (err) => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, {cwd: loc}, (err, stdout, stderr) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return (!!err ? rej(err) : res());
    });
  });
}
