
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// Export selectors engine
var $$ = Dom7;

if (isAndroid) {
    // Change class
    $$('.view .navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    // $$('.view .navbar').prependTo('.view .page');
}

// Initialize your app
var myApp = new Framework7({
    //Enable Material theme for Android device only
    material: isAndroid ? true : false,
    //Enable Template7 pages
    template7pages: true
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Material doesn't support it but don't worry about it
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

/*
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('asia', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
*/

/*
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(    ''   );
	return;
}*/