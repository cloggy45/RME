Template.loggedIn.events({
    "click #buyOrders, click #sellOrders, click #activeOrders" : function (event) {
        var orderType = $(event.target).attr('data-order-type');
        Session.set('currentOrderTemplate', orderType);
    },
    "click #createOrder" : function (event) {
        bootbox.dialog({
            title : 'Create Order',
            message : "<div id='dialogNode'></div>"
        });
        Blaze.render(Template.createOrderForm, $("#dialogNode")[0]);
    },
    "click #logout": function (e, tmpl) {
        Meteor.logout(function(err) {
            if(err) {
                throw new Meteor.Error("Logout Failed");
            }
        })
    }
});
