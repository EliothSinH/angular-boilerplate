# Angular Boilerplate - In Progress Beta

## Redux

### Flux standard actions
https://github.com/acdlite/flux-standard-action

```
{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}
```

### Redux store (ngRedux)
https://angular-redux.github.io/store/


## Middlewares

### Redux Local Storage
https://github.com/elgerlambert/redux-localstorage

### Redux Logger
https://github.com/evgenyrodionov/redux-logger

### Redux Saga
redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

https://redux-saga.js.org/



## Libraries
### Ramda
Ramda has a more focused goal. We wanted a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

http://ramdajs.com


## Awesome Angular Components
https://github.com/brillout/awesome-angular-components

### Pipes
angular-pipes is a pipes library for Angular.
https://fknop.gitbooks.io/angular-pipes/


### Angular2 Schema Form
Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a JSON schema.
https://github.com/makinacorpus/angular2-schema-form

https://github.com/hasanhameed07/angular2-dashboard-starter

## Actions

An action MUST

- be a plain JavaScript object.
- have a `type` property.

An action MAY

- have an `error` property.
- have a `payload` property.
- have a `meta` property.

An action MUST NOT include properties other than `type`, `payload`, `error`, and `meta`.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. By convention, `type` is usually a string constant or a Symbol. If two types are the same, they MUST be strictly equivalent (using `===`).

### `payload`

The optional `payload` property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or status of the action should be part of the `payload` field.

By convention, if `error` is `true`, the `payload` SHOULD be an error object. This is akin to rejecting a promise with an error object.

### `error`

The optional `error` property MAY be set to `true` if the action represents an error.

An action whose `error` is true is analogous to a rejected Promise. By convention, the `payload` SHOULD be an error object.

If `error` has any other value besides `true`, including `undefined` and `null`, the action MUST NOT be interpreted as an error.

### `meta`

The optional `meta` property MAY be any type of value. It is intended for any extra information that is not part of the payload.
