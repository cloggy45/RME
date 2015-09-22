Template.userFactionSettings.events({
   "submit form" : function(event, template) {
       event.preventDefault();
       var factionName = event.target.selectFaction.value;
       Meteor.users.update(Meteor.userId(), {$set: {'profile.faction':factionName}});
       template.find("form").reset();
   }
});