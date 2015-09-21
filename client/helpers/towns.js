Meteor.subscribe('towns');

Template.townsList.helpers({
   towns : function (err) {
       return TownList.find({}).fetch();
   }
});