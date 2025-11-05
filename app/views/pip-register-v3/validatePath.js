const path = require('path')

const allowedPaths = ['5-2-today']

const validatePath = (res, redirectPath) => {
  console.log("INSIDE VALIDATEPATH");
  JSON.stringify(allowedPaths)
  const basePath = getBasePath(redirectPath);
  console.log("THE BASE PATH ",basePath)

  if (allowedPaths.includes(basePath)) {
    console.log("IN ALLOWED PATHS");
    return res.redirect(redirectPath);
  } else {
    console.log("NOT IN ALLOWED PATHS");
    const error = new Error('Client Error - Path not found on allowed path list');
    error.clientError = 404;
    throw error;
  }
};

const getBasePath = (redirectPath) => {
  console.log("INSIDE GETBASEPATH");
  if (redirectPath.indexOf('?') > -1) {
    console.log("DOES HAVE QUESTION MARK");
    return redirectPath.split(path.sep).pop().split('?')[0];
  }
  console.log("ORIGINAL REDIRECT PATH ",redirectPath)
  return redirectPath.split(path.sep).pop()
};

export default validatePath;
 