import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Bill = sequelize.define('bill', {
    bill_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    premise_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    reading_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    staff_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    period_of_billing: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    due_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'bill',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "bill_id" }
        ]
    }]
});

export default Bill;