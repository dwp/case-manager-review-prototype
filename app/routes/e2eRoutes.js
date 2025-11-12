//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const path = require('path')
const allowedPaths = ['5-2-today','what-colour-paper-do-you-need','inRoom','existing-claims','what-is-ni-number','dla-payments','what-is-ni-number-2','what-is-ni-number-3','welcome-screen','failed-security','security-check','what-is-your-dob','what-is-your-previous-surname','contact-details','select-your-address','confirm-correspondence','start-info','do-you-want-to-receive-text-updates','contact-details-summary','do-you-want-to-receive-text-updates','what-other-help-when-we-contact','how-should-we-contact-you','what-is-your-email','start-info','do-you-have-a-condition','helpers','read-letters','complete-forms','support-no-help','who','where','benefits-abroad','uk-2-of-3-years','what-country-benefits','family-receiving-benefits','task-list-nat-done','family-country-benefits','benefits-abroad','5-1-why-we-need-details','start','hp-summary-two-remove','consent','postcode','srel-bau-kickout','what-country-do-you-live-in','service-start-page','what-is-your-name','existing-claims','new-application','claiming-self','northern-ireland','scotland','other-country','srel','someone-else-bau-kickout','external-route','answer-questions-as-person','authority','last-12-months','dla-now','stop-getting-pip-last-year','appointee','appointee-kickout','security-check','dla-payments','over-16','under-16-ineligible','no-match-ni-kickout','scr-kickout','srel','srel-bau-kickout','over-16','what-is-ni-number','searchlight-check','security-check','failed-security','welcome-screen','declaration','task-list','whatIsYourName','previousNameYesNo','whatIsYourPreviousSurname','what-is-your-dob','what-is-your-postcode','select-your-address','enter-address-manually-country','confirm','correspondence-address','correspondence-postcode','select-your-address-correspondence','confirm-correspondence-address','confirm-correspondence','written-format','correspondence-enter-address-manually','what-is-your-phone-number','mobile','other-number','what-is-your-other-phone-number','do-you-want-to-receive-text-updates','contact-details-summary','font','paper','audio','contact','other-help','what-other-help-when-we-contact','what-is-relay-uk-number','what-is-your-textphone-number','signing-lipspeaking','how-should-we-contact-you','what-is-your-email','what-colour-paper-do-you-need','what-size-print-do-you-need','any-other-help-when-we-contact','what-is-your-phone-2','what-is-your-phone-3','contact-details-summary','start-info','do-you-have-a-condition','complete-forms','read-letters','post','helpers','who','who-helps','support-no-help','support-with-help','written-format','large-print','email-reason','what-is-your-email','what-type-of-audio-format','what-type-of-braille-do-you-need','what-video-format-do-you-need','add-support-summary','start','what-is-your-nationality','what-is-your-nationality','uk-2-of-3-years','leftUK','eea-nationality','another-nationality','living-in-uk','insurance-abroad','benefits-abroad','what-country-benefits','task-list-nat-done','family-receiving-benefits','family-country-benefits','start','what-is-your-nationality','another-nationality','what-country-do-you-live-in','lived-elsewhere','another-country-lived-in','abroad-over-four-weeks','abroad-over-four-weeks','benefits-abroad','HCPYesNo','healthcare-prof-type','healthcare-prof-details','postcode','select-your-address','enter-address-manually','additional-support-needed','additional-support-type','postcode-support','select-support-address','support-address-manually','consent','start','hp-summary-two-remove','consent','confirm-remove','remove-health-professional-2','remove-health-professional','remove-add-health-professional','additional-support-needed','additional-support-type','remove-second-hcp','hp-summary-two-remove','hp-summary','add-new','5-1-why-we-need-details','5-2-today','5-2-today','5-4-yesterday','5-5-private-patient','5-6-postcode','5-7-select-hospital-address','5-17-hospital-address-manually','5-18-hospice-address-manually','5-19-other-address-manually','5-8-hospice-yesterday','5-9-hospice-dates','5-10-hospice-postcode','5-11-select-hospice-address','hospital-residence-summary','5-13-third-party-pay','5-12-other-yesterday','5-15-other-postcode','5-16-select-other-address','5-13-third-party-pay','5-23-name','5-23-name-local','5-14-local-agreement','6-1-start','6-2-no-details-now','6-3-main-account-details-v2','bank-details-summary','motability-question','motability-summary','save-application','what-happens-next','online-form-option','online-form-contact','online-whn-1','online-whn-2','previously-claimed-online','paper-whn-1','paper-whn-2','after-form-sent','application-submitted','over-16','dla-now','under-16-ineligible','last-12-months','srel','srel-bau-kickout','searchlight-check','security-check','failed-security','welcome-screen','declaration','task-list','whatIsYourName','what-is-your-postcode']


