Template.factionSettingsForm.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var faction = {
            name : event.target.inputFactionName.value
        };

        Meteor.call('addFaction', faction);
        template.find("form").reset();
    }
});