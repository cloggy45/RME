Template.factionsList.helpers({
   factions : function () {
       return FactionList.find().fetch();
   }
});