function validatePath(response, redirectPath) {

    console.log("INSIDE VALIDATEPATH");
    const basePath = getBasePath(redirectPath);
    console.log("THE BASE PATH ",basePath)
    const folderForViews = redirectPath.split('/')[1];
    console.log("THE FOLDER FOR VIEWS ",folderForViews)



    if (allowedPaths.includes(basePath)) {
      console.log("IN ALLOWED PATHS");
      return response.redirect(redirectPath);
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
// add motability routes here


// GB Telephony routes

// DEV READY

// Eligibility launched from main UI
router.post('/pip-register/signposting-eligibility/service-start-page', function(request, response) {
  var newApp = request.session.data['new-app']
  if (newApp == 'yes'){
      response.redirect('/pip-register/signposting-eligibility/claiming-self')
  } else if (newApp == "no") {
      response.redirect('/pip-register/signposting-eligibility/existing-claims')
  }
})

router.post('/pip-register/signposting-eligibility/new-application', function(request, response) {
  var gbPIP = request.session.data['gb-pip']
  if (gbPIP == 'yes'){
      response.redirect('/pip-register/signposting-eligibility/srel')
  } else if (gbPIP == "n-ireland") {
      response.redirect('/pip-register/signposting-eligibility/northern-ireland')
  } else if (gbPIP == "scotland") {
    response.redirect('/pip-register/signposting-eligibility/scotland')
  }
  else if (gbPIP == "other-country") {
    response.redirect('/pip-register/signposting-eligibility/other-country')
  }
  
})

router.post('/pip-register/signposting-eligibility/claiming-self', function(request, response) {
  var claimingSelf = request.session.data['claiming-self']
  if (claimingSelf == 'myself'){
      response.redirect('/pip-register/signposting-eligibility/new-application')
  } else if (claimingSelf == "someone-else") {
      response.redirect('/pip-register/signposting-eligibility/someone-else-bau-kickout')
  }
  else if (claimingSelf == "unofficial") {
    response.redirect('/pip-register/signposting-eligibility/someone-else-bau-kickout')
  }
  else if (claimingSelf == "external") {
    response.redirect('/pip-register/signposting-eligibility/someone-else-bau-kickout')
  }
})

//external route

router.post('/external-route', function(request, response) {
  var externalRoute = request.session.data['external-route']
  if (externalRoute == "friendFamily") {
    response.redirect('/pip-register/signposting-eligibility/answer-questions-as-person')
  }
  else if (externalRoute == "org") {
    response.redirect('/pip-register/signposting-eligibility/answer-questions-as-person')
  }
  else if (externalRoute == "attorney") {
    response.redirect('/pip-register/signposting-eligibility/authority')
  }
  else if (externalRoute == "appointee") {
    response.redirect('/pip-register/signposting-eligibility/authority')
  }
  else if (externalRoute == "wantAppointee") {
    response.redirect('/pip-register/signposting-eligibility/authority')
  }
  else if (externalRoute == "corp") {
    response.redirect('/pip-register/signposting-eligibility/authority')
  }
  else if (externalRoute == "curator") {
    response.redirect('/pip-register/signposting-eligibility/authority')
  }
})

router.post('/inRoom', function(request, response) {
  var externalRoute = request.session.data['inRoom']
  if (externalRoute == "yes") {
    response.redirect('/pip-register/signposting-eligibility/over-16')
  }
  else if (externalRoute == "no") {
    response.redirect('/pip-register/signposting-eligibility/not-in-room')
  }
})

//last 12 months
router.post('/last12months', function(request, response) {
  var externalRoute = request.session.data['last12months']
  if (externalRoute == "yes") {
    response.redirect('/pip-register/signposting-eligibility/dla-now')
  }
  else if (externalRoute == "no") {
    response.redirect('/pip-register/signposting-eligibility/stop-getting-pip-last-year')
  }
})

//DLA now

router.post('/dlaNow', function(request, response) {
  var dlaNow = request.session.data['dlaNow']
  if (dlaNow == "yes") {
    response.redirect('/pip-register/signposting-eligibility/dla-payments')
  }
  else if (dlaNow == "no") {
    response.redirect('/pip-register/signposting-eligibility/what-is-ni-number')
  }
})

// Are you over 16 and under SPA?
router.post('/pip-register/signposting-eligibility/over-16', function(request, response) {
    var correctAge = request.session.data['age']
    if (correctAge == 'yes'){
        response.redirect('/pip-register/signposting-eligibility/dla-now')
    } else if (correctAge == "no-under-16") {
        response.redirect('/pip-register/signposting-eligibility/under-16-ineligible')
    } else if (correctAge == "no-over-spa") {
        response.redirect('/pip-register/signposting-eligibility/last-12-months')
    }
})

// Claiming under SREL?
router.post('/pip-register/signposting-eligibility/srel', function(request, response) {
    var srel = request.session.data['srel']
    if (srel == 'yes'){
        response.redirect('/pip-register/signposting-eligibility/srel-bau-kickout')
    } else if (srel == "no") {
        response.redirect('/pip-register/signposting-eligibility/over-16')
    }
    })
    
//NI
router.post('/pip-register/signposting-eligibility/what-is-ni-number', function(request, response) {
    response.redirect('/pip-register/signposting-eligibility/searchlight-check')
})
//
//Serchlight check
router.post('/pip-register/signposting-eligibility/searchlight-check', function(request, response) {
  response.redirect('/pip-register/signposting-eligibility/security-check')
})

//welcome-screen


// How many security questions were answered?
router.post('/pip-register/signposting-eligibility/security-check', function(request, response) {
    var secVerified = request.session.data['security-verified']
    if (secVerified == '2correct'){
        response.redirect('/pip-register/welcome-screen')
    } else {
        response.redirect('/pip-register/signposting-eligibility/failed-security')
    }
    })

    router.post('/pip-register/signposting-eligibility/failed-security', function(request, response) {
        response.redirect('/pip-register/welcome-screen')
    })



//---------------------------------------------------------------------------------------------

// Welcome screens

// Welcome screen GB
router.post('/pip-register/welcome-screen', function(request, response) {
    response.redirect('/pip-register/declaration')
})

// // Welcome screen 2
// router.post('/pip-register/welcome-screens/welcome-screen-ni-2', function(request, response) {
//     response.redirect('/pip-register/welcome-screens/welcome-screen-ni-3')
// })
//
// // Welcome screen 3
// router.post('/pip-register/welcome-screens/welcome-screen-ni-3', function(request, response) {
//     response.redirect('/pip-register/declaration')
// })

//---------------------------------------------------------------------------------------------

// Declaration
router.post('/pip-register/declaration', function(request, response) {
    response.redirect('/pip-register/task-list')
})

// --------------------------------------------------------------------------------------

//pip-register/Contact-details

// What is your name

router.post('/whatIsYourName', function(request, response) {
  response.redirect('/pip-register/contact-details/what-is-your-postcode')
})

//Do you have a previous surname?
router.post('/previousNameYesNo', function(request, response) {
  var previousNameYesNo = request.session.data['previousNameYesNo']
  if (previousNameYesNo == 'Yes'){
      response.redirect('/pip-register/contact-details/what-is-your-previous-surname')
  } else if (previousNameYesNo== 'No') {
      response.redirect('/pip-register/contact-details/what-is-your-dob')
  }
})

// What is your previous surname
router.post('/whatIsYourPreviousSurname', function(request, response) {
  response.redirect('/pip-register/contact-details/what-is-your-dob')
})

// What is your DOB
router.post('/pip-register/contact-details/what-is-your-dob', function(request, response) {
    response.redirect('/pip-register/contact-details/what-is-your-postcode')
})

// What is your postcode page
router.post('/pip-register/contact-details/what-is-your-postcode', function(request, response) {
    response.redirect('/pip-register/contact-details/select-your-address')
})

// Select your address page
router.post('/pip-register/contact-details/select-your-address', function(request, response) {
    response.redirect('/pip-register/contact-details/confirm')
})

// Enter address manually page
router.post('/pip-register/contact-details/enter-address-manually-country', function(request, response) {
    response.redirect('/pip-register/contact-details/correspondence-address')
})

// Confirm address
router.post('/pip-register/contact-details/confirm', function(request, response) {
  response.redirect('/pip-register/contact-details/correspondence-address')
})


// Is this the address we should send letters to page
router.post('/pip-register/contact-details/correspondence-address', function(request, response) {
    var sendLettersElsewhere = request.session.data['should-we-write-to-you']
    if (sendLettersElsewhere == 'yes'){
        response.redirect('/pip-register/contact-details/alt-formats/written-format')
    } else if (sendLettersElsewhere == 'no') {
        response.redirect('/pip-register/contact-details/correspondence-postcode')
    } else if (sendLettersElsewhere == 'No, I dont have a home address') {
      response.redirect('/pip-register/contact-details/alt-formats/written-format')
  }
})

// What is your correspondence postcode page
router.post('/pip-register/contact-details/correspondence-postcode', function(request, response) {
    response.redirect('/pip-register/contact-details/confirm-correspondence-address')
})

// Confirm correspondence address > correspondence alt formats page
router.post('/pip-register/contact-details/confirm-correspondence-address', function(request, response) {
    response.redirect('/pip-register/contact-details/confirm-correspondence')
})

// Confirm s > correspondence alt formats page
router.post('/pip-register/contact-details/confirm-correspondence', function(request, response) {
  response.redirect('/pip-register/contact-details/alt-formats/written-format')
})

// Confirm correspondence address page
router.post('/pip-register/contact-details/correspondence-enter-address-manually', function(request, response) {
    response.redirect('/pip-register/contact-details/alt-formats/written-format')
})

// What is your phone number page
router.post('/pip-register/contact-details/what-is-your-phone-number', function(request, response) {
        response.redirect("/pip-register/contact-details/contact-details-summary")
})

//Do you have a mobile number
router.post('/mobile', function(request, response) {
  var mobileYesNo = request.session.data['mobileYesNo']
  if (mobileYesNo == 'Yes'){
      response.redirect('/pip-register/contact-details/what-is-your-phone-number')
  } else if (mobileYesNo == 'No') {
      response.redirect('/pip-register/contact-details/other-number')
  }
})

// What is your other number?
router.post('/pip-register/contact-details/what-is-your-other-phone-number', function(request, response) {
  response.redirect("/pip-register/contact-details/contact-details-summary")
})

// Do you want to receive text updates
router.post('/pip-register/contact-details/do-you-want-to-receive-text-updates', function(request, response) {
    response.redirect('/pip-register/contact-details/what-is-your-phone-number')
})

// Do you have another number
router.post('/otherNumber', function(request, response) {
  var otherNumberYesNo = request.session.data['otherNumberYesNo']
  if (otherNumberYesNo == 'Yes'){
      response.redirect('/pip-register/contact-details/what-is-your-other-phone-number')
  } else if (otherNumberYesNo == 'No') {
      response.redirect('/pip-register/contact-details/contact-details-summary')
  }
})

// Contact details summary
router.post('/pip-register/contact-details/contact-details-summary', function(request, response) {
  response.redirect('/pip-register/additional-support/start-info')
})

// Contact details summary
router.post('/pip-register/contact-details/contact-details-summary', function(request, response) {
    response.redirect('/pip-register/additional-support/start-info')
})

//Alt formats

 router.post('/large-print', function (req, response) {
  const selectedOptions = req.session.data['largePrint'];

  // Handle no selection
  if (!selectedOptions) {
    return validatePath(response,'/pip-register/contact-details/alt-formats/how-should-we-contact-you');
  }

  // Normalize to array
  const options = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];

  // If "neither" is selected, ignore other options and redirect to 'none'
  if (options.includes('none')) {
    return validatePath(response,'/pip-register/contact-details/alt-formats/how-should-we-contact-you');
  }

  // If both A and B are selected, go to a summary page
  if (options.includes('coloured-paper') && options.includes('large-print')) {
    return validatePath(response,'/pip-register/contact-details/alt-formats/what-size-print-do-you-need');
  }

  // If only coloured paper (A)
  if (options.includes('coloured-paper')) {
    return validatePath(response,'/pip-register/contact-details/alt-formats/what-colour-paper-do-you-need');
  }

  // If only large print (B)
  if (options.includes('large-print')) {
    return validatePath(response,'/pip-register/contact-details/alt-formats/what-size-print-do-you-need');
  }

  // Fallback
  validatePath(response,'/pip-register/contact-details/alt-formats/how-should-we-contact-you');
});


  //font
  router.post('/font', function (req, response) {
    //Store response
    var font = req.session.data['font'];

    //Redirect
    validatePath(response,'/pip-register/contact-details/alt-formats/what-colour-paper-do-you-need');
  });

    //Paper
    router.post('/paper', function (req, response) {
      //Store response
      var paper = req.session.data['paper'];
  
      //Redirect
      validatePath(response,'/pip-register/contact-details/alt-formats/what-size-print-do-you-need');
    });

    //Audio format
    router.post('/audio', function(request, response) {
      var audio = request.session.data['audio']
      if (audio == 'CD'){
          response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
      } else if (audio == 'MP3 by email') {
          response.redirect('/pip-register/contact-details/alt-formats/what-is-your-email')
      } else if (audio == 'USB stick') {
        response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
      } else if (audio == 'Casette tape') {
        response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
      } else if (audio == 'DVD') {
        response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
      }
    })

    //Video format
    router.post('/video', function(request, response) {
      var audio = request.session.data['video']
      if (audio == 'DVD'){
          response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
      } else if (audio == 'MPEG file by email') {
          response.redirect('/pip-register/contact-details/alt-formats/what-is-your-email')
      }
    })

    //How should we contact you if we need to speak to you?
    router.post('/contact', function(request, response) {
      var contact = request.session.data['contact']
      if (contact == 'Standard phone call'){
          response.redirect('/pip-register/contact-details/alt-formats/any-other-help-when-we-contact')
      } else if (contact == 'Relay UK') {
          response.redirect('/pip-register/contact-details/alt-formats/what-is-relay-uk-number')
      } else if (contact == 'Textphone') {
        response.redirect('/pip-register/contact-details/alt-formats/what-is-your-textphone-number')
      } else if (contact == 'Signing or lipspeaking') {
        response.redirect('/pip-register/contact-details/alt-formats/signing-lipspeaking')
      }
    })

    //Do you need any other help when we contact you?
router.post('/other-help', function(request, response) {
  var otherHelp = request.session.data['other-help'];
  if (otherHelp === 'Yes') {
    response.redirect('/pip-register/contact-details/alt-formats/what-other-help-when-we-contact');
  } else if (otherHelp === 'No') {
    response.redirect('/pip-register/contact-details/do-you-want-to-receive-text-updates');
  } else {
    response.redirect('/pip-register/contact-details/contact-details-summary');
  }
});
//pip-register/ADDITIONAL-SUPPORT

router.post('/pip-register/contact-details/what-other-help-when-we-contact', function(request, response) {
  var otherHelpDetails = request.session.data['other-help-details'];
  // You can log or use this data if needed
  response.redirect('/pip-register/contact-details/do-you-want-to-receive-text-updates');
});

    //What is your phone number - 2
router.post('/pip-register/contact-details/what-is-your-phone-2', function(request, response) {
  var extraPhone = request.session.data['extraPhone'];

  if (extraPhone === 'yes') {
    response.redirect('/pip-register/contact-details/what-is-your-phone-3');
  } else if (extraPhone === 'no') {
    response.redirect('/pip-register/contact-details/contact-details-summary');
  } else {
    response.redirect('/pip-register/contact-details/contact-details-summary');
  }
});

// start
router.post('/pip-register/additional-support/start-info', function(request, response) {
    response.redirect('/pip-register/additional-support/do-you-have-a-condition')
})

// do you have a condition
router.post('/pip-register/additional-support/do-you-have-a-condition', function(request, response) {
    var anyCondition = request.session.data['any-condition']
    if (anyCondition == 'yes'){
        response.redirect('/pip-register/additional-support/complete-forms')
    } else if (anyCondition == 'no') {
        response.redirect('/pip-register/additional-support/helpers')
    }
})

// can you complete forms - working
router.post('/pip-register/additional-support/complete-forms', function(request, response) {
    var forms = request.session.data['forms']

    if (forms === 'no') {
        response.redirect('/pip-register/additional-support/helpers')
    } else if (forms === 'yes') {
        response.redirect('/pip-register/additional-support/read-letters')
    } else {
        // fallback if nothing selected
        response.redirect('/pip-register/additional-support/complete-forms')
    }
})

// not working

router.post('/pip-register/additional-support/read-letters', function(request, response) {
    var forms = request.session.data['forms'];
    var letters = request.body.letters;

    if (letters === 'no') {
        response.redirect('/pip-register/additional-support/helpers');
    } else if (letters === 'yes') {
        response.redirect('/pip-register/additional-support/post');
    } else {
        // fallback if nothing selected
        response.redirect('/pip-register/additional-support/complete-forms');
    }
});


router.post('/pip-register/additional-support/post', function(request, response) {
  var post = request.session.data['post']
  if (post == 'yes'){
      response.redirect('/pip-register/additional-support/add-support-summary')
  } else if (post == 'no') {
      response.redirect('/pip-register/additional-support/helpers')
  }
})

// Do you have anyone to help you?
router.post('/pip-register/additional-support/helpers', function(request, response) {
    var anyoneHelp = request.session.data['helpers']
    if (anyoneHelp == 'yes'){
        response.redirect('/pip-register/additional-support/who')
    } else if (anyoneHelp == 'no') {
        response.redirect('/pip-register/additional-support/support-no-help')
    }
})

router.post('/pip-register/additional-support/who-helps', function(request, response) {
    response.redirect('/pip-register/additional-support/who')
})

router.post('/pip-register/additional-support/support-no-help', function(request, response) {
    response.redirect('/pip-register/contact-details/alt-formats/written-format')
})
router.post('/pip-register/additional-support/support-with-help', function(request, response) {
    response.redirect('/pip-register/contact-details/alt-formats/written-format')
})
// -------------------------------------------------------------------------------------




// Would you like us to send your letters in another way, like larger text, audio or braille?
router.post('/pip-register/contact-details/alt-formats/written-format', function(request, response) {
    var writtenFormat = request.session.data['written-format']
    console.log('writtenFormat:'+ writtenFormat)
    if (writtenFormat === 'Standard letter (12-point Arial text on white paper)'){
        response.redirect('/pip-register/contact-details/alt-formats/how-should-we-contact-you')
    } else if (writtenFormat === 'Letter with changes to colour or print size') {
        response.redirect('/pip-register/contact-details/alt-formats/large-print')
     } else if (writtenFormat === 'Audio') {
        response.redirect('/pip-register/contact-details/alt-formats/what-type-of-audio-format')
    } else if (writtenFormat === 'Braille') {
        response.redirect('/pip-register/contact-details/alt-formats/what-type-of-braille-do-you-need')
    } else if (writtenFormat === 'British Sign Language video') {
      response.redirect('/pip-register/contact-details/alt-formats/what-video-format-do-you-need')
    } else if (writtenFormat == 'Email') {
        response.redirect('/pip-register/contact-details/alt-formats/email-reason')
    }

})

// What size print do you need?
router.post('/pip-register/contact-details/alt-formats/large-print', function(request, response) {
    response.redirect('/pip-register/additional-support/add-support-summary')
})

// Why do you need us to contact you by email instead of printed letters?
router.post('/pip-register/contact-details/alt-formats/email-reason', function(request, response) {
    response.redirect('/pip-register/contact-details/alt-formats/what-is-your-email')
})

// What is your email address?
router.post('/pip-register/contact-details/alt-formats/what-is-your-email', function(request, response) {
    response.redirect('/pip-register/additional-support/add-support-summary')
})

// Summary
router.post('/pip-register/additional-support/add-support-summary', function(request, response) {
    response.redirect('/pip-register/nationality/start')
})

//pip-register/NATIONALITY

//MTP APRIL RELEASE - NATIONALITY
//pip-register/nationality

//start
router.post('/pip-register/nationality/start', function(request, response) {
    response.redirect('/pip-register/nationality/what-is-your-nationality')
})

//what is your nationality
router.post('/pip-register/nationality/what-is-your-nationality', function(request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british'){
        response.redirect('/pip-register/nationality/uk-2-of-3-years')
    } else if (nationality == 'irish') {
        response.redirect('/pip-register/nationality/uk-2-of-3-years')
      } else if (nationality == 'eea') {
          response.redirect('/pip-register/nationality/eea-nationality')
    } else if (nationality == 'other') {
        response.redirect('/pip-register/nationality/another-nationality')
    }
})

