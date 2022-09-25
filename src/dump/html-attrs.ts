export const tagAttrMap = {
  html: ['manifest', 'version', 'xmlns'],
  head: ['profile'],
  title: [],
  base: ['href', 'target'],
  link: [
    'href',
    'crossorigin',
    'rel',
    'media',
    'hreflang',
    'type',
    'sizes',
    'as',
    'importance',
    'importance',
    'integrity',
    'referrerpolicy',
    'title'
  ],
  meta: ['name', 'http-equiv', 'content', 'charset', 'scheme'],
  style: ['media', 'nonce', 'type', 'scoped', 'title'],
  body: [
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onhashchange',
    'onlanguagechange',
    'onmessage',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onstorage',
    'onunload',
    'alink',
    'background',
    'bgcolor',
    'bottommargin',
    'leftmargin',
    'link',
    'onblur',
    'onerror',
    'onfocus',
    'onload',
    'onredo',
    'onresize',
    'onundo',
    'rightmargin',
    'text',
    'topmargin',
    'vlink'
  ],
  article: [],
  section: [],
  nav: [],
  aside: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  header: [],
  footer: [],
  address: [],
  p: [],
  hr: ['align', 'color', 'noshade', 'size', 'width'],
  pre: ['cols', 'width', 'wrap'],
  blockquote: ['cite'],
  ol: ['reversed', 'start', 'type', 'compact'],
  ul: ['compact'],
  li: ['value', 'type'],
  dl: [],
  dt: [],
  dd: ['nowrap'],
  figure: [],
  figcaption: [],
  main: [],
  div: [],
  a: [
    'href',
    'target',
    'download',
    'ping',
    'rel',
    'hreflang',
    'type',
    'referrerpolicy'
  ],
  em: [],
  strong: [],
  small: [],
  s: [],
  cite: [],
  q: ['cite'],
  dfn: [],
  abbr: [],
  ruby: [],
  rb: [],
  rt: [],
  rp: [],
  time: ['datetime'],
  code: [],
  var: [],
  samp: [],
  kbd: [],
  sub: [],
  sup: [],
  i: [],
  b: [],
  u: [],
  mark: [],
  bdi: [],
  bdo: ['dir'],
  span: [],
  br: ['clear'],
  wbr: [],
  ins: ['cite', 'datetime'],
  del: ['cite', 'datetime'],
  picture: [],
  img: [
    'alt',
    'src',
    'srcset',
    'crossorigin',
    'usemap',
    'ismap',
    'width',
    'height',
    'decoding',
    'loading',
    'referrerpolicy',
    'sizes',
    'importance',
    'importance',
    'intrinsicsize'
  ],
  iframe: [
    'src',
    'srcdoc',
    'name',
    'sandbox',
    'seamless',
    'allowfullscreen',
    'width',
    'height',
    'allow',
    'allowpaymentrequest',
    'allowpaymentrequest',
    'csp',
    'importance',
    'referrerpolicy'
  ],
  embed: ['src', 'type', 'width', 'height'],
  object: [
    'data',
    'type',
    'typemustmatch',
    'name',
    'usemap',
    'form',
    'width',
    'height',
    'archive',
    'border',
    'classid',
    'codebase',
    'codetype',
    'declare',
    'standby',
    'tabindex'
  ],
  param: ['name', 'value', 'type', 'valuetype'],
  video: [
    'src',
    'crossorigin',
    'poster',
    'preload',
    'autoplay',
    'mediagroup',
    'loop',
    'muted',
    'controls',
    'width',
    'height'
  ],
  audio: [
    'src',
    'crossorigin',
    'preload',
    'autoplay',
    'mediagroup',
    'loop',
    'muted',
    'controls'
  ],
  source: ['src', 'type', 'sizes', 'srcset', 'media'],
  track: ['default', 'kind', 'label', 'src', 'srclang'],
  map: ['name'],
  area: [
    'alt',
    'coords',
    'shape',
    'href',
    'target',
    'download',
    'ping',
    'rel',
    'hreflang',
    'type',
    'accesskey'
  ],
  table: ['border', 'align'],
  caption: ['align'],
  colgroup: ['span', 'align'],
  col: ['span', 'align'],
  tbody: ['align'],
  thead: ['align'],
  tfoot: ['align'],
  tr: ['align'],
  td: ['colspan', 'rowspan', 'headers', 'abbr', 'align', 'axis', 'bgcolor'],
  th: [
    'colspan',
    'rowspan',
    'headers',
    'scope',
    'sorted',
    'abbr',
    'align',
    'axis',
    'bgcolor'
  ],
  form: [
    'accept-charset',
    'action',
    'autocomplete',
    'enctype',
    'method',
    'name',
    'novalidate',
    'target',
    'accept',
    'autocapitalize'
  ],
  label: ['form', 'for'],
  input: [
    'accept',
    'alt',
    'autocomplete',
    'autofocus',
    'checked',
    'dirname',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'height',
    'inputmode',
    'list',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size',
    'src',
    'step',
    'type',
    'value',
    'width'
  ],
  button: [
    'autofocus',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'type',
    'value',
    'autocomplete'
  ],
  select: [
    'autocomplete',
    'autofocus',
    'disabled',
    'form',
    'multiple',
    'name',
    'required',
    'size'
  ],
  datalist: [],
  optgroup: ['disabled', 'label'],
  option: ['disabled', 'label', 'selected', 'value'],
  textarea: [
    'autocomplete',
    'autofocus',
    'cols',
    'dirname',
    'disabled',
    'form',
    'inputmode',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'wrap',
    'autocapitalize',
    'spellcheck'
  ],
  output: ['for', 'form', 'name'],
  progress: ['value', 'max'],
  meter: ['value', 'min', 'max', 'low', 'high', 'optimum', 'form'],
  fieldset: ['disabled', 'form', 'name'],
  legend: [],
  details: ['open'],
  summary: [],
  dialog: ['open'],
  script: [
    'src',
    'type',
    'charset',
    'async',
    'defer',
    'crossorigin',
    'nonce',
    'integrity',
    'nomodule',
    'referrerpolicy',
    'text'
  ],
  noscript: [],
  template: [],
  canvas: ['width', 'height', 'moz-opaque']
} as const
