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

//FIND SOMEONE V.1

// What direction of contact are you adding?
router.post('/find-someone/v1/found-records-v1', function(request, response) {
    var rightPerson = request.session.data['correct-claimant']
    if (rightPerson == 'yes'){
        response.redirect('/case-manager-review/record-details-iteration-4')
    } else if (rightPerson == "no") {
        response.redirect('/find-someone/v1/search-claimant-v1')
    }
})

//FIND SOMEONE V.2

// What direction of contact are you adding?
router.post('/find-someone/v2/found-records-v2', function(request, response) {
    var rightPerson = request.session.data['correct-claimant']
    if (rightPerson == 'yes'){
        response.redirect('/case-manager-review/record-details-iteration-4')
    } else if (rightPerson == "no") {
        response.redirect('/find-someone/v2/search-claimant-v2')
    }
})


//Upload note V.1- 250 characters

router.post('/event-history/v6-250-characters/add-a-note',function(request, response) {
    var notes = req.session.data['notes']
    if (notes == 'notes'){
    response.redirect('/event-history/v6-250-characters/index')
    } 
})


//-------------------------------------------------------------------

// event types
router.post('/event-type',function(request, response) {
    var event = request.session.data['event']
    if (event == "need-to-move"){
        response.redirect("/event-history/v5-quick-reference/identified-need/add-a-note")
    } else if (event == "withdraw") {
        response.redirect("/event-history/v5-quick-reference/withdraw/add-a-note")
    } else if (event == "disallow") {
        response.redirect("/event-history/v5-quick-reference/disallow/add-a-note")
    } else if (event == "moved") {
        response.redirect("/event-history/v5-quick-reference/completed-move/add-a-note")
    } else if (event == "other-event") {
        response.redirect("/event-history/v5-quick-reference/other-event/add-a-note")
    }
    })

    // stop payments in PIP Service
router.post('/event-history/in-payment/add-an-event-pp',function(request, response) {
    var addEvent = request.session.data['add-an-event-pp']
    if (addEvent == "need-to-move"){
        response.redirect("/event-history/in-payment/identified-need/add-a-note")
    } else if (addEvent == "pause-payment") {
        response.redirect("/event-history/in-payment/stop-payment-in-pip-service/are-you-sure")
    } else if (addEvent == "moved") {
        response.redirect("/event-history/in-payment/completed-move/add-a-note")
    } 
    })

        // Are you sure stop payments in PIP Service
router.post('/event-history/in-payment/stop-payment-in-pip-service/are-you-sure',function(request, response) {
    var stopPayment = request.session.data['areYouSureStop']
    if (stopPayment == "yes"){
        response.redirect("/event-history/in-payment/stop-payment-in-pip-service/add-a-note")
    } else if (stopPayment == "no") {
        response.redirect("/event-history/in-payment/identified-need/index-need-to-move")
    }
    })

//-------------------------------------------------------------------

// CASE EJECT

// Add any event
router.post('/case-eject/add-event',function(request, response) {
    var addAny = request.session.data['add-any-event']
    if (addAny == "case-eject"){
        response.redirect("/case-eject/reason")
    } else if (addAny == "completed-case-eject") {
        response.redirect("/event-history/v5-quick-reference/completed-move/add-a-note")
    } else if (addAny == "extend-hig") {
        response.redirect("/event-history/v5-quick-reference/completed-move/add-a-note")
    } else if (addAny == "other-event") {
        response.redirect("/event-history/v5-quick-reference/other-event/add-a-note")
    }
    })

    // Add any event
router.post('/case-eject/reason',function(request, response) {
    var addAny = request.session.data['reason']
    if (addAny == "change-circs"){
        response.redirect("/case-eject/add-note")
    } else if (addAny == "telephony-idv") {
        response.redirect("/case-eject/add-note")
    } else if (addAny == "as-identified") {
        response.redirect("/case-eject/add-note")
    } else if (addAny == "pre-ref-issues") {
        response.redirect("/case-eject/add-note")
    } else if (addAny == "pre-dec-issues") {
        response.redirect("/case-eject/add-note")
    } else if (addAny == "mand-recon") {
        response.redirect("/case-eject/add-note")
    } else if (addAny == "ap-outcome") {
        response.redirect("/case-eject/add-note")
    }
    })

//-------------------------------------------------------------------
    // QPPT
    router.post('/qppt/dl-3m9m-check',function(request, response) {
    var DlQppt = request.session.data['qppt-dl-3m-check']
    var DlPt = request.session.data['qppt-dl-9m-check']
    if (DlQppt == 'Yes' && DlPt == 'Yes') {
        response.redirect('/qppt/met')
      } else if (DlQppt == 'EffectiveDate' || 'NoRestrictions' || DlPt == 'EndBefore9') {
        response.redirect('/qppt/no-decision')
      }
})

//-------------------------------------------------------------------
//EDIT A CLAIM

//Select home address
router.post('/edit-claim/version-3-button-above/change-select-address',function(request, response) {
        response.redirect("/edit-claim/version-3-button-above/confirm-change-address")
    })

//confirm change address
router.post('/edit-claim/version-3-button-above/confirm-change-address',function(request, response) {
    var writeToHome = request.session.data['write-to-home-address']
    if (writeToHome == "yes"){
        response.redirect("/edit-claim/version-3-button-above/record-details-link-updated-address")
     } else if (writeToHome == "no") {
            response.redirect("/edit-claim/version-3-button-above/change-corr-address")
        } 
    })