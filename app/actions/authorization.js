import firebase from 'react-native-firebase';
import {uploadImage} from './uploader';

export function authHasErrored(bool, message) {
    return {
        type: 'AUTH_HAS_ERRORED',
        hasErrored: bool,
        errorMessage: message
    };
}

export function processing(bool) {
    return {
        type: 'PROCESSING_DATA',
        isLoading: bool
    };
}

export function authSuccess(bool) {
    return {
        type: 'AUTH_SUCCESS',
        success: bool
    };
}
export function signUpHasErrored(bool, message) {
    return {
        type: 'SIGN_UP_HAS_ERRORED',
        hasErrored: bool,
        errorMessage: message
    };
}

export function signUpProcessing(bool) {
    return {
        type: 'PROCESSING_SIGN_UP',
        isLoading: bool
    };
}

export function signUpSuccess(bool) {
    return {
        type: 'SIGN_UP_SUCCESS',
        success: bool
    };
}

export function signOutSuccess() {
    return {
        type: 'SIGN_OUT_SUCCESS',
    };
}
export function signOutHasErrored() {
    return {
        type: 'SIGN_OUT_HAS_ERRORED',
    };
}

export function setPassword(pass) {
    return {
        type: 'SET_PASSWORD',
        pass,
    };
}
export function setEmail(email) {
    return {
        type: 'SET_EMAIL',
        email,
    };
}
export function setImageUri(uri) {
    return {
        type: 'SET_IMAGE_URI',
        uri,
    };
}
export function initialization() {
    return (dispatch, getState) => {
        dispatch(processing(true));
        firebase
            .auth()
            .onAuthStateChanged(
                function(user){
                    if(user && getState().signUp == [] && getState().signUp == undefined){
                        dispatch(authSuccess(true))
                    }else{
                        dispatch(authSuccess(false))
                    }
            })
    };
}
export function authorization() {
    return (dispatch, getState) => {
        let {email, pass} = getEmailAndPass(getState)
        if(email == '' || email == null) {
            return dispatch(authHasErrored(true, 'auth/empty-email'))
        }
        if(pass == '' || pass == null){
            return dispatch(authHasErrored(true, 'auth/empty-pass'))
        } 
        dispatch(processing(true));
        dispatch(authHasErrored(false, ''))
        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                dispatch(setEmail(''))
                dispatch(setPassword(''))
                dispatch(authSuccess(true));
            })
            .catch(error => {
                dispatch(authHasErrored(true, error.code))
                dispatch(processing(false));
            })
    };
}

export function signUp() {
    return (dispatch, getState) => {
        let {email, pass} = getEmailAndPass(getState)
        if(email == '' || email == null) {
            return dispatch(signUpHasErrored(true, 'auth/empty-email'))
        }
        if(pass == '' || pass == null){
            return dispatch(signUpHasErrored(true, 'auth/empty-pass'))
        } 
        dispatch(signUpProcessing(true));
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                if(getState().editFileds.uri){
                    uploadImage(getState().editFileds.uri).then(url=>{
                        var user = firebase.auth().currentUser;
                        if(user){
                            user.updateProfile({
                                photoURL: url,
                            }).then(r=>{
                                dispatch(setEmail(''))
                                dispatch(setPassword(''))
                                dispatch(authSuccess(true))
                                dispatch(signUpProcessing(false));
                                dispatch(signUpSuccess(true))
                            })
                        }
                    })
                }else{
                    dispatch(setEmail(''))
                    dispatch(setPassword(''))
                    dispatch(signUpProcessing(false));
                    dispatch(signUpSuccess(true))
                }
            })
            .catch(error => {
                dispatch(signUpProcessing(false));
                dispatch(signUpHasErrored(true, error.code))
            })
    };
}

export function signOut() {
    return (dispatch) => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(signOutSuccess())
            })
            .catch(error => {
                dispatch(signOutHasErrored())
                console.warn(error.message)
            })
    };
}

function getEmailAndPass(getState){
    let email = getState().editFileds.email;
    let pass = getState().editFileds.pass;
    return {email, pass}
}