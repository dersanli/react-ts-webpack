import express from 'express';
import bodyParser from 'body-parser';
import * as OpenApiValidator from 'express-openapi-validator';
import { Express } from 'express-serve-static-core';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import { connector, summarise } from 'swagger-routes-express';
import YAML from 'yamljs';

import * as api from '@dtc/api/controllers';
import config from '@dtc/config';
import { expressDevLogger } from '@dtc/api/utils/express_dev_logger';
import logger from '@dtc/api/utils/logger';

export async function createServer(): Promise<Express> {
  const yamlSpecFile = './config/openapi.yml';
  const apiDefinition = YAML.load(yamlSpecFile);
  const apiSummary = summarise(apiDefinition);
  logger.info(apiSummary);

  const server = express();
  // here we can initialize body/cookies parsers, connect logger, for example morgan
  server.use(bodyParser.json());

  if (config.morganLogger) {
    server.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
  }

  if (config.morganBodyLogger) {
    morganBody(server);
  }

  if (config.exmplDevLogger) {
    server.use(expressDevLogger);
  }


  // setup API validator
  const validatorOptions = {
    apiSpec: yamlSpecFile,
    validateRequests: true,
    validateResponses: true
  };

  server.use(OpenApiValidator.middleware(validatorOptions));

  // error customization, if request is invalid
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status).json({
      error: {
        type: 'request_validation',
        message: err.message,
        errors: err.errors
      }
    });
  });

  const connect = connector(api, apiDefinition, {
    onCreateRoute: (method: string, descriptor: any[]) => {
      descriptor.shift();
      logger.verbose(`${method}: ${descriptor.map((d: any) => d.name).join(', ')}`);
    },
    security: {
      bearerAuth: api.auth
    }
  });
  connect(server);

  return server;
}