// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase: {
    apiKey: "AIzaSyB5HczAoyB4oU3QV__xy_oNIUSp6IDLvcE",
    authDomain: "test-house-c2a8f.firebaseapp.com",
    databaseURL: "https://test-house-c2a8f.firebaseio.com",
    projectId: "test-house-c2a8f",
    storageBucket: "test-house-c2a8f.appspot.com",
    messagingSenderId: "754212493823"
  }
};
