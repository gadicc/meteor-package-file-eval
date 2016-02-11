/*
 * All betas:
 *
 * While computing assigned variables:
 *  /packages/package/unused-file.js: Expecting Unicode escape sequence \uXXXX
 *  (1:21)
 */

// \n


/*
 * While computing assigned variables:
 * /packages/package/unused-file.js: Unexpected token (17:4)
 */
// var return;


/*
 * Since beta.3, it breaks the built package file.
 * (Naming the package in this repo 'package' is a bit confusing, I admit.)
 *
 * TypeError: Cannot read property 'meteor' of undefined
 *   at .../.meteor/local/build/programs/server/packages/package.js:4:22
 */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  console.log(1);
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['package'] = {}, {
});
