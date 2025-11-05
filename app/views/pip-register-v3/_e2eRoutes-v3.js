// add motability routes here



module.exports = function (folderForViews, urlPrefix, router) {

const validatePath = require('./validatePath.js')
 

  // GB Telephony routes

  // DEV READY

  // Eligibility launched from main UI
  router.post(`/${folderForViews}/signposting-eligibility/service-start-page`, function (request, response) {
    var newApp = request.session.data['new-app']
    if (newApp == 'yes') {
      response.redirect(`/${folderForViews}/signposting-eligibility/what-is-your-name`)
    } else if (newApp == "no") {
      response.redirect(`/${folderForViews}/signposting-eligibility/existing-claims`)
    }
  })

router.post('/whatIsYourName', function (request, response) {
  const firstName = request.session.data['first-name'];
  const lastName = request.session.data['last-name'];

  response.redirect(`/${folderForViews}/signposting-eligibility/new-application`);
});



  router.post(`/${folderForViews}/signposting-eligibility/new-application`, function (request, response) {
    var gbPIP = request.session.data['gb-pip']
    if (gbPIP == 'yes') {
      response.redirect(`/${folderForViews}/signposting-eligibility/claiming-self`)
    } else if (gbPIP == "n-ireland") {
      response.redirect(`/${folderForViews}/signposting-eligibility/northern-ireland`)
    } else if (gbPIP == "scotland") {
      response.redirect(`/${folderForViews}/signposting-eligibility/scotland`)
    }
    else if (gbPIP == "other-country") {
      response.redirect(`/${folderForViews}/signposting-eligibility/other-country`)
    }

      else {
    response.redirect(`/${folderForViews}/signposting-eligibility/new-application`)
    }

  })

  router.post(`/${folderForViews}/signposting-eligibility/claiming-self`, function (request, response) {
    var claimingSelf = request.session.data['claiming-self']
    if (claimingSelf == 'myself') {
      response.redirect(`/${folderForViews}/signposting-eligibility/srel`)
    } else if (claimingSelf == "someone-else") {
      response.redirect(`/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`)
    }
    else if (claimingSelf == "unofficial") {
      response.redirect(`/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`)
    }
    else if (claimingSelf == "external") {
      response.redirect(`/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`)
    }

    
  })

  //external route

  router.post(`/${folderForViews}/external-route`, function (request, response) {
    var externalRoute = request.session.data['external-route']
    if (externalRoute == "friendFamily") {
      response.redirect(`/${folderForViews}/signposting-eligibility/answer-questions-as-person`)
    }
    else if (externalRoute == "org") {
      response.redirect(`/${folderForViews}/signposting-eligibility/answer-questions-as-person`)
    }
    else if (externalRoute == "attorney") {
      response.redirect(`/${folderForViews}/signposting-eligibility/authority`)
    }
    else if (externalRoute == "appointee") {
      response.redirect(`/${folderForViews}/signposting-eligibility/authority`)
    }
    else if (externalRoute == "wantAppointee") {
      response.redirect(`/${folderForViews}/signposting-eligibility/authority`)
    }
    else if (externalRoute == "corp") {
      response.redirect(`/${folderForViews}/signposting-eligibility/authority`)
    }
    else if (externalRoute == "curator") {
      response.redirect(`/${folderForViews}/signposting-eligibility/authority`)
    }
    
  })

router.post(`/${folderForViews}/inRoom`, function (request, response) {
  var externalRoute = request.session.data['inRoom'];

  if (externalRoute == "yes") {
    response.redirect(`/${folderForViews}/signposting-eligibility/over-16`);
  } else if (externalRoute == "no") {
    response.redirect(`/${folderForViews}/signposting-eligibility/not-in-room`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/inRoom`);
  }
})

  //last 12 months
  router.post(`/${folderForViews}/last-12-months`, function (request, response) {
    var externalRoute = request.session.data['last12months']
    if (externalRoute == "yes") {
      response.redirect(`/pip-register-v3/signposting-eligibility/dla-now`)
    }
    else if (externalRoute == "no") {
      response.redirect(`/pip-register-v3/signposting-eligibility/stop-getting-pip-last-year`)
    }
    console.log('last12months value:', request.session.data['last12months']);
console.log('Redirecting to:', folderForViews);
  })


//what-is-ni-number-3
router.post(`/${folderForViews}/what-is-ni-number-3`, function (request, response) {
  var externalRoute = request.session.data['ni3']
  if (externalRoute == "same-dob") {
    response.redirect(`/pip-register-v3/signposting-eligibility/appointee`)
  }
  else if (externalRoute == "different-dob") {
    response.redirect(`/pip-register-v3/signposting-eligibility/no-match-ni-kickout`)
  }
  else if (externalRoute == "scr") {
    response.redirect(`/pip-register-v3/signposting-eligibility/scr-kickout`)
  }
  else if (externalRoute == "no-searchlight") {
    response.redirect(`/pip-register-v3/signposting-eligibility/no-match-ni-kickout`)
  }
  console.log('ni3 value:', request.session.data['ni3']);
  console.log('Redirecting to:', folderForViews);
})

  //appointee
  router.post(`/${folderForViews}/appointee`, function (request, response) {
    var externalRoute = request.session.data['appointeeYn']
    if (externalRoute == "yes") {
      response.redirect(`/pip-register-v3/signposting-eligibility/appointee-kickout`)
    }
    else if (externalRoute == "no") {
      response.redirect(`/pip-register-v3/signposting-eligibility/security-check`)
    }
    console.log('appointeeYn value:', request.session.data['appointeeYn']);
console.log('Redirecting to:', folderForViews);
  })



  //DLA now
  router.post(`/${folderForViews}/signposting-eligibility/dla-now`, function (request, response) {
    var dlaNow = request.session.data['dlaNow']
    if (dlaNow == "yes") {
      response.redirect(`/${folderForViews}/signposting-eligibility/dla-payments`)
    }
    else if (dlaNow == "no") {
      response.redirect(`/${folderForViews}/signposting-eligibility/what-is-ni-number`)
    }
  })

  // Are you over 16 and under SPA?
  router.post(`/${folderForViews}/signposting-eligibility/over-16`, function (request, response) {
    var correctAge = request.session.data['age']
    if (correctAge == 'yes') {
      response.redirect(`/${folderForViews}/signposting-eligibility/dla-now`)
    } else if (correctAge == "no-under-16") {
      response.redirect(`/${folderForViews}/signposting-eligibility/under-16-ineligible`)
    } else if (correctAge == "no-over-spa") {
      response.redirect(`/${folderForViews}/signposting-eligibility/last-12-months`)
    }
  })

  // Claiming under SREL?
  router.post(`/${folderForViews}/signposting-eligibility/srel`, function (request, response) {
    var srel = request.session.data['srel']
    if (srel == 'yes') {
      response.redirect(`/${folderForViews}/signposting-eligibility/srel-bau-kickout`)
    } else if (srel == "no") {
      response.redirect(`/${folderForViews}/signposting-eligibility/over-16`)
    }
  })

  //NI
  router.post(`/${folderForViews}/signposting-eligibility/what-is-ni-number`, function (request, response) {
    response.redirect(`/${folderForViews}/signposting-eligibility/what-is-ni-number-2`)
  })
  
router.post(`/${folderForViews}/signposting-eligibility/what-is-ni-number-2`, function (request, response) {
  response.redirect(`/${folderForViews}/signposting-eligibility/what-is-ni-number-3`);
});

  //
  //Serchlight check
  router.post(`/${folderForViews}/signposting-eligibility/searchlight-check`, function (request, response) {
    response.redirect(`/${folderForViews}/signposting-eligibility/security-check`)
  })

  //welcome-screen


  // How many security questions were answered?

router.post(`/${folderForViews}/signposting-eligibility/security-check`, function (request, response) {
  var secVerified = request.session.data['security-verified'];

  if (secVerified == '2correct') {
    response.redirect(`/${folderForViews}/welcome-screen`);
 
  } else if (secVerified == '1correct') {
    response.redirect(`/${folderForViews}/signposting-eligibility/failed-security`);
  
  } else if (secVerified == 'none') {
    response.redirect(`/${folderForViews}/signposting-eligibility/failed-security`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/signposting-eligibility/security-check`);
  }
})


  router.post(`/${folderForViews}/signposting-eligibility/failed-security`, function (request, response) {
    response.redirect(`/${folderForViews}/welcome-screen`)
  })



  //---------------------------------------------------------------------------------------------

  // Welcome screens

  // Welcome screen GB
  router.post(`/${folderForViews}/welcome-screen`, function (request, response) {
    response.redirect(`/${folderForViews}/declaration`)
  })

  // // Welcome screen 2
  // router.post(`/${folderForViews}/welcome-screens/welcome-screen-ni-2', function(request, response) {
  //     response.redirect(`/${folderForViews}/welcome-screens/welcome-screen-ni-3')
  // })
  //
  // // Welcome screen 3
  // router.post(`/${folderForViews}/welcome-screens/welcome-screen-ni-3', function(request, response) {
  //     response.redirect(`/${folderForViews}/declaration')
  // })

  //---------------------------------------------------------------------------------------------

  // Declaration
  router.post(`/${folderForViews}/declaration`, function (request, response) {
    response.redirect(`/${folderForViews}/task-list`)
  })

  // --------------------------------------------------------------------------------------

  //pip-register/Contact-details

  // What is your name

  router.post(`/${folderForViews}/whatIsYourName`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/what-is-your-postcode`)
  })

  //Do you have a previous surname?
  router.post(`/${folderForViews}/previousNameYesNo`, function (request, response) {
    var previousNameYesNo = request.session.data['previousNameYesNo']
    if (previousNameYesNo == 'Yes') {
      response.redirect(`/${folderForViews}/contact-details/what-is-your-previous-surname`)
    } else if (previousNameYesNo == 'No') {
      response.redirect(`/${folderForViews}/contact-details/what-is-your-dob`)
    }
  })

  // What is your previous surname
  router.post(`/${folderForViews}/whatIsYourPreviousSurname`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/what-is-your-dob`)
  })

  // What is your DOB
  router.post(`/${folderForViews}/contact-details/what-is-your-dob`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/what-is-your-postcode`)
  })

  // What is your postcode page
  router.post(`/${folderForViews}/contact-details/what-is-your-postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/select-your-address`)
  })

  // Select your address page
  router.post(`/${folderForViews}/contact-details/select-your-address`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/confirm`)
  })

  // Enter address manually page
  router.post(`/${folderForViews}/contact-details/enter-address-manually-country`, function (_request, response) {
    response.redirect(`/${folderForViews}/contact-details/correspondence-address`)
  })

  // Confirm address
  router.post(`/${folderForViews}/contact-details/confirm`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/correspondence-address`)
  })


  // Is this the address we should send letters to page
  router.post(`/${folderForViews}/contact-details/correspondence-address`, function (request, response) {
    var sendLettersElsewhere = request.session.data['should-we-write-to-you']
    if (sendLettersElsewhere == 'yes') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
    } else if (sendLettersElsewhere == 'no') {
      response.redirect(`/${folderForViews}/contact-details/correspondence-postcode`)
    } else if (sendLettersElsewhere == 'No, I dont have a home address') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
    }
  })

  // What is your correspondence postcode page
  router.post(`/${folderForViews}/contact-details/correspondence-postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/confirm-correspondence-address`)
  })

  // Confirm correspondence address > correspondence alt formats page
  router.post(`/${folderForViews}/contact-details/confirm-correspondence-address`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/confirm-correspondence`)
  })

  // Confirm s > correspondence alt formats page
  router.post(`/${folderForViews}/contact-details/confirm-correspondence`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
  })

  // Confirm correspondence address page
  router.post(`/${folderForViews}/contact-details/correspondence-enter-address-manually`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
  })

  // What is your phone number page
  router.post(`/${folderForViews}/contact-details/what-is-your-phone-number`, function (request, response) {
    response.redirect("contact-details/contact-details-summary")
  })

  //Do you have a mobile number
  router.post(`/${folderForViews}/mobile`, function (request, response) {
    var mobileYesNo = request.session.data['mobileYesNo']
    if (mobileYesNo == 'Yes') {
      response.redirect(`/${folderForViews}/contact-details/what-is-your-phone-number`)
    } else if (mobileYesNo == 'No') {
      response.redirect(`/${folderForViews}/contact-details/other-number`)
    }
  })

  // What is your other number?
  router.post(`/${folderForViews}/contact-details/what-is-your-other-phone-number`, function (request, response) {
    response.redirect("contact-details/contact-details-summary")
  })

  // Do you want to receive text updates
  router.post(`/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/what-is-your-phone-number`)
  })

  // Do you have another number
  router.post(`/${folderForViews}/otherNumber`, function (request, response) {
    var otherNumberYesNo = request.session.data['otherNumberYesNo']
    if (otherNumberYesNo == 'Yes') {
      response.redirect(`/${folderForViews}/contact-details/what-is-your-other-phone-number`)
    } else if (otherNumberYesNo == 'No') {
      response.redirect(`/${folderForViews}/contact-details/contact-details-summary`)
    }
  })

  // Contact details summary
  router.post(`/${folderForViews}/contact-details/contact-details-summary`, function (request, response) {
    response.redirect(`/${folderForViews}/additional-support/start-info`)
  })

  // Contact details summary
  router.post(`/${folderForViews}/contact-details/contact-details-summary`, function (request, response) {
    response.redirect(`/${folderForViews}/additional-support/start-info`)
  })

  //Alt formats

  router.post(`/${folderForViews}/large-print`, function (req, response) {
    const selectedOptions = req.session.data['largePrint'];

    // Handle no selection
    if (!selectedOptions) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`);
    }

    // Normalize to array
    const options = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];

    // If "neither" is selected, ignore other options and redirect to 'none'
    if (options.includes('none')) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`);
    }

    // If both A and B are selected, go to a summary page
    if (options.includes('coloured-paper') && options.includes('large-print')) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/what-size-print-do-you-need`);
    }

    // If only coloured paper (A)
    if (options.includes('coloured-paper')) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/what-colour-paper-do-you-need`);
    }

    // If only large print (B)
    if (options.includes('large-print')) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/what-size-print-do-you-need`);
    }

    // Fallback
    response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`);
  });


  //font
  router.post(`/${folderForViews}/font`, function (req, response) {
    //Store response
    var font = req.session.data['font'];

    //Redirect
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-colour-paper-do-you-need`);
  })

  //Paper
  router.post(`/${folderForViews}/paper`, function (req, response) {
    //Store response
    var paper = req.session.data['paper'];

    

    //Redirect
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-size-print-do-you-need`);
  })

  //Audio format
  router.post(`/${folderForViews}/audio`, function (request, response) {
    var audio = request.session.data['audio']
    if (audio == 'CD') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    } else if (audio == 'MP3 by email') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/what-is-your-email`)
    } else if (audio == 'USB stick') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    } else if (audio == 'Casette tape') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    } else if (audio == 'DVD') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    }
  })

  //Video format
  router.post(`/${folderForViews}/video`, function (request, response) {
    var audio = request.session.data['video']

    // Handle no selection
    if (video) {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    }

    if (video === 'DVD') {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
    } else if (video === 'MPEG file by email') {
      return response.redirect(`/${folderForViews}/contact-details/alt-formats/what-is-your-email`)
    }

    // Fallback
    response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`)
  })

  //How should we contact you if we need to speak to you?
  router.post(`/${folderForViews}/contact`, function (request, response) {
    var contact = request.session.data['contact']
    if (contact == 'Standard phone call') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/any-other-help-when-we-contact`)
    } else if (contact == 'Relay UK') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/what-is-relay-uk-number`)
    } else if (contact == 'Textphone') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/what-is-your-textphone-number`)
    } else if (contact == 'Signing or lipspeaking') {
      response.redirect(`/${folderForViews}/contact-details/alt-formats/signing-lipspeaking`)
    }
  })

  //Do you need any other help when we contact you?
router.post(`/${folderForViews}/other-help`, function (request, response) {
  var otherHelp = request.session.data['other-help'];

  if (otherHelp === 'Yes') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-other-help-when-we-contact`);
  } else if (otherHelp === 'No') {
    response.redirect(`/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/contact-details/contact-details-summary`);
  }
});

  // pip-register/ADDITIONAL-SUPPORT

  router.post(`/${folderForViews}/contact-details/what-other-help-when-we-contact`, function (request, response) {
    var otherHelpDetails = request.session.data['other-help-details'];
    // You can log or use this data if needed
    response.redirect(`/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`);
  });

  //What is your phone number - 2
  router.post(`/${folderForViews}/contact-details/what-is-your-phone-2`, function (request, response) {
    var extraPhone = request.session.data['extraPhone'];

    if (extraPhone === 'yes') {
      response.redirect(`/${folderForViews}/contact-details/what-is-your-phone-3`);
    } else if (extraPhone === 'no') {
      response.redirect(`/${folderForViews}/contact-details/contact-details-summary`);
    } else {
      response.redirect(`/${folderForViews}/contact-details/contact-details-summary`);
    }
  });

  // start
  router.post(`/${folderForViews}/additional-support/start-info`, function (request, response) {
    response.redirect(`/${folderForViews}/additional-support/do-you-have-a-condition`)
  })

  // do you have a condition
  router.post(`/${folderForViews}/additional-support/do-you-have-a-condition`, function (request, response) {
    var anyCondition = request.session.data['any-condition']
    if (anyCondition == 'yes') {
      response.redirect(`/${folderForViews}/additional-support/complete-forms`)
    } else if (anyCondition == 'no') {
      response.redirect(`/${folderForViews}/additional-support/helpers`)
    }
  })

  // can you complete forms - working
  router.post(`/${folderForViews}/additional-support/complete-forms`, function (request, response) {
    var forms = request.session.data['forms']

    if (forms === 'no') {
      response.redirect(`/${folderForViews}/additional-support/helpers`)
    } else if (forms === 'yes') {
      response.redirect(`/${folderForViews}/additional-support/read-letters`)
    } else {
      // fallback if nothing selected
      response.redirect(`/${folderForViews}/additional-support/complete-forms`)
    }
  })

  // not working

  router.post(`/${folderForViews}/additional-support/read-letters`, function (request, response) {
    var forms = request.session.data['forms'];
    var letters = request.body.letters;

    if (letters === 'no') {
      response.redirect(`/${folderForViews}/additional-support/helpers`);
    } else if (letters === 'yes') {
      response.redirect(`/${folderForViews}/additional-support/post`);
    } else {
      // fallback if nothing selected
      response.redirect(`/${folderForViews}/additional-support/complete-forms`);
    }
  });


  router.post(`/${folderForViews}/additional-support/post`, function (request, response) {
    var post = request.session.data['post']
    if (post == 'yes') {
      response.redirect(`/${folderForViews}/additional-support/add-support-summary`)
    } else if (post == 'no') {
      response.redirect(`/${folderForViews}/additional-support/helpers`)
    }
  })

  // Do you have anyone to help you?
  router.post(`/${folderForViews}/additional-support/helpers`, function (request, response) {
    var anyoneHelp = request.session.data['helpers']
    if (anyoneHelp == 'yes') {
      response.redirect(`/${folderForViews}/additional-support/who`)
    } else if (anyoneHelp == 'no') {
      response.redirect(`/${folderForViews}/additional-support/support-no-help`)
    }

    else {
    response.redirect(`/${folderForViews}/additional-support/helpers`)
    }

  })


