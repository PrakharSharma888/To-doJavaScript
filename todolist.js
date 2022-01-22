function getAndUpdate(){
    let item = document.getElementById('input').value;
    if (localStorage.getItem('ite')== null){
        console.log("Okay")
        listArray = [];
        listArray.push(item);
        localStorage.setItem('ite', JSON.stringify(listArray));
    }
    else{
        listArrayjson = localStorage.getItem('ite');
        listArray = JSON.parse(listArrayjson);
        listArray.push(item);
        localStorage.setItem('ite', JSON.stringify(listArray));
    }
    update();
}

function update(){

    if (localStorage.getItem('ite')==null){
        listArray = [];
        localStorage.setItem('ite', JSON.stringify(listArray))
    }
    else{
        listArrayjson = localStorage.getItem('ite');
        listArray = JSON.parse(listArrayjson)
    }

    let tablebody = document.getElementById('tablebody');
    let StrHtml = "";
    listArray.forEach((element, index) => {
        StrHtml += `
        <tr>
            <th id="lists" style="padding: 15px; font-size: large;" scope="col">${element}</th>
            
            <th id="add" style="padding: 10px; border: 2px solid white; background-color: whitesmoke; width: 10%;"><button onclick="deleteItem(${index})" class="btn btn-primary">Delete</button></th>
        </tr>
        `
    });
    tablebody.innerHTML = StrHtml;
}

function deleteItem(index){
    listArrayjson = localStorage.getItem('ite');
    listArray = JSON.parse(listArrayjson);
    listArray.splice(index, 1)
    localStorage.setItem('ite', JSON.stringify(listArray));
    update();
}

submitt = document.getElementById('add');
submitt.addEventListener("click", getAndUpdate);
update();