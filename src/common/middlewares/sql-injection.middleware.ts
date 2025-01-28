import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SqlInjectionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.body) {
      for (const key in req.body) {
        req.body[key] = String(req.body[key]).replace(/['";]/g, '');
      }
    }
    next();
  }
}