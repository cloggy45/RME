Template.townsList.helpers({
   towns : function (err) {
       return TownList.find({}).fetch();
   }
});