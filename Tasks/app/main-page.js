var frames = require("ui/frame");
var viewModel = require("./main-view-model");
var dialogs = require("ui/dialogs");

// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;

//Tap event of a "Task"
function listViewItemTap(args) {
    //Navigate to the detail item, binding context is the selected "Task" from everlive
    frames.topmost().navigate({
        moduleName: "app/details-page",
        context: args.view.bindingContext
    });
}
exports.listViewItemTap = listViewItemTap;
