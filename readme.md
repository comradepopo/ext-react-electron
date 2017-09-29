# ext-react-electron

A starter app for using ExtReact in Electron

## Dev

ExtReact and all related packages are hosted on Sencha's private NPM registry. To gain access to this registry, [sign up for a trial of ExtReact](https://www.sencha.com/products/extreact/evaluate).

Once you have received your credentials, you can authenticate by running the following command:

```
npm login --registry=http://npm.sencha.com --scope=@extjs
```

Then, install the dependencies:

```
npm install
```

### Run

```
npm start
```

### Build

```
npm run build
```

Builds the app for MacOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

