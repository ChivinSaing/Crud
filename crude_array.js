var id    = document.getElementById('id')
var Name  = document.getElementById('name')
var qty   = document.getElementById('qty')
var price = document.getElementById('price')
var total = document.getElementById('total')
var btnadd= document.getElementById('btnadd')
var btnupdate= document.getElementById('btnupdate')

btnadd.style.display='flex';
btnupdate.style.display='none'
var index=0;
index++;
id.value = index;

arrayitemList=
[
    // {
    //     'id'   : 101,
    //     'name' : 'coca',
    //     'qty'  : 5,
    //     'price': 1.3,
    //     'total': 100
    // },
    // {
    //     'id'   : 102,
    //     'name' : 'sting',
    //     'qty'  : 5,
    //     'price': 1.3,
    //     'total': 100
    // },
    // {
    //     'id'   : 101,
    //     'name' : 'coca',
    //     'qty'  : 5,
    //     'price': 1.3,
    //     'total': 100
    // },
];
getData=()=>{
    var texts=' '
    texts +=`
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
    `
    arrayitemList.forEach(item => {
        texts +=`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${item.total}</td>
                <td>
                    <input type="button" id="update" class="btn_update btn btn-warning" value="Update">
                    <input type="button" id="delete" class="btn bg-danger" value="Delete">
                </td>
            </tr>
        `
    });
    document.getElementsByClassName('table')[0].innerHTML=texts;

    // btn select to field for update
    function Selects()
    {
        var updates = document.querySelectorAll('.btn_update');
        updates.forEach((element,i)=>{
            element.addEventListener('click',function(){
                // console.log(i,arrayitemList)
                id.value   = arrayitemList[i]['id'];
                Name.value = arrayitemList[i]['name'];
                qty.value  = arrayitemList[i]['qty'];
                price.value= arrayitemList[i]['price'];
                total.value= arrayitemList[i]['total'];
                btnadd.style.display='none';
                btnupdate.style.display='flex'
                console.log(i,arrayitemList);
                index=i;
            })
        })
    }
    Selects();
}
getData();
// add data to table
btnadd.addEventListener('click',function(){
    if(id.value!="" && Name.value !="" && qty.value !="" && price.value !="" && price !="")
    {
        Swal.fire({
            title: "Success",
            text: "Add Data Success...",
            icon: "success"
        });
        arrayitemList.push(
            {
                'id'   : id.value,
                'name' : Name.value,
                'qty'  : qty.value,
                'price': price.value,
                'total': total.value,
            }
        )
        index++;
        id.value = index;
        getData();
        clearField()
    }
    else{
        Swal.fire({
            title: "Error",
            text: "Add Data Not Found....",
            icon: "error"
          });
    }
    
})
// Clear Field
clearField=()=>{
    // id.value="",
    Name.value="",
    qty.value="",
    price.value="",
    total.value=""
}
qty.addEventListener('keyup',function(){
    total.value = qty.value*price.value; 
})
price.addEventListener('keyup',function(){
    total.value = qty.value*price.value; 
})

//  Update product to table
btnupdate.addEventListener('click',function(){
    arrayitemList[index]['id']  = id.value;
    arrayitemList[index]['name']= Name.value;
    arrayitemList[index]['qty'] = qty.value;
    arrayitemList[index]['price']= price.value;
    arrayitemList[index]['total']= total.value;
    getData();
    clearField();
    index = arrayitemList.length+1;
    id.value=index;
    console.log(arrayitemList);
    
    btnadd.style.display='flex'
    btnupdate.style.display='none'
})