function saveToLocalStorage(event) {
    event.preventDefault();
    const Uname = event.target.username.value;
    const Uemail = event.target.emailId.value;
    let UserDetail = {
      Uname,
      Uemail,
    };

axios.post("https://crudcrud.com/api/7a1f98d6aa914494bcf61924d9d94186/BookingData",UserDetail)
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
    .get("https://crudcrud.com/api/7a1f98d6aa914494bcf61924d9d94186/BookingData")
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
    const parentNode = document.getElementById("list");
    const childHTML = `<li id='${User.Uemail}'> ${User.Uname} - ${User.Uemail} 
       <button onclick=editUser('${User.Uemail}','${User.Uname}') style='background-color:green; font-weight:bold; border-color:yellow;
                                font-size:15px; font-style:italic;'>Edit</button> 
      <button onclick=deleteUser('${User.Uemail}') style='background-color:red; font-weight:bold; font-weight:bold; border-color:yellow;
                                font-size:15px; font-style:italic'>Delete</button> 
                          </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
  }
  
  function removeUserFromScreen(emailId){
    const parentNode = document.getElementById("list");
    const childNodeToBeDeleted = document.getElementById(emailId);
  
    parentNode.removeChild(childNodeToBeDeleted);
  }
  
  function editUser(emailId,username){
    document.getElementById('name').value = username;
    document.getElementById('email').value = emailId;
  
    deleteUser(emailId);
  }