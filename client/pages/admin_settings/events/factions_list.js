Template.factionsList.events({
    'submit form' : function(event) {
        event.preventDefault();
        var factionId = event.target.selectFactions.value;
        Meteor.call('remove','Faction',factionId, function (error) {
            if(error) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success('Faction has been removed!',{effect:'scale', timeout:5000});

            }
        });
    }
});