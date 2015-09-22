Template.townsList.events({
    'submit form' : function (event) {
        event.preventDefault();
        var townId = event.target.selectTown.value;
        Meteor.call('remove','Town', townId);
    }
});