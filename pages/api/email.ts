import { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '../../helpers/api/init-middleware';
import validateMiddleware from '../../helpers/api/validate-middleware';
import { check, validationResult } from 'express-validator';

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check('firstName').trim().isString(),
      check('lastName').trim().isString(),
      check('email').trim().isEmail(),
      check('message').trim().isString().isLength({ min: 1, max: 500 }),
    ],
    validationResult,
  ),
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({
        errorId: 'method-not-allowed',
        message: 'Http method not allowed',
      });
  }

  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errorId: 'body-validation-failed', errors: errors.array() });
  }

  res.status(200).json({ name: 'John Doe' });
}
