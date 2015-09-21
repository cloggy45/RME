Template.active.helpers({
    activeOrdersTotal : function () {
        return OrderList.find({createdBy : Meteor.userId()}).count();
    },
    maxOrders : function () {
        return Meteor.user().profile.maxPosts;
    }
});