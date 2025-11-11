// add motability routes here



module.exports = function (folderForViews, urlPrefix, router) {

const validatePath = require('./validatePath.js')
 

  // GB Telephony routes

  // DEV READY

  // Eligibility launched from main UI
  router.post(`/${folderForViews}/signposting-eligibility/service-start-page`, function (request, response) {
    var newApp = request.session.data['new-app']
    if (newApp == 'yes') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/what-is-your-name`;
validatePath(response, redirectPath);
    } else if (newApp == "no") {

      const redirectPath = `/${folderForViews}/signposting-eligibility/existing-claims`;
validatePath(response, redirectPath);
    }
  })

router.post('/whatIsYourName', function (request, response) {
  const firstName = request.session.data['first-name'];
  const lastName = request.session.data['last-name'];

  const redirectPath = `/${folderForViews}/signposting-eligibility/new-application`;
validatePath(response, redirectPath);;
});



  router.post(`/${folderForViews}/signposting-eligibility/new-application`, function (request, response) {
    var gbPIP = request.session.data['gb-pip']
    if (gbPIP == 'yes') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/claiming-self`;
validatePath(response, redirectPath);
    } else if (gbPIP == "n-ireland") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/northern-ireland`;
validatePath(response, redirectPath);
    } else if (gbPIP == "scotland") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/scotland`;
validatePath(response, redirectPath);
    }
    else if (gbPIP == "other-country") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/other-country`;
validatePath(response, redirectPath);
    }

      else {
    const redirectPath = `/${folderForViews}/signposting-eligibility/new-application`;
validatePath(response, redirectPath);
    }

  })

  router.post(`/${folderForViews}/signposting-eligibility/claiming-self`, function (request, response) {
    var claimingSelf = request.session.data['claiming-self']
    if (claimingSelf == 'myself') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/srel`;
validatePath(response, redirectPath);
    } else if (claimingSelf == "someone-else") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`;
validatePath(response, redirectPath);
    }
    else if (claimingSelf == "unofficial") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`;
validatePath(response, redirectPath);
    }
    else if (claimingSelf == "external") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/someone-else-bau-kickout`;
validatePath(response, redirectPath);
    }

    
  })

  //external route

  router.post(`/${folderForViews}/external-route`, function (request, response) {
    var externalRoute = request.session.data['external-route']
    if (externalRoute == "friendFamily") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/answer-questions-as-person`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "org") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/answer-questions-as-person`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "attorney") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/authority`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "appointee") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/authority`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "wantAppointee") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/authority`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "corp") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/authority`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "curator") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/authority`;
validatePath(response, redirectPath);
    }
    
  })



  //last 12 months
  router.post(`/${folderForViews}/last-12-months`, function (request, response) {
    var externalRoute = request.session.data['last12months']
    if (externalRoute == "yes") {
      const redirectPath = `/pip-register-v3/signposting-eligibility/dla-now`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "no") {
      const redirectPath = `/pip-register-v3/signposting-eligibility/stop-getting-pip-last-year`;
validatePath(response, redirectPath);
    }
    console.log('last12months value:', request.session.data['last12months']);
console.log('Redirecting to:', folderForViews);
  })


//what-is-ni-number-3
router.post(`/${folderForViews}/what-is-ni-number-3`, function (request, response) {
  var externalRoute = request.session.data['ni3']
  if (externalRoute == "same-dob") {
    const redirectPath = `/pip-register-v3/signposting-eligibility/appointee`;
validatePath(response, redirectPath);
  }
  else if (externalRoute == "different-dob") {
    const redirectPath = `/pip-register-v3/signposting-eligibility/no-match-ni-kickout`;
validatePath(response, redirectPath);
  }
  else if (externalRoute == "scr") {
    const redirectPath = `/pip-register-v3/signposting-eligibility/scr-kickout`;
validatePath(response, redirectPath);
  }
  else if (externalRoute == "no-searchlight") {
    const redirectPath = `/pip-register-v3/signposting-eligibility/no-match-ni-kickout`;
validatePath(response, redirectPath);
  }
  console.log('ni3 value:', request.session.data['ni3']);
  console.log('Redirecting to:', folderForViews);
})

  //appointee
  router.post(`/${folderForViews}/appointee`, function (request, response) {
    var externalRoute = request.session.data['appointeeYn']
    if (externalRoute == "yes") {
      const redirectPath = `/pip-register-v3/signposting-eligibility/appointee-kickout`;
validatePath(response, redirectPath);
    }
    else if (externalRoute == "no") {
      const redirectPath = `/pip-register-v3/signposting-eligibility/security-check`;
validatePath(response, redirectPath);
    }
    console.log('appointeeYn value:', request.session.data['appointeeYn']);
console.log('Redirecting to:', folderForViews);
  })



  //DLA now
  router.post(`/${folderForViews}/signposting-eligibility/dla-now`, function (request, response) {
    var dlaNow = request.session.data['dlaNow']
    if (dlaNow == "yes") {
        const redirectPath = `/${folderForViews}/signposting-eligibility/dla-payments`;
validatePath(response, redirectPath);
    }
    else if (dlaNow == "no") {
        const redirectPath = `/${folderForViews}/signposting-eligibility/what-is-ni-number`;
validatePath(response, redirectPath);
    }
  })



  // Are you over 16 and under SPA?
  router.post(`/${folderForViews}/signposting-eligibility/over-16`, function (request, response) {
    var correctAge = request.session.data['age']
    if (correctAge == 'yes') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/dla-now`;
validatePath(response, redirectPath);
    } else if (correctAge == "no-under-16") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/under-16-ineligible`;
validatePath(response, redirectPath);
    } else if (correctAge == "no-over-spa") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/last-12-months`;
validatePath(response, redirectPath);
    }
  })

  // Claiming under SREL?
  router.post(`/${folderForViews}/signposting-eligibility/srel`, function (request, response) {
    var srel = request.session.data['srel']
    if (srel == 'yes') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/srel-bau-kickout`;
validatePath(response, redirectPath);
    } else if (srel == "no") {
      const redirectPath = `/${folderForViews}/signposting-eligibility/over-16`;
validatePath(response, redirectPath);
    }
  })

  //NI
  router.post(`/${folderForViews}/signposting-eligibility/what-is-ni-number`, function (request, response) {
     const redirectPath = `/${folderForViews}/signposting-eligibility/what-is-ni-number-2`;
validatePath(response, redirectPath);
  })
  
