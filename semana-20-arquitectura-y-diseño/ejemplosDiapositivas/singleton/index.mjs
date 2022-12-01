import { Persona } from './clase.mjs';

const personaSingleton = new Persona();

export function getPersona() {
    return personaSingleton
}

export default personaSingleton