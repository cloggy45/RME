Template.userFactionSettings.events({
   "submit form" : function(event, template) {
       event.preventDefault();
       var factionName = event.target.selectFaction.value;
       Meteor.users.update(Meteor.userId(), {$set: {'profile.faction':factionName}}, function(error) {
           if(error) {
               sAlert.error(error,{effect:'scale', timeout:5000});
           } else {
               sAlert.success('Faction updated!',{effect:'scale', timeout:2000});
           }
       });
       template.find("form").reset();
   }
});