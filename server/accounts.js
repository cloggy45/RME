Accounts.onCreateUser(function(options, user) {
    options.profile.isAdmin = false;
    options.profile.maxPosts = "10";
    options.profile.faction = 'Indy';

    if(options.profile)
        user.profile = options.profile;

    return user;
});


