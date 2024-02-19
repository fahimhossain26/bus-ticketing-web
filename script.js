let seatCount=0;
let ticketprice=0;
let totalSeat =40;


const allBtn =document.getElementsByClassName('add-btn');
console.log(allBtn);
for(const btn of allBtn){
    btn.addEventListener('click',function(){
        seatCount+=1;
        document.getElementById('seat-count').innerText=seatCount;
        btn.classList.add('bg-lime-400');
        ticketprice+=550;

      
        const title =btn.querySelector('p').innerText;
        const titleContainer= document.getElementById('ticke_details');
         const p= document.createElement("p");
          p.innerText=title;
        titleContainer.appendChild(p);

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


}else{
    alert('invalid cupon code');
}
//couple cupon 




})

