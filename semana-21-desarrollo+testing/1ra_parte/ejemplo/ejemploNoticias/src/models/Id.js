import { randomUUID } from 'crypto'

export default class Id {
    static crearId() {
        return randomUUID()
    }
} 