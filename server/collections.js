OrderList = new Mongo.Collection('orders');

OrderList.allow({
   insert : function (userId, doc) {
       return (userId && doc.owner === userId);
   },
    remove : function (userId, doc) {
        return doc.owner === userId;
    },
    fetch : ['owner']
});

TownList = new Mongo.Collection('towns');

TownList.allow({
    insert : function (userId, doc) {
        return (userId && doc.owner === userId);
    },
    remove : function () {
        return Meteor.user().profile.isAdmin;
    },
    fetch : ['owner']
});

Meteor.users.allow({
   update : function () {
       return Meteor.user().profile.isAdmin || Meteor.user().services.steam.id == '76561198013614174';
   }
});

RustItems = new Mongo.Collection('items');
