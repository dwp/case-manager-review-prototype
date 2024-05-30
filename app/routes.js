//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//COMMUNICATION RECORD V.1
// What direction of contact are you adding?
router.post('/comms-record/start-record', function(request, response) {
    var claimingSelf = request.session.data['contact-direction']
    if (claimingSelf == 'inbound'){
        response.redirect('/comms-record/')
    } else if (claimingSelf == "outbound") {
        response.redirect('/comms-record/outbound/contact-reasons-1')
    }
})

// Why did we contact them?
router.post('/comms-record/outbound/contact-reasons-1', function(request, response) {
    var claimingSelf = request.session.data['who']
    if (claimingSelf == 'post'){
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (claimingSelf == "change-of-circs") {
        response.redirect('/comms-record/outbound/inbound/contact-sub-reasons')
    }
})

// Why did we contact them?
router.post('/comms-record/outbound/contact-sub-reasons', function(request, response) {
        response.redirect('/comms-record/security-questions')
})

// Security questions
router.post('/comms-record/security-questions', function(request, response) {
    response.redirect('/comms-record/addition-complete')
})