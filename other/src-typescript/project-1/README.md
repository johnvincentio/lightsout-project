# Typescript

[Typescript](https://www.typescriptlang.org/)
[Playground](https://www.typescriptlang.org/play/index.html)

## Course

[Udemy Course](https://www.udemy.com/typescript-with-react-hooks-and-context)

## Extensions

* Bookmarks
* Bracket pair colorizer 2
* ES7 React/Redux/GraphQL
* Import Cost
* Prettier


Cmd Shift F - Search




### Type Checking

* boolean
* number
* string
* array - [1, 2, 3]
* tuple [number, string, number]
* enum
* any - Dynamic (normal js)
* void
* null
* undefined
* never
* object

```
function sum(a:number,b:number): number {
    return a + b;
}

sum(1, 'a');
```


# Babel

.babelrc

```
{
  "presets": ["@babel/env", "@babel/react", "@babel/typescript"],
  "plugins": [
    "@babel/proposal-object-rest-spread",
    "@babel/proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```

```
npm i @babel/preset-typescript --save-dev
```

Do not appear to need this

```
npm i @types/react @types/react-dom --save-dev
```

# Next Project

`codesandbox.io`

* Create React Sandbox

Create react app

```
npm init react-app my-app
```


https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes





## END