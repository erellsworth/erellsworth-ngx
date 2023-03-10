import { MediaInterface } from "../../src/interfaces/media";
import { ContentWithMedia } from "../../src/interfaces/misc";
import { Media } from "../models/Media";
import * as dotenv from 'dotenv'
dotenv.config();

export const attachImages = async (contents: ContentWithMedia[]): Promise<ContentWithMedia[]> => {
    return Promise.all(contents.map(async (content: ContentWithMedia): Promise<ContentWithMedia> => {
        const image = await attachImage(content);
        return image;
    }));
}

export const attachImage = async (content: ContentWithMedia): Promise<ContentWithMedia> => {

    if (content && content.metaData.media_id) {
        const media: MediaInterface = await Media.findById(content.metaData.media_id);
        const basePath = `${process.env['ASSETS_URI']}${media.path}/`;

        content.image = {
            full: `${basePath}${media.filename}`,
            thumbnail: `${basePath}thumbs/${media.filename}`
        };
    }

    return content;
}