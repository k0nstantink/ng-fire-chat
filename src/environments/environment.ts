// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDQwmYG6nEExIRS-hWmg0c-Wk-ZHZ7gL4s',
    authDomain: 'ng-demo-app-e57b4.firebaseapp.com',
    databaseURL: 'https://ng-demo-app-e57b4.firebaseio.com',
    projectId: 'ng-demo-app-e57b4',
    storageBucket: 'ng-demo-app-e57b4.appspot.com',
    messagingSenderId: '165064018329'
  }
};
