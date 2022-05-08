import SEQUELIZE from 'sequelize'
import {connection} from '../database/connection.js'

export const users = connection.define('users', {
    id: {
        type: SEQUELIZE.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    email: {
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    usuario: {
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    senha: {
        type: SEQUELIZE.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
});

const initTable = async () => {
    await users.sync()
}

initTable()