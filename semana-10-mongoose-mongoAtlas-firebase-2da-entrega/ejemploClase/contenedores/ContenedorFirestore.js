import admin from 'firebase-admin'
import fs from 'fs'

const rutaCredenciales = './firebase/coderhouse32090-firebase-adminsdk-8jhx4-f01801db69.json'
const serviceAccount = JSON.parse(await fs.promises.readFile(rutaCredenciales))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const asObj = doc => ({ id: doc.id, ...doc.data() })

export class ContenedorFirestore {
    constructor(nombreColeccion) {
        this.elementos = db.collection(nombreColeccion)
    }

    async obtenerTodas() {
        const result = []
        const snapshot = await this.elementos.get();
        snapshot.forEach(doc => {
            result.push(asObj(doc))
        })
        return result
    }
}
