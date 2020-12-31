import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "<api key>",
    authDomain: "<project>.firebaseapp.com",
    databaseURL: "https://<project>.firebaseio.com",
    projectId: "<project id>",
    storageBucket: "<project>.appspot.com",
    messagingSenderId: "<sender id>",
    appId: "<app id>",
    measurementId: "<measurement id>"
};

var fireapp;
try {
    fireapp = firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log(e.message);
}
export default fireapp;

const initial = {}

function fireReducer(state = initial, action) {
    switch (action.type) {
        case 'TESTACTION':
            return state;
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}
