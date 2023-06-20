
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { 
    getAuth,// authentication 설정
    signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
    GoogleAuthProvider, //google login 기능
    signInWithEmailAndPassword,// email 로그인
    createUserWithEmailAndPassword, //email 회원가입
  } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBY5enKyMDJVAnTz-iIbf2g2L5_WWl-8Bs",
    authDomain: "mango-76126.firebaseapp.com",
    projectId: "mango-76126",
    storageBucket: "mango-76126.appspot.com",
    messagingSenderId: "254017861324",
    appId: "1:254017861324:web:6b94593631dce887d87469"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
