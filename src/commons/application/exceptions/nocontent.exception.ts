import { HttpException, HttpStatus } from '@nestjs/common';

export class NoContentException extends HttpException {
  constructor(message = 'No se encontraron resultados') {
    super(message, HttpStatus.NO_CONTENT);
  }
}
