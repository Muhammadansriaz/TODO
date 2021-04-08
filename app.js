// var list = document.getElementById("list")
// firebase.database().ref('todos').on('child_added', function (data) {

//     var li = document.createElement("li")
//     li.setAttribute('id', 'li')
//     var li_txt = document.createTextNode(data.val().value)
//     list.appendChild(li).appendChild(li_txt)
//     input.value = ""
//     // Create dell button
//     var del_button = document.createElement("button")
//     del_button.setAttribute('class', 'del_btn')
//     del_button.setAttribute('onclick', 'dell_item(this)')
//     del_button.setAttribute('id',data.val().key)
//     var del_txt = document.createTextNode("DELETE")
//     list.appendChild(li).appendChild(del_button).appendChild(del_txt)

//     // Create Edit Button
//     var edit_btn = document.createElement('button')
//     edit_btn.setAttribute('class', 'edit_btn')
//     edit_btn.setAttribute('onclick', 'edit_items(this)')
//     edit_btn.setAttribute('id',data.val().key)
//     var edit_txt = document.createTextNode('EDIT')
//     list.appendChild(li).appendChild(edit_btn).appendChild(edit_txt)

// })
// function AddTodo() {
//     // Add Todo
//     var input = document.getElementById("input")
//     var key = firebase.database().ref('todos').push().key
//     var todo = {
//         value: input.value,
//         key: key
//     }
//     firebase.database().ref('todos').child(key).set(todo)

//     }
//     function dell_item(p){
//         firebase.database().ref('todos').child(p.id).remove()
//         p.parentNode.remove()
//     }
//     function Dell_All(){
//         firebase.database().ref('todos').remove()
//         list.innerHTML = ""
//     }
//     function edit_items(e){

//         var edit_value = prompt('Enter Edit Value Here')
//         var dit_todo = {
//             value : edit_value,
//             key : e.id
//         }
//         firebase.database().ref('todos').child(e.id).set(dit_todo)
//         e.parentNode.firstChild.nodeValue  = edit_value
// }

function signup() {
  var email = document.getElementById("email");
  var password = document.getElementById("Password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Signup succesfullly");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

function signin() {
  var login_email = document.getElementById("login_email");
  var login_Password = document.getElementById("login_Password");

  firebase
    .auth()
    .signInWithEmailAndPassword(login_email.value, login_Password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("SignIN Succesfully");

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
function fecebook_login() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
            console.log(user.displayName)
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
        console.log(errorMessage)
      // ...
    });
}
