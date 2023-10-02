
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
                     location.replace("index.html");
                    }
                    else{
                        document.querySelector('#error').innerHTML='Please enter right password.';
                    }
                }

            })
            if (flag === 0) {

                message.innerHTML = `<p>You are not a member.<br><a href='./signup.html'>Sign up.</a></p>`;
            }
        })
        .catch(err => { console.log(err.message) })

})

