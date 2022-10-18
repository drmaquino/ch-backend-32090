import parseArgs from 'minimist'

const config = parseArgs(process.argv.slice(2), {
    default: { p: 8080, m: 'memoria' },
    alias: { p: 'PORT', m: 'MODO' }
})

export const PORT = config.PORT

export const MODO = config.MODO

// console.log(config)

