// Service worker delle notifiche NODO (Firebase Cloud Messaging).
// Mostra gli avvisi a NODO chiuso; toccandoli si apre la pagina NODO.
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({ apiKey: "AIzaSyAeZY8ihPbIwDQ9ZsTAeD-x9VibsWNASS8", authDomain: "nodo-9d50c.firebaseapp.com", projectId: "nodo-9d50c", storageBucket: "nodo-9d50c.firebasestorage.app", messagingSenderId: "792290982149", appId: "1:792290982149:web:35bf8804d2257779e3df6c" });
firebase.messaging();