router.post(`/${folderForViews}/additional-support/who-helps`, function (_request, response) {
  response.redirect(`/${folderForViews}/additional-support/who`)
})


  router.post(`/${folderForViews}/additional-support/support-no-help`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
  })
  router.post(`/${folderForViews}/additional-support/support-with-help`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`)
  })
  // -------------------------------------------------------------------------------------




  // Would you like us to send your letters in another way, like larger text, audio or braille?
router.post(`/${folderForViews}/contact-details/alt-formats/written-format`, function (request, response) {
  var writtenFormat = request.session.data['written-format'];
  console.log('writtenFormat: ' + writtenFormat);

  if (writtenFormat === 'Standard letter (12-point Arial text on white paper)') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`);
  } else if (writtenFormat === 'Letter with changes to colour or print size') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/large-print`);
  } else if (writtenFormat === 'Audio') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-type-of-audio-format`);
  } else if (writtenFormat === 'Braille') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-type-of-braille-do-you-need`);
  } else if (writtenFormat === 'British Sign Language video') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-video-format-do-you-need`);
  } else if (writtenFormat === 'Email') {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/email-reason`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/contact-details/alt-formats/written-format`);
  }
})
  // What size print do you need?
  router.post(`/${folderForViews}/contact-details/alt-formats/large-print`, function (request, response) {
    response.redirect(`/${folderForViews}/additional-support/add-support-summary`)
  })

  // Why do you need us to contact you by email instead of printed letters?
  router.post(`/${folderForViews}/contact-details/alt-formats/email-reason`, function (request, response) {
    response.redirect(`/${folderForViews}/contact-details/alt-formats/what-is-your-email`)
  })

  // What is your email address?
  router.post(`/${folderForViews}/contact-details/alt-formats/what-is-your-email`, function (request, response) {
    response.redirect(`/${folderForViews}/additional-support/add-support-summary`)
  })

  // Summary
  router.post(`/${folderForViews}/additional-support/add-support-summary`, function (request, response) {
    response.redirect(`/${folderForViews}/nationality/start`)
  })

  //pip-register/NATIONALITY

  //MTP APRIL RELEASE - NATIONALITY
  //pip-register/nationality

  //start
  router.post(`/${folderForViews}/nationality/start`, function (request, response) {
    response.redirect(`/${folderForViews}/nationality/what-is-your-nationality`)
  })

  //what is your nationality
  router.post(`/${folderForViews}/nationality/what-is-your-nationality`, function (request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british') {
      response.redirect(`/${folderForViews}/nationality/uk-2-of-3-years`)
    } else if (nationality == 'irish') {
      response.redirect(`/${folderForViews}/nationality/uk-2-of-3-years`)
    } else if (nationality == 'eea') {
      response.redirect(`/${folderForViews}/nationality/eea-nationality`)
    } else if (nationality == 'other') {
      response.redirect(`/${folderForViews}/nationality/another-nationality`)
    }
  })

  //Have you been in the UK for at least 2 of the last 3 years?
  router.post(`/${folderForViews}/nationality/uk-2-of-3-years`, function (request, response) {
    var ukYears = request.session.data['uk-years']
    if (ukYears == 'yes') {
      response.redirect(`/${folderForViews}/nationality/benefits-abroad`)
    } else if (ukYears == 'no') {
      response.redirect(`/${folderForViews}/nationality/benefits-abroad`)
    } else if (ukYears == 'unsure') {
      response.redirect(`/${folderForViews}/nationality/insurance-abroad`)
    }
  })

  //Have you left the UK for more than 4 weeks at a time, in the last 3 years?
  router.post(`/${folderForViews}/leftUK`, function (request, response) {
    var leftUK = request.session.data['leftUK']
    if (leftUK == 'yes') {
      response.redirect(`/${folderForViews}/nationality/where`)
    } else if (leftUK == 'no') {
      response.redirect(`/${folderForViews}/nationality/benefits-abroad`)
    }
  })

  //Select eea nationality
  router.post(`/${folderForViews}/nationality/eea-nationality`, function (request, response) {
    response.redirect(`/${folderForViews}/nationality/living-in-uk`)
  })

  //Select other nationality
  router.post(`/${folderForViews}/nationality/another-nationality`, function (request, response) {
    var anotherNationality = request.session.data['another-nationality']
    if (anotherNationality == 'Norway' || anotherNationality == 'Iceland') {
      response.redirect(`/${folderForViews}/nationality/living-in-uk`)
    }
    if (anotherNationality == 'Australia' || anotherNationality == 'Brazil' || anotherNationality == 'Bangladesh') {
      response.redirect(`/${folderForViews}/nationality/uk-2-of-3-years`)
    }
  })

  //Were you living in the UK on or before 31/12/20?
  router.post(`/${folderForViews}/nationality/living-in-uk`, function (request, response) {
    response.redirect(`/${folderForViews}/nationality/uk-2-of-3-years`)
  })

  //Are you working or paying national insurance in another country?

  router.post(`/${folderForViews}/nationality/insurance-abroad`, function (request, response) {
    var payingInsurance = request.session.data['insurance-abroad']
    if (payingInsurance == 'no') {
      response.redirect(`/${folderForViews}/nationality/nationality-summary`)
    } else if (payingInsurance == 'yes') {
      response.redirect(`/${folderForViews}/nationality/nationality-summary`)
    }
  })

  // Are you receiving pensions or benefits in another country?
  router.post(`/${folderForViews}/nationality/benefits-abroad`, function (request, response) {
    var payingBenefits = request.session.data['benefits-abroad']
    if (payingBenefits == 'no') {
      response.redirect(`/${folderForViews}/nationality/insurance-abroad`)
    } else if (payingBenefits == 'yes') {
      response.redirect(`/${folderForViews}/nationality/insurance-abroad`)
    }
  })

  //What country are you receiving pensions or benefits in?
