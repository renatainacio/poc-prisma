import { invalidFormatError } from "@/errors/invalidFormat";
import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";


export default function validateSchema(schema: Schema, type: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, {abortEarly: false});
        if (validation.error) throw invalidFormatError(type);
        next();
    }
}