import * as express from 'express';

import UserService, { AuthResponse } from '@dtc/api/services/user';
import { writeJsonResponse } from '@dtc/api/utils/express';

export function auth(req: express.Request, res: express.Response, next: express.NextFunction): void {
  const token = req.headers.authorization!;
  UserService.auth(token)
    .then((authResponse: AuthResponse ) => {
      if (!(authResponse as any).error) {
        res.locals.auth = {
          userId: (authResponse as {userId: string}).userId
        };
        next();
      } else {
        writeJsonResponse(res, 401, authResponse);
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((err: Error) => {
      writeJsonResponse(res, 500, { error: { type: 'internal_server_error', message: 'Internal Server Error' } });
    });
}