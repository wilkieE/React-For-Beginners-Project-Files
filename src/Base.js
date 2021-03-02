import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCr8_O3ajQWvSdKhp8EM-m6HlEnA-c7BtU",
    authDomain: "catch-of-the-day-jyro.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jyro-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-jyro",
    storageBucket: "catch-of-the-day-jyro.appspot.com",
    messagingSenderId: "502631968227",
};

const app = firebase.initializeApp(config);
const Base = Rebase.createClass(app.database());


export default Base;