//Have you been in the UK for at least 2 of the last 3 years?
router.post('/pip-register/nationality/uk-2-of-3-years', function(request, response) {
    var ukYears = request.session.data['uk-years']
    if (ukYears == 'yes'){
        response.redirect('/pip-register/nationality/benefits-abroad')
    } else if (ukYears == 'no') {
        response.redirect('/pip-register/nationality/benefits-abroad')
    } else if (ukYears == 'unsure') {
        response.redirect('/pip-register/nationality/insurance-abroad')
    }
})

//Have you left the UK for more than 4 weeks at a time, in the last 3 years?
router.post('/leftUK', function(request, response) {
  var leftUK = request.session.data['leftUK']
  if (leftUK == 'yes'){
      response.redirect('/pip-register/nationality/where')
  } else if (leftUK == 'no') {
      response.redirect('/pip-register/nationality/benefits-abroad')
  }
})

//Select eea nationality
router.post('/pip-register/nationality/eea-nationality', function(request, response) {
  response.redirect('/pip-register/nationality/living-in-uk')
})

//Select other nationality
router.post('/pip-register/nationality/another-nationality', function(request, response) {
    var anotherNationality = request.session.data['another-nationality']
    if (anotherNationality == 'Norway' || anotherNationality == 'Iceland'){
        response.redirect('/pip-register/nationality/living-in-uk')
    }
    if (anotherNationality == 'Australia' || anotherNationality == 'Brazil' || anotherNationality == 'Bangladesh' ){
        response.redirect('/pip-register/nationality/uk-2-of-3-years')
    }
})

