var FollowToggle = require('./follow_toggle.js');
var APIUtil = require('./api_util.js');

$(document).ready(function(){

let $button = $('button.follow-toggle');
for (var i = 0; i < $button.length; i++) {
   let button = $button[i];
   new FollowToggle(button);
}

});
