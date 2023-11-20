import { Logger } from '@nestjs/common';

export const formatError = (err) => {
  const statusCode: number = err.extensions.status;
  if (statusCode >= 400 && statusCode < 500) {
    Logger.warn(
      `{ Path: ${err.path} }, { StatusCode: ${statusCode} }, { Message: ${err.message} }`,
    );
  } else if (statusCode >= 500) {
    Logger.error(
      `{ Path: ${err.path}}, { StatusCode: ${statusCode} }, { Message: ${err.message} }`,
    );
  }

  return err;
};