//Were you living in the UK on or before 31/12/20?
router.post('/pip-register/nationality/living-in-uk', function(request, response) {
    response.redirect('/pip-register/nationality/uk-2-of-3-years')
})

//Are you working or paying national insurance in another country?

router.post('/pip-register/nationality/insurance-abroad', function(request, response) {
    var payingInsurance= request.session.data['insurance-abroad']
    if (payingInsurance == 'no'){
      response.redirect('/pip-register/nationality/nationality-summary')
    } else if (payingInsurance == 'yes') {
        response.redirect('/pip-register/nationality/nationality-summary')
    }
  })

  // Are you receiving pensions or benefits in another country?
  router.post('/pip-register/nationality/benefits-abroad', function(request, response) {
      var payingBenefits= request.session.data['benefits-abroad']
      if (payingBenefits == 'no'){
        response.redirect('/pip-register/nationality/insurance-abroad')
      } else if (payingBenefits == 'yes') {
          response.redirect('/pip-register/nationality/insurance-abroad')
      }
  })

        //What country are you receiving pensions or benefits in?
        router.post('/pip-register/nationality/exportability/what-country-benefits', function(request, response) {
            response.redirect('/pip-register/task-list-nat-done')
        })

    //Are any of your family members receiving pensions or benefits in another country?
    router.post('/pip-register/nationality/exportability/family-receiving-benefits', function(request, response) {
        var payingBenefits= request.session.data['family-receiving-benefits']
        if (payingBenefits == 'no'){
        response.redirect('/pip-register/task-list-nat-done')
        } else if (payingBenefits == 'yes') {
            response.redirect('/pip-register/nationality/exportability/family-country-benefits')
        }
    })

    //What country are your family members receiving pensions or benefits in?
    router.post('/pip-register/nationality/exportability/family-country-benefits', function(request, response) {
    response.redirect('/pip-register/task-list-nat-done')
    })


//--------------------------------------------------------------------------------------------------------------
//nationality start
router.post('/pip-register/nationality/start', function(request, response) {
    response.redirect('/pip-register/nationality/what-is-your-nationality')
})

//what is your nationality
router.post('/pip-register/nationality/what-is-your-nationality', function(request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british'){
        response.redirect('/pip-register/nationality/what-country-do-you-live-in')
    } else if (nationality == 'irish') {
        response.redirect('/pip-register/nationality/what-country-do-you-live-in')
    } else if (nationality == 'other') {
        response.redirect('/pip-register/nationality/another-nationality')
    }
})

// Another nationality
router.post('/versions/devs/nationality/another-nationality', function(request, response) {
    response.redirect('/versions/devs/nationality/what-country-do-you-live-in')
})

//what country do you normally live in page
router.post('/versions/devs/nationality/what-country-do-you-live-in', function(request, response) {
    var nationality = request.session.data['country']
    if (nationality == 'northern-ireland'){
        response.redirect('/versions/devs/nationality/lived-elsewhere')
    } else if (nationality == 'england') {
        response.redirect('/versions/devs/nationality/lived-elsewhere')
    } else if (nationality == 'wales') {
        response.redirect('/versions/devs/nationality/lived-elsewhere')
    } else if (nationality == 'scotland') {
        response.redirect('/versions/devs/nationality/lived-elsewhere')
    } else if (nationality == 'another-country') {
        response.redirect('/versions/devs/nationality/another-country-lived-in')
    }
})

// Another country
router.post('/versions/devs/another-country-lived-in', function(request, response) {
    response.redirect('/versions/devs/nationality/lived-elsewhere')
})


//Have you lived anywhere other than UK in last 3 years page
router.post('/versions/devs/nationality/lived-elsewhere', function(request, response) {
    var livedElsewhere = request.session.data['lived-elsewhere']
    if (livedElsewhere == 'yes'){
        response.redirect('#')
    } else if (livedElsewhere == 'no') {
        response.redirect('/versions/devs/nationality/abroad-over-four-weeks')
    }
})

//Have you been abroad for any periods over 4 weeks, in the last 3 years page
router.post('/versions/devs/nationality/abroad-over-four-weeks', function(request, response) {
    var livedAbroad = request.session.data['abroad-over-four-weeks']
    if (livedAbroad == 'yes'){
        response.redirect('#')
    } else if (livedAbroad == 'no') {
        response.redirect('/versions/devs/nationality/benefits-abroad')
    }
})

//benefits abroad
router.post('/versions/devs/nationality/benefits-abroad', function(request, response) {
    var benefitsAbroad = request.session.data['benefits-abroad']
    if (benefitsAbroad == 'yes'){
        response.redirect('/versions/devs/nationality/insurance-abroad')
    } else if (benefitsAbroad == 'no') {
        response.redirect('/versions/devs/nationality/insurance-abroad')
    }
})

//are you or a family member working or paying insurance from Switzerland or EEA?
router.post('/versions/devs/nationality/insurance-abroad', function(request, response) {
    var insuranceAbroad = request.session.data['insurance-abroad']
    if (insuranceAbroad == 'yes'){
        response.redirect('/versions/devs/nationality/nationality-summary')
    } else if (insuranceAbroad == 'no') {
        response.redirect('/versions/devs/nationality/nationality-summary')
    }
})

//summary to task list
router.post('/versions/devs/nationality/nationality-summary', function(request, response) {
    response.redirect('/versions/devs/task-list-nat-done')
})

// -------------------------------------------------------------------------------------

//pip-register/HEALTHCARE-PROFESSIONAL

