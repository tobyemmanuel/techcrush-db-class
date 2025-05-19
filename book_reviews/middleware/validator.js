import { body, query, param, validationResult } from 'express-validator';

export const createBookValidator = [
    body('title').escape().notEmpty().withMessage('Title is required').isLength({min:3}).withMessage('Title must be at least 3 characters long'),
    body('year').escape().isNumeric().withMessage('Year must be a number'),
    body('author').escape().notEmpty().withMessage('Author is required'),
    body('summary').escape().notEmpty().withMessage('Summary is required'),
]

export const createReviewValidator = [
    body('reviewer').escape().notEmpty().withMessage('Reviewer is required'),
    body('rating').escape().isInt({min:1, max: 10}).withMessage('Rating must be between 1 and 10'),
    body('comment').escape().notEmpty().withMessage('A comment is required'),
    param('bookId').escape().isInt().withMessage('A valid book id is required'),
]

export const validationResultMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // let format = errors.array().map(error => {
        //     return {
        //         value: error.value,
        //         message: error.msg
        //     }
        // })

        return res.status(422).json({
            status: false,
            message: "Validation failed",
            errors: errors.array(),
        });
    }
    next();
}