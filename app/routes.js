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

//Version answer
router.post('/version-answer', function (req, res) {
    //Store response
    var version = req.session.data['version'];

    //Redirect
    res.redirect('/case-manager-review/scenario');
});

//Pass version information to scenario screen
router.get('/case-manager-review/scenario', function(req, res) {
    //retrieve form data
    var version = req.session.data['version'];

    //Display new screen and make form data available to use
    res.render('/case-manager-review/scenario', {
        version: version
    });
} );

//Select eject scenario
router.post('/scenario-answer', function (req, res) {
    //Store response
    var scenario = req.session.data['scenario'];
    if (scenario === 'pre-award-disallow'){
        res.redirect('/case-eject/assurance-tasks-ur');
    }
    else if (scenario === 'pre-award-disallow-v2'){
        res.redirect('/case-eject/preparation-tasklist-separate');
    }  else if (scenario === 'pre-award-disallow-v2-b'){
        res.redirect('/case-eject/preparation-tasklist-separate');
    }
    else {res.redirect('/case-eject/event-history');}
});


//Pass scenario information into add event screen
router.get('/case-eject/add-event', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];

    //Display new screen and make form data available to use
    res.render('case-eject/add-event', {
        scenario: scenario
    });
} );

//Pass scenario information into assurance outcome screen
router.get('/case-eject/assurance-outcome-ur', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];

    //Display new screen and make form data available to use
    res.render('case-eject/assurance-outcome-ur', {
        scenario: scenario
    });
} );

//Process age criteria
router.post('/age-criteria-answer', function (req, res) {
    //Store response
    var AgeCriteria = req.session.data['AgeCriteria'];
    if (AgeCriteria === 'Yes'){
        res.redirect('/case-eject/next-question');
    }
    else if (AgeCriteria === 'No, applicant is over State Pension age'){
        res.redirect('/case-eject/pip');
    }
    else if (AgeCriteria === 'No, applicant is under 16 years old'){
        res.redirect('/case-eject/next-question');
    }
    else if (AgeCriteria === 'I need to come back to this later'){
        res.redirect('/case-eject/preparation-tasklist-separate');
    }
});

//PIP in previous 12 months answer
router.post('/pip-answer', function (req, res) {
    //Store response
    var pip = req.session.data['pip'];
    if (pip === 'Yes'){
        res.redirect('/case-eject/next-question');
    }
    else if (pip === 'No'){
        res.redirect('/case-eject/next-question');
    }
    else if (pip === 'I need to come back to this later'){
        res.redirect('/case-eject/preparation-tasklist-separate');
    }
});

//Make previous responses available to next question
router.get('/case-eject/next-question', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    var pip = req.session.data['pip'];
    var AgeCriteria = req.session.data['AgeCriteria'];
    
    //Display new screen and make form data available to use
    res.render('case-eject/next-question', {
        scenario: scenario,
        pip: pip,
        AgeCriteria: AgeCriteria
    });
} );

//Make previous responses available to task list single issue
router.get('/case-eject/preparation-tasklist-separate-issue', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    var pip = req.session.data['pip'];
    var AgeCriteria = req.session.data['AgeCriteria'];
    
    //Display new screen and make form data available to use
    res.render('case-eject/preparation-tasklist-separate-issue', {
        scenario: scenario,
        pip: pip,
        AgeCriteria: AgeCriteria
    });
} );

//Make previous responses available to task list multiple issue
router.get('/case-eject/preparation-tasklist-separate-multiple-issues', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    var pip = req.session.data['pip'];
    var AgeCriteria = req.session.data['AgeCriteria'];
    
    //Display new screen and make form data available to use
    res.render('case-eject/preparation-tasklist-separate-multiple-issues', {
        scenario: scenario,
        pip: pip,
        AgeCriteria: AgeCriteria
    });
} );


//Make previous responses available to reason screen
router.get('/case-eject/add-event', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    var errors = req.session.data['errors'];
    //Display new screen and make form data available to use
    res.render('case-eject/add-event', {
        scenario: scenario,
        errors: errors
    });
} );

