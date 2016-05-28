/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayData(JSONObj) {
    $("#resultDiv").text("");
    for (var key in JSONObj.query.pages) {
//        if (Object.prototype.hasOwnProperty.call(JSONObj, key)) {
//        if (JSONObj.hasOwnProperty(key)) {
        var title = $("<div class=''></div>").text(JSONObj.query.pages[key].title);
        var summary = $("<div class=''></div>").text(JSONObj.query.pages[key].extract);
//        var aTag = $("<a class='aBlock'></a>").append(title).append(summary);
        var aTag1 = $("<a class='aBlock panel-heading'></a>").append(title);
//        var aTag2 = $("<a class='aBlock panel-body'></a>").append(summary);
        var aTag2 = $("<a class='aBlock panel-body collapsed'></a>").append(summary);
//        var title = $("<div class='panel-heading'></div>").text(JSONObj.query.pages[key].title)
//        var summary = $("<div class='panel-body'></div>").text(JSONObj.query.pages[key].extract);
//        var aTag = $("<a class='aBlock panel-heading'></a>").append(title).append(summary);
        var url = JSONObj.query.pages[key].canonicalurl;
        aTag1.attr("href", url);
        aTag2.attr("href", url);
        var readMoreDiv = $("<div class='panel-footer readMore' id='readMore'></div>").text("Read more");
        var container = $("<div></div>").append(aTag1).append(aTag2).append(readMoreDiv);
//        container.attr("class", "displayContainer thumbnail text-center panel panel-default");
        container.attr("class", "displayContainer text-center panel panel-info");
        $("#resultDiv").append(container);

    }
    unDisplayLoading();
}

function searchWikiJSONP(query, numHit) {
    if (numHit > 20) {
        numHit = 20;
    }
    numHit = numHit || 11;
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {
            format: "json",
            action: "query",
            generator: "search",
//            list:"search",
//            srnamespace: numHit,
//            srredirects: "true",
//            prop: "info",
            prop: "info|extracts",
            inprop: "url",
            exintro: "1",
            explaintext: "1",
            exlimit: numHit,
//            srlimit:numHit,
            gsrlimit: numHit,
//            gsrsearch: query,
//            srsearch: "arbre",
            gsrsearch: query
//            search: "arbre",
//            gprop:"extlinks"
        },
        dataType: 'jsonp',
        success: displayData,
        error: function () {
        }
    });
}
function displayLoading() {
    $("#displayP").text("Loading...");
    $("resultDiv").css("color", "lightgrey");
}
function unDisplayLoading() {
    $("#displayP").text("");
}
function search() {
    inputVal = $("#searchInput").val();
    if (inputVal != "") {
        displayLoading();
        searchWikiJSONP(inputVal, 20);
    }
}
$(document).ready(function () {
    $("#searchInput").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $("#searchInput").keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        } else {
            search();
        }
    });
//alert('test');
//    $("div.readMore").click(function () {
    $(".panel-heading").click(function () {
//        $(".collapsed").removeClass("collapsed");
//        $(".collapsed").css("max-height","inherit");
        alert('test');
//        $(".panel-body").css("max-height","inherit");
    });
    search();
});
