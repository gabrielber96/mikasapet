const Sequelize = require('sequelize');
class Client {
    constructor({ mySqlDB }) {
        this._db = mySqlDB;
    }
    getInit() 
    {
        const client = this._db.define('clients', {
            clientId: {
                type: Sequelize.INTEGER,//INT
                primaryKey: true,
                allowNull: false,
                autoIntement: true//AUTO INCREMENT 
            },
            clientEmail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clientPassword: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clientName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clientLastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clientCreation: {
                type: DataTypes.DATE,//TIPO DE DATO 2020/02/20 
                defaultValue: DataTypes.NOW //FECHA DE HOY
            },
            clientDate: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
            },
            clientDireccion: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clientPhone: {
                type: Sequelize.NUMBER,
                allowNull: false
            }

        });
        client.sync({force: false}).then(()=>{
            console.log('Table Products sincronizada');
        });
        return client;
    };
}
module.exports = Client;
