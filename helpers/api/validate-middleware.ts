import { ValidationChain } from 'express-validator';
import { NextApiRequest, NextApiResponse } from 'next';

export default function validateMiddleware(
  validations: ValidationChain[],
  validationResult: any,
) {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
  };
}
