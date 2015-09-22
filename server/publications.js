Meteor.publish('theOrders', function() {
    return OrderList.find();
});

Meteor.publish('allUsers', function() {
   return Meteor.users.find({});
});

Meteor.publish('towns', function() {
    return TownList.find();
});

Meteor.publish('factions', function() {
   return FactionList.find();
});

Meteor.publish('items', function() {
   return RustItems.find();
});

Meteor.publish('currentUser', function() {
    if(this.userId) {
        return Meteor.users.find({_id: this.userId});
    } else {
        this.ready();
    }
});
