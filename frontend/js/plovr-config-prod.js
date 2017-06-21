{
  // The id is used as a query parameter in the src of the <script> tag.
  "id": "demo",
  "paths": ".",
  "inputs": "src/main.js",
  "experimental-compiler-options": {
    "angularPass": true
  },
  "closure-library": "closure-library/closure/goog/",
  "externs": [
    "closure-compiler/contrib/externs/angular-1.3.js",
    "closure-compiler/contrib/externs/angular-material.js"
  ]
}
