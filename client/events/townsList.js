Template.townsList.events({
    'click button' : function (event) {
        var selectedTown = $(event.target).attr('data-id');
        TownList.remove({_id:selectedTown})
    }
});