import _ from 'lodash'
import { tagAttrMap } from './dump/html-attrs'

/* -------------------------------------------- */
/* ATTRIBUTES                                   */
/* -------------------------------------------- */

type Mutable<T> = {
  -readonly [P in keyof T]: Mutable<T[P]>
}

export type TagAttrMap = Mutable<typeof tagAttrMap>

export type Tag = keyof TagAttrMap

export type Attr<T extends Tag> = TagAttrMap[T]

export type AttrDiff<T1 extends Tag, T2 extends Tag> = (Omit<
  Attr<T1>,
  Attr<T2>[number] extends string ? Attr<T2>[number] : never
> extends infer T
  ? T extends Attr<Tag>
    ? T[number]
    : never
  : never)[]

export const attr = tagAttrMap

export const compareAttr = <T1 extends Tag, T2 extends Tag>(
  tag1: T1,
  tag2: T2
) => ({
  full: {
    [tag1]: tagAttrMap[tag1],
    [tag2]: tagAttrMap[tag2]
  } as { [t in T1 | T2]: TagAttrMap[t] },
  only: {
    [tag1]: _.without(tagAttrMap[tag1], ...tagAttrMap[tag2]),
    [tag2]: _.without(tagAttrMap[tag2], ...tagAttrMap[tag1])
  } as {
    [t in T1 | T2]: t extends T1 ? AttrDiff<T1, T2> : AttrDiff<T2, T1>
  }
})

type button = TagAttrMap['button']

type a = TagAttrMap['a']

type d = AttrDiff<'a', 'button'>
type rd = AttrDiff<'button', 'a'>

const a$button = compareAttr('a', 'button').only

/* -------------------------------------------- */
/* CONTENT MODEL                                */
/* -------------------------------------------- */

import {
  flowNotPhrasing as _flowNotPhrasing,
  flow as _flow,
  phrasing as _phrasing,
  phrasingIfIncludePhasingOnly as _phrasingIfIncludePhrasingOnly
} from './module/ContentModel'

export namespace ContentModel {
  export const flowNotPhrasing = _flowNotPhrasing
  export const flow = _flow
  export const phrasing = _phrasing
  export const phrasingOnlyIfContainPhasing = _phrasingIfIncludePhrasingOnly
}
