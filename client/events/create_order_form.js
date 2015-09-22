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
            location : event.target.selectLocation.value,
            createdAt : new Date(),
            createdBy : Meteor.userId()
        };

        Meteor.call('add', "Orders", order);
        // Resets the form
        template.find("form").reset();

    }
});

