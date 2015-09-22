Template.activeOrderTable.events({
    "click button" : function (event) {
        var orderId = $(event.target).attr('data-id');
        Meteor.call('remove','Order', orderId);
    }
});