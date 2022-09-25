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
import { attr, TagAttrMap } from '@polym/semantic-htmldata'

const anchorAttr = attr.a
type AnchorAttr = TagAttrMap['a']
```

The above code is synonymous with

```ts
const anchorAttr = [
  'href',
  'target',
  'download',
  'ping',
  'rel',
  'hreflang',
  'type',
  'referrerpolicy'
]
type AnchorAttr =
  | 'href'
  | 'target'
  | 'download'
  | 'ping'
  | 'ref'
  | 'hreflang'
  | 'type'
  | 'referrerpolicy'
```

### Compare attributes of two HTML elements

```ts
import { compareAttr, AttrDiff } from '@polym/semantic-htmldata'

// attr.a
const anchorAttr = compareAttr('a', 'button').full.a
// attr.button
const buttonAttr = compareAttr('a', 'button').full.button

// Attributes that are in the a tag but not in the button tag
const anchorOnlyAttr = compareAttr('a', 'button').only.a
// Attributes that are in the button tag but not in the a tag
const buttonOnlyAttr = compareAttr('a', 'button').only.button

// typeof anchorOnlyAttr
type AnchorOnlyAttr = AttrDiff<'a', 'button'>
// typeof buttonOnlyAttr
type ButtonOnlyAttr = AttrDiff<'button', 'a'>
```

### List of elements by content category

Both can be obtained as an array of tag name strings.

```ts
import { ContentModel } from '@polym/semantic-htmldata'

// Tags belonging to flow
const flow = ContentModel.flow
// Tags belonging to phrasing
const phrasing = ContentModel.phrasing
// Tags that belong to flow but are not phrasing
const flowOnly = ContentModel.flowNotPhrasing
// Tags belonging to phrasing only if they contain a phrasing element
const phrasingOnlyIfContainPhasing = ContentModel.phrasingOnlyIfContainPhasing
```
