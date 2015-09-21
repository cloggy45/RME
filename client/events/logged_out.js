Template.loggedOut.events({
    "click #login": function (e, tmpl) {
        e.preventDefault();
        Meteor.loginWithSteam({requestPermissions : ['user']}, function(err) {
            if(err) {
                throw new Meteor.Error("Steam login failed");
            }
        })
    }
});