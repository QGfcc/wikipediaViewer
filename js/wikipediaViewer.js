/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayLoading() {
    $("#displayP").text("Loading...");
    $("#resultDiv *").css("color", "lightgrey");
//    $("#resultDiv * ").css("opacity","0.4");
}
function unDisplayLoading() {
    $("#displayP").text("");
}
function displayNoResult() {
    $("#displayP").text("No result available for your search.");
}
function collapseToggle(id) {
    var body = "#panelBody" + id;
    var readMore = "#readMore" + id;
//        $(".collapsed").removeClass("collapsed");
//        e.target.nodeName.addClass("targeted");
//    alert("test");
//    alert(e.target);
//    alert(e.target.nodeName);
//    alert(id);
//        e.target.text("targeted");
//    e.target.innerHTML = "targeted";
//    e.target.addClass("targeted");
//    $(".targeted").css("background-color", "red !important");
//    $("#"+id+" div").css("background-color", "red !important");
//    $("#"+id+" div").css("overflow", "auto");
//    $("#"+id+" div").css("max-height", "2000px");
//    $("#"+id).css("max-height", "2000px");
    if ($(body).hasClass("collapsed")) {
        $(body).removeClass("collapsed");
        $(readMore).text("Read less");
    } else {
        $(body).addClass("collapsed");
        $(readMore).text("Read more");
    }
//    $("#"+id+" div").text("dqfdqf");
//    alert("test");
//        $(".collapsed").css("max-height","inherit");
//        $(".panel-body").css("max-height","inherit");
}
function displayData(JSONObj) {
    $("#resultDiv").text("");
    var i = 0;
    if (JSONObj.hasOwnProperty("query") && JSONObj.query.hasOwnProperty("pages")) {
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
            aTag2.attr("id", "panelBody" + i);
            var readMoreDiv = $("<div class='panel-footer readMore' id='readMore" + i + "'></div>").text("Read more");
            readMoreDiv.click({id: i}, function (e) {
                collapseToggle(e.data.id);
            });
            var container = $("<div></div>").append(aTag1).append(aTag2).append(readMoreDiv);
//        container.attr("class", "displayContainer thumbnail text-center panel panel-default");
            container.attr("class", "displayContainer text-center panel panel-info");
            $("#resultDiv").append(container);
//        $("#panelBody"+i).click({id: "panelBody"+i}, function (e) {
//            readMore(e.data.id);
//        });
            i++;
        }
        unDisplayLoading();
    } else {
        displayNoResult();
    }
//    $(".panel-footer").on("click", function (e) {
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
function search() {
    inputVal = $("#searchInput").val();
    if (inputVal != "") {
        displayLoading();
        searchWikiJSONP(inputVal, 20);
    }
}
var isAutoSearch = 1;
$(document).ready(function () {
    $("#searchInput").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $("#searchInput").keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            if (isAutoSearch === 0) {
                search();
            }
        } else if (isAutoSearch === 1) {
            search();
        }
    });
    $("#searchBtn").click(function (event) {
        event.preventDefault();
        search();
    });
//    $("#autoSearch").attr("checked","checked");
    $("#autoSearch").prop( "checked", true );
    $("#autoSearch").click(function () {
        if ($(this).is(':checked')) {
            isAutoSearch = 1;
            search();
        } else {
            isAutoSearch = 0;
        }
    });
    search();
});
