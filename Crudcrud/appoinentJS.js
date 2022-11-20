function saveToLocalStorage(event) {
    event.preventDefault();
    const Uname = event.target.username.value;
    const Uemail = event.target.emailId.value;
    let UserDetail = {
      Uname,
      Uemail,
    };

axios.post("https://crudcrud.com/api/020bd40879f1469fadb9c7f888864d60/BookingData",UserDetail)
.then((response) => {
    detailsAtDOM(response.data);
    // console.log(response.data);
})
.catch((err) => {
    document.body.innerHTML += "<h4>Something went wrong!!</h4>"
    console.log(err);
})
    // localStorage.setItem(UserDetail.Uemail, JSON.stringify(UserDetail));
  
    // detailsAtDOM(UserDetail);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
    .get("https://crudcrud.com/api/020bd40879f1469fadb9c7f888864d60/BookingData")
    .then((response) => {
        console.log(response);

        for(var i=0; i<response.data.length; i++){
            detailsAtDOM(response.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
    // const localStorageObj = localStorage;
    // const localStoragekeys = Object.keys(localStorageObj);
    // for (var i = 0; i < localStoragekeys.length; i++) {
    //   const key = localStoragekeys[i];
    //   const userDetailsString = localStorageObj[key];
    //   const userDetailsObj = JSON.parse(userDetailsString);
    //   detailsAtDOM(userDetailsObj);
    // }
  });
  
  function detailsAtDOM(User) {

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";

    const parentNode = document.getElementById("list");
    const childHTML = `<li id='${User._id}'> ${User.Uname} - ${User.Uemail} 
       <button onclick=editUser('${User.Uemail}','${User.Uname}','${User._id}') style='background-color:green; font-weight:bold; border-color:yellow;
                                font-size:15px; font-style:italic;'>Edit</button> 
      <button onclick=deleteUser('${User._id}') style='background-color:red; font-weight:bold; font-weight:bold; border-color:yellow;
                                font-size:15px; font-style:italic'>Delete</button> 
                          </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  function deleteUser(userId){
   axios.delete(`https://crudcrud.com/api/020bd40879f1469fadb9c7f888864d60/BookingData/${userId}`)
   .then(() => {
    removeUserFromScreen(userId)
   })
   .catch((err) => {
    console.log(err);
   });
       // localStorage.removeItem(emailId);
    removeUserFromScreen(userId);
  }
  
  function removeUserFromScreen(userId){
    const parentNode = document.getElementById("list");
    const childNodeToBeDeleted = document.getElementById(userId);
  
    parentNode.removeChild(childNodeToBeDeleted);
  }
  
  function editUser(emailId,username, userId){

    document.getElementById('name').value = username;
    document.getElementById('email').value = emailId;
  
    deleteUser(userId);
  }