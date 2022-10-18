import { decodificar } from './jwt.js';

export async function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    // console.log(req.headers)

    if (!authHeader) {
        return res.status(401).json({
            error: 'not authenticated'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            error: 'not authenticated'
        });
    }

    try {
        const user = await decodificar(token)
        req.user = user
        next();
    } catch (error) {
        res.status(401).json({
            error: 'not authenticated'
        });
    }
};
