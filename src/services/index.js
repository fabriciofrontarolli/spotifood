

/* services */
import Authentication from './Authentication';
import Spotify from './Spotify';

const services = {
    spotify: new Spotify(),
    authentication: new Authentication(),
}

export default services;
