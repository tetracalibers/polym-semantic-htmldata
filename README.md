# @polym/semantic-htmldata

## Install

```
npm i --save-dev @polym/semantic-htmldata
```

or

```
yarn add -D @polym/semantic-htmldata
```

## Usage

### Get attributes of HTML elements

```ts
import { attrs } from '@polym/semantic-htmldata'

const anchorAttrs = attrs.a
```

The above code is synonymous with

```ts
const anchorAttrs = [
  'href',
  'target',
  'download',
  'ping',
  'rel',
  'hreflang',
  'type',
  'referrerpolicy'
]
```
