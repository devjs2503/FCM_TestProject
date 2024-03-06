// Import the functions you need from the SDKs you need
// link to setup FCM project: https://console.firebase.google.com/
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAPbW3dEYRoy0GvJp-EogqmsHbx3dTTb1Y",
  authDomain: "pushnotification-57e0c.firebaseapp.com",
  projectId: "pushnotification-57e0c",
  storageBucket: "pushnotification-57e0c.appspot.com",
  messagingSenderId: "350247434944",
  appId: "1:350247434944:web:3f4b7be05bfe60a08f4b25",
  measurementId: "G-CM8Y899RGW"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async()=>{
    const permission = await Notification.requestPermission()
    console.log("permission",permission);
    if(permission === "granted"){
        const token = await getToken(messaging,{
            vapidKey:"BPbpJy7agHt6dRa-Vk8IScxmYbw0e2aswz62Rh5WwBtse9IU1b1T_BmLotCoLM-pd7PO7JN7dCGTshcSU1VlVZ8"
           })
           console.log("token", token);
    }
  
}