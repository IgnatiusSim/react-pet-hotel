const firebaseConfig = {

  apiKey: "AIzaSyDMIG3pLVyaC2eTA1UrETozSWKE2IxK3Uc",

  authDomain: "pet-hotel-prod-82303.firebaseapp.com",

  projectId: "pet-hotel-prod-82303",

  storageBucket: "pet-hotel-prod-82303.appspot.com",

  messagingSenderId: "903161783236",

  appId: "1:903161783236:web:d2f7b25f22b619431cfa91",

  measurementId: "G-48GYS6P8VQ"

};


// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
