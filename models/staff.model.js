import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Staff = sequelize.define('staff', {
    full_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    staff_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    email_address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'staff',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "staff_id" }
        ]
    }]
});

export default Staff;