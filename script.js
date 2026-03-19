// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyBCCwXkgNeXMob8pCyLR7D-jUTb7KOAZG4",
  authDomain: "biotech-f22e3.firebaseapp.com",
  projectId: "biotech-f22e",
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
        .then(()=>window.location.href="home.html")
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
        if(!user) window.location.href="index.html";
    });
}

// ================= LOGOUT =================
window.logout = function(){
    signOut(auth).then(()=>window.location.href="login.html");
}
