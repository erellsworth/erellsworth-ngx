export interface MastadonAccount {
    id: string;
    username: string;
    acct: string;
    display_name: string;
    locked: boolean;
    bot: boolean;
    discoverable: boolean;
    group: boolean;
    created_at: string;
    note: string;
    url: string;
    avatar: string;
    avatar_static: string;
    header: string;
    header_static: string;
    followers_count: number;
    following_count: number;
    statuses_count: number;
    last_status_at: string;
    emojis: any[];
    fields: {
        name: string;
        value: string;
        verified_at: string;
    }[];
}

export interface MastadonStatus {
    id: string;
    created_at: string;
    in_reply_to_id?: string;
    in_reply_to_account_id?: string;
    sensitive: boolean;
    spoiler_text: string;
    visibility: string;
    language?: string;
    uri: string;
    url: string;
    replies_count: number;
    reblogs_count: number;
    favourites_count: number;
    edited_at?: string;
    favourited: boolean;
    reblogged: boolean;
    muted: boolean;
    bookmarked: boolean;
    content: string;
    reblog?: MastadonStatus;
    application?: {
        name: string;
        website: string;
    };
    account: MastadonAccount;
    media_attachments: MastadonMedia[];
    mentions: any[];
    tags: {
        name: string;
        url: string;
    }[];
    emojis: [];
    card?: any;
    poll?: any;
};

export interface MastadonMedia {
    id: number;
    type: string;
    url: string;
    preview_url: string;
    remote_url: string;
    preview_remote_url: string;
    text_url: string;
    meta: {
        original: {
            width: number;
            height: number;
            size: string;
            aspect: number
        };
        small: {
            width: number;
            height: number;
            size: string;
            aspect: number
        }
    };
    description: string;
    blurhash: string
}