router.post(`/${folderForViews}/signposting-eligibility/what-is-ni-number-2`, function (request, response) {
   const redirectPath = `/${folderForViews}/signposting-eligibility/what-is-ni-number-3`;
validatePath(response, redirectPath);
});

  //
  //Serchlight check
  router.post(`/${folderForViews}/signposting-eligibility/searchlight-check`, function (request, response) {
    const redirectPath = `/${folderForViews}/signposting-eligibility/security-check`;
validatePath(response, redirectPath);
  })



  //welcome-screen


  // How many security questions were answered?

router.post(`/${folderForViews}/signposting-eligibility/security-check`, function (request, response) {
  var secVerified = request.session.data['security-verified'];

  if (secVerified == '2correct') {

 const redirectPath = `/${folderForViews}/welcome-screen`;
validatePath(response, redirectPath);
  } else if (secVerified == '1correct') {
      const redirectPath = `/${folderForViews}/signposting-eligibility/failed-security`;
validatePath(response, redirectPath);

  } else if (secVerified == 'none') {
         const redirectPath = `/${folderForViews}/signposting-eligibility/failed-security`;
validatePath(response, redirectPath);
  } else {
    // Fallback: no option selected
         const redirectPath = `/${folderForViews}/signposting-eligibility/security-check`;
validatePath(response, redirectPath);
  }
})


  router.post(`/${folderForViews}/signposting-eligibility/failed-security`, function (request, response) {
    const redirectPath = `/${folderForViews}/welcome-screen`;
validatePath(response, redirectPath);
  })



  //---------------------------------------------------------------------------------------------

  // Welcome screens

  // Welcome screen GB
  router.post(`/${folderForViews}/welcome-screen`, function (request, response) {
    const redirectPath = `/${folderForViews}/declaration`;
validatePath(response, redirectPath);
  })



  // Declaration
  router.post(`/${folderForViews}/declaration`, function (request, response) {
    const redirectPath = `/${folderForViews}/task-list`;
validatePath(response, redirectPath);
  })

  // --------------------------------------------------------------------------------------

  //pip-register/Contact-details

  // What is your name

  router.post(`/${folderForViews}/whatIsYourName`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/what-is-your-postcode`;
validatePath(response, redirectPath);
  })

  //Do you have a previous surname?
  router.post(`/${folderForViews}/previousNameYesNo`, function (request, response) {
    var previousNameYesNo = request.session.data['previousNameYesNo']
    if (previousNameYesNo == 'Yes') {

      const redirectPath = `/${folderForViews}/contact-details/what-is-your-previous-surname`;
validatePath(response, redirectPath);

    } else if (previousNameYesNo == 'No') {
            const redirectPath = `/${folderForViews}/contact-details/what-is-your-dob`;
validatePath(response, redirectPath);
    }
  })

  // What is your previous surname
  router.post(`/${folderForViews}/whatIsYourPreviousSurname`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/what-is-your-dob`;
validatePath(response, redirectPath);
  })

  // What is your DOB
  router.post(`/${folderForViews}/contact-details/what-is-your-dob`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/what-is-your-postcode`;
validatePath(response, redirectPath);
  })

  // What is your postcode page
  router.post(`/${folderForViews}/contact-details/what-is-your-postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/select-your-address`;
validatePath(response, redirectPath)
  })

  // Select your address page
  router.post(`/${folderForViews}/contact-details/select-your-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/correspondence-address`;
validatePath(response, redirectPath);
  })

  // Enter address manually page
  router.post(`/${folderForViews}/contact-details/enter-address-manually-country`, function (_request, response) {
    const redirectPath = `/${folderForViews}/contact-details/correspondence-address`;
validatePath(response, redirectPath);
  })

  // Confirm address
  router.post(`/${folderForViews}/contact-details/confirm`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/correspondence-address`;
validatePath(response, redirectPath);
  })


  // Is this the address we should send letters to page
  router.post(`/${folderForViews}/contact-details/correspondence-address`, function (request, response) {
    var sendLettersElsewhere = request.session.data['should-we-write-to-you']
    if (sendLettersElsewhere == 'yes') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
    } else if (sendLettersElsewhere == 'no') {
      const redirectPath = `/${folderForViews}/contact-details/correspondence-postcode`;
validatePath(response, redirectPath);
    } else if (sendLettersElsewhere == 'No, I dont have a home address') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
    }
  })


  router.post(`/${folderForViews}/contact-details/correspondence-postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/select-your-address-correspondence`;
validatePath(response, redirectPath);
  })

       router.post(`/${folderForViews}/contact-details/select-your-address-correspondence`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
  })

  // What is your correspondence postcode page
  router.post(`/${folderForViews}/contact-details/correspondence-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/confirm-correspondence-address`;
validatePath(response, redirectPath);
  })

  // Confirm correspondence address > correspondence alt formats page
  router.post(`/${folderForViews}/contact-details/confirm-correspondence-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/confirm-correspondence`;
validatePath(response, redirectPath)
  })

  // Confirm s > correspondence alt formats page
  router.post(`/${folderForViews}/contact-details/confirm-correspondence`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
  })

  // Confirm correspondence address page
  router.post(`/${folderForViews}/contact-details/correspondence-enter-address-manually`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
  })

  // What is your phone number page
  router.post(`/${folderForViews}/contact-details/what-is-your-phone-number`, function (request, response) {
    response.redirect("contact-details/contact-details-summary")
  })

  //Do you have a mobile number
  router.post(`/${folderForViews}/mobile`, function (request, response) {
    var mobileYesNo = request.session.data['mobileYesNo']
    if (mobileYesNo == 'Yes') {
      const redirectPath = `/${folderForViews}/contact-details/what-is-your-phone-number`;
validatePath(response, redirectPath);
    } else if (mobileYesNo == 'No') {
      const redirectPath = `/${folderForViews}/contact-details/other-number`;
validatePath(response, redirectPath);
    }
  })

  // What is your other number?
  router.post(`/${folderForViews}/contact-details/what-is-your-other-phone-number`, function (request, response) {
    response.redirect("contact-details/contact-details-summary")
  })

  // Do you want to receive text updates
  router.post(`/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/what-is-your-phone-number`;
validatePath(response, redirectPath);
  })

  // Do you have another number
  router.post(`/${folderForViews}/otherNumber`, function (request, response) {
    var otherNumberYesNo = request.session.data['otherNumberYesNo']
    if (otherNumberYesNo == 'Yes') {
      const redirectPath = `/${folderForViews}/contact-details/what-is-your-other-phone-number`;
validatePath(response, redirectPath);
    } else if (otherNumberYesNo == 'No') {
      const redirectPath = `/${folderForViews}/contact-details/contact-details-summary`;
validatePath(response, redirectPath);
    }
  })

  // Contact details summary
  router.post(`/${folderForViews}/contact-details/contact-details-summary`, function (request, response) {
    const redirectPath = `/${folderForViews}/additional-support/start-info`;
validatePath(response, redirectPath);
  })

  // Contact details summary
  router.post(`/${folderForViews}/contact-details/contact-details-summary`, function (request, response) {
const redirectPath = `/${folderForViews}/additional-support/start-info`;
validatePath(response, redirectPath);

  })

  //Alt formats

  //font
  router.post(`/${folderForViews}/font`, function (req, response) {
    //Store response
    var font = req.session.data['font'];

    //Redirect
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-colour-paper-do-you-need`;
validatePath(response, redirectPath);

  })

  //Paper
  router.post(`/${folderForViews}/paper`, function (req, response) {
    //Store response
    var paper = req.session.data['paper'];

    

    //Redirect
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-size-print-do-you-need`;
validatePath(response, redirectPath);;
  })

  //Audio format
  router.post(`/${folderForViews}/audio`, function (request, response) {
    var audio = request.session.data['audio']
    if (audio == 'CD') {
       const redirectPath = `/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`;
validatePath(response, redirectPath);

    } else if (audio == 'MP3 by email') {
       const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-is-your-email`;
validatePath(response, redirectPath);

    } else if (audio == 'USB stick') {
        const redirectPath = `/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`;
validatePath(response, redirectPath);
      
    } else if (audio == 'Casette tape') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`;
validatePath(response, redirectPath);

    } else if (audio == 'DVD') {
         const redirectPath = `/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`;
validatePath(response, redirectPath);
    }
  })




  //How should we contact you if we need to speak to you?
  router.post(`/${folderForViews}/contact`, function (request, response) {
    var contact = request.session.data['contact']
    if (contact == 'Standard phone call') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/any-other-help-when-we-contact`;
validatePath(response, redirectPath);
    } else if (contact == 'Relay UK') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-is-relay-uk-number`;
validatePath(response, redirectPath);
    } else if (contact == 'Textphone') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-is-your-textphone-number`;
validatePath(response, redirectPath);
    } else if (contact == 'Signing or lipspeaking') {
      const redirectPath = `/${folderForViews}/contact-details/alt-formats/signing-lipspeaking`;
validatePath(response, redirectPath);
    }
  })

  //Do you need any other help when we contact you?
router.post(`/${folderForViews}/other-help`, function (request, response) {
  var otherHelp = request.session.data['other-help'];

  if (otherHelp === 'Yes') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-other-help-when-we-contact`;
validatePath(response, redirectPath);
  } else if (otherHelp === 'No') {
       const redirectPath = `/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`;
validatePath(response, redirectPath);
  } else {
    // Fallback: no option selected
       const redirectPath = `/${folderForViews}/contact-details/contact-details-summary`;
validatePath(response, redirectPath);
  }
});



  // pip-register/ADDITIONAL-SUPPORT

  router.post(`/${folderForViews}/contact-details/what-other-help-when-we-contact`, function (request, response) {
    var otherHelpDetails = request.session.data['other-help-details'];
    // You can log or use this data if needed
         const redirectPath = `/${folderForViews}/contact-details/do-you-want-to-receive-text-updates`;
validatePath(response, redirectPath);
  });





  //What is your phone number - 2
  router.post(`/${folderForViews}/contact-details/what-is-your-phone-2`, function (request, response) {
    var extraPhone = request.session.data['extraPhone'];

    if (extraPhone === 'yes') {
      const redirectPath = `/${folderForViews}/contact-details/what-is-your-phone-3`;
validatePath(response, redirectPath);;
    } else if (extraPhone === 'no') {
      const redirectPath = `/${folderForViews}/contact-details/contact-details-summary`;
validatePath(response, redirectPath);;
    } else {
      const redirectPath = `/${folderForViews}/contact-details/contact-details-summary`;
validatePath(response, redirectPath);;
    }
  });

  // start
