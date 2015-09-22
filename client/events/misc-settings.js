Template.miscSettings.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var town = {
            name : event.target.inputTownName.value
        };

        Meteor.call('add','Towns', town);
        template.find("form").reset();
    }
});