//pip-register/healthcare-professional/start
router.post('/HCPYesNo', function(request, response) {
  var HCPYesNo = request.session.data['HCPYesNo']
  if (HCPYesNo == 'Yes'){
      response.redirect('/pip-register/healthcare-professional/healthcare-prof-type')
  } else if (HCPYesNo == 'No') {
      response.redirect('/pip-register/hospital-dates/5-1-why-we-need-details')
  }
})


   //start ---> healthcare-prof-type
   router.post('/pip-register/healthcare-professional/start', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-1-why-we-need-details')
})

//healthcare-professional/consent-2
router.post('/pip-register/healthcare-professional/consent', function(request, response) {
    console.log('consent:', request.body.consent); 
    const consent = request.body.consent;

    if (consent === 'yes') {
        response.redirect('/pip-register/healthcare-professional/start');
    } else if (consent === 'no') {
        response.redirect('/pip-register/healthcare-professional/hp-summary-two-remove');
    } else {
        response.redirect('/pip-register/healthcare-professional/start'); // optional fallback
    }
});

//healthcare-prof-type ---> what is their postcode
router.post('/pip-register/healthcare-professional/healthcare-prof-type', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/postcode')
})

//healthcare-prof-type ---> find address
router.post('/pip-register/healthcare-professional/healthcare-prof-type', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/healthcare-prof-details')
})

router.post('/pip-register/healthcare-professional/healthcare-prof-details', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/postcode')
})

//find address ---> select address
router.post('/pip-register/healthcare-professional/postcode', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/select-your-address')
})

//select address ---> addiitonal support needed
router.post('/pip-register/healthcare-professional/select-your-address', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/additional-support-needed')
})

//enter-address-manually ----> second support needed?
router.post('/pip-register/healthcare-professional/enter-address-manually', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/additional-support-needed')
})


//additional-support-needed ---> additional-support-type
router.post('/pip-register/healthcare-professional/additional-support-needed', function(request, response) {
    var hcpTwoNeeded = request.session.data['support-needed']
    if (hcpTwoNeeded == 'yes'){
        response.redirect('/pip-register/healthcare-professional/additional-support-type')
    } else if (hcpTwoNeeded == 'no') {
        response.redirect('/pip-register/healthcare-professional/hp-summary-two-remove')
    }
})

//additional-support-type ---> find address
router.post('/pip-register/healthcare-professional/additional-support-type', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/postcode-support')
})

//find address ---> select address
router.post('/pip-register/healthcare-professional/postcode-support', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/select-support-address')
})

//enter-address-manually ----> hospital and accom start
router.post('/pip-register/healthcare-professional/support-address-manually', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/consent-NI')
})


//select support address ---> hospital and accom start
router.post('/pip-register/healthcare-professional/select-support-address', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/hp-summary-two-remove')
})

//consent NI ----> hcp cya 2 person
router.post('/pip-register/healthcare-professional/consent', function(request, response) {
    response.redirect('/pip-register/healthcare-professional/start')
})

//healthcare-professional/confirm-remove 
router.post('/pip-register/healthcare-professional/confirm-remove', function(request, response) {
    console.log('HCPYesNo:', request.body.HCPYesNo);
    var HCPYesNo = request.body.HCPYesNo;

    if (HCPYesNo === 'yes') {
        response.redirect('/pip-register/healthcare-professional/hp-summary');
    } else if (HCPYesNo === 'no') {
        response.redirect('/pip-register/healthcare-professional/hp-summary-two-remove');
    } else {
        response.redirect('/error'); // fallback
    }
});




//---------------------------------------------------------------------------------
//pip-register/HEALTHCARE-PROFESSIONAL/CYAS

//remove 2nd hcp
router.post('/pip-register/healthcare-professional/hcp-cyas/remove-health-professional-2', function(request, response) {
    var removeHcp = request.session.data['remove-second-hcp']
    if (removeHcp == 'yes'){
        response.redirect('/pip-register/healthcare-professional/healthcare-prof-type')
    } else if (removeHcp == 'no'){
    response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-second-hcp')
}
})

//remove main hcp
router.post('/pip-register/healthcare-professional/hcp-cyas/remove-health-professional', function(request, response) {
    var removeHcp = request.session.data['remove-hcp']
    if (removeHcp == 'yes'){
        response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-main-hcp')
    } else if (removeHcp == 'no'){
    response.redirect('/pip-register/healthcare-professional/hcp-cyas/hp-summary-two')
}
})

//remove final hcp
router.post('/pip-register/healthcare-professional/hcp-cyas/remove-add-health-professional', function(request, response) {
    var removeHcp = request.session.data['remove-final-hcp']
    if (removeHcp == 'yes'){
        response.redirect('/pip-register/healthcare-professional/hcp-cyas/add-new/healthcare-prof-type')
    } else if (removeHcp == 'no'){
    response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-main-hcp')
}
})


//add new hcp from remocving all contacts---> do you want to add another contact?
router.post('/pip-register/healthcare-professional/hcp-cyas/add-new/additional-support-needed', function(request, response) {
    var removeHcp = request.session.data['support-needed']
    if (removeHcp == 'yes'){
        response.redirect('/pip-register/healthcare-professional/hcp-cyas/add-new/additional-support-type')
    } else if (removeHcp == 'no'){
    response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-second-hcp')
}
})


router.post('/pip-register/healthcare-professional/hp-summary-two-remove', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-1-why-we-need-details')
})

//pip-register/HOSPITAL-DATES

//hospital and accom start ----> Are you in hospital or hospice as an in-patient today?
router.post('/pip-register/hospital-dates/5-1-why-we-need-details', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-2-today')
})
// Are you in hospital or hospice as an in-patient today?
router.post('/pip-register/hospital-dates/5-2-today', function(request, response) {
    var hospitalToday = request.session.data['hospital-today']
    if (hospitalToday == 'yes-hospital'){
        response.redirect('/pip-register/hospital-dates/5-4-yesterday')
    } else if (hospitalToday == 'no') {
        response.redirect('/pip-register/hospital-dates/5-3-other-housing-today')
    } else if (hospitalToday == 'yes-hospice') {
        response.redirect('/pip-register/hospital-dates/5-8-hospice-yesterday')
    }
})

// Were you in hospital yesterday?
router.post('/pip-register/hospital-dates/5-4-yesterday', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-5-private-patient')
})


// are you a private patient? > What is the name and address of the hospital?
router.post('/pip-register/hospital-dates/5-5-private-patient', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-6-postcode')
})

// postcode > select address
router.post('/pip-register/hospital-dates/5-6-postcode', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-7-select-hospital-address')
})

// postcode > select address
router.post('/pip-register/hospital-dates/5-7-select-hospital-address', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// hospital manually > start bank
router.post('/pip-register/hospital-dates/5-17-hospital-address-manually', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// hospice manually > start bank
router.post('/pip-register/hospital-dates/5-18-hospice-address-manually', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// other manually > start bank
router.post('/pip-register/hospital-dates/5-19-other-address-manually', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-13-third-party-pay')
})

// Were you in hospice yesterday?
router.post('/pip-register/hospital-dates/5-8-hospice-yesterday', function(request, response) {
    var otherYesterday = request.session.data['hospice-yesterday']
    if (otherYesterday == 'yes'){
        response.redirect('/pip-register/hospital-dates/5-9-hospice-dates')
    } else if (otherYesterday == 'no') {
        response.redirect('/pip-register/hospital-dates/5-10-hospice-postcode')
    }
})

// Do you know the date you went into the hospice?
router.post('/pip-register/hospital-dates/5-9-hospice-dates', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-10-hospice-postcode')
})

// select hospice address
router.post('/pip-register/hospital-dates/5-10-hospice-postcode', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-11-select-hospice-address')
})

// select hospice address
router.post('/pip-register/hospital-dates/5-10-hospice-postcode', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-11-select-hospice-address')
})