router.post(`/${folderForViews}/additional-support/start-info`, function (_request, response) {
  const redirectPath = `/${folderForViews}/additional-support/do-you-have-a-condition`;
  validatePath(response, redirectPath);
});



  // do you have a condition
  router.post(`/${folderForViews}/additional-support/do-you-have-a-condition`, function (request, response) {
    var anyCondition = request.session.data['any-condition']
    if (anyCondition == 'yes') {
      const redirectPath = `/${folderForViews}/additional-support/complete-forms`;
validatePath(response, redirectPath);
    } else if (anyCondition == 'no') {
      const redirectPath = `/${folderForViews}/additional-support/helpers`;
validatePath(response, redirectPath);
    }
  })

  // can you complete forms - working
  router.post(`/${folderForViews}/additional-support/complete-forms`, function (request, response) {
    var forms = request.session.data['forms']

    if (forms === 'no') {
  const redirectPath = `/${folderForViews}/additional-support/helpers`;
validatePath(response, redirectPath);
    } else if (forms === 'yes') {
        const redirectPath = `/${folderForViews}/additional-support/read-letters`;
validatePath(response, redirectPath);
    } else {
      // fallback if nothing selected
        const redirectPath = `/${folderForViews}/additional-support/complete-forms`;
validatePath(response, redirectPath);
    }
  })



  // not working

  router.post(`/${folderForViews}/additional-support/read-letters`, function (request, response) {
    var forms = request.session.data['forms'];
    var letters = request.body.letters;

    if (letters === 'no') {
      const redirectPath = `/${folderForViews}/additional-support/helpers`;
validatePath(response, redirectPath);;
    } else if (letters === 'yes') {
      const redirectPath = `/${folderForViews}/additional-support/post`;
validatePath(response, redirectPath);;
    } else {
      // fallback if nothing selected
      const redirectPath = `/${folderForViews}/additional-support/complete-forms`;
validatePath(response, redirectPath);;
    }
  });


  router.post(`/${folderForViews}/additional-support/post`, function (request, response) {
    var post = request.session.data['post']
    if (post == 'yes') {
      const redirectPath = `/${folderForViews}/additional-support/add-support-summary`;
validatePath(response, redirectPath);
    } else if (post == 'no') {
      const redirectPath = `/${folderForViews}/additional-support/helpers`;
validatePath(response, redirectPath);
    }
  })

  // Do you have anyone to help you?
  router.post(`/${folderForViews}/additional-support/helpers`, function (request, response) {
    var anyoneHelp = request.session.data['helpers']
    if (anyoneHelp == 'yes') {
          const redirectPath = `/${folderForViews}/additional-support/who`;
validatePath(response, redirectPath);
    } else if (anyoneHelp == 'no') {
         const redirectPath = `/${folderForViews}/additional-support/support-no-help`;
validatePath(response, redirectPath);
    }

    else {
    const redirectPath = `/${folderForViews}/additional-support/helpers`;
validatePath(response, redirectPath);
    }
  })



