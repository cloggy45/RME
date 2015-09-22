Meteor.methods({
    'remove' : function (collectionName, id) {
        check(collectionName, Match.Any);
        check(id, Match.Any);
        switch (collectionName) {
            case "Order":
                OrderList.remove(id);
                break;
            case "Faction":
                FactionList.remove(id);
                break;
            case "Town":
                TownList.remove(id);
                break;
            default:
                Meteor.Error("Unable to remove document from collection..");
                break;
        }
    },
    'add' : function (collectionName, document) {
        check(collectionName, Match.Any);
        check(document, Match.Any);

        switch (collectionName) {
            case "Orders":
                OrderList.insert(document);
                break;
            case "Factions":
                FactionList.insert(document);
                break;
            case "Towns":
                TownList.insert(document);
                break;
            default:
                Meteor.Error("Unable to add document to collection..");
                break;
        }
    }
});