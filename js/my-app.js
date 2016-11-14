
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// Export selectors engine
var $$ = Dom7;
/*
if (isAndroid) {
    // Change class
    $$('.view .navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    $$('.view .navbar').prependTo('.view .page');
}*/

// Initialize your app
var myApp = new Framework7({
    //Enable Material theme for Android device only
    material: isAndroid ? true : false,
    //Enable Template7 pages
    template7pages: true,
    precompileTemplates: true,
    animateNavBackIcon: true,
    pushState: true,
    sortable: false, // disable sortable lists, improves performance
    swipeout: false, // not using this
    scrollTopOnNavbarClick : true
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
myApp.onPageInit('fim', function (page) {

    var fimDomainCount = $$('.fimCalculator li').length;
    var fimScores = [];         // creates an array of scores
    resetFIMarr();       // sets all elements to 0
    
    $$('.fimCalculator li input[type="range"]').each(function(index,value){
        $$(this).on('input change', function(){
            fimScores[index] = parseInt(this.value);
            $$(this).parents().eq(2).find('span.score').text('('+this.value+')');

            // calculate the total FIM score
            $$('#totalScore').html('Total: ' + getSum(fimScores));
        });
    });

    $$('#resetFIMscoresButton').click(function(){
        resetFIMarr();
        $$('#totalScore').html('Total: ' + getSum(fimScores));
        $$('.fimCalculator li input[type="range"]').val(0);
    });

    function resetFIMarr(){
        for(i=0; i<fimDomainCount; i++){ fimScores[i] = 0; }
    }

    function getSum(scores){
        var sum =0;
        for (i=0; i<scores.length;i++){
            sum+= scores[i];
        }
        return sum;
    }
    
});

/*
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(    ''   );
	return;
}*/