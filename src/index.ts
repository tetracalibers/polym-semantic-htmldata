import { fromJson } from 'json-microscope'
import * as htmlAttrsJson from './data/html-attrs.json'
import _ from 'lodash'

/* -------------------------------------------- */
/* ATTRIBUTES                                   */
/* -------------------------------------------- */

const allAttrs = fromJson(htmlAttrsJson)

export namespace Attrs {
  export const all = allAttrs
  export const a$button = {
    full: {
      a: allAttrs['a'] as string[],
      button: allAttrs['button'] as string[]
    },
    only: {
      a: _.without(allAttrs['a'], ...allAttrs['button']) as string[],
      button: _.without(allAttrs['button'], ...allAttrs['a']) as string[]
    }
  }
}

/* -------------------------------------------- */
/* CONTENT MODEL                                */
/* -------------------------------------------- */

import {
  flowNotPhrasing as _flowNotPhrasing,
  flow as _flow,
  phrasing as _phrasing
} from './module/ContentModel'

export namespace ContentModel {
  export const flowNotPhrasing = _flowNotPhrasing
  export const flow = _flow
  export const phrasing = _phrasing
}
