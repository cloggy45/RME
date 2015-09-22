Template.factionsList.events({
    'submit form' : function(event) {
        event.preventDefault();
        var factionId = event.target.selectFactions.value;
        Meteor.call('remove','Faction',factionId);
    }
});