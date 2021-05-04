var rq = new XMLHttpRequest();
rq.onreadystatechange = function () {
    if (rq.readyState === 4) {
        var e = JSON.parse(rq.responseText);
        console.log(e);
    }
};

rq.open('GET', 'data/employees.json');
rq.send()