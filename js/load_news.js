$.getJSON("../json/news.json", function(data) {
    var content = document.getElementById("news-content");
    var table_obj = document.createElement("table");
    var length = data.length;
    for (var i = length - 1; i >= 0; i--) {
        var json = data[i];
        
        var tr_obj = document.createElement("tr");
        var th_obj = document.createElement("th");
        var text1 = document.createTextNode(json.date);
        th_obj.appendChild(text1);
        tr_obj.appendChild(th_obj);
        var td_obj = document.createElement("td");
        var a_obj = document.createElement("a");
        a_obj.href = json.href;
        var text2 = document.createTextNode(json.title);
        a_obj.appendChild(text2);
        td_obj.appendChild(a_obj);
        tr_obj.appendChild(td_obj);
        table_obj.appendChild(tr_obj);
    }
    content.appendChild(table_obj);
});