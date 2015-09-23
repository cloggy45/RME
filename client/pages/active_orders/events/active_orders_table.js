Template.activeOrderTable.events({
    'click button' : function (event) {
        var orderId = $(event.target).attr('data-id');
        Meteor.call('remove','Order', orderId,function(err) {
            if(err) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success('Order deleted successfully!',{effect:'scale', timeout:2000});
            }
        });

    }
});