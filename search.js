var searchWord = localStorage.getItem("keyword");

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        document.querySelector(".total").innerHTML = data.searchInformation.formattedTotalResults;
        document.querySelector(".time").innerHTML = data.searchInformation.searchTime;
        document.querySelector(".search-title").innerHTML = searchWord;
        for (var i = 0; i < 10; i++) {
            $(".results-div").append('<div class="result">' + '<h4>' + data.items[i].displayLink + '</h4>' +
                '            <a href="' + data.items[i].link + '">' + data.items[i].htmlTitle + '</a>' +
                '            <p>' + data.items[i].htmlSnippet + '</p>' +
                '        </div>');
        }
    }
};
xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDqJypb7VlDfJ9Oondi9fY4Jp-V9i7Dxt8&cx=013267777263809976506:evi0iefgyko&q=' + searchWord + '', true);
xhr.send();
