// BOARD JS


app_load_board();

function app_load_board() {

    $.get('/api/display/1', function (profileData) {
        // Get images
        $.get('/api/images', function (imageData) {


            // Featured Update
            let myHTML = ``;
            profileData.Featured.forEach(function (featuredData) {

                console.log(imageData);
                console.log(imageData[featuredData.Featured.backgroundImgId-1]);
                myHTML += `<div><img src="${imageData[featuredData.Featured.backgroundImgId-1].img_path}"></div>`;
            });

            $('.bc-featured').html(myHTML);



            // Load Profile2
            const mySiema = new Siema({
                duration: 1000,
                loop: true,
                easing: 'ease-in',
            });

            // listen for keydown event
            setInterval(() => mySiema.next(), 3500);
        });
    });
}

