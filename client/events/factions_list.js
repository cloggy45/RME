Template.factionsList.events({
    'submit form' : function(event) {
        event.preventDefault();
        var factionId = event.target.selectFactions.value;
        FactionList.remove({_id:factionId});
    }
});