function monInterval(callback, delai) {
  function boucle() {
    callback();
    setTimeout(boucle, delai);
  }
  
  setTimeout(boucle, delai);
}

monInterval(() => {
  console.log("Bonjour !", new Date().toLocaleTimeString());
}, 2000);