//Redirect based on event and scenario
router.post('/add-event-answer', function (req, res) {
    //Store responses
    var addAnyEvent = req.session.data['add-any-event'];
    //Fetch previous session data
    var scenario = req.session.data['scenario'];

    if (addAnyEvent === 'case-eject' && scenario === 'pre-award'){
        res.redirect('/case-eject/reason');
    } else if (addAnyEvent === 'case-eject') {
        res.redirect('/case-eject/reason');
    } else if (addAnyEvent === 'case-eject' && scenario === 'pre-award-reason-added'){
        res.redirect('/case-eject/reason');
    } else if (addAnyEvent === 'disallow' && scenario === 'pre-award'){
        res.redirect('/case-eject/add-note');
    } 
    else if (addAnyEvent === 'withdraw' && scenario === 'pre-award'){
        res.redirect('/case-eject/add-note');
    } else if (addAnyEvent === 'disallow' && scenario === 'pre-award-reason-added'){
        res.redirect('/case-eject/add-note');
    } 
    else if (addAnyEvent === 'withdraw' && scenario === 'pre-award-reason-added'){
        res.redirect('/case-eject/add-note');
    } 
    else if (addAnyEvent === 'complete' && scenario === 'pre-award-reason-added'){
        res.redirect('/case-eject/reason');
    } 
    else if (addAnyEvent === 'case-eject' && scenario === 'post-award'){
        res.redirect('/case-eject/confirmation');
    } 
    else if (addAnyEvent === 'case-eject' && scenario === 'post-award-reason-added'){
        res.redirect('/case-eject/confirmation');
    } 
    else if (addAnyEvent === 'complete' && scenario === 'post-award-reason-added'){
        res.redirect('/case-eject/add-note');
    } else if (addAnyEvent === 'other-event' || addAnyEvent === 'verified-identity' || addAnyEvent === 'extend-hig') {
        res.redirect('/case-eject/add-note');
    } else if (addAnyEvent === 'disallow') {
        res.redirect('/case-eject/disallow-confirmation');
    } 
    else if (!addAnyEvent){
        res.redirect("/case-eject/reason-error");
    }
});


    // Confirm proceed through identified moved to PIPCS
    router.post('/confirmation-answer',function(request, response) {
        var confirmation = request.session.data['confirmation']
        if (confirmation == "Yes"){
            response.redirect("/case-eject/reason")
        } else if (confirmation == "No") {
            response.redirect("/case-eject/event-history")
        } else if (!confirmation){
            response.redirect("/case-eject/confirmation-error");
        }
        });

//Make previous responses available to reason screen
router.get('/case-eject/reason', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    var errors = req.session.data['errors'];
    //Display new screen and make form data available to use
    res.render('case-eject/reason', {
        scenario: scenario,
        errors: errors
    });
} );

//Make previous responses available to reason screen
router.get('/case-eject/reason-extra', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];

    //Display new screen and make form data available to use
    res.render('case-eject/reason-extra', {
        scenario: scenario
    });
} );

    // Select a reason for identified move to PIPCS
    router.post('/reason-answer',function(request, response) {
        var addAny = request.session.data['reason']
        if (addAny == "Additional support needed"){
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Alternative format needed") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Appointee added") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Change of personal details") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Mandatory reconsideration") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Claimant did not receive payment") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Applicant gets foreign benefits") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "New evidence sent after decision") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "New Motability agreement") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Request for split payment") {
            response.redirect("/case-eject/add-note");
        }else if (addAny == "Death of applicant or claimant") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Details do not match Searchlight record") {
            response.redirect("/case-eject/searchlight");
        } else if (addAny == "Evidence of fraud") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Applicant gets other benefits") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Immigration status") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Keep customer interactions safe (KCIS) marker") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Health assessment could not be completed") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Residence and presence criteria") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Special rules for end of life (SREL)") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Stays in prison, hospital or other accommodation") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Withdrawn claim") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Working abroad") {
            response.redirect("/case-eject/add-note");
        } else if (addAny == "Other") {
            response.redirect("/case-eject/add-note");
        } else if (!addAny){
            response.redirect("/case-eject/reason-error");
        }
        });

 // Handle change of personal details
 router.post('/change-answer',function(request, response) {
    var change = request.session.data['change']
    if (change == "Address"){
        response.redirect("/case-eject/add-note");
    } else if (change == "Name") {
        response.redirect("/case-eject/add-note");
    } else if (change == "Payment details") {
        response.redirect("/case-eject/add-note");
    } else if (change == "Telephone number") {
        response.redirect("/case-eject/add-note");
    } else if (!change){
        response.redirect("/case-eject/change-error");
    }
    })

 // Handle 'Which details do not match the Searchlight record'
 router.post('/searchlight-answer',function(request, response) {
    var searchlight = request.session.data['searchlight']
    if (searchlight == "Address"){
        response.redirect("/case-eject/add-note");
    } else if (searchlight == "Date of birth") {
        response.redirect("/case-eject/add-note");
    } else if (searchlight == "Name") {
        response.redirect("/case-eject/add-note");
    } else if (searchlight == "National Insurance number") {
        response.redirect("/case-eject/add-note");
    } else if (searchlight == "Nationality") {
        response.redirect("/case-eject/add-note");
    } else if (!searchlight){
        response.redirect("/case-eject/searchlight-error");
    }
    })

