
# Data

Project currently uses [json-server](https://github.com/typicode/json-server)

Project data can be found at [JSON Data](https://my-json-server.typicode.com/johnvincentio/democrud)

## Create Data

`makedb.js` is used to create the test/fake data.

```
node makedb
```

which creates `db.json`

Commit this file to `master` and the `json-seerver` will get the get the data.

# Development

```
npm start
```

`localhost:8010`

# Productiom

```
npm run production
npm run serve
```

`localhost:8010`

# Some day

* Aria
* Microdata

* Format Delete component
* Resolve security vulnerability.

* Description field; do not allow user to enter invalid characters. Remove validation code.

# Helped

[Patterns](http://html5pattern.com/Names)

# Async/await problem

[Babel](https://babeljs.io/docs/en/babel-plugin-transform-runtime/)

```
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

`.babelrc`

```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": [
    "@babel/proposal-object-rest-spread",
    "@babel/proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```

# Lighthouse

```
Performance: 85
Accessibility: 76
Best Practices: 93
SEO: 97

PWA: Pass
```

Running from a local server and so cannot resolve some of these findings.

## Performance: 85

These issues will be much improved when the app is deployed to Nginx server.
Nothing to do here.

## Accessibility: 76

Aria work is needed.

## Best Practices: 93

Http2 issues will be resolved when deployed to Nginx server.

## SEO: 97

```
Tap targets are not sized appropriately

<a href="/">All Widgets</a>
```

* Each target should be 48x48 pixels.
* Make the targets about 8 pixels apart.

### Work performed

* Increased size of header items.
* Increased font weight.
* Increased distance between the items.

## PWA: Pass

Nothing to do here.





