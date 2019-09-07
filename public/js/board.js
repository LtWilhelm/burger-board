// BOARD JS


app_load_board();

function app_load_board() {

    $.get('/api/display/1', function (profileData) {
        // Get images
        $.get('/api/images', function (imageData) {


            // ------ Featured Update
            let myHTML = ``;
            profileData.Featured.forEach(function (featuredData) {

                console.log(imageData);
                console.log(imageData[featuredData.Featured.backgroundImgId - 1]);
                myHTML += `<div><img src="${imageData[featuredData.Featured.backgroundImgId - 1].img_path}"></div>`;
            });

            $('.bc-featured').html(myHTML);



            profileData.Profile.menu.forEach(function (data, index) {
                myHTML = ``;
                myHTML += `
                <h1>${data.menu_header}</h1>
                <div>
                    <p>Item: ${data.item_1}</p>
                    <p>Price: ${data.price_1}</p>
                </div>
                <div>
                    <p>Item: ${data.item_2}</p>
                    <p>Price: ${data.price_2}</p>
                </div>
                <div>
                    <p>Item: ${data.item_3}</p>
                    <p>Price: ${data.price_3}</p>
                </div>
                <div>
                    <p>Item: ${data.item_4}</p>
                    <p>Price: ${data.price_4}</p>
                </div>
                <div>
                    <p>Item: ${data.item_5}</p>
                    <p>Price: ${data.price_5}</p>
                </div>
                <div>
                    <p>Item: ${data.item_6}</p>
                    <p>Price: ${data.price_6}</p>
                </div>
                <div>
                    <p>Item: ${data.item_7}</p>
                    <p>Price: ${data.price_7}</p>
                </div>
                <div>
                    <p>Item: ${data.item_8}</p>
                    <p>Price: ${data.price_8}</p>
                </div>`;

                $('#m' + (index+1)).html(myHTML);
            });


            // ------- Sidebar Update
            console.log(imageData[profileData.Profile.sidebar.backgroundImgId - 1].img_path);
            $('.bc-sidebar').css('background-image', `url(${imageData[profileData.Profile.sidebar.backgroundImgId - 1].img_path})`);


            // Run Slider Start
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

