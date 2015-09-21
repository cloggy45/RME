Meteor.subscribe('items');

Template.createOrderForm.helpers({
    items : function () {
        console.log(RustItems.find().fetch());
        return RustItems.find().fetch();
    }
});