router.post(`/${folderForViews}/additional-support/who-helps`, function (_request, response) {
  const redirectPath = `/${folderForViews}/additional-support/who`;
validatePath(response, redirectPath);
})


  router.post(`/${folderForViews}/additional-support/support-no-help`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
  })
  router.post(`/${folderForViews}/additional-support/support-with-help`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);
  })
  // -------------------------------------------------------------------------------------




  // Would you like us to send your letters in another way, like larger text, audio or braille?
router.post(`/${folderForViews}/contact-details/alt-formats/written-format`, function (request, response) {
  var writtenFormat = request.session.data['written-format'];
  console.log('writtenFormat: ' + writtenFormat);

  if (writtenFormat === 'Standard letter (12-point Arial text on white paper)') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/how-should-we-contact-you`;
validatePath(response, redirectPath);;
  } else if (writtenFormat === 'Letter with changes to colour or print size') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/large-print`;
validatePath(response, redirectPath);;
  } else if (writtenFormat === 'Audio') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-type-of-audio-format`;
validatePath(response, redirectPath);;
  } else if (writtenFormat === 'Braille') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-type-of-braille-do-you-need`;
validatePath(response, redirectPath);;
  } else if (writtenFormat === 'British Sign Language video') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-video-format-do-you-need`;
validatePath(response, redirectPath);;
  } else if (writtenFormat === 'Email') {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/email-reason`;
validatePath(response, redirectPath);;
  } else {
    // Fallback: no option selected
    const redirectPath = `./${folderForViews}/contact-details/alt-formats/written-format`;
validatePath(response, redirectPath);;
  }
})
  // What size print do you need?
  router.post(`/${folderForViews}/contact-details/alt-formats/large-print`, function (request, response) {
    const redirectPath = `/${folderForViews}/additional-support/add-support-summary`;
validatePath(response, redirectPath);
  })

  // Why do you need us to contact you by email instead of printed letters?
  router.post(`/${folderForViews}/contact-details/alt-formats/email-reason`, function (request, response) {
    const redirectPath = `/${folderForViews}/contact-details/alt-formats/what-is-your-email`;
validatePath(response, redirectPath);
  })

  // What is your email address?
  router.post(`/${folderForViews}/contact-details/alt-formats/what-is-your-email`, function (request, response) {
    const redirectPath = `/${folderForViews}/additional-support/add-support-summary`;
validatePath(response, redirectPath);
  })

  // Summary
  router.post(`/${folderForViews}/additional-support/add-support-summary`, function (request, response) {
    const redirectPath = `/${folderForViews}/nationality/start`;
validatePath(response, redirectPath);
  })

  //pip-register/NATIONALITY

  //MTP APRIL RELEASE - NATIONALITY
  //pip-register/nationality

  //start
  router.post(`/${folderForViews}/nationality/start`, function (request, response) {
    const redirectPath = `/${folderForViews}/nationality/what-is-your-nationality`;
validatePath(response, redirectPath);
  })

  //what is your nationality
  router.post(`/${folderForViews}/nationality/what-is-your-nationality`, function (request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british') {
      const redirectPath = `/${folderForViews}/nationality/uk-2-of-3-years`;
validatePath(response, redirectPath);
    } else if (nationality == 'irish') {
      const redirectPath = `/${folderForViews}/nationality/uk-2-of-3-years`;
validatePath(response, redirectPath);
    } else if (nationality == 'eea') {
      const redirectPath = `/${folderForViews}/nationality/eea-nationality`;
validatePath(response, redirectPath);
    } else if (nationality == 'other') {
      const redirectPath = `/${folderForViews}/nationality/another-nationality`;
validatePath(response, redirectPath);
    }
  })

  //Have you been in the UK for at least 2 of the last 3 years?
  router.post(`/${folderForViews}/nationality/uk-2-of-3-years`, function (request, response) {
    var ukYears = request.session.data['uk-years']
    if (ukYears == 'yes') {
      const redirectPath = `/${folderForViews}/nationality/benefits-abroad`;
validatePath(response, redirectPath);
    } else if (ukYears == 'no') {
      const redirectPath = `/${folderForViews}/nationality/benefits-abroad`;
validatePath(response, redirectPath);
    } else if (ukYears == 'unsure') {
      const redirectPath = `/${folderForViews}/nationality/insurance-abroad`;
validatePath(response, redirectPath);
    }
  })

  //Have you left the UK for more than 4 weeks at a time, in the last 3 years?
  router.post(`/${folderForViews}/leftUK`, function (request, response) {
    var leftUK = request.session.data['leftUK']
    if (leftUK == 'yes') {
            const redirectPath = `/${folderForViews}/nationality/where`;
validatePath(response, redirectPath);
    } else if (leftUK == 'no') {
            const redirectPath = `/${folderForViews}/nationality/benefits-abroad`;
validatePath(response, redirectPath);
    }
  })



  //Select eea nationality
  router.post(`/${folderForViews}/nationality/eea-nationality`, function (request, response) {
    const redirectPath = `/${folderForViews}/nationality/living-in-uk`;
validatePath(response, redirectPath);
  })

  //Select other nationality
  router.post(`/${folderForViews}/nationality/another-nationality`, function (request, response) {
    var anotherNationality = request.session.data['another-nationality']
    if (anotherNationality == 'Norway' || anotherNationality == 'Iceland') {
      const redirectPath = `/${folderForViews}/nationality/living-in-uk`;
validatePath(response, redirectPath);
    }
    if (anotherNationality == 'Australia' || anotherNationality == 'Brazil' || anotherNationality == 'Bangladesh') {
      const redirectPath = `/${folderForViews}/nationality/uk-2-of-3-years`;
validatePath(response, redirectPath);
    }
  })

  //Were you living in the UK on or before 31/12/20?
  router.post(`/${folderForViews}/nationality/living-in-uk`, function (request, response) {
      const redirectPath = `/${folderForViews}/nationality/uk-2-of-3-years`;
validatePath(response, redirectPath);
  })



  //Are you working or paying national insurance in another country?

  router.post(`/${folderForViews}/nationality/insurance-abroad`, function (request, response) {
    var payingInsurance = request.session.data['insurance-abroad']
    if (payingInsurance == 'no') {
      const redirectPath = `/${folderForViews}/nationality/nationality-summary`;
validatePath(response, redirectPath);
    } else if (payingInsurance == 'yes') {
      const redirectPath = `/${folderForViews}/nationality/nationality-summary`;
validatePath(response, redirectPath);
    }
  })

  // Are you receiving pensions or benefits in another country?
  router.post(`/${folderForViews}/nationality/benefits-abroad`, function (request, response) {
    var payingBenefits = request.session.data['benefits-abroad']
    if (payingBenefits == 'no') {
      const redirectPath = `/${folderForViews}/nationality/insurance-abroad`;
validatePath(response, redirectPath);
    } else if (payingBenefits == 'yes') {
      const redirectPath = `/${folderForViews}/nationality/insurance-abroad`;
validatePath(response, redirectPath);
    }
  })

  //What country are you receiving pensions or benefits in?
