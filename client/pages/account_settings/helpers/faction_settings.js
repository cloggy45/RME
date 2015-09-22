Template.userFactionSettings.helpers({
    factions : function() {
        return FactionList.find().fetch();
    }
});