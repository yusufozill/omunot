
var firebaseConfig = {
  apiKey: "AIzaSyBZCCIeOIbwgmWwx4BjY4zMLuzUAZ20qQE",
       authDomain: "omunot.firebaseapp.com",
       databaseURL: "https://omunot.firebaseio.com",
       projectId: "omunot",
       storageBucket: "omunot.appspot.com",
       messagingSenderId: "917139018965",
       appId: "1:917139018965:web:4ea37b4530a2d07da6be5c",
       measurementId: "G-DK8K11FFFZ"
};

    firebase.initializeApp(firebaseConfig);

var db=firebase.firestore();
  

      

var docRef = db.collection('sayac').doc('akLfGUldW7aGWUls8xM9');





class City {
    constructor (sayac ) {
        this.sayac = sayac;

    }
    toString() {
        return this.sayac;
    }
}

// Firestore data converter
var cityConverter = {
    toFirestore: function(city) {
        return {
            sayac: city.sayac,
           
            }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new City(data.sayac, )
    }
}

docRef
  .withConverter(cityConverter)
  .get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      var city = doc.data();
      // Use a City instance method
      console.log(city.toString());
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });



    function basmak(){
        
      docRef
  .withConverter(cityConverter)
  .get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      var city = doc.data();
      // Use a City instance method
      console.log(city.toString());
      city++;
      console.log(city.toString()); 
      docRef.set(
        {sayac:city}
      );

    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });


    }

     
     // Option 1: Access Firebase services via the defaultProject variable
     
     // Option 2: Access Firebase services using shorthand notation
     defaultFirestore = firebase.firestore();
           document.addEventListener('DOMContentLoaded', function() {
             // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
             // // The Firebase SDK is initialized and available here!
             //
             // firebase.auth().onAuthStateChanged(user => { });
             // firebase.messaging().requestPermission().then(() => { });
             // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
             //
             // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
       
     
      
           });
     
  
 
 
 
 
 
 
 
 
 
 
 