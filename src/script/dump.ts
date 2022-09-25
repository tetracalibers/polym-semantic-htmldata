import { fromJson, toJson } from 'json-microscope'
import * as htmlTagsJson from '@vscode/web-custom-data/data/browsers.html-data.json'
import _ from 'lodash'
import fs from 'fs-extra'
import path from 'path'

type Attrs = {
  [tag in keyof HTMLElementTagNameMap]: string[]
}

const htmlTags = fromJson(htmlTagsJson).tags

export const attrs = _.mapValues(_.keyBy(htmlTags, 'name'), (val) =>
  val.attributes.map((attr: { name: keyof HTMLElementTagNameMap }) => attr.name)
) as Attrs

await fs.outputFile(
  path.join(__dirname, '../data/html-attrs.json'),
  toJson(attrs)
)
