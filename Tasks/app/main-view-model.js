var observable = require("data/observable");
var observableArray = require("data/observable-array");
var dialogs = require("ui/dialogs");
var everlive = require("./lib/everlive");

var el = new everlive(global.TELERIK_BAAS_KEY);

//Create the model
var mainViewModel = new observable.Observable();

//Create the tasks obserable array
mainViewModel.tasks = new observableArray.ObservableArray([]);

//Talk to everlive
el.data('Task').get().then(function(data) {
    //Success!  Put the data into the tasks array
    mainViewModel.set("tasks", data.result);
}, function(error) {
   dialogs.alert('Error gettings lists[' + error.message + ']');
});

//Export the result
module.exports = mainViewModel;
