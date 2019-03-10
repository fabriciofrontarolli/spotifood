import { SPOTIFY_CLIENT_ID, getHostname } from '../utils/common';

class AuthenticationService {
    constructor() {
    }

    async authenticateSpotify() {
        const hostPort = window.location.port;
        window.location.assign(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=http:%2F%2F${getHostname()}${hostPort && `:${hostPort}`}%2Fsignin&scope=user-read-private%20user-read-email&response_type=token&state=123`);
    }
}

export default AuthenticationService;
