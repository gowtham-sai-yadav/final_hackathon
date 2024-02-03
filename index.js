var area = document.getElementById("area");
var button = document.getElementById("btn-submit");
var one = document.getElementById("posttext");

var like = document.getElementById("likes");
// var lines = area.value;

button.addEventListener('click', () => {

    // let x = $("input:text").val();
    // one.innerHTML = x;
    let x = document.getElementById("feed").value;
    one.innerHTML = x;
})



function edit() {
    let editable = one.value;
   
    
}

function del() {
    if(confirm("do u want to delete")){
        one.innerHTML = "";
    }
}

like.addEventListener('click', () => {
like.src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
   
})

























// get value


//   one.style.display = "block";
//   one.innerHTML = "hooyah";