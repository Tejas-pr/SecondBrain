import { NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        export interface Request {
            userId?: string
        }
    }
}
export const isValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const token = req.headers["authorization"];
    const decode = jwt.verify(token as string, process.env.JWT_SECRETE as string);
    if(decode) {
        // @ts-ignore
        req.userId = (decode as JwtPayload).id;
        next();
    } else {
        // @ts-ignore
        res.status(401).send("Unauthorized");
    }
};
    