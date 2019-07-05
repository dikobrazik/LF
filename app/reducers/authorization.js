const AUTH_INITIAL_STATE = {
    success: false,
    isLoading: false,
    hasErrored: false,
    errorMessage: '',
}

export function auth(state = AUTH_INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTH_HAS_ERRORED':
            return {
                ...state,
                success:false,
                hasErrored:true,
                errorMessage:action.errorMessage,
            };
        case 'PROCESSING_DATA':
            return {
                ...state,
                isLoading:action.isLoading
            };
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isLoading:false,
                success:action.success
            };
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state
            };
        case 'SIGN_OUT_HAS_ERRORED':
            return{
                ...state
            }
        default:
            return state;
    }
}

export function signUp(state = [], action) {
    switch (action.type) {
        case 'SIGN_UP_HAS_ERRORED':
            return {
                ...state,
                hasErrored:action.hasErrored,
                errorMessage:action.errorMessage,
            };
        case 'PROCESSING_SIGN_UP':
            return {
                ...state,
                isLoading:action.isLoading,
            };
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                success:action.success,
            };
        default:
            return state;
    }
}

export function editFileds(state = [], action) {
    switch (action.type) {
        case 'SET_PASSWORD':
            return {
                ...state,
                pass:action.pass,
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email:action.email,
            };
        case 'SET_IMAGE_URI':
            return {
                ...state,
                uri:action.uri,
            };
        default:
            return state;
    }
}
