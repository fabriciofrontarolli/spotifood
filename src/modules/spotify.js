export const LOAD_FILTERS = '@spotify/LOAD_FILTERS';
export const LOAD_SPOTIFY_PLAYLISTS = '@spotify/LOAD_SPOTIFY_PLAYLISTS';
export const SET_FILTER_VALUE = '@spotify/SET_FILTER_VALUE';
export const RESET_FILTERS = '@spotify/RESET_FILTERS';
export const RESET = '@spotify/RESET';

const INITIAL_STATE = {
    filters: [],
    playlists: [],
    selectedFilters: {}
};

/* Action Handlers */
export const fetchFilters = () => {
    return async (dispatch, getState, services) => {
        try {
            if (!getState().spotify.filters.length) {
                const filters = await services.spotify.fetchFilters();
                dispatch({ type: LOAD_FILTERS, filters });
            }
        } catch (err) {
            // TODO: create a notification reducer
            console.log(`SpotifyFood Error: Spotify Filters: `, err)
        }
    }
}

export const fetchPlaylists = () => {
    return async (dispatch, getState, services) => {
        try {
            const { accessToken } = getState().authentication;
            const { selectedFilters } = getState().spotify;

            const playlists = await services.spotify.fetchPlaylists(accessToken, selectedFilters);
            dispatch({ type: LOAD_SPOTIFY_PLAYLISTS, playlists });
        } catch (err) {
            dispatch({ type: LOAD_SPOTIFY_PLAYLISTS, playlists: [] });
        }
    }
}

export const setFilterValue = (filterName, filterValue) => {
    return async (dispatch) => {
        dispatch({ type: SET_FILTER_VALUE, filterName, filterValue });
    }
}

export const resetFilters = () => {
    return async (dispatch) => {
        dispatch({ type: RESET_FILTERS });
    }
}

/* REDUCER */
function spotifyReducer(state = INITIAL_STATE, action) {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_FILTERS: {
            newState = {
                ...state,
                filters: action.filters
            }
            break;
        }
        case LOAD_SPOTIFY_PLAYLISTS: {
            newState = {
                ...state,
                playlists: action.playlists
            }
            break;
        }
        case SET_FILTER_VALUE: {
            const { filterName, filterValue } = action;

            const newSelectedFilters = {
                ...state.selectedFilters
            };

            if (filterValue) {
                newSelectedFilters[filterName] = filterValue;
            } else {
                delete newSelectedFilters[filterName];
            }

            newState = { ...state, selectedFilters: newSelectedFilters };
            break;
        }
        case RESET_FILTERS: {
            newState = {
                ...state,
                selectedFilters: {}
            }
            break;
        }
        case RESET: {
            newState = INITIAL_STATE;
            break;
        }
    }

    return newState;
}

export default spotifyReducer;
