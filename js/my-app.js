
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

// Callbacks for individual pages

var fimsliders = [];

myApp.onPageInit('fim', function (page) {

    var fim = new FIM_Scale();    // load the questions from the scales.js model
    var fimHTML = "";
    
    for(i=0;i<fim.questions.length;i++){
        var q = fim.questions[i];
        var subSectionHTML = "<div class=\"content-block-title normal-word-wrap\">" + q.title + "</div>\n\t\t" +
                            "<div class=\"fim-mini-slider swiper-" + i + "\" index=\"" + i +  "\">\n\t\t\t" +
                            "<div class=\"swiper-pagination\"></div>\n" + 
                            "<div class=\"swiper-wrapper\">\n\t";

        for (j=0; j < q.choices.length; j++){
            subSectionHTML += "<div class=\"swiper-slide swiper-slide-fim\" score=\"" + q.choices[j].value + "\"><span>("+ q.choices[j].value + 
            ") " + q.choices[j].description + "</span></div>\n";
        }
        subSectionHTML += "</div>\n</div>\n";
        fimHTML = fimHTML + subSectionHTML;
    }
    fimHTML = fimHTML + "\n\n<p><a href=\"#\" id=\"resetFIMscoresButton\" class=\"button button-fill color-red button-round\">Reset Scores</a></p>";

    $$('#fim-page-content').append(fimHTML);
    $$('#fimScore').html("Total: " + getSum(fim.userScores));

    for(i=0;i<fim.questions.length;i++){
        // Activate the slider functionality
        var targetSwiperDiv = '.swiper-'+i;

        fimsliders[i] = myApp.swiper(targetSwiperDiv, {
            pagination:'.swiper-pagination',
            grabCursor: true,
            spaceBetween: 50,
            onSlideChangeEnd: function(swiper){
                // callback function triggered when slide finishes moving
                var newScore = swiper.slides[swiper.activeIndex].getAttribute("score");
                fim.userScores[swiper.container[0].getAttribute("index")] = parseInt(newScore);
                $$('#fimScore').html("Total: " + getSum(fim.userScores));
            }
        });
    }

     $$('#resetFIMscoresButton').click(function(){
        for(i=0; i< fim.userScores.length; i++){ 
            fim.userScores[i] = 7;                      // reset all user scores to 7
            fimsliders[i].slideTo(0, 500, false);      // move all sliders back to 7 & skip callbacks

        }
        $$('#fimScore').html("Total: " + getSum(fim.userScores));
    });
    
});

var scimsliders = [];

myApp.onPageInit('scim', function (page) {

    var scim = new SCIM_Scale();    // load the questions from the scales.js model
    var scimHTML = "";

    for(i=0;i<scim.questions.length;i++){
        var q = scim.questions[i];
        var subSectionHTML = "<div class=\"content-block-title normal-word-wrap\">" + q.title + "</div>\n\t\t" +
                             "<div class=\"swiper-container scim-mini-slider swiper-" + i + "\" index=\"" + i +  "\">\n\t\t\t" +
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


var paiqisliders = [];
myApp.onPageInit('paiqi',function(page){

    var paiqi = new PAIQI_Scale();
    var paiqiHTML = "";
    
    var overallCurrentIndex = 0; // flattens indices from nested array for use in looping through swipers
    for(i=0;i<paiqi.categories.length;i++){
        var c = paiqi.categories[i];
        var subSectionHTML = "<div class=\"content-block-title normal-word-wrap\">" + c.name + "</div>\n\t\t";

        for(j=0;j<c.items.length;j++){
            
            subSectionHTML += "<div class=\"content-block-title normal-word-wrap\">" + c.items[j].title +": " + c.items[j].description + "</div>\n\t\t";
            subSectionHTML += "<div class=\"swiper-container paiqi-mini-slider swiper-" + overallCurrentIndex + "\" index=\"" + overallCurrentIndex +  "\">\n\t\t\t" +
                            "<div class=\"swiper-pagination\"></div>\n" + 
                            "<div class=\"swiper-wrapper\">\n\t";

            for (k=0; k < paiqi.choices.length; k++){
                subSectionHTML += "<div class=\"swiper-slide\" score=\"" + paiqi.choices[k].value + "\"><span>("+ paiqi.choices[k].value + 
                ") " + paiqi.choices[k].description + "</span></div>\n";
                
            }
            overallCurrentIndex++;
            subSectionHTML += "</div>\n</div>\n";
        }
        paiqiHTML += subSectionHTML;
        
    }
    paiqiHTML += "\n\n<p><a href=\"#\" id=\"resetPAIQIscoresButton\" class=\"button button-fill color-red button-round\">Reset Scores</a></p>";

    $$('#paiqi-page-content').append(paiqiHTML);

    // Now that HTML is appended, bind click function to the new elements
    for(i=0;i<paiqi.userScores.length;i++){
        var targetSwiperDiv = '.swiper-'+i;
        var maxScore = paiqi.choices[0].value;
        paiqisliders[i] = myApp.swiper(targetSwiperDiv, {
            pagination:'.swiper-pagination',
            grabCursor: true,
            spaceBetween: 50,
            onSlideChangeEnd: function(swiper){
                // callback function triggered when slide finishes moving
                var newScore = swiper.slides[swiper.activeIndex].getAttribute("score");
                paiqi.userScores[swiper.container[0].getAttribute("index")] = parseInt(newScore);
                $$('#paiqiScore').html(getSum(paiqi.userScores) + "/" + (paiqi.totalItems * maxScore));
            }
        });
    }
   
    $$('#resetPAIQIscoresButton').click(function(){
        for(i=0; i< paiqi.userScores.length; i++){ 
            paiqi.userScores[i] = paiqi.choices[0].value;// reset all user scores to max value (i.e. 6)
            paiqisliders[i].slideTo(0, 500, false);   // move all sliders back to 0 & skip callbacks
        }
        var totalScore = paiqi.totalItems * paiqi.choices[0].value
        $$('#paiqiScore').html(totalScore + '/'+ totalScore);
    });

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
