Template.createOrderForm.helpers({
    items : function () {
        return RustItems.find().fetch();
    },
    towns : function () {
        return TownList.find().fetch();
    }
});