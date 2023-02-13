# GPX-to-KML Converter Website

This is the source code for a simple, static website, which uses _JavaScript_
and [_WebAssembly_](https://webassembly.org/) to convert
[_GPX_](https://www.topografix.com/gpx.asp) files to
[_KML_](https://developers.google.com/kml) in the browser.

## Building

```
$ npm install
$ npm run build
```

The files for the static website are now contained in the `dist` folder.

## Usage

The generated files can be statically served by a simple web server.

Even for local usage, you **must** use a web server for _WASM_ to work.
You might want to use the integrated _Python_ HTTP server.

```
$ python -m http.server --bind ::1 8000
```

## Libraries

This package uses the following libraries:

- [gpx_kml_convert](https://github.com/vilaureu/gpx_kml_convert) under the AGPL-3.0-or-later license
- [bootstrap](https://getbootstrap.com/) under the MIT license
- [css-loader](https://github.com/webpack-contrib/css-loader) under the MIT license
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) under the MIT license
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) under the MIT license
- [style-loader](https://github.com/webpack-contrib/style-loader) under the MIT license
- [ts-loader](https://github.com/TypeStrong/ts-loader) under the MIT license
- [typescript](https://www.typescriptlang.org/) under the Apache-2.0 license
- [webpack](https://github.com/webpack/webpack) under the MIT license
- [webpack-cli](https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli) under the MIT license
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server#readme) under the MIT license
- [webpack-merge](https://github.com/survivejs/webpack-merge) under the MIT license

## License

Copyright 2021-2023 Viktor Reusch

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <http://www.gnu.org/licenses/>.
