Template.factionSettingsForm.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var faction = {
            name : event.target.inputFactionName.value,
            tag : event.target.inputFactionTag.value
        };
        Meteor.call('add','Factions', faction, function(error) {
            if(error) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success(faction.name +' faction added Successfully',{effect:'scale', timeout:1000});
            }
        });
        template.find("form").reset();
    }
});