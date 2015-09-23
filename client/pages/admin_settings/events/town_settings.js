Template.townSettingsForm.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var town = {
            name : event.target.inputTownName.value
        };

        Meteor.call('add','Towns', town, function(error) {
            if(error) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success(town.name + ' town has been added!',{effect:'scale', timeout:2000});
            }
        });
        template.find("form").reset();
    }
});