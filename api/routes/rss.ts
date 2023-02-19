import { Request, Response } from "express"
import { Feed } from "feed";
import { ContentQuery } from "../../src/interfaces/content";
import { Content } from "../models";
import rssRouter from "./router";
import * as dotenv from 'dotenv'
dotenv.config();

rssRouter.get('/api/feed/:type?', async (req: Request, res: Response) => {
    const baseUrl = process.env['BASE_URL'] || 'http://localhost:4200/';
    const year = new Date().getFullYear();

    let { type } = req.params;

    if (type !== 'rss' && type !== 'json') {
        type = 'rss';
    }

    const feed = new Feed({
        id: baseUrl,
        title: 'E.R. Ellsworth',
        link: `${baseUrl}`,
        description: 'My blog, but as an RSS feed.',
        copyright: `Copyright ${year} E.R. Ellsworth`,
        author: {
            name: "E.R. Ellsworth"
        },
        language: "en",
        favicon: `${baseUrl}favicon.ico`,
        image: 'https://assets.erellsworth.com/uploads/erellsworth-logo-splash.jpg',
        feedLinks: {
            json: `${baseUrl}api/feed/json`,
            rss: `${baseUrl}api/feed/rss`
        },
    });

    feed.categories = [
        'Satire',
        'Fiction',
        'Humor',
        'Science Fiction',
        'Short stories',
        'Poetry',
        'Flash Fiction',
        'Slipstream',
        'Blog',
        'Politics'
    ];

    const query: ContentQuery = {
        type: 'post',
        limit: 25,
        page: 1
    };

    const content = await Content.findAll(query);

    content.contents.forEach(post => {
        feed.addItem({
            title: post.title,
            id: `${baseUrl}${post.slug}`,
            link: `${baseUrl}${post.slug}`,
            description: post.seo.description,
            content: post.html,
            date: new Date(post.createdAt),
            image: post.image?.thumbnail
        });
    });



    if (type === 'json') {
        res.json(JSON.parse(feed.json1()));
    } else {
        res.set('Content-Type', 'application/rss+xml');
        res.send(feed.rss2());
    }

});


export default rssRouter;