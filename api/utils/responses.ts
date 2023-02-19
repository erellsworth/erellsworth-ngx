import { Response } from "express"
import { ApiResponse } from "../../src/interfaces/misc";
import { get404 } from "./settings";

export const successResponse = async <T>(res: Response, data: T) => {

    if (data) {
        const response: ApiResponse<T> = {
            success: Boolean(data),
            data
        };
        res.json(response);
    } else {
        // this is just a fallback. successResponse should not be called if there is no data
        notFoundResponse(res);
    }
}

export const notFoundResponse = async (res: Response) => {

    const message = await get404();

    const response: ApiResponse = {
        success: false,
        error: { // TODO: Fetch random 404 messages from database
            message,
            code: 404
        }
    };

    res.json(response);
}
