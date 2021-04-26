import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"


const Member = sequelize.define('member', {
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    member_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    telephone: {
        type: Sequelize.STRING(25),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'members',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "member_id" }
        ]
    }]
});

export default Member;