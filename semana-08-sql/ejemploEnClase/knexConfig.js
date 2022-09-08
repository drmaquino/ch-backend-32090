// usuario root
// const dbConfig = {
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: 'mysqlpassword',
//     database: 'coderhouse'
// }

// usuario coder 
// const dbConfig = {
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'coder',
//     password: 'house',
//     database: 'coderhouse'
// }

// export const knexConfig = {
//     client: 'mysql',
//     connection: dbConfig
// }

const dbConfig = {
    filename: './db.sqlite3',
}

export const knexConfig = {
    client: 'sqlite3',
    connection: dbConfig,
    useNullAsDefault: true
}
