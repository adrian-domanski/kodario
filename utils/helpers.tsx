let fs;
let path;

if (!process.browser) {
  fs = require("fs");
  path = require("path");
}

export const getFileNames = (
  source: string,
  options?: { withExt?: boolean }
) => {
  if (!process.browser) {
    if (options && options.withExt)
      return fs.readdirSync(source).map((file) => file);
    return fs.readdirSync(source).map((file) => path.parse(file).name);
  } else {
    throw new Error("Can't run on client-side");
  }
};

export const urlNoProtocol = (url: string) => {
  let newUrl = url.replace(/(^\w+:|^)\/\//, "");
  return newUrl;
};
