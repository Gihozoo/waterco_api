import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Payment = sequelize.define('payment', {
    payment_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    premise_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    bill_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    member_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    remaining_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "payment_id" }
        ]
    }]
});

export default Payment;