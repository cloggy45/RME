Template.registerHelper("prettifyDate", function (timestamp) {
    return moment(new Date(timestamp)).fromNow();
});

Template.registerHelper("prettifyOrderType", function (orderType) {
    return orderType == 1 ? 'Buy' : 'Sell';
});

Template.registerHelper("prettifyCommodity", function (commodityId) {
    var Commodity = {
        1: 'Wood',
        2: 'Stone',
        3: 'Sulfur',
        4: 'Metal Ore'
    };
    return Commodity[commodityId];
});

Template.registerHelper("isEqual", function(firstValue, secondValue) {
    if(firstValue == secondValue) {
        return "Selected";
    }
});

Template.registerHelper("canCreateOrder", function() {
    if(OrderList.find({createdBy : Meteor.userId()}).count() >= Meteor.user().profile.maxPosts) {
        return false;
    } else {
        return true;
    }
});

Template.registerHelper("isAdmin", function() {
    return Meteor.user().profile.isAdmin;
});