import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle `
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1552531449970'); /* IE9 */
  src: url('./iconfont.eot?t=1552531449970#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATIAAsAAAAACTwAAAR8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqFXIUHATYCJAMUCwwABCAFhG0HRRsQCCOSDk6N7B8H5RjPCkK5+zj4y8ImSY6MR1saZRT3HQ9fa+z93T3BLEIiwSWGLpZEQzFLUBIJeiQUPDPEm/49K02W6RrZExZmfSxeUqeT5uBiYZ+Eft3512iAixEbF4fTpm2w+ZblMuaksSYGGE2ggPY+7wIKtEAK0HJvkd0RpGVfJzBoTic2t3dOtApjXiAebq9PtSmdUkEOrbIGthbxylybntMtvPjvj19LYUVSZcZNB1dbF1Y/fJx1vc7KbKQbzgJuFxkdCvEI2h7kMNjJBpXvFasY1ErShw8/+rjvUUUbUgyaf3gkRchEzZANE+xqqPCBzSTxIQ+ShzUCy8dy14uutgxiDO+INQZuniwd+F2ayaZsPNysrFyZ9oizr609Su41zX3yhPPoEevxY3adKc2Fn6ROk00mruXRoy2x+8kr1iOKfCzhFiUcnMusO+uVkzwhSBMXfEoWo3v3/GF7lGPDQhVMvqDTD+334AlPMusgaDDQc2jtHYaey9WjtfHsQ9OQboZZd5HB4Na6dbpzu6Zc2R3dLqx2Lou7orZT787dWbe4Q9cuSmoBKU/wE116t8SkXtLOUOtcEzp0UgVGJHG4U+Lb0zomXCe8OmdnJ90mPTtmVjnAxzh2uOraz/7e6UtYIQMX77UibYhrgQfgmB0uLTAk/5j33WKzz/hmZGw3bDBjxvZshjfBlEd/9W4oOXQMUHQkJ1MtmxteH8dfWFGXcRA5lbenSrcrbSWjHnneF24IAGY+PG8wM7d424aRxJ1IT9q6zXF9yFhqJ012xAwhjUkKTWQTIx8a/GszQufwrPuL0u8Du/+itCfyxCI2nCqSJZrMfidq6cvRQQzzlEByMUdmu4qZlxz7ZjWXvunp+ttr/sf5ftBVW6tMwiuoIiaD4LCJ1PbKoIAQvT+f58/JtKyxSb96NSA0JN2mh5q7PbvF4eEJAotu2/Qvn9gOnFu2H7z/nGajD3n/6W3391a/8O8r0j5P7XJETZpttW14N4u4uXu4OGKxVeeAlxvuZRn2uuyF3wu60s6yG9oI+ov5NJLgU/eYwYiR+j+fQ6Dwm3wAgX+pz/iPfWFaYx//1YppBsHb3hc/sbAb77+Qa8z/gaoKRP/PDOaFhr4qcr3Nk8OVG83N5iptg/htXJOeDaOYaZxOaM3EkDRmIWvNIwu2g8qQZai1VmDQoqzdQ6ZQsijWEAsqEIRxeyEZlXUWEA5uI82wT8Gcm7dgwSEQQHHC+UimBSFD0yggpIEEE23CZGJSjVtGGg0ySwGxTimkkkKfwgGUVubBQgKDs5EsoAbUECu064lQmsYxnCJVWCa6DSiVJKahSDkQ04FSmtbEBgXh0IMCxaQKQqWhAEI0QAIjsglGRoykhrutaWju9aUAwjpKQlRFQ4WVA6BoyQbHhAgU3ACZJVM3ariU0VrrEULRaDidhaOQVDCZ2AIozSAJo4EnyQFitEDSDn6NWEGkGd5UFji9QnWP+2CQcXoVKXKUqKJm8QSElFhqtfxJI1MffQGcIoRFMggC') format('woff2'),
  url('./iconfont.woff?t=1552531449970') format('woff'),
  url('./iconfont.ttf?t=1552531449970') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1552531449970#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconsearch:before {
  content: "\e623";
}

.icon-spinner:before {
  content: "\e600";
}

.iconAa:before {
  content: "\e636";
}

.iconbi:before {
  content: "\e617";
}
`
