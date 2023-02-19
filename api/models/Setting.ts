import { DataTypes, FindOptions, Model, ModelAttributes, ModelStatic, Optional } from "sequelize";

import { SettingInterface } from "../../src/interfaces/misc";
import { db } from "../utils/db";

interface SettingCreationAttributes extends Optional<SettingInterface, "id"> { }

interface SettingInstance
    extends Model<SettingInterface, SettingCreationAttributes>,
    SettingInterface { }

const attributes: ModelAttributes<SettingInstance, SettingInterface> = {
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    }
};

const SettingModel = db.define('Setting', attributes, { timestamps: false });

const Setting = {
    findByKey: async (key: string, options?: FindOptions): Promise<string[]> => {
        const settings = await SettingModel.findAll({
            where: {
                key
            },
            ...options
        });

        if (settings) {
            return settings.map((setting: SettingInterface) => {
                return setting.value;
            });
        }

        return [];
    }
}

export {
    SettingModel,
    Setting
}