import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Premise = sequelize.define('premise', {
    member_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    premise_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    route_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    structure: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
    premise_status: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
    meter_number: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'premise',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "premise_id" }
        ]
    }]
});

export default Premise;