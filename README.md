# react-simple-if [![npm](https://img.shields.io/npm/v/react-simple-if.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-if) [![npm](https://img.shields.io/npm/dm/react-simple-if.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-if)

A simple react component for conditional rendering without ternary expression;

**Install:**
```
npm install react-simple-if
```

**Use:**
```html
import If from 'react-simple-if';
const foo = true;

// render hello world
<If exp={foo} />
    <p>Hello world<p>
</If> 

// Does not render hello world
<If exp={!foo} />
    <p>Hello world<p>
</If> 

```
**Props:**

Props | Type | Description
------|------ | -------------
exp | boolean | boolean to control children's  renderability

