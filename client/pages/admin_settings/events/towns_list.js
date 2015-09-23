Template.townsList.events({
    'submit form' : function (event) {
        event.preventDefault();
        var townId = event.target.selectTown.value;
        Meteor.call('remove','Town', townId, function(error) {
            if(error) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success('Town removed!',{effect:'scale', timeout:2000});

            }
        });
    }
});