//  Can you confirm the first line of the address place you are staying in?
router.post('/pip-register/hospital-dates/5-11-select-hospice-address', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// Are you living in a care home or nursing home, sheltered housing, a residential college or a hostel today?
router.post('/pip-register/hospital-dates/5-3-other-housing-today', function(request, response) {
    var otherToday = request.session.data['other-today']
    if (otherToday == 'yes'){
        response.redirect('/pip-register/hospital-dates/5-12-other-yesterday')
    } else if (otherToday == 'no') {
        response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
    }
})

// Were you living in this place yesterday?
router.post('/pip-register/hospital-dates/5-12-other-yesterday', function(request, response) {
    var otherYesterday = request.session.data['other-yesterday']
    if (otherYesterday == 'yes'){
        response.redirect('/pip-register/hospital-dates/5-15-other-postcode')
    } else if (otherYesterday == 'no') {
        response.redirect('/pip-register/hospital-dates/5-15-other-postcode')
    }
})

//  Can you confirm the first line of the address place you are staying in?
router.post('/pip-register/hospital-dates/5-15-other-postcode', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-16-select-other-address')
})

// Select other address > tasklist
router.post('/pip-register/hospital-dates/5-16-select-other-address', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-13-third-party-pay')
})

// Does a local authority, health authority, Jobcentre Plus, or a charity pay any of the costs for you to live there?
router.post('/pip-register/hospital-dates/5-13-third-party-pay', function(request, response) {
    var thirdPartyPay = request.session.data['third-party-pay']
    if (thirdPartyPay == 'health-trust'){
        response.redirect('/pip-register/hospital-dates/5-23-name-local')
    } else if (thirdPartyPay == 'no') {
        response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
    } else if (thirdPartyPay == 'yes') {
        response.redirect('/pip-register/hospital-dates/5-23-name')
    }
})

// What is the name of the [organisation type]?
router.post('/pip-register/hospital-dates/5-23-name', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// local auth ---> What is the name -----> agreement?
router.post('/pip-register/hospital-dates/5-23-name-local', function(request, response) {
    response.redirect('/pip-register/hospital-dates/5-14-local-agreement')
})

// agreement to task list
router.post('/pip-register/hospital-dates/5-14-local-agreement', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})

// Do you have an agreement with the local authority to repay any of the costs?
router.post('/pip-register/hospital-dates/hospital-dates/5-14-local-agreement', function(request, response) {
    response.redirect('/pip-register/hospital-dates/hospital-residence-summary')
})


// -------------------------------------------------------------------------------------

//pip-register/BANK-DETAILS/MAIN-ACCOUNT-DETAILS

// Can you give me your account details now?
router.post('/pip-register/bank-details/6-1-start', function(request, response) {
    var detailsNow = request.session.data['details-now']
    if (detailsNow == 'yes'){
        response.redirect('/pip-register/bank-details/6-3-main-account-details-v2')
    } else if (detailsNow == 'no') {
        response.redirect('/pip-register/bank-details/6-2-no-details-now')
    }
})

// You can continue without entering account details
router.post('/pip-register/bank-details/6-2-no-details-now', function(request, response) {
    response.redirect('/pip-register/task-list-bank-done')
})

// Main account details
router.post('/pip-register/bank-details/6-3-main-account-details-v2', function(request, response) {
    response.redirect('/pip-register/bank-details/bank-details-summary')
})

// Bank details CYA to task list
router.post('/pip-register/bank-details/bank-details-summary', function(request, response) {
    response.redirect('/pip-register/motability/motability')
})

//Motability to Motability CYA
router.post('/motability-question', function(request, response) {
    response.redirect('/pip-register/motability/motability-summary')
})

// -------------------------------------------------------------------------------------

// Save application- i will now submit
router.post('/pip-register/what-happens-next/save-application', function(request, response) {
    response.redirect('/pip-register/what-happens-next/what-happens-next')
})
//design-updates/sprint-20/what-happens-next/what-happens-next
router.post('/pip-register/what-happens-next/what-happens-next', function(request, response) {
        response.redirect('/pip-register/what-happens-next/online-form-option')
})

router.post('/pip-register/what-happens-next/online-form-option', function(request, response) {
    var previousOnline = request.session.data['form-online']
    if (previousOnline  == 'online'){
        response.redirect('/pip-register/what-happens-next/online-form-contact')
    } else if (previousOnline  == 'paper') {
        response.redirect('/pip-register/what-happens-next/paper-whn-1')
    }
})

// Online whn1 (form contact details)
router.post('/pip-register/what-happens-next/online-form-contact', function(request, response) {
    response.redirect('/pip-register/what-happens-next/online-whn-1')
})

// Online whn 1- whn 2
router.post('/pip-register/what-happens-next/online-whn-1', function(request, response) {
    response.redirect('/pip-register/what-happens-next/online-whn-2')
})

// Online whn 2- paper-after-sent
router.post('/pip-register/what-happens-next/online-whn-2', function(request, response) {
    response.redirect('/pip-register/what-happens-next/after-form-sent')
})

router.post('/pip-register/what-happens-next/previously-claimed-online', function(request, response) {
        response.redirect('/pip-register/what-happens-next/paper-whn-1')
})

// Paper whn 1- whn 2
router.post('/pip-register/what-happens-next/paper-whn-1', function(request, response) {
    response.redirect('/pip-register/what-happens-next/paper-whn-2')
})

// Paper whn 2- paper-after-sent
router.post('/pip-register/what-happens-next/paper-whn-2', function(request, response) {
    response.redirect('/pip-register/what-happens-next/after-form-sent')
})

// After-form-sent > end claim and clear session
router.post('/pip-register/what-happens-next/after-form-sent', function(request, response) {
    response.redirect('/pip-register/what-happens-next/application-submitted')
})

// -------------------------------------------------------------------------------------




// IGNORE BELOW THIS LINE

//routing for activities screen
router.post('/select-activities-router', function(req, response, next){

const selectActivity = req.session.data['daily-activity']

  if (selectActivity == 'prep-food') {
    validatePath(response,'/sprint-1/preparing-food/choose-method')
  }
  if (selectActivity == 'dressing') {
    validatePath(response,'/sprint-1/dressing/choose-method')
  }
  if (selectActivity == 'moving-around') {
    validatePath(response,'/sprint-1/moving-around/choose-method')
  }

  else {
    validatePath(response,'/sprint-1/preparing-food/choose-method')
  }
})

//routing for choose method prep food screen
router.post('/choose-method-router', function(req, response, next){

    const chooseMethod = req.session.data['choose-method-preparing-food']

      if (chooseMethod == 'nhs') {
        validatePath(response,'/sprint-1/ask-nhs/preparing-food')
      }
      if (chooseMethod == 'someone-i-know') {
        validatePath(response,'/sprint-1/vouch-for-me/preparing-food')
      }
      if (chooseMethod == 'diary') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/problems-prep-food')
      }

      else {
        validatePath(response,'/sprint-1/preparing-food/choose-method')
      }
    })

  //routing for choose method dressing screen
router.post('/choose-method-dressing-router', function(req, response, next){

  const chooseMethod = req.session.data['choose-method-dressing']

    if (chooseMethod == 'nhs') {
      validatePath(response,'/sprint-1/ask-nhs/dressing')
    }
    if (chooseMethod == 'someone-i-know') {
      validatePath(response,'/sprint-1/vouch-for-me/dressing')
    }
    if (chooseMethod == 'diary') {
      validatePath(response,'/sprint-1/dressing/diary/good/problems-dressing')
    }

    else {
      validatePath(response,'/sprint-1/dressing/choose-method')
    }
  })

  //routing for choose method moving around screen
  router.post('/choose-method-moving-around-router', function(req, response, next){

    const chooseMethod = req.session.data['choose-method-moving-around']

      if (chooseMethod == 'nhs') {
        validatePath(response,'/sprint-1/ask-nhs/moving-around')
      }
      if (chooseMethod == 'someone-i-know') {
        validatePath(response,'/sprint-1/vouch-for-me/moving-around')
      }
      if (chooseMethod == 'diary') {
        validatePath(response,'/sprint-1/moving-around/diary/good/problems-moving-around')
      }

      else {
        validatePath(response,'/sprint-1/moving-around/choose-method')
      }
    })

