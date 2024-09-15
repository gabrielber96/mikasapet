const Sequelize = require('sequelize');
class Product {
    constructor({mySqlDB}){
        this._db = mySqlDB;
    }
    getInit(){
        const product = this._db.define('products', {
            productId:{
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            userId:{
               type: Sequelize.INTEGER 
            },
            productName:{
                type: Sequelize.TEXT
            },
            productPrice:{
                type: Sequelize.DOUBLE
            },
            productCreation:{
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE
            },
            productImage:{
                type: Sequelize.STRING(150)
            },
            stock:{
                type:Sequelize.INTEGER
            },
            categoryId:{
                type:Sequelize.INTEGER
            }
  
        });
        product.sync({force: false}).then(()=>{
            console.log('Table Products sincronizada');
        });
        return product;
    };

}
module.exports = Product;