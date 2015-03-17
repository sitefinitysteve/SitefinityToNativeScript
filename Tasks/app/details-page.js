var dialogs = require("ui/dialogs");
var everlive = require("./lib/everlive");
var task;
var page;

// Event handler for Page "navigatedTo" event attached in details-page.xml
function pageNavigatedTo(args) {
    page = args.object;
    page.bindingContext = page.navigationContext;
}
exports.pageNavigatedTo = pageNavigatedTo;

//Save data back
function saveTask(args) {
    var task = page.bindingContext;
    
    var el = new everlive(global.TELERIK_BAAS_KEY);
    el.data("Task").updateSingle(
    { 
       Id: task.Id, 
      'Description': task.Description,
      'Complete': task.Complete
    },
    function(data){
        dialogs.alert("Saved, all is good: " + JSON.stringify(data));
    },
    function(error){
        dialogs.alert(error.message);
    });
    
}
exports.saveTask = saveTask;