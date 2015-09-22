Template.userTable.events({
    'submit #user': function (event) {
        event.preventDefault();

        var selectedUser = $(event.target).attr('data-id');
        var booleanValue = JSON.parse(event.target.isAdmin.value);
        var profileUpdate = {
            'profile.maxPosts' : event.target.maxPosts.value,
            'profile.isAdmin' : booleanValue
        };

        Meteor.users.update({_id: selectedUser}, {$set: profileUpdate});
    }
});