function fetchData() {
    let url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url).then((data) => {
        return data.json();
    }).then((resp) => {
        getData(resp);
    })
}

function createItem(tr, data) {
    let td = [];
    for (k = 0; k < 4; k++) {
        td[k] = document.createElement('td');
        arr = Object.keys(data);
        td[k].innerHTML = data[arr[k]];
        console.log(td[k]);
        tr.appendChild(td[k]);
    }
    return 
}

function createRow(tr,table) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    return tr;
}
function getData(data) {
    table = createTable(data);
    let tr = [];
    for (i = 0; i < 10; i++) {
        tr = createRow(tr[i],table);
        createItem(tr, data[i]);
    }
}
function createTable(data) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    let table = document.createElement("table");
    table.className = 'table';
    div.appendChild(table);
    let table_title = document.createElement('thead');
    table_title.innerHTML = "API Data in Json Fromat";
    table.appendChild(table_title);
    return table;
}


