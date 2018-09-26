const config = {
  apiKey: "AIzaSyC5X8QsYjwgemlqzAvRAA1E4LHW0abUymg",
  authDomain: "contact-59554.firebaseapp.com",
  databaseURL: "https://contact-59554.firebaseio.com",
  projectId: "contact-59554",
  storageBucket: "",
  messagingSenderId: "102682010284"
};
firebase.initializeApp(config);
const messagesRef = firebase.database().ref('messages');

const value = (id) => document.getElementById(id).value;

const saveMessage = (name, email, phone, message) => {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name, email: email,
    phone: phone, message: message
  })
}
const submitForm = (event) => {
  event.preventDefault();
  let name = value('name');
  let email = value('email');
  let phone = value('phone');
  let message = value('message');
  
  saveMessage(name, email, phone, message);
  
  document.querySelector('.sent').style.display = 'block';
  document.querySelector('.unsent').style.display = 'none';
  setTimeout(function(){
    document.querySelector('.sent').style.display = 'none';
    document.querySelector('.unsent').style.display = 'block';
  },3000);

  document.getElementById('contact').reset();
}

const form = document.getElementById('contact');
form.addEventListener('submit', submitForm);

