Accounts.onCreateUser(function(options, user) {
    options.profile.maxPosts = "10";
    options.profile.faction = 'Indy';
    if(options.profile)
        user.profile = options.profile;

    return user;
});

Accounts.validateNewUser(function(user) {
    console.log(user);
   Meteor.call('getSuperUserId', function(err,result) {
       if(user.services.steam.id == result) {
           console.log(result);
           user.profile.isAdmin = true
       } else {
           user.profile.isAdmin = false
       }
   });
    return true
});
