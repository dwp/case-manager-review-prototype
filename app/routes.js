//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//




const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
//Import from routes folder
const e2eRoutes = require('./routes/e2eRoutes');

require(`./views/${'pip-register-v4'}/_e2eRoutes-v4`)('pip-register-v5', 'pip', router)

require(`./views/${'pip-register-v4'}/_e2eRoutes-v4`)('pip-register-v4', 'pip', router)
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
