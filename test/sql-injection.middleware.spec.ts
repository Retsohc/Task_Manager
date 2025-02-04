import { SqlInjectionMiddleware } from '../src/common/middlewares/sql-injection.middleware';

describe('SqlInjectionMiddleware', () => {
  let middleware: SqlInjectionMiddleware;

  beforeEach(() => {
    middleware = new SqlInjectionMiddleware();
  });

  it('should remove SQL injection characters from request body', () => {
    const req: any = {
      body: {
        title: "Test'; DROP TABLE users; --",
        description: 'Description"; DROP TABLE users; --',
      },
    };
    const res: any = {};
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(req.body.title).toBe('Test DROP TABLE users --');
    expect(req.body.description).toBe('Description DROP TABLE users --');
    expect(next).toHaveBeenCalled();
  });
});