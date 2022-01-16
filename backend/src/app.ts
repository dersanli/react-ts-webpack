import { createServer } from '@dtc/server';
import logger from '@dtc/api/utils/logger';

createServer()
  .then(server => {
    server.listen(3000, () => {
      logger.info('Listening on http://localhost:3000');
    });
  })
  .catch(err => {
    logger.error(`Error: ${err}`);
  });