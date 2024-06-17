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
        response.redirect('/comms-record/outbound/change-circs-sub-reason')
    } else if (what == "enquiry") {
        response.redirect('/comms-record/outbound/enquiry-sub-reason')
    } else if (what == "evidence") {
        response.redirect('/comms-record/security-questions')
    } else if (what == "update") {
        response.redirect('/comms-record/outbound/update-sub-reason')
    } else if (what == "new-claim") {
        response.redirect('/comms-record/security-questions')
    } else if (what == "feedback") {
        response.redirect('/comms-record/outbound/feedback-sub-reason')
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

// What type of change of circs did we contact them about?
router.post('/comms-record/outbound/change-circs-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of enquiry did we contact them about?
router.post('/comms-record/outbound/enquiry-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of enquiry did we contact them about?
router.post('/comms-record/outbound/update-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of feedback did we contact them about?
router.post('/comms-record/outbound/feedback-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// Security questions
router.post('/comms-record/security-questions', function(request, response) {
    response.redirect('/comms-record/addition-complete')
})

//------------------------------------------------------------------------------------------------------------------------
//INBOUND

// Why did they contact us?
router.post('/comms-record/inbound/contact-reasons-1', function(request, response) {
    var what = request.session.data['what-reason']
    if (what == 'post'){
        response.redirect('/comms-record/inbound/post-sub-reason')
    } else if (what == "change-of-circs") {
        response.redirect('/comms-record/inbound/change-circs-sub-reason')
    } else if (what == "enquiry") {
        response.redirect('/comms-record/inbound/enquiry-sub-reason')
    } else if (what == "evidence") {
        response.redirect('/comms-record/security-questions')
    } else if (what == "update") {
        response.redirect('/comms-record/inbound/update-sub-reason')
    } else if (what == "new-claim") {
        response.redirect('/comms-record/security-questions')
    } else if (what == "feedback") {
        response.redirect('/comms-record/inbound/feedback-sub-reason')
    }
})

// What type of post did we contact them about?
router.post('/comms-record/inbound/post-sub-reason', function(request, response) {
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
        response.redirect('/comms-record/inbound/other-information')
    }
})


// What type of change of circs did we contact them about?
router.post('/comms-record/inbound/change-circs-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of enquiry did we contact them about?
router.post('/comms-record/inbound/enquiry-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of enquiry did we contact them about?
router.post('/comms-record/inbound/update-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// What type of feedback did we contact them about?
router.post('/comms-record/inbound/feedback-sub-reason', function(request, response) {
    response.redirect('/comms-record/security-questions')
})

// Security questions
router.post('/comms-record/security-questions', function(request, response) {
    response.redirect('/comms-record/addition-complete')
})


// Add an event (to event history)
router.post('/event-history/add-an-event', function (req, res, next){
 const eventTypeGiven = req.session.data['eventType']

  if( eventTypeGiven ){
    // Remove the eventError that we added - to keep the return journey clean
    if(req.session.data['eventError']){
      delete req.session.data['eventError']
    }
    res.redirect('/event-history/add-a-note')
  } else {
    req.session.data['eventError'] = 'ERROR!'
    next()
  }
})

// Add an note (to an event)
router.post('/event-history/add-a-note', function (req, res, next){
  const furtherInfoGiven = req.session.data['furtherInfo']
 
   if( furtherInfoGiven ){
     if(req.session.data['noteError']){
       delete req.session.data['noteError']
     }
     res.redirect('/event-history/add-a-note/confirmation')
   } else {
     req.session.data['noteError'] = 'ERROR!'
     next()
   }
 })
 



// Logging session data  
  
router.use((req, res, next) => {    
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
 
next()  
})  