router.post(`/${folderForViews}/nationality/exportability/what-country-benefits`, function (request, response) {
  const selectedCountry = request.session.data['country-benefits'];

  if (selectedCountry) {
    const redirectPath = `/${folderForViews}/task-list-nat-done`;
validatePath(response, redirectPath);;
  } else {
    // Fallback: no country selected
    const redirectPath = `/${folderForViews}/nationality/exportability/what-country-benefits`;
validatePath(response, redirectPath);
  }
})



  //Are any of your family members receiving pensions or benefits in another country?
  router.post(`/${folderForViews}/nationality/exportability/family-receiving-benefits`, function (request, response) {
  var payingBenefits = request.session.data['family-receiving-benefits'];

  if (payingBenefits === 'no') {
    const redirectPath = `/${folderForViews}/task-list-nat-done`;
validatePath(response, redirectPath)
  } else if (payingBenefits === 'yes') {
    const redirectPath = `/${folderForViews}/nationality/exportability/family-country-benefits`;
validatePath(response, redirectPath);
  } else {
    // Fallback: no option selected
    const redirectPath = `/${folderForViews}/nationality/exportability/family-receiving-benefits`;
validatePath(response, redirectPath);
  }
})



  //What country are your family members receiving pensions or benefits in?
  router.post(`/${folderForViews}/nationality/exportability/family-country-benefits`, function (request, response) {
    const redirectPath = `/${folderForViews}/task-list-nat-done`;
validatePath(response, redirectPath);
  })


  //--------------------------------------------------------------------------------------------------------------
  //nationality start
  router.post(`/${folderForViews}/nationality/start`, function (request, response) {
    const redirectPath = `/${folderForViews}/nationality/what-is-your-nationality`;
validatePath(response, redirectPath);
  })

  //what is your nationality
  router.post(`/${folderForViews}/nationality/what-is-your-nationality`, function (request, response) {
    var nationality = request.session.data['nationality']
    if (nationality == 'british') {
      const redirectPath = `/${folderForViews}/nationality/what-country-do-you-live-in`;
validatePath(response, redirectPath);
    } else if (nationality == 'irish') {
      const redirectPath = `/${folderForViews}/nationality/what-country-do-you-live-in`;
validatePath(response, redirectPath);
    } else if (nationality == 'other') {
      const redirectPath = `/${folderForViews}/nationality/another-nationality`;
validatePath(response, redirectPath);
    }
  })

  // Another nationality
  router.post(`/${folderForViews}/versions/devs/nationality/another-nationality`, function (request, response) {
   const redirectPath = `/${folderForViews}/versions/devs/nationality/what-country-do-you-live-in`;
validatePath(response, redirectPath);
  })

  //what country do you normally live in page
  router.post(`/${folderForViews}/versions/devs/nationality/what-country-do-you-live-in`, function (request, response) {
    var nationality = request.session.data['country']
    if (nationality == 'northern-ireland') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/lived-elsewhere`;
validatePath(response, redirectPath);
    } else if (nationality == 'england') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/lived-elsewhere`;
validatePath(response, redirectPath);
    } else if (nationality == 'wales') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/lived-elsewhere`;
validatePath(response, redirectPath);
    } else if (nationality == 'scotland') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/lived-elsewhere`;
validatePath(response, redirectPath);
    } else if (nationality == 'another-country') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/another-country-lived-in`;
validatePath(response, redirectPath);
    }
  })

  // Another country
  router.post(`/${folderForViews}/versions/devs/another-country-lived-in`, function (request, response) {
    const redirectPath = `/${folderForViews}/versions/devs/nationality/lived-elsewhere`;
validatePath(response, redirectPath);
  })


  //Have you lived anywhere other than UK in last 3 years page
  router.post(`/${folderForViews}/versions/devs/nationality/lived-elsewhere`, function (request, response) {
    var livedElsewhere = request.session.data['lived-elsewhere']
    if (livedElsewhere == 'yes') {
      response.redirect('#')
    } else if (livedElsewhere == 'no') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/abroad-over-four-weeks`;
