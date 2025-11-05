const path = require('path')
  const allowedPaths = ['5-2-today','what-colour-paper-do-you-need','inRoom','existing-claims','what-is-ni-number','dla-payments','what-is-ni-number-2','what-is-ni-number-3','welcome-screen','failed-security','security-check','what-is-your-dob','what-is-your-previous-surname','contact-details','select-your-address','confirm-correspondence','start-info','do-you-want-to-receive-text-updates','contact-details-summary','do-you-want-to-receive-text-updates','what-other-help-when-we-contact','how-should-we-contact-you','what-is-your-email','start-info']


function validatePath(res, redirectPath) {

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



  function getBasePath (redirectPath) {
    console.log("INSIDE GETBASEPATH");
    if (redirectPath.indexOf('?') > -1) {
      console.log("DOES HAVE QUESTION MARK");
      return redirectPath.split(path.sep).pop().split('?')[0];
    }
    console.log("ORIGINAL REDIRECT PATH ",redirectPath)
    return redirectPath.split(path.sep).pop()
  };


module.exports = validatePath;