//Handle searchlight content
router.post('/searchlight-context-answer', function (req, res) {
    //Store response
    var searchlightContext = req.session.data['searchlightContext'];

    //Redirect
    res.redirect('/case-eject/add-note');
});

 // Handle 'Benefits'
 router.post('/benefits-answer',function(request, response) {
    var benefits = request.session.data['benefits']
    if (benefits == "Armed Forces Independence Payment (AFIP)"){
        response.redirect("/case-eject/add-note");
    } else if (benefits == "Child Disability Payment (CDP) or Adult Disability Payment (ADP)") {
        response.redirect("/case-eject/add-note");
    } else if (benefits == "Constant Attendance Allowance (CAA)") {
        response.redirect("/case-eject/add-note");
    } else if (benefits == "Disability Living Allowance (DLA)") {
        response.redirect("/case-eject/multiple");
    } else if (benefits == "Foreign benefits") {
        response.redirect("/case-eject/add-note");
    } else if (benefits == "War Pensioners' Mobility Supplement (WPMS)") {
        response.redirect("/case-eject/add-note");
    } else if (!benefits){
        response.redirect("/case-eject/benefits-error");
    }
    })

 // Handle 'Health'
 router.post('/health-answer',function(request, response) {
    var health = request.session.data['health']
    if (health == "Did not attend health assessment"){
        response.redirect("/case-eject/add-note");
    } else if (health == "Did not follow health assessment requirements") {
        response.redirect("/case-eject/add-note");
    } else if (!health){
        response.redirect("/case-eject/health-error");
    }
    })

 // Handle 'Prison'
 router.post('/prison-answer',function(request, response) {
    var prison = request.session.data['prison']
    if (prison == "Care home"){
        response.redirect("/case-eject/add-note");
    } else if (prison == "Hospital or similar institutions") {
        response.redirect("/case-eject/add-note");
    } else if (prison == "Nursing home") {
        response.redirect("/case-eject/add-note");
    } else if (prison == "Prison or legal custody") {
        response.redirect("/case-eject/multiple");
    } else if (prison == "Residential school or college") {
        response.redirect("/case-eject/add-note");
    } else if (!health){
        response.redirect("/case-eject/prison-error");
    }
    })

     // Handle 'Disallow'
 router.post('/disallow-answer',function(request, response) {
    var disallow = request.session.data['disallow']
    if (disallow == "Applicant is over State Pension age"){
        response.redirect("/case-eject/disallow-confirmation");
    } else if (disallow == "Applicant is under 16 years old") {
        response.redirect("/case-eject/disallow-confirmation");
    } 
    });

//Make previous responses available to disallow confirmation error screen
router.get('/case-eject/disallow-confirmation', function(req, res) {
    //retrieve form data
    var scenario = req.session.data['scenario'];
    //Display new screen and make form data available to use
    res.render('/case-eject/disallow-confirmation', {
        scenario: scenario,
    });
} );

//Handle //Handle disallow confirmation
router.post('/disallow-confirmation-answer', function (req, res) {
    //Store response
    var disallowConfirmation = req.session.data['disallow-confirmation'];
    //Redirect
    res.redirect('/case-eject/add-note');
});

    //Handle disallow confirmation
    router.post('/disallow-confirmation-answer2', function (req, res) {
        var disallowConfirmation2 = req.session.data['disallow-confirmation2'];
        if (disallowConfirmation2 == "Yes"){
            res.redirect("/case-eject/add-note");
        } else if (disallowConfirmation2 == "No") {
            res.redirect("/case-eject/disallow-confirmation-error-screen");
        } 
     });

//Make previous responses available to disallow confirmation error screen
router.get('/case-eject/disallow-confirmation-error-screen', function(req, res) {
    //retrieve form data
    var disallow = req.session.data['disallow'];
    var scenario = req.session.data['scenario'];
    //Display new screen and make form data available to use
    res.render('/case-eject/disallow-confirmation-error-screen', {
        disallow: disallow,
        scenario: scenario
    });
} );



// Add move to PIPCS notes

