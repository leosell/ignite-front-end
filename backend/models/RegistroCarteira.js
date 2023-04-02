import Sequelize from "sequelize";
import conectando from "../config/chaves_db.js";
import Usuario from "./Usuario.js";

const RegistroCarteira = conectando.define(
    'registroCarteira',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },

        valor: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        dataTransferencia: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }
)

RegistroCarteira.belongsTo(Usuario, {
    foreignKey: 'idUsuario'
})

export default RegistroCarteira;