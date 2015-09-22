Template.loggedIn.helpers({
    username : function () {
        return Meteor.user().services.steam.username;
    }
});