router.post(`/${folderForViews}/nationality/exportability/what-country-benefits`, function (request, response) {
  const selectedCountry = request.session.data['country-benefits'];

  if (selectedCountry) {
    response.redirect(`/${folderForViews}/task-list-nat-done`);
  } else {
    // Fallback: no country selected
    response.redirect(`/${folderForViews}/nationality/exportability/what-country-benefits`);
  }
})

  //Are any of your family members receiving pensions or benefits in another country?
  router.post(`/${folderForViews}/nationality/exportability/family-receiving-benefits`, function (request, response) {
  var payingBenefits = request.session.data['family-receiving-benefits'];

  if (payingBenefits === 'no') {
    response.redirect(`/${folderForViews}/task-list-nat-done`);
  } else if (payingBenefits === 'yes') {
    response.redirect(`/${folderForViews}/nationality/exportability/family-country-benefits`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/nationality/exportability/family-receiving-benefits`);
  }
})

  //What country are your family members receiving pensions or benefits in?
  router.post(`/${folderForViews}/nationality/exportability/family-country-benefits`, function (request, response) {
    response.redirect(`/${folderForViews}/task-list-nat-done`)
  })


  //--------------------------------------------------------------------------------------------------------------
  //nationality start
  router.post(`/${folderForViews}/nationality/start`, function (request, response) {
    response.redirect(`/${folderForViews}/nationality/what-is-your-nationality`)
  })

  //what is your nationality
  router.post(`/${folderForViews}/nationality/what-is-your-nationality`, function (request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british') {
      response.redirect(`/${folderForViews}/nationality/what-country-do-you-live-in`)
    } else if (nationality == 'irish') {
      response.redirect(`/${folderForViews}/nationality/what-country-do-you-live-in`)
    } else if (nationality == 'other') {
      response.redirect(`/${folderForViews}/nationality/another-nationality`)
    }
  })

  // Another nationality
  router.post(`/${folderForViews}/versions/devs/nationality/another-nationality`, function (request, response) {
    response.redirect(`/${folderForViews}/versions/devs/nationality/what-country-do-you-live-in`)
  })

  //what country do you normally live in page
  router.post(`/${folderForViews}/versions/devs/nationality/what-country-do-you-live-in`, function (request, response) {
    var nationality = request.session.data['country']
    if (nationality == 'northern-ireland') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`)
    } else if (nationality == 'england') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`)
    } else if (nationality == 'wales') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`)
    } else if (nationality == 'scotland') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`)
    } else if (nationality == 'another-country') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/another-country-lived-in`)
    }
  })

  // Another country
  router.post(`/${folderForViews}/versions/devs/another-country-lived-in`, function (request, response) {
    response.redirect(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`)
  })


  //Have you lived anywhere other than UK in last 3 years page
  router.post(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`, function (request, response) {
    var livedElsewhere = request.session.data['lived-elsewhere']
    if (livedElsewhere == 'yes') {
      response.redirect('#')
    } else if (livedElsewhere == 'no') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/abroad-over-four-weeks`)
    }
  })

  //Have you been abroad for any periods over 4 weeks, in the last 3 years page
  router.post(`/${folderForViews}/versions/devs/nationality/abroad-over-four-weeks`, function (request, response) {
    var livedAbroad = request.session.data['abroad-over-four-weeks']
    if (livedAbroad == 'yes') {
      response.redirect('#')
    } else if (livedAbroad == 'no') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/benefits-abroad`)
    }
  })

  //benefits abroad
  router.post(`/${folderForViews}/versions/devs/nationality/benefits-abroad`, function (request, response) {
    var benefitsAbroad = request.session.data['benefits-abroad']
    if (benefitsAbroad == 'yes') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/insurance-abroad`)
    } else if (benefitsAbroad == 'no') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/insurance-abroad`)
    }
  })

  //are you or a family member working or paying insurance from Switzerland or EEA?
  router.post(`/${folderForViews}/versions/devs/nationality/insurance-abroad`, function (request, response) {
    var insuranceAbroad = request.session.data['insurance-abroad']
    if (insuranceAbroad == 'yes') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/nationality-summary`)
    } else if (insuranceAbroad == 'no') {
      response.redirect(`/${folderForViews}/versions/devs/nationality/nationality-summary`)
    }
    else {
    response.redirect(`/${folderForViews}/versions/devs/nationality/insurance-abroad`)
    }
  })

  //summary to task list
  router.post(`/${folderForViews}/versions/devs/nationality/nationality-summary`, function (request, response) {
    response.redirect(`/${folderForViews}/versions/devs/task-list-nat-done`)
  })

  // -------------------------------------------------------------------------------------

  //pip-register/HEALTHCARE-PROFESSIONAL

  //pip-register/healthcare-professional/start
  router.post(`/${folderForViews}/HCPYesNo`, function (request, response) {
    var HCPYesNo = request.session.data['HCPYesNo']
    if (HCPYesNo == 'Yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/healthcare-prof-type`)
    } else if (HCPYesNo == 'No') {
      response.redirect(`/${folderForViews}/hospital-dates/5-1-why-we-need-details`)
    }
  })


  //start ---> healthcare-prof-type
  router.post(`/${folderForViews}/healthcare-professional/start`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-1-why-we-need-details`)
  })

  //healthcare-professional/consent-2
  router.post(`/${folderForViews}/healthcare-professional/consent`, function (request, response) {
    console.log('consent:', request.body.consent);
    const consent = request.body.consent;

    if (consent === 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/start`);
    } else if (consent === 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`);
    } else {
      response.redirect(`/${folderForViews}/healthcare-professional/start`); // optional fallback
    }
  });

  //healthcare-prof-type ---> what is their postcode
  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-type`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/postcode`)
  })

  //healthcare-prof-type ---> find address
  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-type`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/healthcare-prof-details`)
  })

  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-details`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/postcode`)
  })

  //find address ---> select address
  router.post(`/${folderForViews}/healthcare-professional/postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/select-your-address`)
  })

  //select address ---> addiitonal support needed
  router.post(`/${folderForViews}/healthcare-professional/select-your-address`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/additional-support-needed`)
  })

  //enter-address-manually ----> second support needed?
  router.post(`/${folderForViews}/healthcare-professional/enter-address-manually`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/additional-support-needed`)
  })


  //additional-support-needed ---> additional-support-type
  router.post(`/${folderForViews}/healthcare-professional/additional-support-needed`, function (request, response) {
    var hcpTwoNeeded = request.session.data['support-needed']
    if (hcpTwoNeeded == 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/additional-support-type`)
    } else if (hcpTwoNeeded == 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`)
    }
  })

  //additional-support-type ---> find address
  router.post(`/${folderForViews}/healthcare-professional/additional-support-type`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/postcode-support`)
  })

  //find address ---> select address
  router.post(`/${folderForViews}/healthcare-professional/postcode-support`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/select-support-address`)
  })

  //enter-address-manually ----> hospital and accom start
  router.post(`/${folderForViews}/healthcare-professional/support-address-manually`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/consent-NI`)
  })


  //select support address ---> hospital and accom start
  router.post(`/${folderForViews}/healthcare-professional/select-support-address`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`)
  })

  //consent NI ----> hcp cya 2 person
  router.post(`/${folderForViews}/healthcare-professional/consent`, function (request, response) {
    response.redirect(`/${folderForViews}/healthcare-professional/start`)
  })

  //healthcare-professional/confirm-remove 
  router.post(`/${folderForViews}/healthcare-professional/confirm-remove`, function (request, response) {
    console.log('HCPYesNo:', request.body.HCPYesNo);
    var HCPYesNo = request.body.HCPYesNo;

    if (HCPYesNo === 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/hp-summary`);
    } else if (HCPYesNo === 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`);
    } else {
      response.redirect(`/${folderForViews}/error`); // fallback
    }
  });




  //---------------------------------------------------------------------------------
  //pip-register/HEALTHCARE-PROFESSIONAL/CYAS

  //remove 2nd hcp
router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional-2`, function (request, response) {
  var removeHcp = request.session.data['remove-second-hcp'];

  if (removeHcp == 'yes') {
    response.redirect(`/${folderForViews}/healthcare-professional/healthcare-prof-type`);
  } else if (removeHcp == 'no') {
    response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-second-hcp`);
  } else {
    // Fallback: no option selected
    response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional-2`);
  }
})


  //remove main hcp
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional`, function (request, response) {
    var removeHcp = request.session.data['remove-hcp']
    if (removeHcp == 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-main-hcp`)
    } else if (removeHcp == 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/hp-summary-two`)
    }
  })

  //remove final hcp
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-add-health-professional`, function (request, response) {
    var removeHcp = request.session.data['remove-final-hcp']
    if (removeHcp == 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/add-new/healthcare-prof-type`)
    } else if (removeHcp == 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-main-hcp`)
    }
  })


  //add new hcp from remocving all contacts---> do you want to add another contact?
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/add-new/additional-support-needed`, function (request, response) {
    var removeHcp = request.session.data['support-needed']
    if (removeHcp == 'yes') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/add-new/additional-support-type`)
    } else if (removeHcp == 'no') {
      response.redirect(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-second-hcp`)
    }
  })


  router.post(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-1-why-we-need-details`)
  })

  //pip-register/HOSPITAL-DATES

  //hospital and accom start ----> Are you in hospital or hospice as an in-patient today?
  router.post(`/${folderForViews}/hospital-dates/5-1-why-we-need-details`, function (request, response) {
console.log('redirect to hospital today');
    const redirectPath = `/${folderForViews}/hospital-dates/5-2-today`;
validatePath(response, redirectPath);
  })




  // Are you in hospital or hospice as an in-patient today?
  router.post(`/${folderForViews}/hospital-dates/5-2-today`, function (request, response) {
    var hospitalToday = request.session.data['hospital-today']
    if (hospitalToday == 'yes-hospital') {
      response.redirect(`/${folderForViews}/hospital-dates/5-4-yesterday`)
    } else if (hospitalToday == 'no') {
      response.redirect(`/${folderForViews}/hospital-dates/5-3-other-housing-today`)
    } else if (hospitalToday == 'yes-hospice') {
      response.redirect(`/${folderForViews}/hospital-dates/5-8-hospice-yesterday`)
    }
  })

  // Were you in hospital yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-4-yesterday`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-5-private-patient`)
  })


  // are you a private patient? > What is the name and address of the hospital?
  router.post(`/${folderForViews}/hospital-dates/5-5-private-patient`, function (request, response) {
    // Read the user's answer from session data or form body
    var privatePatient = request.session.data['private-patient'] || request.body['private-patient']

    // If an option was selected, continue to the postcode step; if not, stay on the same page
    if (privatePatient) {
      response.redirect(`/${folderForViews}/hospital-dates/5-6-postcode`)
    } else {
      // Fallback: no option selected — redisplay the same page (avoid open redirect)
      response.redirect(`/${folderForViews}/hospital-dates/5-5-private-patient`)
    }
  })

  // postcode > select address
  router.post(`/${folderForViews}/hospital-dates/5-6-postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-7-select-hospital-address`)
  })

  // postcode > select address
