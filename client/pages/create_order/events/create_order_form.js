Template.createOrderForm.events({
    "submit form" : function (event, template) {
        event.preventDefault();
        var user = Meteor.user();
        var order = {
            commodity : event.target.selectCommodity.value,
            orderType : event.target.selectOrderType.value,
            quantity : event.target.quantityInput.value,
            price : event.target.priceInput.value,
            merchant : user.profile.name,
            faction : user.profile.faction,
            location : event.target.selectLocation.value,
            createdAt : new Date(),
            createdBy : Meteor.userId()
        };

        Meteor.call('add', "Orders", order, function(error) {
            if(error) {
                sAlert.error(error,{effect:'scale', timeout:5000});
            } else {
                sAlert.success('Order Added',{effect:'scale', timeout:2000});
            }
        });
        // Resets the form
        template.find("form").reset();

    }
});