//routing for how to contact screen
router.post('/how-contact-router', function(req, response, next){

    const howContact = req.session.data['how-contact']

      if (howContact == 'email') {
        validatePath(response,'/sprint-1/vouch-for-me/email')
      }
      if (howContact == 'phone') {
        validatePath(response,'/sprint-1/vouch-for-me/phone')
      }
      if (howContact == 'text') {
        validatePath(response,'/sprint-1/vouch-for-me/mobile')
      }
      if (howContact == 'letter') {
        validatePath(response,'/sprint-1/vouch-for-me/address')
      }

      else {
        validatePath(response,'/sprint-1/vouch-for-me/email')
      }
    })

//DIARY ROUTES

//GOOD DAY

//GOOD DAY PREP FOOD

//routing for food prep problems on a good day screen
router.post('/good-problems-prep-food-router', function(req, response, next){

    const problemsFoodGood = req.session.data['problems-food']

      if (problemsFoodGood == 'good-pain') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/pain-preparing-food')
      }
      if (problemsFoodGood == 'tired') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/pain-preparing-food')
      }
      if (problemsFoodGood == 'good-hurt') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/hurt-preparing-food')
      }

      if (problemsFoodGood == 'good-supervision') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/supervision-preparing-food')
      }
      if (problemsFoodGood == 'good-help') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/supervision-preparing-food')
      }

      if (problemsFoodGood == 'good-reminder') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/reminder-preparing-food')
      }
      if (problemsFoodGood == 'good-unable') {
        validatePath(response,'/sprint-1/preparing-food/diary/good/unable-preparing-food')
      }

      else {
        validatePath(response,'/sprint-1/preparing-food/diary/good/pain-preparing-food')
      }
    })

//GOOD DAY DRESS AND UNDRESS

//routing for dressing problems on a good day screen
router.post('/good-problems-dressing-router', function(req, response, next){

  const problemsDressingGood = req.session.data['problems-dressing']

    if (problemsDressingGood == 'good-pain') {
      validatePath(response,'/sprint-1/dressing/diary/good/pain-dressing')
    }
    if (problemsDressingGood == 'good-tired') {
      validatePath(response,'/sprint-1/dressing/diary/good/pain-dressing')
    }
    if (problemsDressingGood == 'good-hurt') {
      validatePath(response,'/sprint-1/dressing/diary/good/hurt-dressing')
    }

    if (problemsDressingGood == 'good-supervision') {
      validatePath(response,'/sprint-1/dressing/diary/good/supervision-dressing')
    }
    if (problemsDressingGood == 'good-help') {
      validatePath(response,'/sprint-1/dressing/diary/good/supervision-dressing')
    }

    if (problemsDressingGood == 'good-reminder') {
      validatePath(response,'/sprint-1/dressing/diary/good/reminder-dressing')
    }
    if (problemsDressingGood == 'good-unable') {
      validatePath(response,'/sprint-1/dressing/diary/good/unable-dressing')
    }

    else {
      validatePath(response,'/sprint-1/dressing/diary/good/pain-dressing')
    }
  })

//GOOD DAY MOVE AROUND

//routing for moving-around problems on a good day screen
router.post('/good-problems-moving-around-router', function(req, response, next){

  const problemsMovingAroundGood = req.session.data['problems-moving-around']

    if (problemsMovingAroundGood == 'good-pain') {
      validatePath(response,'/sprint-1/moving-around/diary/good/pain-moving-around')
    }
    if (problemsMovingAroundGood == 'good-tired') {
      validatePath(response,'/sprint-1/moving-around/diary/good/pain-moving-around')
    }
    if (problemsMovingAroundGood == 'good-hurt') {
      validatePath(response,'/sprint-1/moving-around/diary/good/hurt-moving-around')
    }

    if (problemsMovingAroundGood == 'good-supervision') {
      validatePath(response,'/sprint-1/moving-around/diary/good/supervision-moving-around')
    }
    if (problemsMovingAroundGood == 'good-help') {
      validatePath(response,'/sprint-1/moving-around/diary/good/supervision-moving-around')
    }

    if (problemsMovingAroundGood == 'good-reminder') {
      validatePath(response,'/sprint-1/moving-around/diary/good/reminder-moving-around')
    }
    if (problemsMovingAroundGood == 'good-unable') {
      validatePath(response,'/sprint-1/moving-around/diary/good/unable-moving-around')
    }

    else {
      validatePath(response,'/sprint-1/moving-around/diary/good/pain-moving-around')
    }
  })

//BAD DAY

//BAD DAY PREP FOOD

//routing for food prep problems on a bad day screen
router.post('/bad-problems-prep-food-router', function(req, response, next){

    const problemsFoodBad = req.session.data['problems-food']

      if (problemsFoodBad == 'bad-pain') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      }
      if (problemsFoodBad == 'bad-tired') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      }
      if (problemsFoodBad == 'bad-hurt') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/hurt-preparing-food')
      }

      if (problemsFoodBad == 'bad-supervision') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/supervision-preparing-food')
      }
      if (problemsFoodBad == 'bad-help') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/supervision-preparing-food')
      }

      if (problemsFoodBad == 'bad-reminder') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/reminder-preparing-food')
      }
      if (problemsFoodBad == 'bad-unable') {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/unable-preparing-food')
      }

      else {
        validatePath(response,'/sprint-1/preparing-food/diary/bad/pain-preparing-food')
      }
    })

//BAD DAY DRESSING

//routing for dressing problems on a bad day screen
router.post('/bad-problems-dressing-router', function(req, response, next){

  const problemsDressingBad = req.session.data['problems-dressing']

    if (problemsDressingBad == 'bad-pain') {
      validatePath(response,'/sprint-1/dressing/diary/bad/pain-dressing')
    }

    if (problemsDressingBad == 'bad-tired') {
      validatePath(response,'/sprint-1/dressing/diary/bad/pain-dressing')
    }
    if (problemsDressingBad == 'bad-hurt') {
      validatePath(response,'/sprint-1/dressing/diary/bad/hurt-dressing')
    }

    if (problemsDressingBad == 'bad-supervision') {
      validatePath(response,'/sprint-1/dressing/diary/bad/supervision-dressing')
    }
    if (problemsDressingBad == 'bad-help') {
      validatePath(response,'/sprint-1/dressing/diary/bad/supervision-dressing')
    }

    if (problemsDressingBad == 'bad-reminder') {
      validatePath(response,'/sprint-1/dressing/diary/bad/reminder-dressing')
    }
    if (problemsDressingBad == 'bad-unable') {
      validatePath(response,'/sprint-1/dressing/diary/bad/unable-dressing')
    }

    else {
      validatePath(response,'/sprint-1/dressing/diary/bad/pain-dressing')
    }
  })

//BAD DAY MOVING AROUND

