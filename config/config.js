import Firebase from 'firebase';

var firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
};

let app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();