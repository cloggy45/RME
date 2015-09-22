Meteor.methods({
    'addOrder': function (order) {
        OrderList.insert(order);
        check(order, Object);
    },
    'deleteOrder': function (id) {
        check(id, Match.Any);
        OrderList.remove({_id: id});
    },
    'addTown' : function (town) {
        console.log(town);
        check(town, Object);
        TownList.insert(town);
    },
    'deleteTown' : function (id) {
        check(id, Match.Any);
        TownList.remove({_id: id});
    },
    'addFaction' : function (faction) {
        check(faction, Match.Any);
        FactionList.insert(faction);
    }
});