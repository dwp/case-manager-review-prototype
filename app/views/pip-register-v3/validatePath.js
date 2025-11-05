const validatePath = (res, redirectPath) => {
  const basePath = getBasePath(redirectPath);

  if (allowedPaths.includes(basePath)) {
    return res.redirect(redirectPath);
  } else {
    const error = new Error('Client Error - Path not found on allowed path list');
    error.clientError = 404;
    throw error;
  }
};

const getBasePath = (redirectPath) => {
  if (redirectPath.indexOf('?') > -1) {
    return redirectPath.split(path.sep).pop().split('?')[0];
  }
  console.log("the redirect path ",redirectPath.split(path.sep).pop())
  return redirectPath.split(path.sep).pop()
};

export default validatePath;