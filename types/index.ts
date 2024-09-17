export { };

declare global {

    interface SocialAccountData {
        id: number;
        provider: string;
        uid: string;
        last_login: string;
        date_joined: string;
    }
    
    interface GoogleExtraData extends SocialAccountData {
        extra_data: {
            iss: string;
            azp: string;
            aud: string;
            sub: string;
            email: string;
            email_verified: boolean;
            at_hash: string;
            name: string;
            picture: string;
            given_name: string;
            family_name: string;
            iat: number;
            exp: number;
        };
    }
    
    interface GithubExtraData extends SocialAccountData {
        extra_data: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            name: string | null;
            company: string | null;
            blog: string;
            location: string | null;
            email: string | null;
            hireable: boolean | null;
            bio: string | null;
            twitter_username: string | null;
            notification_email?: string | null;
            public_repos: number;
            public_gists: number;
            followers: number;
            following: number;
            created_at: string;
            updated_at: string;
        };
    }
    

    interface UserData {
        pk: number,
        username: string,
        email: string;
        first_name: string,
        last_name: string,
    }
    
    interface JWTData {
        access: string;
        refresh: string;
    }

    interface UserJWTData extends JWTData {
        user: UserData
    }

    interface LoginError {
        email?: string[]; // optional since it may not always be present
        non_field_errors?: string[]; // optional for the same reason
    }

    interface Surahs {
        id: number,
        name: string,
        transliteration: string,
        translation: string,
        type: string,
        total_verses: number,
    }

    interface Ayahs {
        id: number,
        verse_id: number,
        text: string,
        translation: string,
    }
}
