#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'

import { fromJson } from 'json-microscope'
import * as htmlTagsJson from '@vscode/web-custom-data/data/browsers.html-data.json'
import _ from 'lodash'
import path from 'path'

type Attrs = {
  [tag in keyof HTMLElementTagNameMap]: string[]
}

const htmlTags = fromJson(htmlTagsJson).tags

export const attrs = _.mapValues(_.keyBy(htmlTags, 'name'), (val) =>
  val.attributes.map((attr: { name: keyof HTMLElementTagNameMap }) => attr.name)
) as Attrs

const tspath = path.join(__dirname, '../dump/html-attrs.ts')

const tagAttrMap = Object.entries(attrs).reduce((prev, [tag, attrs]) => {
  return {
    ...prev,
    [tag]: attrs
  }
}, {})

const dumpSrc = `
export const tagAttrMap = ${JSON.stringify(tagAttrMap)} as const
`

await fs.writeFile(tspath, dumpSrc)

$`prettier --write ${tspath}`