router.get('/case-eject/add-note', function (req, res) {
    //Retrieve form data
    var addAny = req.session.data['reason'];
    var prison = req.session.data['prison'];
    var health = req.session.data['health'];
    var benefits = req.session.data['benefits'];
    var searchlight = req.session.data['searchlight'];
    var change = req.session.data['change'];
    var movedNotes = req.session.data['movedNotes'];
    var scenario = req.session.data['scenario'];

    //Display screen and make data available
    res.render('/case-eject/add-note', {
        addAny: addAny,
        health: health,
        benefits: benefits,
        prison: prison,
        searchlight: searchlight,
        change: change,
        movedNotes: movedNotes,
        scenario: scenario
    });
});

//Handle note screen
router.post('/note-answer', function(req, res){
    var movedNotes = req.session.data['movedNotes'];
    var scenario = req.session.data['scenario'];
     //Redirect
     //res.redirect('/case-eject/event-history-movepipcsadded');
     if (scenario === 'pre-award-disallow'){
        res.redirect('/case-eject/event-history-disallow-added');
    } else if (scenario === 'pre-award-disallow-v2'){
        res.redirect('/case-eject/disallow-end-journey');
    }
        else if (scenario === 'pre-award-disallow-v2-b'){
            res.redirect('/case-eject/disallow-end-journey');
        }    
    else {
        res.redirect('/case-eject/event-history-movepipcsadded');
    }
});



 // Handle 'Add another reason'
 router.post('/another-answer',function(request, response) {
    var another = request.session.data['another'];
    if (another == "Yes"){
        response.redirect("/case-eject/reason");
    } else if (another == "No") {
        response.redirect("/case-eject/event-history-movepipcsadded");
    } else if (!another){
        response.redirect("/case-eject/add-another-error");
    }
    });


//Make previous responses available to event history
router.get('/case-eject/event-history-movepipcsadded', function(req, res) {
    //retrieve form data
    var reason = req.session.data['reason'];
    var prison = req.session.data['prison'];
    var change = req.session.data['change'];
    var searchlight = req.session.data['searchlight'];
    var health = req.session.data['health'];
    var benefits = req.session.data['benefits'];

    //Display new screen and make form data available to use
    res.render('/case-eject/event-history-movepipcsadded', {
        reason: reason,
        prison: prison,
        change: change,
        searchlight: searchlight,
        health: health,
        benefits: benefits

    });
} );

//Make previous responses available to event history
router.get('/case-eject/event-history-disallow-added', function(req, res) {
    //retrieve form data
    var disallow = req.session.data['disallow'];
    //Display new screen and make form data available to use
    res.render('/case-eject/event-history-disallow-added', {
        disallow: disallow,
    });
} );

//-------------------SEARCHLIGHT

//Version answer
router.post('/searchlight-scenario', function (req, res) {
    //Store response
    var searchlightAnswer = req.session.data['searchlight-scenario'];
    //Redirect
    res.redirect('/searchlight/tasks');
});

//ADDRESS
router.post('/address-answer', function (req, res) {
    //Store response
    var address = req.session.data['Address'];
    if (address === 'Yes'){
        res.redirect('/searchlight/date-of-birth');
    } else if (address === 'No'){
        res.redirect('/searchlight/idv-warning');
    }
    else if (address === 'Yes - I have made changes to resolve this issue'){
        res.redirect('/searchlight/what-did-you-do');
    }   else if (address === 'No - I want to try to resolve this issue'){
        res.redirect('/searchlight/idv-warning');
    }  else if (address === 'No - I cannot resolve this issue'){
        res.redirect('/searchlight/tasks-2');
    } else if (address === 'I need to come back to this later'){
        res.redirect('/searchlight/tasks-2');
    }
});

//YES
router.post('/yes-answer', function (req, res) {
    //Store response
    var yes = req.session.data['Yes'];
    if (yes === 'Yes'){
        res.redirect('/searchlight/what-did-you-do');
    }
    else if (yes === 'No, they already matched'){
        res.redirect('/searchlight/date-of-birth');
    }
});

//ADDRESS 2
router.post('/address-2-answer', function (req, res) {
    //Store response
    var address = req.session.data['Address-2'];
    if (address === 'Yes'){
        res.redirect('/searchlight/what-do-you-want-do-2');
    }
    else if (address === 'No'){
        res.redirect('/searchlight/what-do-you-want-do-2');
    }  else if (address === 'I need to come back to this later'){
        res.redirect('/searchlight/tasks');
    }
});

