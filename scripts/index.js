// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu";
var bucketData=JSON.parse(localStorage.getItem("coffee")) || [];

var length=bucketData.length;
document.querySelector("#coffee_count").innerText=length;

// async function getData(){
//     try{
//         let res= await fetch(url);
//         let products= await res.json();
//          append(products.data);
//         console.log(products);
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();

var data=[
       {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        title:" black",
        price: 200 },
       {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
        title:" Latte",
        price: 600 },
       {image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title: " Lungo",
        price: 500 },
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        title:" black",
        price: 100 },
        
        {image: "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" lungo",
        price: 543 },
        {image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" machito",
        price: 760 },
        {image: "https://images.unsplash.com/photo-1514664902876-824dfe29bb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" mocha",
        price: 345 },
        {image: "https://images.unsplash.com/photo-1489672155498-1331365e0dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" caffe au",
        price: 245 },

        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        title:" black",
        price: 200 },
       {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
        title:" Latte",
        price: 600 },
       {image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title: " Lungo",
        price: 500 },
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        title:" black",
        price: 100 },
        
        {image: "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" lungo",
        price: 543 },
        {image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" machito",
        price: 760 },
        {image: "https://images.unsplash.com/photo-1514664902876-824dfe29bb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" mocha",
        price: 345 },
        {image: "https://images.unsplash.com/photo-1489672155498-1331365e0dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" caffe au",
        price: 245 },
        {image: "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" lungo",
        price: 543 },
        {image: "https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" machito",
        price: 760 },
        {image: "https://images.unsplash.com/photo-1514664902876-824dfe29bb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" mocha",
        price: 345 },
        {image: "https://images.unsplash.com/photo-1489672155498-1331365e0dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        title:" caffe au",
        price: 245 },
       
]

// function append(data){
    data.forEach(function (elem) {

        var box=document.createElement("div");

        var img=document.createElement("img");
        img.src=elem.image;

        var title=document.createElement("p");
        title.innerText=elem.title;

        var price=document.createElement("p");
        price.innerText=elem.price;

        var btn=document.createElement("button");
        btn.innerText="Add to Bucket";
        btn.addEventListener("click",function(){
            addtobucket(elem);
        });

        box.append(img,title,price,btn);
        document.querySelector("#menu").append(box);

    });

    function addtobucket(el){
        bucketData.push(el);
        localStorage.setItem("coffee",JSON.stringify(bucketData));
        window.location.reload();
    }

 //};
