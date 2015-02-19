
Cars = new Mongo.Collection("cars");

Template.body.helpers({
    cars: function() {
        return Cars.find();
    }
});

Template.body.events({
    "submit .new-car": function(event) {
        var reg = event.target.reg.value;
        var model = event.target.model.value;
        var milage = event.target.milage.value;
        var consumption = event.target.consumption.value;

        Cars.insert({
            reg: reg,
            model: model,
            milage: milage,
            consumption: consumption,
            owner: Meteor.userId(),
            username: Meteor.user().username
        });

        event.target.reg.value = "";
        event.target.model.value = "";
        event.target.milage.value = "";
        event.target.consumption.value = "";

        return false;
    },
    "click .delete": function() {
        Cars.remove(this._id);
    }
});


Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
