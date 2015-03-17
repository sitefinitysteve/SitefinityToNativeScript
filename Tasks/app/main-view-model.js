var observable = require("data/observable");
var observableArray = require("data/observable-array");
var dialogs = require("ui/dialogs");
var everlive = require("./lib/everlive");

var ViewModelItem = (function () {
    function ViewModelItem(title, info) {
        this.title = title;
        this.info = info;
    }
    return ViewModelItem;
})();
exports.ViewModelItem = ViewModelItem;


var el = new everlive(global.TELERIK_BAAS_KEY);

var mainViewModel = new observable.Observable();
mainViewModel.items = new observableArray.ObservableArray([]);

el.data('Task').get().then(function(data) {
    mainViewModel.set("items", data.result);
}, function(error) {
   dialogs.alert('Error gettings lists[' + error.message + ']');
});


module.exports = mainViewModel;
