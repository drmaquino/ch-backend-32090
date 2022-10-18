import jwt from "jsonwebtoken"

const PRIVATE_KEY = "myprivatekey";

export function codificar(data) {
    return new Promise((resolve, reject) => {
        jwt.sign({ data }, PRIVATE_KEY, { expiresIn: '24h' }, (error, encoded) => {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(encoded);
            }
        });
    });
}

export function decodificar(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(decoded.data);
            }
        });
    });
}
