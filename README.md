# Calculator over REST

## To run using Docker

Pre-requisites:
* Docker
* docker-compose

1. Run the following command:

```
./docker-run.sh
```

2. Open http://127.0.0.1:3000 in a browser.

## To run

1. Run the following commands:

```
npm i
npm run compile
npm start
```

2. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in a browser.

## To run tests

1. Install dependencies:

```
npm i
```

2. Run tests:

```
npm test
```

## To develop

1. Install dependencies:

```
npm i
```

2. In one terminal, start the compile watcher:

```
npm run dev-compile
```

3. In another terminal, start the dev server watcher:

```
npm run dev-server
```

4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in a browser.

## To regenerate API Docs

Documentation is in `doc/apidoc.js`.

Run:

```
npm run apidocs
```