//routing for moving around problems on a bad day screen
router.post('/bad-problems-moving-around-router', function(req, response, next){

  const problemsMovingBad = req.session.data['problems-moving-around']

    if (problemsMovingBad == 'bad-pain') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/pain-moving-around')
    }
    if (problemsMovingBad == 'bad-tired') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/pain-moving-around')
    }
    if (problemsMovingBad == 'bad-hurt') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/hurt-moving-around')
    }

    if (problemsMovingBad == 'bad-supervision') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/supervision-moving-around')
    }
    if (problemsMovingBad == 'bad-help') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/supervision-moving-around')
    }

    if (problemsMovingBad == 'bad-reminder') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/reminder-moving-around')
    }
    if (problemsMovingBad == 'bad-unable') {
      validatePath(response,'/sprint-1/moving-around/diary/bad/unable-moving-around')
    }

    else {
      validatePath(response,'/sprint-1/moving-around/diary/bad/pain-moving-around')
    }
  })

  // hypothesis 1 v1 routes

  //activity selector routing

  router.post('/daily-activity-select', function(req, response, next){

    const dailyActivityCheck = req.session.data['daily-activity']

      if (dailyActivityCheck == 'work') {
        validatePath(response,'/h1/it1/v1/work-support')
      }
      if (dailyActivityCheck == 'travel') {
        validatePath(response,'/h1/it1/v1/travel-support')
      }
      if (dailyActivityCheck == 'shopping') {
        validatePath(response,'/h1/it1/v1/shopping-support')
      }
      if (dailyActivityCheck == 'housework') {
        validatePath(response,'/h1/it1/v1/housework-support')
      }
      if (dailyActivityCheck == 'medical-appointments') {
        validatePath(response,'/h1/it1/v1/medical-support')
      }
      if (dailyActivityCheck == 'prepare-meals') {
        validatePath(response,'/h1/it1/v1/food-support')
      }
      if (dailyActivityCheck == 'budgeting') {
        validatePath(response,'/h1/it1/v1/budgeting-support')
      }
      else {
        validatePath(response,'/h1/it1/v1/none')
      }
    })

            // work

            router.post('/work-router', function(req, response, next){

              const workCheck = req.session.data['work-help']

                if (workCheck == 'need-help') {
                  validatePath(response,'/h1/it1/v1/work-help')
                }
                if (workCheck == 'use-aids') {
                  validatePath(response,'/h1/it1/v1/work-aids')
                }
                else {
                  validatePath(response,'/h1/it1/v1/food-support')
                }
              })

 // travel

    router.post('/travel-router', function(req, response, next){

      const travelCheck = req.session.data['travel-help']

        if (travelCheck == 'need-help') {
          validatePath(response,'/h1/it1/v1/travel-help')
        }
        if (travelCheck == 'use-aids') {
          validatePath(response,'/h1/it1/v1/travel-aids')
        }
        else {
          validatePath(response,'/h1/it1/v1/shopping-support')
        }
      })


      // shopping


    router.post('/shopping-router', function(req, response, next){

      const shoppingCheck = req.session.data['shopping-help']

        if (shoppingCheck == 'need-help') {
          validatePath(response,'/h1/it1/v1/shopping-help')
        }
        if (shoppingCheck == 'use-aids') {
          validatePath(response,'/h1/it1/v1/shopping-aids')
        }
        else {
          validatePath(response,'/h1/it1/v1/housework-support')
        }
      })


      // housework


    router.post('/housework-router', function(req, response, next){

      const houseworkCheck = req.session.data['housework-help']

        if (houseworkCheck == 'need-help') {
          validatePath(response,'/h1/it1/v1/housework-help')
        }
        if (houseworkCheck == 'use-aids') {
          validatePath(response,'/h1/it1/v1/housework-aids')
        }
        else {
          validatePath(response,'/h1/it1/v1/medical-support')
        }
      })


        // medical appointments


      router.post('/medical-router', function(req, response, next){

        const medicalCheck = req.session.data['medical-help']

          if (medicalCheck == 'need-help') {
            validatePath(response,'/h1/it1/v1/medical-help')
          }
          if (medicalCheck == 'use-aids') {
            validatePath(response,'/h1/it1/v1/medical-aids')
          }
          else {
            validatePath(response,'/h1/it1/v1/work-support')
          }
        })




    // preparing food



          router.post('/food-router', function(req, response, next){

            const workCheck = req.session.data['food-help']

              if (workCheck == 'need-help') {
                validatePath(response,'/h1/it1/v1/food-help')
              }
              if (workCheck == 'use-aids') {
                validatePath(response,'/h1/it1/v1/food-aids')
              }
              else {
                validatePath(response,'/h1/it1/v1/budgeting-support')
              }
            })

    // budgeting



    router.post('/budgeting-router', function(req, response, next){

    const budgetingCheck = req.session.data['budgeting-help']

      if (budgetingCheck == 'need-help') {
        validatePath(response,'/h1/it1/budgeting-help')
      }
      if (budgetingCheck == 'use-aids') {
        validatePath(response,'/h1/it1/budgeting-aids')
      }
      else {
        validatePath(response,'/h1/it1/cya')
      }
    })


  // v2 routes

  // travelling

  router.get(/travelSelect/ , function (req, response) {
    if (req.query.radioGroup === "yes") {
        validatePath(response,'travel-support')
    }
    else {
        validatePath(response,'travel-no')
    }
})

router.post('/travel-how-router', function(req, response, next){

  const travelCheck = req.session.data['travel-help']

    if (travelCheck == 'need-help') {
      validatePath(response,'/h1/it1/travel-help')
    }
    if (travelCheck == 'use-aids') {
      validatePath(response,'/h1/it1/travel-aids')
    }
    else {
      validatePath(response,'/h1/it1/shopping')
    }
  })


  // shopping

  router.get(/shoppingSelect/ , function (req, response) {
    if (req.query.radioGroup === "yes") {
        validatePath(response,'shopping-support')
    }
    else {
        validatePath(response,'shopping-no')
    }
})

router.post('/shopping-how-router', function(req, response, next){

  const shoppingCheck = req.session.data['shopping-help']

    if (shoppingCheck == 'need-help') {
      validatePath(response,'/h1/it1/shopping-help')
    }
    if (shoppingCheck == 'use-aids') {
      validatePath(response,'/h1/it1/shopping-aids')
    }
    else {
      validatePath(response,'/h1/it1/housework')
    }
  })


  // housework

  router.get(/houseworkSelect/ , function (req, response) {
    if (req.query.radioGroup === "yes") {
        validatePath(response,'housework-support')
    }
    else {
        validatePath(response,'housework-no')
    }
})

router.post('/housework-how-router', function(req, response, next){

  const houseworkCheck = req.session.data['housework-help']

    if (houseworkCheck == 'need-help') {
      validatePath(response,'/h1/it1/housework-help')
    }
    if (houseworkCheck == 'use-aids') {
      validatePath(response,'/h1/it1/housework-aids')
    }
    else {
      validatePath(response,'/h1/it1/medical-appts')
    }
  })


    // medical appointments

    router.get(/medicalApptsSelect/ , function (req, response) {
      if (req.query.radioGroup === "yes") {
          validatePath(response,'medical-support')
      }
      else {
          validatePath(response,'medical-no')
      }
  })

  router.post('/medical-how-router', function(req, response, next){

    const medicalCheck = req.session.data['medical-help']

      if (medicalCheck == 'need-help') {
        validatePath(response,'/h1/it1/medical-help')
      }
      if (medicalCheck == 'use-aids') {
        validatePath(response,'/h1/it1/medical-aids')
      }
      else {
        validatePath(response,'/h1/it1/work')
      }
    })

        // work

        router.get(/workSelect/ , function (req, response) {
          if (req.query.radioGroup === "yes") {
              validatePath(response,'work-support')
          }
          else {
              validatePath(response,'work-no')
          }
      })

      router.post('/work-how-router', function(req, response, next){

        const workCheck = req.session.data['work-help']

          if (workCheck == 'need-help') {
            validatePath(response,'/h1/it1/work-help')
          }
          if (workCheck == 'use-aids') {
            validatePath(response,'/h1/it1/work-aids')
          }
          else {
            validatePath(response,'/h1/it1/food')
          }
        })


// preparing food

        router.get(/foodSelect/ , function (req, response) {
          if (req.query.radioGroup === "yes") {
              validatePath(response,'food-support')
          }
          else {
              validatePath(response,'food-no')
          }
      })

      router.post('/food-how-router', function(req, response, next){

        const workCheck = req.session.data['food-help']

          if (workCheck == 'need-help') {
            validatePath(response,'/h1/it1/food-help')
          }
          if (workCheck == 'use-aids') {
            validatePath(response,'/h1/it1/food-aids')
          }
          else {
            validatePath(response,'/h1/it1/budgeting')
          }
        })

// budgeting

router.get(/budgetingSelect/ , function (req, response) {
  if (req.query.radioGroup === "yes") {
      validatePath(response,'budgeting-support')
  }
  else {
      validatePath(response,'budgeting-no')
  }
})

router.post('/budgeting-how-router', function(req, response, next){

const budgetingCheck = req.session.data['budgeting-help']

  if (budgetingCheck == 'need-help') {
    validatePath(response,'/h1/it1/budgeting-help')
  }
  if (budgetingCheck == 'use-aids') {
    validatePath(response,'/h1/it1/budgeting-aids')
  }
  else {
    validatePath(response,'/h1/it1/cya')
  }
})

// Logging session data
 
 
router.use((req, response, next) => {
const log = {
method: req.method,
url: req.originalUrl,
data: req.session.data
}
console.log(JSON.stringify(log, null, 2))
 
next()
})

//export routes

module.exports = router;