validatePath(response, redirectPath);
    }
  })

  //Have you been abroad for any periods over 4 weeks, in the last 3 years page
  router.post(`/${folderForViews}/versions/devs/nationality/abroad-over-four-weeks`, function (request, response) {
    var livedAbroad = request.session.data['abroad-over-four-weeks']
    if (livedAbroad == 'yes') {
      response.redirect('#')
    } else if (livedAbroad == 'no') {
        const redirectPath = `/${folderForViews}/versions/devs/nationality/benefits-abroad`;
validatePath(response, redirectPath);
    }
  })



  //benefits abroad
  router.post(`/${folderForViews}/versions/devs/nationality/benefits-abroad`, function (request, response) {
    var benefitsAbroad = request.session.data['benefits-abroad']
    if (benefitsAbroad == 'yes') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/insurance-abroad`;
validatePath(response, redirectPath);
    } else if (benefitsAbroad == 'no') {
      const redirectPath = `/${folderForViews}/versions/devs/nationality/insurance-abroad`;
validatePath(response, redirectPath);
    }
  })


  //pip-register/HEALTHCARE-PROFESSIONAL

  //pip-register/healthcare-professional/start
  router.post(`/${folderForViews}/HCPYesNo`, function (request, response) {
    var HCPYesNo = request.session.data['HCPYesNo']
    if (HCPYesNo == 'Yes') {
       const redirectPath = `/${folderForViews}/healthcare-professional/healthcare-prof-type`;
validatePath(response, redirectPath);
    } else if (HCPYesNo == 'No') {
        const redirectPath = `/${folderForViews}/hospital-dates/5-1-why-we-need-details`;
validatePath(response, redirectPath);
    }
  })


  //start ---> healthcare-prof-type
  router.post(`/${folderForViews}/healthcare-professional/start`, function (request, response) {
        const redirectPath = `/${folderForViews}/hospital-dates/5-1-why-we-need-details`;
validatePath(response, redirectPath);
  })



  //healthcare-professional/consent-2
  router.post(`/${folderForViews}/healthcare-professional/consent`, function (request, response) {
    console.log('consent:', request.body.consent);
    const consent = request.body.consent;

    if (consent === 'yes') {
        const redirectPath = `/${folderForViews}/healthcare-professional/start`;
validatePath(response, redirectPath);
    } else if (consent === 'no') {
        const redirectPath = `/${folderForViews}/healthcare-professional/hp-summary-two-remove`;
validatePath(response, redirectPath);
    } else {
        const redirectPath = `/${folderForViews}/healthcare-professional/start`;
validatePath(response, redirectPath); // optional fallback
    }
  });



  //healthcare-prof-type ---> what is their postcode
  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-type`, function (request, response) {
      const redirectPath = `/${folderForViews}/healthcare-professional/postcode`;
validatePath(response, redirectPath);
  })



  //healthcare-prof-type ---> find address
  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-type`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/healthcare-prof-details`;
validatePath(response, redirectPath);
  })

  router.post(`/${folderForViews}/healthcare-professional/healthcare-prof-details`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/postcode`;
validatePath(response, redirectPath);
  })

  //find address ---> select address
  router.post(`/${folderForViews}/healthcare-professional/postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/select-your-address`;
validatePath(response, redirectPath);
  })

  //select address ---> addiitonal support needed
  router.post(`/${folderForViews}/healthcare-professional/select-your-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/additional-support-needed`;
validatePath(response, redirectPath);
  })

  

  //enter-address-manually ----> second support needed?
  router.post(`/${folderForViews}/healthcare-professional/enter-address-manually`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/additional-support-needed`;
validatePath(response, redirectPath);
  })


  //additional-support-needed ---> additional-support-type
  router.post(`/${folderForViews}/healthcare-professional/additional-support-needed`, function (request, response) {
    var hcpTwoNeeded = request.session.data['support-needed']
    if (hcpTwoNeeded == 'yes') {
      const redirectPath = `/${folderForViews}/healthcare-professional/additional-support-type`;
validatePath(response, redirectPath);
    } else if (hcpTwoNeeded == 'no') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hp-summary-two-remove`;
validatePath(response, redirectPath);
    }
  })

  //additional-support-type ---> find address
  router.post(`/${folderForViews}/healthcare-professional/additional-support-type`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/postcode-support`;
validatePath(response, redirectPath);
  })

  //find address ---> select address
  router.post(`/${folderForViews}/healthcare-professional/postcode-support`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/select-support-address`;
validatePath(response, redirectPath);
  })

  //enter-address-manually ----> hospital and accom start
  router.post(`/${folderForViews}/healthcare-professional/support-address-manually`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/consent-NI`;
validatePath(response, redirectPath);
  })


  //select support address ---> hospital and accom start
  router.post(`/${folderForViews}/healthcare-professional/select-support-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/hp-summary-two-remove`;
validatePath(response, redirectPath);
  })

  //consent NI ----> hcp cya 2 person
  router.post(`/${folderForViews}/healthcare-professional/consent`, function (request, response) {
    const redirectPath = `/${folderForViews}/healthcare-professional/start`;
validatePath(response, redirectPath);
  })

  //healthcare-professional/confirm-remove 
  router.post(`/${folderForViews}/healthcare-professional/confirm-remove`, function (request, response) {
    console.log('HCPYesNo:', request.body.HCPYesNo);
    var HCPYesNo = request.body.HCPYesNo;

    if (HCPYesNo === 'yes') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hp-summary`;
validatePath(response, redirectPath);;
    } else if (HCPYesNo === 'no') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hp-summary-two-remove`;
validatePath(response, redirectPath);;
    } else {
      const redirectPath = `/${folderForViews}/error`;
validatePath(response, redirectPath);; // fallback
    }
  });




  //---------------------------------------------------------------------------------
  //pip-register/HEALTHCARE-PROFESSIONAL/CYAS

  //remove 2nd hcp