//WHAT DO YOU WANT TO DO
router.post('/what-do-you-want-to-do-answer', function (req, res) {
    //Store response
    var WhatDoYouWantToDo = req.session.data['WhatDoYouWantToDo'];
    var scenario = req.session.data['searchlight-scenario'];
    if (WhatDoYouWantToDo === 'Try to resolve this task' && scenario === 'IDV not complete before mismatch identified'){
        res.redirect('/searchlight/did-you-verify-id');
    }
    else if (WhatDoYouWantToDo === 'Try to resolve this task' && scenario === 'IDV complete before mismatch identified'){
        res.redirect('/searchlight/what-did-you-do');
    }
    else if (WhatDoYouWantToDo === 'Nothing'){
        res.redirect('/searchlight/tasks-2');
    } 
    else if (WhatDoYouWantToDo === 'I need to come back to this later'){
        res.redirect('/searchlight/tasks-2');
    }
    else if (WhatDoYouWantToDo === 'No change required, details already matched'){
        res.redirect('/searchlight/tasks-2');
    }
});

//WHAT DO YOU WANT TO DO
//Make previous responses available to what do you want to do screen
router.get('/searchlight/what-do-you-want-do', function(req, res) {
    //retrieve form data
    var address = req.session.data['Address'];
    var address2 = req.session.data['Address-2'];
    var scenario = req.session.data['searchlight-scenario'];
    //Display new screen and make form data available to use
    res.render('/searchlight/what-do-you-want-do', {
        address: address,
        address2: address2,
        scenario: scenario
    });
} );

//WHAT DID YOU DO?
router.post('/what-did-you-do-answer', function (req, res) {
    //Store response
    var searchlightAnswer = req.session.data['searchlight-scenario'];
    if (searchlightAnswer === 'IDV complete before mismatch identified'){
        res.redirect('/searchlight/add-note');
    }
    else if (searchlightAnswer === 'IDV not complete before mismatch identified'){
        res.redirect('/searchlight/add-note');
    }
    else if (searchlightAnswer === 'IDV not complete before mismatch identified: user leaves IDV checkbox blank'){
        res.redirect('/searchlight/idv-blank');
    }
    else if (searchlightAnswer === 'IDV not complete before mismatch identified: user leaves all checkboxes blank'){
        res.redirect('/searchlight/idv-only');
    }
});

//DID YOU VERIFY?
router.post('/verify-answer', function (req, res) {
    //Store response
    var DidYouVerify = req.session.data['didYouVerify'];
    if (DidYouVerify=== 'Yes'){
        res.redirect('/searchlight/what-did-you-do');
    }
    else if (DidYouVerify === 'No'){
        res.redirect('/searchlight/idv-blank');
    }
});

//TASKS 1
//Make previous responses available to tasks screen
router.get('/searchlight/tasks', function(req, res) {
    //retrieve form data
    var WhatDoYouWantToDo = req.session.data['WhatDoYouWantToDo'];
    var address = req.session.data['Address'];
    //Display new screen and make form data available to use
    res.render('/searchlight/tasks', {
        WhatDoYouWantToDo: WhatDoYouWantToDo,
        address: address
    });
} );

//TASKS 2
//Make previous responses available to tasks screen
router.get('/searchlight/tasks-2', function(req, res) {
    //retrieve form data
    var WhatDoYouWantToDo = req.session.data['WhatDoYouWantToDo'];
    var address = req.session.data['Address'];
    var yes = req.session.data['Yes'];
    //Display new screen and make form data available to use
    res.render('/searchlight/tasks-2', {
        WhatDoYouWantToDo: WhatDoYouWantToDo,
        address: address,
        yes: yes
    });
} );

//TASKS 3
//Make previous responses available to tasks screen
router.get('/searchlight/tasks-3', function(req, res) {
    //retrieve form data
    var WhatDoYouWantToDo = req.session.data['WhatDoYouWantToDo'];
    var address = req.session.data['Address'];
    var yes = req.session.data['Yes'];
    //Display new screen and make form data available to use
    res.render('/searchlight/tasks-3', {
        WhatDoYouWantToDo: WhatDoYouWantToDo,
        address: address,
        yes: yes
    });
} );




//WHAT DID YOU DO
//Make previous responses available to what did you do screen
router.get('/searchlight/what-did-you-do', function(req, res) {
    //retrieve form data
    var searchlightAnswer = req.session.data['searchlight-scenario'];
    //Display new screen and make form data available to use
    res.render('/searchlight/what-did-you-do', {
        searchlightAnswer: searchlightAnswer
    });
} );

//WHAT DID YOU DO
//Make previous responses available to what did you do screen
router.get('/searchlight/idv-warning', function(req, res) {
    //retrieve form data
    var searchlightAnswer = req.session.data['searchlight-scenario'];
    //Display new screen and make form data available to use
    res.render('/searchlight/idv-warning', {
        searchlightAnswer: searchlightAnswer
    });
} );



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