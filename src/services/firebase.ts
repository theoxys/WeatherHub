import firebase from 'firebase/app';
import 'firebase/firestore'

interface LineData{
    city: string;
    amount: string;
    date: string;
    country: string;
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const ref = firebase.firestore().collection("searches");


export const getLastPicks = async() => {
    let lastPicks:LineData[] = [];
    let query = await ref.orderBy('date', 'desc').limit(5).get()
    query.docs.forEach((city)=>{
        lastPicks.push({
            city: city.data().city,
            country: city.data().country,
            amount: city.data().amount,
            date: city.data().date
        })
    })
    return lastPicks;
}

export const getTopPicks = async() => {
    let topPicks:LineData[] = [];
    let query = await ref.orderBy('amount', 'desc').limit(5).get()
    query.docs.forEach((city)=>{
        topPicks.push({
            city: city.data().city,
            country: city.data().country,
            amount: city.data().amount,
            date: city.data().date
        })
    })
    return topPicks;
}

export const  getCityAmount = async(city: string)  => {
    let dataCount = 0;
    let amount = await ref.where('city', '==', city).get();
    if(amount.docs.length > 0){
        dataCount = amount.docs[0].data().amount
    }
    return dataCount;
}

export const registerSearch = async(city: string, country: string) => {
    let amountPick = await getCityAmount(city);
    ref
      .doc(city)
      .set({
        city: city,
        date: Date.now(),
        amount: amountPick + 1,
        country: country
      })
      .catch((err) => {
        alert(err);
    });
}

