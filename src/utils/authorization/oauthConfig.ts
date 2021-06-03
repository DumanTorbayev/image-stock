const authEndpoint = 'https://unsplash.com/oauth/authorize';

const scopes = [
    'public',
    'write_likes'
];

export const getAuthorizeHref = (): string => {
    const clientId = process.env.REACT_APP_API_KEY;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("+")}&response_type=code`;
}
