Meteor.subscribe('allUsers');

Template.userTable.helpers({
    users : function() {
        return Meteor.users.find({});
    }
});

