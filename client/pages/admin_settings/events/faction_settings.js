Template.factionSettingsForm.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var faction = {
            name : event.target.inputFactionName.value,
            tag : event.target.inputFactionTag.value
        };
        Meteor.call('add','Factions', faction);
        template.find("form").reset();
    }
});