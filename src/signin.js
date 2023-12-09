
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAAIyTb4n8idDtL7Iv7qJYAiIaQZJOdkRY",
    authDomain: "harsheysbites.firebaseapp.com",
    projectId: "harsheysbites",
    storageBucket: "harsheysbites.appspot.com",
    messagingSenderId: "1072566654250",
    appId: "1:1072566654250:web:1c99b587383752988eba53"
};

initializeApp(firebaseConfig);


const db = getFirestore();

const colRef = collection(db, 'users');

//html ref

const signin=document.querySelector('.signin');
const message=document.querySelector('aside')

//sign in users
signin.addEventListener('submit', (e) => {
    let flag = 0;
    e.preventDefault();
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc => {

                if (doc.data().email === signin.email.value.trim()) {
                    if(doc.data().password===signin.password.value.trim()){
                    //display error 
                     flag = 1;
                     location.replace("https://harsheysbites.netlify.app/main");
                    }
                    else{
                        document.querySelector('#error').innerHTML='Please enter right password.';
                    }
                }

            })
            if (flag === 0) {

                message.innerHTML = `<p>You are not a member.<br><a href='https://harsheysbites.netlify.app/signup'>Sign up.</a></p>`;
            }
        })
        .catch(err => { console.log(err.message) })

})

