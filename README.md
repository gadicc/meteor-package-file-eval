# meteor-package-file-eval

In 1.3, files in `packages/package/*` are being processed even
if they aren't `api.add()'ed` or `imported`.  They're also
added to the watch list.  Also affects api.addAssets().

See [packages/package/unused-file.js](packages/package/unused-file.js)
(which isn't mentioned anywhere in the
[package.js](packages/package/package.js)) for some things the file
the contain and how it affects the build process.
