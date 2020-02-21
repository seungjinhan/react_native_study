import firebase from "firebase";
require("firebase/firestore");

import firebaseConfig from "./config";

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  addPost = async ({ text, localUri }) => {
    const remoteUri = await this.uploadPhotoAsync(
      localUri,
      `photos/${this.uid}/${Date.now()}`
    );

    return new Promise((resolve, reject) => {
      this.firestore
        .collection("posts")
        .add({
          text,
          uid: this.uid,
          timestamp: this.timestamp,
          image: remoteUri
        })
        .then(ref => {
          resolve(ref);
        })
        .catch(err => reject(err));
    });
  };

  uploadPhotoAsync = async (uri, filename) => {
    //const path = `photos/${this.uid}/${Date.now()}.jpg`;

    return new Promise(async (resolve, reject) => {
      const res = await fetch(uri);
      const file = await res.blob();
      let upload = firebase
        .storage()
        .ref(filename)
        .put(file);

      upload.on(
        "state_changed",
        snapshot => {},
        err => {
          reject(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          resolve(url);
        }
      );
    });
  };

  createUser = async user => {
    let remoteUri = null;

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      let db = this.firestore.collection("users").doc(this.uid);
      db.set({
        name: user.name,
        email: user.email,
        password: user.password,
        avatar: null
      });

      if (user.avatar) {
        remoteUri = await this.uploadPhotoAsync(
          user.avatar,
          `avatar/${this.uid}`
        );
        db.set({ avatar: remoteUri }, { merge: true });
      }
    } catch (error) {
      alert(`Error : ${error}`);
    }
  };

  singOut = () => {
    firebase.auth().signOut();
  };
  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();

export default Fire;
