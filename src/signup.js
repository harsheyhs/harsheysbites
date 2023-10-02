import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBbr_7dvddvuwq1mPYMkBQCyCw4q_tS5vA",
    authDomain: "harsheyshbites.firebaseapp.com",
    databaseURL: "https://harsheyshbites-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "harsheyshbites",
    storageBucket: "harsheyshbites.appspot.com",
    messagingSenderId: "453384681158",
    appId: "1:453384681158:web:d2eb2862bffdc4d38349c7"
};

initializeApp(firebaseConfig);


const db = getFirestore();

const colRef = collection(db, 'users');

//html ref

const signup = document.querySelector('.signup');

const message = document.querySelector('aside');

//add users
signup.addEventListener('submit', (e) => {
    console.log("btn works")
    let flag = 0;
    e.preventDefault();
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc => {

                if (doc.data().email === signup.email.value.trim()) {
                    //display error 
                    console.log('ooga booga')
                    message.innerHTML = `<p>You are already a member. Try signing in.<br><a href='./signin.html'>Sign in.</a></p>`; flag = 1;
                }

            })
             if (flag === 0) {
                console.log('signup works')
                
                addDoc(colRef, {
                    email: signup.email.value.trim(),
                    password: signup.password.value.trim()
                })
                    .then(() => {
                        
                        window.location.replace('./signin.html')
                    })
                   
            }
        })
        .catch(err => { console.log(err.message);
         })

})






