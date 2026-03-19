// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ================= LOGIN =================
window.login = function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth,email,password)
        .then(()=>window.location.href="index.html")
        .catch(err=>alert(err.message));
}

// ================= REGISTER =================
window.register = function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth,email,password)
        .then(()=>window.location.href="login.html")
        .catch(err=>alert(err.message));
}

// ================= CHECK LOGIN =================
window.checkAuth = function(){
    onAuthStateChanged(auth,user=>{
        if(!user) window.location.href="login.html";
    });
}

// ================= LOGOUT =================
window.logout = function(){
    signOut(auth).then(()=>window.location.href="login.html");
}