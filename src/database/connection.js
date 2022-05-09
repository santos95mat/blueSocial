import SEQUELIZE from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new SEQUELIZE(
    process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_LOCAL,
        port: 5432,
        dialect: 'postgres'
    }
);

// export const connection = new SEQUELIZE(
// 'postgres://redesocial_user:ICWOc1Rv78d6ykxutdedzg3pMwCJBraE@dpg-c9rgh8sgqg450d9v32gg-a.oregon-postgres.render.com/redesocial',
//     {
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// );