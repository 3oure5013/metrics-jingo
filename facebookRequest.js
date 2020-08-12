var request = require('request');

request.post({ 
  url : "https://graph.facebook.com/445262959766005/activities",
  form: {
    event: 'CUSTOM_APP_EVENTS',
    custom_events: JSON.stringify([{
      _eventName: "Ai-je bien repondu a votre question YES"
    }]),
    advertiser_tracking_enabled: 1,
    application_tracking_enabled: 1,
    extinfo: JSON.stringify(['mb1']),
    page_id: 114386043699339,
    page_scoped_user_id: 100008188728164
  }
}, function(err,httpResponse,body){ 
  console.error(err);
  console.log(httpResponse.statusCode);
  console.log(body);
});