//db address : https://bhproject-305102-default-rtdb.asia-southeast1.firebasedatabase.app/

import { getDatabase, set, ref, get, child, push } from "@firebase/database";
import { initializeApp } from "@firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://bhproject-305102-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function setFirebaseData(path, data) {

    const nowDate = new Date();

    const database = getDatabase(app);
    const result = set(ref(database, path + nowDate.getTime()), data);
    return result;
}

export function pushFirebaseData(path, data) {
    // Create a new post reference with an auto-generated id
    const db = getDatabase(app);
    const postListRef = ref(db, path);
    const newPostRef = push(postListRef);
    return set(newPostRef, data);
}

export function getFirebaseData(path) {

    const promise = new Promise((resolve, reject) => {
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `${path}`)).then((snapshot) => {
            if (snapshot.exists()) {
                resolve({ "success": true, "data": snapshot.val() });
                // console.log(snapshot.val());
                // return snapshot.val();
            } else {
                // console.log("No data available");
                reject({ "success": false, "data": snapshot.val() });
            }
        }).catch((error) => {
            console.error(error);
        });
    });

    return promise;
}

export function deleteFirebaseData(path) {
    const database = getDatabase(app);
    const result = set(ref(database, path), null);
    return result;
}
