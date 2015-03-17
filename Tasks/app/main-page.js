var frames = require("ui/frame");
var viewModel = require("./main-view-model");
var dialogs = require("ui/dialogs");

// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    
   
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;

// Navigate to the details page with context set to the data item for specified index
function listViewItemTap(args) {
    frames.topmost().navigate({
        moduleName: "app/details-page",
        context: args.view.bindingContext
    });
}
exports.listViewItemTap = listViewItemTap;