router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional-2`, function (request, response) {
  var removeHcp = request.session.data['remove-second-hcp'];

  if (removeHcp == 'yes') {
    const redirectPath = `/${folderForViews}/healthcare-professional/healthcare-prof-type`;
validatePath(response, redirectPath);;
  } else if (removeHcp == 'no') {
    const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/remove-second-hcp`;
validatePath(response, redirectPath);;
  } else {
    // Fallback: no option selected
    const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional-2`;
validatePath(response, redirectPath);;
  }
})


  //remove main hcp
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-health-professional`, function (request, response) {
    var removeHcp = request.session.data['remove-hcp']
    if (removeHcp == 'yes') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/remove-main-hcp`;
validatePath(response, redirectPath);
    } else if (removeHcp == 'no') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/hp-summary-two`;
validatePath(response, redirectPath);
    }
  })

  //remove final hcp
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/remove-add-health-professional`, function (request, response) {
    var removeHcp = request.session.data['remove-final-hcp']
    if (removeHcp == 'yes') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/add-new/healthcare-prof-type`;
validatePath(response, redirectPath);
    } else if (removeHcp == 'no') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/remove-main-hcp`;
validatePath(response, redirectPath);
    }
  })


  //add new hcp from remocving all contacts---> do you want to add another contact?
  router.post(`/${folderForViews}/healthcare-professional/hcp-cyas/add-new/additional-support-needed`, function (request, response) {
    var removeHcp = request.session.data['support-needed']
    if (removeHcp == 'yes') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/add-new/additional-support-type`;
validatePath(response, redirectPath);
    } else if (removeHcp == 'no') {
      const redirectPath = `/${folderForViews}/healthcare-professional/hcp-cyas/remove-second-hcp`;
validatePath(response, redirectPath);
    }
  })


  router.post(`/${folderForViews}/healthcare-professional/hp-summary-two-remove`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-1-why-we-need-details`;
validatePath(response, redirectPath);
  })

  //pip-register/HOSPITAL-DATES

  //hospital and accom start ----> Are you in hospital or hospice as an in-patient today?
  router.post(`/${folderForViews}/hospital-dates/5-1-why-we-need-details`, function (request, response) {

    const redirectPath = `/${folderForViews}/hospital-dates/5-2-today`;
validatePath(response, redirectPath);
  })




  // Are you in hospital or hospice as an in-patient today?
  router.post(`/${folderForViews}/hospital-dates/5-2-today`, function (request, response) {
    var hospitalToday = request.session.data['hospital-today']
    if (hospitalToday == 'yes-hospital') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-4-yesterday`;
validatePath(response, redirectPath);
    } else if (hospitalToday == 'no') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-3-other-housing-today`;
validatePath(response, redirectPath);
    } else if (hospitalToday == 'yes-hospice') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-8-hospice-yesterday`;
validatePath(response, redirectPath);
    }
  })

  // Were you in hospital yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-4-yesterday`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-5-private-patient`;
validatePath(response, redirectPath);
  })


  // are you a private patient? > What is the name and address of the hospital?
  router.post(`/${folderForViews}/hospital-dates/5-5-private-patient`, function (request, response) {
    // Read the user's answer from session data or form body
    var privatePatient = request.session.data['private-patient'] || request.body['private-patient']

    // If an option was selected, continue to the postcode step; if not, stay on the same page
    if (privatePatient) {
      const redirectPath = `/${folderForViews}/hospital-dates/5-6-postcode`;
validatePath(response, redirectPath);
    } else {
      // Fallback: no option selected — redisplay the same page (avoid open redirect)
      const redirectPath = `/${folderForViews}/hospital-dates/5-5-private-patient`;
validatePath(response, redirectPath);
    }
  })

  // postcode > select address
  router.post(`/${folderForViews}/hospital-dates/5-6-postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-7-select-hospital-address`;
validatePath(response, redirectPath);
  })

  // postcode > select address
