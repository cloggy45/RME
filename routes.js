var beforeHooks = {
   isLoggedIn : function (pause) {
      if(!Meteor.userId()) {
         this.render('front');
      } else {
         this.next();
      }
   },
   isAdmin : function (pause) {
      if(Meteor.user().profile.isAdmin == true) {
         this.next();
      } else {
         this.render('active');
      }
   }
};

Router.before(beforeHooks.isLoggedIn, {only: ['buy','sell','active']});
Router.before(beforeHooks.isAdmin, {only: ['admin']});

Router.route('/', function() {
   this.render('front');
});

Router.route('/buy', function() {
   this.render('buy');
});
Router.route('/sell', function() {
   this.render('sell');
});
Router.route('/active', function() {
   this.render('active');
});
Router.route('/admin', function() {
   this.render('admin');
});

Router.route('/logout', function() {
   this.render('front');
});


