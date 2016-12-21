$(document).ready(function () {
    // ID of the Google Spreadsheet
    var spreadsheetID = "1-DGR_bflVd1tacRMHRYbNbbdNkT9rX_yK8mx17gY4Uc";

    // google sheet  
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";


    $.get(url)
        .done(function (data) {




            var entry = data.feed.entry.reverse();

            console.log(entry);
            for (var i = entry.length - 1; i >= 0; i -= 1) {

                var tap = entry[i]['gsx$tap']['$t'];
                var beer = entry[i]['gsx$name']['$t'];
                var brewery = entry[i]['gsx$brewery']['$t'];
                var style = entry[i]['gsx$style']['$t'];
                var abv = entry[i]['gsx$abv']['$t'];
                var glass = entry[i]['gsx$glass']['$t'];
                if (i % 2 == 0) {
                    $(".main-contain").append("<div class=\"taps\" id=\"tap" + tap + "\"><div class=\"text\"><div class=\"brew-title\"><span class=\"beer\">" + beer + "</span> <span class=\"style\">" + style + "</span> </div><div class=\"info\"><span class=\"abv\">" + brewery + "</span> | <span class=\"abv\">" + abv + "% ABV</span></div>  </div> <div class=\"glass\"><img class=\"resize-wide\" src=\"images/" + glass + "-white.png\"></div> </div>");
                } else {
                    $(".main-contain").append("<div class=\"taps\" id=\"tap" + tap + "\"><div class=\"text\"><div class=\"brew-title\"><span class=\"beer\">" + beer + "</span> <span class=\"style\">" + style + "</span> </div><div class=\"info\"><span class=\"abv\">" + brewery + "</span> | <span class=\"abv\">" + abv + "% ABV</span></div>  </div> <div class=\"glass\"><img class=\"resize-wide\" src=\"images/" + glass + ".png\"></div> </div>");
                }
            }
        });



});