router.post(`/${folderForViews}/hospital-dates/5-7-select-hospital-address`, function (_request, response) {
  // Always redirect to the hospital residence summary from the select address page
  const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
})

  // hospital manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-17-hospital-address-manually`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
  })

  // hospice manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-18-hospice-address-manually`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
  })

  // other manually > start bank
  router.post(`/${folderForViews}/hospital-dates/5-19-other-address-manually`, function (_request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-13-third-party-pay`;
validatePath(response, redirectPath);
  })

  // Were you in hospice yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-8-hospice-yesterday`, function (request, response) {
    var otherYesterday = request.session.data['hospice-yesterday']
    if (otherYesterday == 'yes') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-9-hospice-dates`;
validatePath(response, redirectPath);
    } else if (otherYesterday == 'no') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-10-hospice-postcode`;
validatePath(response, redirectPath);
    
      } else {
      // Fallback: no option selected — redisplay the same page (avoid open redirect)
      const redirectPath = `/${folderForViews}/hospital-dates/5-8-hospice-yesterday`;
validatePath(response, redirectPath);
    }

  })

  // Do you know the date you went into the hospice?
  router.post(`/${folderForViews}/hospital-dates/5-9-hospice-dates`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-10-hospice-postcode`;
validatePath(response, redirectPath);
  })

  // select hospice address
  router.post(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-11-select-hospice-address`;
validatePath(response, redirectPath);
  })

  // select hospice address
  router.post(`/${folderForViews}/hospital-dates/5-10-hospice-postcode`, function (_request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-11-select-hospice-address`;
validatePath(response, redirectPath);
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post(`/${folderForViews}/hospital-dates/5-11-select-hospice-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
  })

  // Are you living in a care home or nursing home, sheltered housing, a residential college or a hostel today?
  router.post(`/${folderForViews}/hospital-dates/5-3-other-housing-today`, function (request, response) {
    var otherToday = request.session.data['other-today']
    if (otherToday == 'yes') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-12-other-yesterday`;
validatePath(response, redirectPath);
    } else if (otherToday == 'no') {
      const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
    }
  else {
    const redirectPath = `/${folderForViews}/hospital-dates/5-3-other-housing-today`;
validatePath(response, redirectPath);
    }
    
  })

  // Were you living in this place yesterday?
  router.post(`/${folderForViews}/hospital-dates/5-12-other-yesterday`, function (request, response) {
    var otherYesterday = request.session.data['other-yesterday']
    if (otherYesterday == 'yes') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-15-other-postcode`;
validatePath(response, redirectPath);
    } else if (otherYesterday == 'no') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-15-other-postcode`;
validatePath(response, redirectPath);
    }
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post(`/${folderForViews}/hospital-dates/5-15-other-postcode`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-16-select-other-address`;
validatePath(response, redirectPath);
  })

  // Select other address > tasklist
  router.post(`/${folderForViews}/hospital-dates/5-16-select-other-address`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-13-third-party-pay`;
validatePath(response, redirectPath);
  })

  // Does a local authority, health authority, Jobcentre Plus, or a charity pay any of the costs for you to live there?
  router.post(`/${folderForViews}/hospital-dates/5-13-third-party-pay`, function (request, response) {
    var thirdPartyPay = request.session.data['third-party-pay']
    if (thirdPartyPay == 'health-trust') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-23-name-local`;
validatePath(response, redirectPath);
    } else if (thirdPartyPay == 'no') {
      const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
    } else if (thirdPartyPay == 'yes') {
      const redirectPath = `/${folderForViews}/hospital-dates/5-23-name`;
validatePath(response, redirectPath);
    }
  })

  // What is the name of the [organisation type]?
  router.post(`/${folderForViews}/hospital-dates/5-23-name`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
  })

  // local auth ---> What is the name -----> agreement?
  router.post(`/${folderForViews}/hospital-dates/5-23-name-local`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/5-14-local-agreement`;
validatePath(response, redirectPath);
  })

  // agreement to task list
  router.post(`/${folderForViews}/hospital-dates/5-14-local-agreement`, function (request, response) {
    const redirectPath = `/${folderForViews}/hospital-dates/hospital-residence-summary`;
validatePath(response, redirectPath);
  })



  // Can you give me your account details now?
  router.post(`/${folderForViews}/bank-details/6-1-start`, function (request, response) {
    var detailsNow = request.session.data['details-now']
    if (detailsNow == 'yes') {
      const redirectPath = `/${folderForViews}/bank-details/6-3-main-account-details-v2`;
validatePath(response, redirectPath);
    } else if (detailsNow == 'no') {
      const redirectPath = `/${folderForViews}/bank-details/6-2-no-details-now`;
validatePath(response, redirectPath);
    }
    else {
    const redirectPath = `/${folderForViews}/bank-details/6-1-start`;
validatePath(response, redirectPath);
      } 
  })

  // You can continue without entering account details
  router.post(`/${folderForViews}/bank-details/6-2-no-details-now`, function (request, response) {
    const redirectPath = `/${folderForViews}/task-list-bank-done`;
validatePath(response, redirectPath);
  })

  // Main account details
  router.post(`/${folderForViews}/bank-details/6-3-main-account-details-v2`, function (request, response) {
    const redirectPath = `/${folderForViews}/bank-details/bank-details-summary`;
validatePath(response, redirectPath);
  })

  // Bank details CYA to task list
  router.post(`/${folderForViews}/bank-details/bank-details-summary`, function (request, response) {
    const redirectPath = `/${folderForViews}/motability/motability`;
validatePath(response, redirectPath);
  })

  //Motability to Motability CYA
  router.post(`/${folderForViews}/motability-question`, function (request, response) {
    const redirectPath = `/${folderForViews}/motability/motability-summary`;
validatePath(response, redirectPath);
  })

  // -------------------------------------------------------------------------------------

  // Save application- i will now submit
  router.post(`/${folderForViews}/what-happens-next/save-application`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/what-happens-next`;
validatePath(response, redirectPath);
  })
  //design-updates/sprint-20/what-happens-next/what-happens-next
  router.post(`/${folderForViews}/what-happens-next/what-happens-next`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/online-form-option`;
validatePath(response, redirectPath);
  })

  router.post(`/${folderForViews}/what-happens-next/online-form-option`, function (request, response) {
    var previousOnline = request.session.data['form-online']
    if (previousOnline == 'online') {
      const redirectPath = `/${folderForViews}/what-happens-next/online-form-contact`;
validatePath(response, redirectPath);
    } else if (previousOnline == 'paper') {
      const redirectPath = `/${folderForViews}/what-happens-next/paper-whn-1`;
validatePath(response, redirectPath);
    }
  })

  // Online whn1 (form contact details)
  router.post(`/${folderForViews}/what-happens-next/online-form-contact`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/online-whn-1`;
validatePath(response, redirectPath);
  })

  // Online whn 1- whn 2
  router.post(`/${folderForViews}/what-happens-next/online-whn-1`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/online-whn-2`;
validatePath(response, redirectPath);
  })

  // Online whn 2- paper-after-sent
  router.post(`/${folderForViews}/what-happens-next/online-whn-2`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/after-form-sent`;
validatePath(response, redirectPath);
  })

  router.post(`/${folderForViews}/what-happens-next/previously-claimed-online`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/paper-whn-1`;
validatePath(response, redirectPath);
  })

  // Paper whn 1- whn 2
  router.post(`/${folderForViews}/what-happens-next/paper-whn-1`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/paper-whn-2`;
validatePath(response, redirectPath);
  })

  // Paper whn 2- paper-after-sent
  router.post(`/${folderForViews}/what-happens-next/paper-whn-2`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/after-form-sent`;
validatePath(response, redirectPath);
  })

  // After-form-sent > end claim and clear session
  router.post(`/${folderForViews}/what-happens-next/after-form-sent`, function (request, response) {
    const redirectPath = `/${folderForViews}/what-happens-next/application-submitted`;
validatePath(response, redirectPath);
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
