// BOARD JS


// Load Profile
const mySiema = new Siema({
    duration: 1000,
    loop: true,
    easing: 'ease-in',
});

// listen for keydown event
setInterval(() => mySiema.next(), 3500);