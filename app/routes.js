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
        response.redirect('/comms-record/inbound/contact-reasons-1')
    } else if (claimingSelf == "outbound") {
        response.redirect('/comms-record/outbound/contact-reasons-1')
    }
})

//OUTBOUND
// Why did we contact them?
router.post('/comms-record/outbound/contact-reasons-1', function(request, response) {
    var what = request.session.data['what']
    if (what == 'post'){
        response.redirect('/comms-record/outbound/post-sub-reason')
    } else if (what == "change-of-circs") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (what == "enquiry") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (what == "evidence") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (what == "update") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (what == "new-claim") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    } else if (what == "feedback") {
        response.redirect('/comms-record/outbound/contact-sub-reasons')
    }
})

// What type of post did we contact them about?
router.post('/comms-record/outbound/post-sub-reason', function(request, response) {
    var postType = request.session.data['post-type']
    if (postType == 'decision-letter'){
        response.redirect('/comms-record/security-questions')
    } else if (postType == "return-docs") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "acknowledgement") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "reconsideration-form") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "complaint-form") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "reclassification-ap") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "rep-letter") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "med-evidence-nr") {
        response.redirect('/comms-record/security-questions')
    } else if (postType == "other-information") {
        response.redirect('/comms-record/outbound/other-information')
    }
})

// Security questions
router.post('/comms-record/security-questions', function(request, response) {
    response.redirect('/comms-record/addition-complete')
})


//INBOUND
// Why did we contact them?
router.post('/comms-record/inbound/contact-reasons-1', function(request, response) {
    var whyTwo = request.session.data['who']
    if (whyTwo == 'post'){
        response.redirect('/comms-record/inbound/contact-sub-reasons')
    } else if (whyTwo == "change-of-circs") {
        response.redirect('/comms-record/inbound/contact-sub-reasons')
    }
})

 // Why did we contact them?
router.post('/comms-record/inbound/contact-sub-reasons', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// Security questions
router.post('/comms-record/security-questions', function(request, response) {
    response.redirect('/comms-record/addition-complete')
})