router.post(`/${folderForViews}/hospital-dates/5-7-select-hospital-address`, function (_request, response) {
  // Always redirect to the hospital residence summary from the select address page
  response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
})

  // hospital manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-17-hospital-address-manually`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
  })

  // hospice manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-18-hospice-address-manually`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
  })

  // other manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-19-other-address-manually`, function (_request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-13-third-party-pay`)
  })

  // Were you in hospice yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-8-hospice-yesterday`, function (request, response) {
    var otherYesterday = request.session.data['hospice-yesterday']
    if (otherYesterday == 'yes') {
      response.redirect(`/${folderForViews}/hospital-dates/5-9-hospice-dates`)
    } else if (otherYesterday == 'no') {
      response.redirect(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`)
    
      } else {
      // Fallback: no option selected — redisplay the same page (avoid open redirect)
      response.redirect(`/${folderForViews}/hospital-dates/5-8-hospice-yesterday`)
    }

  })

  // Do you know the date you went into the hospice?
  router.post(`/${folderForViews}/hospital-dates/5-9-hospice-dates`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`)
  })

  // select hospice address
  router.post(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-11-select-hospice-address`)
  })

  // select hospice address
  router.post(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`, function (_request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-11-select-hospice-address`)
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post(`/${folderForViews}/hospital-dates/5-11-select-hospice-address`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
  })

  // Are you living in a care home or nursing home, sheltered housing, a residential college or a hostel today?
  router.post(`/${folderForViews}/hospital-dates/5-3-other-housing-today`, function (request, response) {
    var otherToday = request.session.data['other-today']
    if (otherToday == 'yes') {
      response.redirect(`/${folderForViews}/hospital-dates/5-12-other-yesterday`)
    } else if (otherToday == 'no') {
      response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
    }
  else {
    response.redirect(`/${folderForViews}/hospital-dates/5-3-other-housing-today`)
    }
    
  })

  // Were you living in this place yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-12-other-yesterday`, function (request, response) {
    var otherYesterday = request.session.data['other-yesterday']
    if (otherYesterday == 'yes') {
      response.redirect(`/${folderForViews}/hospital-dates/5-15-other-postcode`)
    } else if (otherYesterday == 'no') {
      response.redirect(`/${folderForViews}/hospital-dates/5-15-other-postcode`)
    }
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post(`/${folderForViews}/hospital-dates/5-15-other-postcode`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-16-select-other-address`)
  })

  // Select other address > tasklist
  router.post(`/${folderForViews}/hospital-dates/5-16-select-other-address`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-13-third-party-pay`)
  })

  // Does a local authority, health authority, Jobcentre Plus, or a charity pay any of the costs for you to live there?
  router.post(`/${folderForViews}/hospital-dates/5-13-third-party-pay`, function (request, response) {
    var thirdPartyPay = request.session.data['third-party-pay']
    if (thirdPartyPay == 'health-trust') {
      response.redirect(`/${folderForViews}/hospital-dates/5-23-name-local`)
    } else if (thirdPartyPay == 'no') {
      response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
    } else if (thirdPartyPay == 'yes') {
      response.redirect(`/${folderForViews}/hospital-dates/5-23-name`)
    }
  })

  // What is the name of the [organisation type]?
  router.post(`/${folderForViews}/hospital-dates/5-23-name`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
  })

  // local auth ---> What is the name -----> agreement?
  router.post(`/${folderForViews}/hospital-dates/5-23-name-local`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/5-14-local-agreement`)
  })

  // agreement to task list
  router.post(`/${folderForViews}/hospital-dates/5-14-local-agreement`, function (request, response) {
    response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
  })

  // Do you have an agreement with the local authority to repay any of the costs?
router.post(`/${folderForViews}/hospital-dates/hospital-dates/5-14-local-agreement`, function (request, response) {


    if (request.body['local-agreement'] === 'yes') {
        return response.redirect(`/${folderForViews}/hospital-dates/hospital-residence-summary`)
    } else {
        return response.redirect(`/${folderForViews}/hospital-dates/hospital-dates/5-14-local-agreement`)
    }
})

  // -------------------------------------------------------------------------------------



  // Can you give me your account details now?
  router.post(`/${folderForViews}/bank-details/6-1-start`, function (request, response) {
    var detailsNow = request.session.data['details-now']
    if (detailsNow == 'yes') {
      response.redirect(`/${folderForViews}/bank-details/6-3-main-account-details-v2`)
    } else if (detailsNow == 'no') {
      response.redirect(`/${folderForViews}/bank-details/6-2-no-details-now`)
    }
    else {
    response.redirect(`/${folderForViews}/bank-details/6-1-start`)
      } 
  })

  // You can continue without entering account details
  router.post(`/${folderForViews}/bank-details/6-2-no-details-now`, function (request, response) {
    response.redirect(`/${folderForViews}/task-list-bank-done`)
  })

  // Main account details
  router.post(`/${folderForViews}/bank-details/6-3-main-account-details-v2`, function (request, response) {
    response.redirect(`/${folderForViews}/bank-details/bank-details-summary`)
  })

  // Bank details CYA to task list
  router.post(`/${folderForViews}/bank-details/bank-details-summary`, function (request, response) {
    response.redirect(`/${folderForViews}/motability/motability`)
  })

  //Motability to Motability CYA
  router.post(`/${folderForViews}/motability-question`, function (request, response) {
    response.redirect(`/${folderForViews}/motability/motability-summary`)
  })

  // -------------------------------------------------------------------------------------

  // Save application- i will now submit
  router.post(`/${folderForViews}/what-happens-next/save-application`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/what-happens-next`)
  })
  //design-updates/sprint-20/what-happens-next/what-happens-next
  router.post(`/${folderForViews}/what-happens-next/what-happens-next`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/online-form-option`)
  })

  router.post(`/${folderForViews}/what-happens-next/online-form-option`, function (request, response) {
    var previousOnline = request.session.data['form-online']
    if (previousOnline == 'online') {
      response.redirect(`/${folderForViews}/what-happens-next/online-form-contact`)
    } else if (previousOnline == 'paper') {
      response.redirect(`/${folderForViews}/what-happens-next/paper-whn-1`)
    }
  })

  // Online whn1 (form contact details)
  router.post(`/${folderForViews}/what-happens-next/online-form-contact`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/online-whn-1`)
  })

  // Online whn 1- whn 2
  router.post(`/${folderForViews}/what-happens-next/online-whn-1`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/online-whn-2`)
  })

  // Online whn 2- paper-after-sent
  router.post(`/${folderForViews}/what-happens-next/online-whn-2`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/after-form-sent`)
  })

  router.post(`/${folderForViews}/what-happens-next/previously-claimed-online`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/paper-whn-1`)
  })

  // Paper whn 1- whn 2
  router.post(`/${folderForViews}/what-happens-next/paper-whn-1`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/paper-whn-2`)
  })

  // Paper whn 2- paper-after-sent
  router.post(`/${folderForViews}/what-happens-next/paper-whn-2`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/after-form-sent`)
  })

  // After-form-sent > end claim and clear session
  router.post(`/${folderForViews}/what-happens-next/after-form-sent`, function (request, response) {
    response.redirect(`/${folderForViews}/what-happens-next/application-submitted`)
  })

  // -------------------------------------------------------------------------------------

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

  //export routes
} 
