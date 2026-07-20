// ============================================================================
//  FIREBASE CONFIG  —  PASTE YOUR OWN VALUES HERE (one time)
// ----------------------------------------------------------------------------
//  Where to get these:
//    1. Go to https://console.firebase.google.com  ->  Add project (free).
//    2. In the project, click the </> "Web" icon to register a web app.
//    3. Firebase shows you a `firebaseConfig = { ... }` object. Copy its values
//       into the object below.
//    4. In the left menu open "Realtime Database" -> Create Database ->
//       Start in TEST MODE (public). Copy its URL into `databaseURL` below.
//
//  The SAME values also go into  app/firebaseConfig.js  for the phone app.
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyBLY9smBzkX8CKGUQcpxKDKq0P7YcLYBAo",
  authDomain: "pendraw-e431d.firebaseapp.com",
  databaseURL: "https://pendraw-e431d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pendraw-e431d",
  storageBucket: "pendraw-e431d.firebasestorage.app",
  messagingSenderId: "969955762018",
  appId: "1:969955762018:web:6f5e70cd81cdaff108563b",
};

// The single shared drawing lives at this path in the database.
// (Later, to give each user their own page, we make this dynamic.)
export const DRAWING_PATH = "drawing/points";
