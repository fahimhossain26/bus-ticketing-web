let seatCount=0;
let ticketprice=0;
let totalSeat =40;


const allBtn =document.getElementsByClassName('add-btn');
console.log(allBtn);
for(const btn of allBtn){
    btn.addEventListener('click',function(){
        
         seatCount+=1;
        if(seatCount>4){
            btn.disabled = true;
            ticketprice=ticketprice-550
            alert('you can not buy more than 4 tickets')
            totalSeat=totalSeat+1;
            seatCount=seatCount-1;

          titleContainer.removeChild[3];



          
           
        } 
        
        
        document.getElementById('seat-count').innerText=seatCount;
        btn.classList.add('bg-lime-400');
        ticketprice+=550;

        
        const title =btn.querySelector('p').innerText;
        const titleContainer= document.getElementById('ticke_details');
         const p= document.createElement("p");
        
          p.innerText=title;
        // titleContainer.appendChild(p);
        const p2=document.createElement('p');
        const p3=document.createElement('p')
         p2.innerText='economi';
         p3.innerText='550'
        // titleContainer.appendChild(p2);
        //  titleContainer.appendChild(p3);
         titleContainer.append(p,p2,p3)
         //----------------------
         

         //----------------------
        


          document.getElementById('price').innerText=ticketprice;

        // seat remove 
        totalSeat-=1
       const removeSeat= document.getElementById('seatsRemove').innerText=totalSeat;
        
    //    console.log(removeSeat);
        // console.log(totalPrice);


    })
}

const apply= document.getElementById('cupon-btn');
apply.addEventListener('click',function(){
const cuponElement= document.getElementById('cuponId').value;
if(cuponElement==="NEW15"){
    const discountElement= document.getElementById('grandTotalAmount');
    const disountedPrice= ticketprice * 0.15;

    discountElement.innerText=(ticketprice- disountedPrice);

    document.getElementById('grand-hidden').style.visibility="hidden";
    
}

//cupon 20

else if(cuponElement==="Couple 20"){
    const discountElement= document.getElementById('grandTotalAmount');
    const disountedPrice= ticketprice * 0.20;

    discountElement.innerText=(ticketprice- disountedPrice);

    document.getElementById('grand-hidden').style.visibility="hidden";




}
else{
    alert('invalid cupon code');
}
//couple cupon 

})



// reload page 
const reload=document.getElementById('relod-page');
reload.onclick=refresh;
function refresh(){
    window.location.reload();
}
