import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Route = sequelize.define('route', {
    route_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    route_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    plant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'routes',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "route_id" }
        ]
    }]
});

export default Route;