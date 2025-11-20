const path = require('path')
const allowedPaths = ['5-2-today','what-colour-paper-do-you-need','inRoom','existing-claims','what-is-ni-number','dla-payments','what-is-ni-number-2','what-is-ni-number-3','welcome-screen','failed-security','security-check','what-is-your-dob','what-is-your-previous-surname','contact-details','select-your-address','confirm-correspondence','start-info','do-you-want-to-receive-text-updates','contact-details-summary','do-you-want-to-receive-text-updates','what-other-help-when-we-contact','how-should-we-contact-you','what-is-your-email','start-info','do-you-have-a-condition','helpers','read-letters','complete-forms','support-no-help','who','where','benefits-abroad','uk-2-of-3-years','what-country-benefits','family-receiving-benefits','task-list-nat-done','family-country-benefits','benefits-abroad','5-1-why-we-need-details','start','hp-summary-two-remove','consent','postcode','srel-bau-kickout','what-country-do-you-live-in','service-start-page','what-is-your-name','existing-claims','new-application','claiming-self','northern-ireland','scotland','other-country','srel','someone-else-bau-kickout','external-route','answer-questions-as-person','authority','last-12-months','dla-now','stop-getting-pip-last-year','appointee','appointee-kickout','security-check','dla-payments','over-16','under-16-ineligible','no-match-ni-kickout','scr-kickout','srel','srel-bau-kickout','over-16','what-is-ni-number','searchlight-check','security-check','failed-security','welcome-screen','declaration','task-list','whatIsYourName','previousNameYesNo','whatIsYourPreviousSurname','what-is-your-dob','what-is-your-postcode','select-your-address','enter-address-manually-country','confirm','correspondence-address','correspondence-postcode','select-your-address-correspondence','other-residence-summary','confirm-correspondence-address','confirm-correspondence','written-format','correspondence-enter-address-manually','what-is-your-phone-number','mobile','other-number','what-is-your-other-phone-number','do-you-want-to-receive-text-updates','contact-details-summary','font','paper','audio','contact','other-help','what-other-help-when-we-contact','what-is-relay-uk-number','what-is-your-textphone-number','signing-lipspeaking','how-should-we-contact-you','what-is-your-email','what-colour-paper-do-you-need','what-size-print-do-you-need','any-other-help-when-we-contact','what-is-your-phone-2','what-is-your-phone-1','what-is-your-phone-3','what-phone-3','contact-details-summary','start-info','do-you-have-a-condition','complete-forms','read-letters','post','helpers','who','who-helps','support-no-help','support-help','support-with-help','written-format','large-print','email-reason','what-is-your-email','what-type-of-audio-format','what-type-of-braille-do-you-need','what-video-format-do-you-need','add-support-summary','start','what-is-your-nationality','what-is-your-nationality','uk-2-of-3-years','leftUK','eea-nationality','another-nationality','living-in-uk','insurance-abroad','benefits-abroad','what-country-benefits','task-list-nat-done','family-receiving-benefits','family-country-benefits','start','what-is-your-nationality','another-nationality','what-country-do-you-live-in','lived-elsewhere','another-country-lived-in','abroad-over-four-weeks','abroad-over-four-weeks','benefits-abroad','HCPYesNo','healthcare-prof-type','healthcare-prof-details','postcode','select-your-address','enter-address-manually','additional-support-needed','additional-support-type','postcode-support','select-support-address','support-address-manually','consent-1','start','hp-summary-two-remove','consent-2','hp-summary','remove-health-professional-2','remove-health-professional','remove-add-health-professional','additional-support-needed','additional-support-type','remove-second-hcp','hp-summary-two-remove','hp-summary','add-new','5-1-why-we-need-details','5-2-today','5-2-today','5-4-yesterday','5-5-private-patient','5-6-postcode','5-7-select-hospital-address','5-17-hospital-address-manually','5-18-hospice-address-manually','5-19-other-address-manually','5-8-hospice-yesterday','5-9-hospice-dates','5-10-hospice-postcode','5-11-select-hospice-address','hospital-residence-summary','5-13-third-party-pay','5-12-other-yesterday','5-15-other-postcode','5-16-select-other-address','5-13-third-party-pay','5-23-name','5-23-name-local','5-14-local-agreement','6-1-start','6-2-no-details-now','6-3-main-account-details-v2','bank-details-summary','motability-question','5-6-hospital-residence-summary','5-16b-confirmation','motability','motability-summary','save-application','what-happens-next','online-form-option','online-form-contact','online-whn-1','online-whn-2','previously-claimed-online','paper-whn-1','paper-whn-2','after-form-sent','application-submitted','over-16','dla-now','under-16-ineligible','last-12-months','srel','srel-bau-kickout','searchlight-check','security-check','failed-security','welcome-screen','declaration','task-list','whatIsYourName','what-is-your-postcode','advice-as-marker','task-helper','nationality-summary','hospice-residence-summary','5-3-other-housing-today']


function validatePath(res, redirectPath) {

    console.log("INSIDE VALIDATEPATH");
    const basePath = getBasePath(redirectPath);
    console.log("THE BASE PATH ",basePath)
    const folderForViews = redirectPath.split('/')[1];
    if (!allowedPaths.includes(basePath)) {
  console.error(`Path "${basePath}" not in allowedPaths`);
}
    console.log("THE FOLDER FOR VIEWS ",folderForViews)



    if (allowedPaths.includes(basePath)) {
      console.log("IN ALLOWED PATHS");
      return res.redirect(redirectPath);
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