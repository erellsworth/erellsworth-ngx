import { Setting } from "../models"
import { db } from "./db";

export const getSettings = async (key: string): Promise<string[]> => {
    return await Setting.findByKey(key);
}

export const get404 = async (): Promise<string> => {
    const messages = await Setting.findByKey('404', {
        order: db.random()
    });

    return messages[0];
}