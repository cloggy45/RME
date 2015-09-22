Template.ordersTable.helpers({
    orders : function () {
        var orderType = Session.get('currentOrderTemplate');
        //if order type == 2 then the active tab has been selected.

        if(orderType == 3) {
            return OrderList.find({createdBy : Meteor.userId()}).fetch();
        } else {
            return OrderList.find({orderType : orderType}).fetch();
        }
    },
    tableSettings : function () {
        return {
            fields: [
                {key: 'commodity', label: 'Commodity'},
                {key: 'quantity', label: 'Quantity', fn: function(quantity) {
                    return parseInt(quantity);
                }},
                {key: 'price', label: 'Price (HQM)', fn: function(price) {
                    return parseInt(price);
                }},
                {key: 'merchant', label: 'Merchant'},
                {key: 'location', label: 'Location'},
                {key: 'createdAt', label: 'Order Created', fn: function(date) {
                    return moment(date).fromNow();
                }},
            ],
            noDataTmpl : Template.noOrder,
            showFilter : true
        }
    }
});

