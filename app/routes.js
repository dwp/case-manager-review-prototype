//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const express = require('express');
const app = express();



const originalRedirect = express.response.redirect;

express.response.redirect = function patchedRedirect(url) {
  try {
    if (typeof url !== 'string') {
      return originalRedirect.call(this, '/');
    }

    // Block protocol-based or protocol-relative redirects
    if (url.includes('://') || url.startsWith('//')) {
      console.warn('Blocked unsafe redirect:', url);
      return originalRedirect.call(this, '/');
    }

    // Ensure it starts with a single forward slash (internal only)
    if (!url.startsWith('/')) {
      console.warn('Blocked non-internal redirect:', url);
      return originalRedirect.call(this, '/');
    }

    // Normalise slashes and remove dot-segments (optional)
    const normalised = '/' + url.replace(/^\/+/, '').replace(/\/{2,}/g, '/');

    return originalRedirect.call(this, normalised);
  } catch (err) {
    console.error('Redirect sanitisation error:', err);
    return originalRedirect.call(this, '/');
  }
};


const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
//Import from routes folder
const e2eRoutes = require('./routes/e2eRoutes');


require(`./views/${'pip-register-v3'}/_e2eRoutes-v3`)('pip-register-v3', 'pip', router)
require(`./views/${'pip-register-v2'}/_e2eRoutes-v2`)('pip-register-v2', 'pip', router)
module.exports = router;

//Use routes
router.use('/', e2eRoutes);

//Scenario answer
router.post('/regScen', function (request, response) {
    //Store response
    var regScena = request.session.data['regScena'];
    if (regScena === "citizen"){
        response.redirect("pip-register/welcome-screen")
    } else if (regScena === "agent"){
      response.redirect("pip-register/signposting-eligibility/service-start-page")
  }
});

import path from 'path';

export const allowedPaths = [
  'scotland',
  'signposting-eligibility/new-application'
];

export const validatePath = (res, redirectPath, hasApplicationId = true) => {
  const basePath = getBasePath(redirectPath, hasApplicationId);

  if (allowedPaths.includes(basePath)) {
    return res.redirect(redirectPath);
  } else {
    const error = new Error('Client Error - Path not found on allowed path list');
    error.clientError = 404;
    throw error;
  }
};

const getBasePath = (redirectPath, hasApplicationId) => {
  if (redirectPath.indexOf('?') > -1) {
    return redirectPath.split(path.sep).pop().split('?')[0];
  }
  if (hasApplicationId) {
    return path.dirname(redirectPath).split(path.sep).pop();
  } else {
    return redirectPath.split(path.sep).pop();
  }
};
 