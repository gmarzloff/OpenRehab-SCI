
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
    resetFIMarr();              // sets all elements to 0
    
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
    
});

var scimsliders = [];

myApp.onPageInit('scim', function (page) {

    var scim = new SCIM_Scale();    // load the questions from the scales.js model
    var scimHTML = "";

    for(i=0;i<scim.questions.length;i++){
        var q = scim.questions[i];
        var subSectionHTML = "<div class=\"content-block-title normal-word-wrap\">" + q.title + "</div>\n\t\t" +
                             "<div class=\"swiper-container swiper-" + i + "\" index=\"" + i +  "\">\n\t\t\t" +
                            "<div class=\"swiper-pagination\"></div>\n" + 
                            "<div class=\"swiper-wrapper\">\n\t";

        for (j=0; j < q.choices.length; j++){
            subSectionHTML += "<div class=\"swiper-slide\" score=\"" + q.choices[j].value + "\"><span>("+ q.choices[j].value + 
            ") " + q.choices[j].description + "</span></div>\n";
        }
        subSectionHTML += "</div>\n</div>\n";
        scimHTML = scimHTML + subSectionHTML;
    }
    scimHTML = scimHTML + "\n\n<p><a href=\"#\" id=\"resetSCIMscoresButton\" class=\"button button-fill color-red button-round\">Reset Scores</a></p>";

    $$('#scim-page-content').append(scimHTML);

    for(i=0;i<scim.questions.length;i++){
        // Activate the slider functionality
        var targetSwiperDiv = '.swiper-'+i;

        scimsliders[i] = myApp.swiper(targetSwiperDiv, {
            pagination:'.swiper-pagination',
            grabCursor: true,
            spaceBetween: 50,
            onSlideChangeEnd: function(swiper){
                // callback function triggered when slide finishes moving
                var newScore = swiper.slides[swiper.activeIndex].getAttribute("score");
                scim.userScores[swiper.container[0].getAttribute("index")] = parseInt(newScore);
                $$('#scimScore span').html(getSum(scim.userScores) + "/100");
            }
        });
    }

    $$('#emailButton').on('click', function () {
        scim.sendReportByEmail();
    });

    $$('#resetSCIMscoresButton').click(function(){
        for(i=0; i< scim.userScores.length; i++){ 
            scim.userScores[i] = 0;                       // reset all user scores to 0
            scimsliders[i].slideTo(0, 500, false);   // move all sliders back to 0 & skip callbacks
        }
        $$('#scimScore span').html('0/100');
    });
});


myApp.onPageInit('paiqi', function (page) {
    var paiqi = new PAIQI_Scale();
    var paiqiScores = [];           // creates an array of scores
    resetPAIQIarr();                  // sets all elements to 0
    
    // Generate HTML for list of sliders
    var activityHTMLstring = ""
    for(i=0;i<paiqi.questions.length;i++){
        var q = paiqi.questions[i];
        var subSectionHTML = "<div class=\"content-block activity-block\">\n\t<div class=\"content-block-inner\">\n\t" +
                            "<p><span class=\"activityTitle\">" + q.title + ":</span> " + q.description + "</p>\n\t\t" +
                             "<div class=\"item-title\"><span class=\"score\">(0)</span></div>\n" + 
                            "<div class=\"item-input\"><div class=\"range-slider\">\n" +
                            "<input type=\"range\" min=\"0\" max=\"6\" value=\"0\" step=\"1\"></div></div>" +
                            "</div>\n</div>\n";
        activityHTMLstring = activityHTMLstring + subSectionHTML;
    }
    activityHTMLstring = activityHTMLstring + "\n\n<p><a href=\"#\" id=\"resetPAIQIscoresButton\" class=\"button button-fill color-red button-round\">Reset Scores</a></p>";
    $$('#paiqi-page-content').append(activityHTMLstring);



    $$('.activity-block input[type="range"]').each(function(index,value){
        $$(this).on('input change', function(){
            paiqiScores[index] = parseInt(this.value);
            $$(this).parents().eq(2).find('span.score').text('('+this.value+')');

            // calculate the total FIM score
            $$('#totalScore').html('Total: ' + getSum(paiqiScores));
        });
    });

    $$('#resetPAIQIscoresButton').click(function(){
        resetPAIQIarr();
        $$('#totalScore').html('Total: ' + getSum(paiqiScores));
        $$('.activity-block input[type="range"]').val(0);
        $$('.activity-block span.score').html('(0)');
    });

    function resetPAIQIarr(){
        for(i=0; i<paiqi.questions.length; i++){ paiqiScores[i] = 0; }
    }
    
    
});

// Gets sum of array items
function getSum(scores){
    var sum =0;
    for (i=0; i<scores.length;i++){
        sum+= scores[i];
    }
    return sum;
}

/*
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(    ''   );
	return;
}*/