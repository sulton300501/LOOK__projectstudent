const custumersList = document.querySelector('.customers-list')
const foodSelect =document.querySelector('#foodsSelect')
const orderList =document.querySelector('.orders-list')
const clientId=document.querySelector('#clientId')
const customerName=document.querySelector('.customer-name')
const userAdd =document.querySelector('#userAdd')
const userNameInput= document.querySelector('#usernameInput')
const telephoneInput= document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount=document.querySelector('#foodsCount')



function renderUsers(){
for (const user of users) {
   
    const [li, span , a]=createElement('li', 'span', 'a')
    li.classList.add('customer-item')
    span.classList.add('customer-name')
    a.classList.add('customer-phone')

    a.setAttribute('href', 'tel:'+user.contact)
    span.textContent=user.userName
    a.textContent=user.contact
    li.append(span, a)
    custumersList.append(li)

    li.addEventListener('click', function(){
      renderOrders(user.userId)
      clientId.textContent=user.userId
      customerName.textContent=user.userName
    })

}

}
renderUsers()


function renderFoods(){

for (const food of foods) {
    const [option]=createElement('option')
    option.textContent=food.foodName
   option.value=food.foodId
    foodSelect.append(option)


}


}
renderFoods()








function  renderOrders(userId){
    orderList.innerHTML=null
for (const order of orders) {

    if(!(order.userId== userId)) continue
    const food = foods.find(el=>el.foodId==order.foodId)
    // console.log(food)


   const [liEl, imgEl , divEl, nameEl , countEl]=createElement('li', 'img', 'div','span', 'span')
   liEl.classList.add('order-item')
   nameEl.classList.add('order-name')
   countEl.classList.add('order-count')

   nameEl.textContent=food.foodName
   countEl.textContent=order.count

   imgEl.setAttribute('src', food.foodImg)

   divEl.append(nameEl , countEl)
   liEl.append(imgEl, divEl)
   orderList.append(liEl)

}

}








function addUsers(){





}

userAdd.addEventListener('submit', function(event){
    event.preventDefault()


    const username= userNameInput.value.trim()
    
    const contact= telephoneInput.value.trim()
   
    if(!username || username.length > 30){
        return alert('Invalid user name')
    }



    

})









function addOrder(){

}