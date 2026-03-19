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

    // Optional: check password strength before login
    const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
    if(!strongPassRegex.test(password)){
        alert("Weak password format. Please use the provided account credentials.");
        return;
    }

    signInWithEmailAndPassword(auth,email,password)
        .then(()=>window.location.href="home.html") // redirect after login
        .catch(err=>{
            alert("Login failed: " + err.message);
        });
}

// ================= CHECK LOGIN =================
window.checkAuth = function(){
    onAuthStateChanged(auth,user=>{
        if(!user) window.location.href="login.html"; // redirect if not logged in
    });
}

// ================= LOGOUT =================
window.logout = function(){
    signOut(auth).then(()=>window.location.href="login.html");
}
