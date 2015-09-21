Template.miscSettings.events({
    'submit form' : function (event, template) {
        event.preventDefault();
        var town = {
            name : event.target.inputTownName.value,
            coordinates : event.target.inputTownCoordinates.value
        };

        Meteor.call('addTown', town);
    }
});