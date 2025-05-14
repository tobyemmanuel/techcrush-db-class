import { body, validationResult } from 'express-validator';

export const createBookValidator = [
    body('title').notEmpty().withMessage('Title is required').isLength({min:3}).withMessage('Title must be at least 3 characters long'),
    body('year').isNumeric().withMessage('Year must be a number'),
    body('author').notEmpty().withMessage('Author is required'),
    body('summary').notEmpty().withMessage('Summary is required'),
]

export const validationResultMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: "Validation failed",
            errors: errors.array(),
        });
    }
    next();
}