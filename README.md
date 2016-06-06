# Mock API Server

A mock API using [Swagger](http://swagger.io/specification/) and [Chance](http://chancejs.com/).

## Usage

Copy this repo:

```
curl -L https://github.com/lukeaskew/swagger-mock-api-starter/archive/master.tar.gz | tar zx --strip 1
```

Start the API server:

```
npm start
```

## Configuration

You can load a specific spec by passing the file as an argument (`spec.yml` is the default):

```
npm start locations.yml
```

## Writing API Specs

Specs are written in the [Swagger](http://swagger.io/specification/) specification. The API definitions are located in `spec.yml`
