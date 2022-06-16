const test = document.getElementById('test')
var traveler = document.getElementById("traveler-bot")



fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())
.then(response=>{
    console.log(response);
    // for(let i =0;i<response.length;i++){
    //     test.innerText+= response[i].username
    // }
 response.map(resp=>{
  console.log(resp);
    
  var newItem = document.createElement('div')
  newItem.innerHTML+=`<div class="card border-white" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title fw-bold">${resp.name}</h5>
    <p class="card-text">Company Name: ${resp.company.name}</p>
    <p class="card-text">City: ${resp.address.city}</p>
    <p class="card-text">Phone: ${resp.phone}</p>
    <p class="card-text">Website: ${resp.website}</p>
  </div>
</div>`
newItem.classList.add('divs')
 traveler.appendChild(newItem)
})
 
 

})
.catch(error=> console.log(error))






