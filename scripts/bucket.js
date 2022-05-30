// On clicking remove button the item should be removed from DOM as well as localstorage.

var bucketData=JSON.parse(localStorage.getItem("coffee"));

var total=bucketData.reduce(function(sum,elem){
    return sum+Number(elem.price)
},0)
document.querySelector("#total_amount").innerText= total;

bucketData.forEach(function (elem,index) {

    var box=document.createElement("div");

    var img=document.createElement("img");
    img.src=elem.image;

    var title=document.createElement("p");
    title.innerText=elem.title;

    var price=document.createElement("p");
    price.innerText=elem.price;

    var btn=document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        remove(elem,index);
    });

    box.append(img,title,price,btn);
    document.querySelector("#bucket").append(box);

});

function remove(elem,index){
    bucketData.splice(elem,index);
    localStorage.setItem("coffee",JSON.stringify(bucketData));
    window.location.reload();

}