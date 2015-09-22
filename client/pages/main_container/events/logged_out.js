Template.loggedOut.events({
    "click #login": function (e, tmpl) {
        e.preventDefault();
        Meteor.loginWithSteam({}, function(err) {
            if(err) {
                throw new Meteor.Error("Steam login failed");
            }
        })
    }
});