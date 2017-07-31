var btn, msg, ibx;
btn = document.getElementById('btn'); 
msg = document.getElementById('msg'); 
ibx = document.getElementById('ibx'); 

function sendData() {
  var fbase = firebase.database().ref();
  fbase.push().set('hello');
}