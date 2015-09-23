Template.activeOrderTable.helpers({
    activeOrders : function () {
        var currentUserId = Meteor.userId();
        return OrderList.find({createdBy : currentUserId}).fetch();
    },
    tableSettings : function () {
        return {
            fields: [
                {key:'orderType', label: 'Order Type', fn: function(orderType) {
                    return orderType == 1 ? 'Buy' : 'Sell';
                }},
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
                {key: '_id', label: '', fn: function (id) {
                    var buttonString = '<button type="button" class="btn btn-danger btn-xs" data-id="'+ id +'">Delete</button></td>';
                    return new Spacebars.SafeString(buttonString);
                }}
            ],
            noDataTmpl : Template.noOrder,
            showFilter : true
        }
    }

});

