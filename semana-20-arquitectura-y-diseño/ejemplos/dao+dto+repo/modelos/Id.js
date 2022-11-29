const generateRandomString = (options = {}) => {
    const { length, charset } = { ...options, length: 8, charset: 'abcdefghijklmnopqrstuvwxyz0123456789' }

    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(charset.charAt(Math.floor(Math.random() * charset.length)));
    }

    return result.join('');
}

export default class Id {
    static new() {
        return `${Date.now()}-${generateRandomString({ length: 8 })}`
    }
}