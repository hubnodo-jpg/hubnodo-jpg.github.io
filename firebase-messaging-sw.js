// Service worker delle notifiche NODO (Firebase Cloud Messaging).
// Mostra gli avvisi a NODO chiuso; toccandoli si apre la pagina NODO.
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({ apiKey: "", authDomain: "", projectId: "", storageBucket: "", messagingSenderId: "", appId: "" });
firebase.messaging();
