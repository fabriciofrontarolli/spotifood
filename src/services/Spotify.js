import axios from 'axios';
import qs from 'qs';

class SpotifyService {
    constructor() {
    }

    async fetchFilters() {
        const response = await axios.get('https://www.mocky.io/v2/5a25fade2e0000213aa90776');
        const { filters } = response.data
        return filters;
    }

    async fetchPlaylists(accessToken, selectedFilters) {
        const filters = qs.stringify(selectedFilters);
        
        console.log("selectedFilters >>> ", selectedFilters)
        console.log("filters >>> ", filters)

        const response = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists${filters ? `?${filters}` : ''}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        const { playlists } = response.data
        return playlists;
    }
}

export default SpotifyService;
