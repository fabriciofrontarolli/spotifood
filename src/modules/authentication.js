export const SIGNIN_SPOTIFY = '@authentication/SIGNIN_SPOTIFY';
export const SIGNOFF_SPOTIFY = '@authentication/SIGNOFF_SPOTIFY';

const INITIAL_STATE = {
    isAuthenticated: false,
    accessToken: ''
};

/* Action Handlers */
export const signIn = () => {
    return async (dispatch, _, services) => {
        try {
            await services.authentication.authenticateSpotify();
        } catch (err) {
            // TODO: create a notification reducer
            console.log(`SpotifyFood Error: Authentication: `, err)
        }
    }
}

export const signInSuccess = (accessToken) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SIGNIN_SPOTIFY,
                accessToken
            });
        } catch (err) {
            // TODO: create a notification reducer
            console.log(`SpotifyFood Error: Authentication: `, err)
        }
    }
}

export const signOff = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNOFF_SPOTIFY });
        } catch (err) {
            // TODO: create a notification reducer
            console.log(`SpotifyFood Error: Authentication: `, err)
        }
    }
}

/* REDUCER */
function authenticationReducer(state = INITIAL_STATE, action) {
    let newState = { ...state };

    switch (action.type) {
        case SIGNIN_SPOTIFY: {
            newState = {
                ...state,
                isAuthenticated: true,
                accessToken: action.accessToken,
            }
            break;
        }
        case SIGNOFF_SPOTIFY: {
            newState = INITIAL_STATE;
            break;
        }
    }

    return newState;
}

export default authenticationReducer;
