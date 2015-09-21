Template.townsList.events({
    'submit form' : function (event) {
        event.preventDefault();
        var townId = event.target.selectTown.value
        TownList.remove({_id:townId});
    }
});