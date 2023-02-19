import { Request, Response } from "express"
import { ContentInterface, ContentQuery } from "../../src/interfaces/content";
import { PaginatedResults } from "../../src/interfaces/misc";
import { TaxonomyQuery } from "../../src/interfaces/taxonomy";
import { Content, Taxonomy } from "../models";
import { notFoundResponse, successResponse } from "../utils/responses";
import contentRouter from "./router";

contentRouter.get('/api/:slug?', async (req: Request, res: Response) => {

    let content: ContentInterface | PaginatedResults;

    const { slug } = req.params;

    if (slug) {
        content = await Content.findBySlug(slug);
    } else {
        const query: ContentQuery = {
            type: 'post',
            limit: 6,
            page: 1
        };

        content = await Content.findAll(query);
    }

    if (content) {
        successResponse(res, content);
    } else {
        notFoundResponse(res);
    }

});

contentRouter.get('/api/blog/:page', async (req: Request, res: Response) => {

    let content: PaginatedResults;
    const { page } = req.params;

    const query: ContentQuery = {
        type: 'post',
        limit: 6,
        page: parseInt(page)
    };

    content = await Content.findAll(query);

    if (content) {
        successResponse(res, content);
    } else {
        notFoundResponse(res);
    }

});

contentRouter.get('/api/tag/:slug/:page?', async (req: Request, res: Response) => {

    const { slug, page } = req.params;

    const query: TaxonomyQuery = {
        slug,
        limit: 6,
        page: page ? parseInt(page) : 1
    };

    let taxonomy = await Taxonomy.findBySlug(slug);

    if (!taxonomy) {
        notFoundResponse(res);
        return;
    }

    let contents = await Content.findByTaxonomy(query);

    taxonomy.content = contents;

    successResponse(res, taxonomy);

});

export default contentRouter;