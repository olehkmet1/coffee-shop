import * as firebase from 'firebase';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBaVFswZyFQyt4suJs3CCUR_G1Js-X9Ejw",
    authDomain: "shop-a7a62.firebaseapp.com",
    databaseURL: "https://shop-a7a62.firebaseio.com",
    projectId: "shop-a7a62",
    storageBucket: "shop-a7a62.appspot.com",
    messagingSenderId: "1006383301700"
  }
};
