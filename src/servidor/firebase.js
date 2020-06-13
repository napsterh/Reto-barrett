
import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkzOcibVRg-nlQZqZUegOy6fgmj2zJjPI",
    authDomain: "retobarrett.firebaseapp.com",
    databaseURL: "https://retobarrett.firebaseio.com",
    projectId: "retobarrett",
    storageBucket: "retobarrett.appspot.com",
    messagingSenderId: "690947989248",
    appId: "1:690947989248:web:5779597184e2c997041de5",
    measurementId: "G-7RWQ19RRW4"
};

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    isIniciado() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

}

export default Firebase;