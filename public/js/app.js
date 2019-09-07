// Burger Board Application
// Designed and Developed by:
// --- Mason Short
// --- Zach Draper
// --- Payton Burr
// --- Michael Miller


// Local Storage 
let localTest = localStorage.getItem('localProfile');

if (!localTest) {
    localProfile = { currentProfile: 1 };
    localStorage.setItem('localProfile', JSON.stringify(localProfile));
}
else {
    localProfile = JSON.parse(localStorage.getItem('localProfile'));
}

// Load Amind Board
app_load_board();

//app_template_add_to_feature();
//app_profile_get(1);



// Load Board
function app_load_board(profileID) {

    $.get('/api/display/1', function (data) {

        // Update Featured
        featured_templates_get(data.Profile.id);
        app_profiles_get();
        app_images_get();
        app_templates_get();
        app_sidebar_get();
        app_menus_get();

        // Add Listeners        
        $('.ab_featured').click(function (event) {
            $('#modal-edit-featured').modal();
        });
     
        $('.ab_sidebar').click(function (event) {
            $('#modal-edit-sidebar').modal();
        });

        $('.ab_menu_1').click(function (event) {
            $('#modal-edit-menu-1').modal();
        });

        $('.ab_menu_2').click(function (event) {
            $('#modal-edit-menu-2').modal();
        });

        $('.ab_menu_3').click(function (event) {
            $('#modal-edit-menu-3').modal();
        });

        $('.ab_menu_4').click(function (event) {
            $('#modal-edit-menu-4').modal();
        });
    });
}

function app_sidebar_get() {
    $.get(`/api/display/${localProfile.currentProfile}`, function (data) {
        let sideBar = data.Profile.sidebar;

        // Update Div
        let myHTML = ``;
        myHTML += `<p>${sideBar.sidebar_header}</p>`;
        myHTML += `<p>${sideBar.backgroundImgId}`;

        $('.ab_sidebar').append(myHTML)
    });
}

function app_menus_get() {

    console.log("Getting Menus...");
    $.get(`/api/display/${localProfile.currentProfile}`, function (data) {
        let menuArray = data.Profile.menu;

        menuArray.forEach(function (data, index) {
            let menu = index + 1;
            console.log(menu)

            let obj = {};
            obj.menu_header = $(`#menu_${menu}_header`).val(data.menu_header || "Menu Name");

            $(`#menu_${menu}_item_1`).val(data.item_1 || "Item Name");
            $(`#menu_${menu}_price_1`).val(data.price_1 || 0.00);
            $(`#menu_${menu}_item_2`).val(data.item_2 || "Item Name");
            $(`#menu_${menu}_price_2`).val(data.price_2 || 0.00);
            $(`#menu_${menu}_item_3`).val(data.item_3 || "Item Name");
            $(`#menu_${menu}_price_3`).val(data.price_3 || 0.00);
            $(`#menu_${menu}_item_4`).val(data.item_4 || "Item Name");
            $(`#menu_${menu}_price_4`).val(data.price_4 || 0.00);
            $(`#menu_${menu}_item_5`).val(data.item_5 || "Item Name");
            $(`#menu_${menu}_price_5`).val(data.price_5 || 0.00);
            $(`#menu_${menu}_item_6`).val(data.item_6 || "Item Name");
            $(`#menu_${menu}_price_6`).val(data.price_6 || 0.00);
            $(`#menu_${menu}_item_7`).val(data.item_7 || "Item Name");
            $(`#menu_${menu}_price_7`).val(data.price_7 || 0.00);
            $(`#menu_${menu}_item_8`).val(data.item_8 || "Item Name");
            $(`#menu_${menu}_price_8`).val(data.price_8 || 0.00);

            let myHTML = ``;
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
                </div>
            `;
            $('.ab_menu_' + (index + 1)).html(myHTML);
        });

        console.log("Menus Loaded!")
    });
}

// Load Template list
function app_templates_get() {
    $.get('/api/templates', function (data) {
        let myHTML = ``;

        // Loop through array and load options
        data.forEach(function (templateData) {
            myHTML += `<option value="${templateData.id}">${templateData.template_name}</option>`;
        });

        $('.list-templates').html(myHTML);
    });
}


// Load Templates to current featured
function featured_templates_get(profileID) {

    let modalList = ``;
    let previewList = ``;
    $.get(`/api/display/${localProfile.currentProfile}`, function (data) {

        data.Featured.forEach(function (obj) {
            modalList += `<p>${obj.Featured.template_name} | <a href="#">Delete</a> </p>`;
            previewList += `<p>${obj.Featured.template_name}`;
        });

        $('#list-featured-templates-current').html(modalList);
        $('.ab_featured').append(previewList);
    });
}

function app_profiles_get() {
    $.get('/api/profiles', function (data) {

        let myHTML = ``;
        // Loop through array and load options
        data.forEach(function (profileData) {
            console.log(profileData);
            myHTML += `<option name="${profileData.id}">${profileData.profile_name}</option>`;
        });

        $('#list-profile-options').html(myHTML);
    });
}

// FULL PROFILE OBJECT
function app_profile_get(profileID) {
    $.get('/api/display/1', function (data) {
        console.log(data);
    });
}

// IMAGES
function app_images_get() {
    $.get('/api/images/', function (data) {

        let myHTML = ``;
        // Loop through array and load options
        data.forEach(function (imgData) {
            console.log(imgData.img_path);
            myHTML += `<option value="${imgData.id}">${imgData.img_name}</option>`;
        });

        $(".list-images-options").html(myHTML); // Populates all elemets in every modal

    });
}

function app_template_create() {

    let objData = {};
    objData.template_name = $("#template-name").val();
    objData.template_body = $("#template-body-text").val();
    objData.backgroundImgId = parseInt($("#template-image-choice").val());

    $.post('/api/template/create', objData, function (packageGet) {
        console.log(packageGet);
    });

}

function app_template_add_to_featured() {

    // Get Template ID
    let templateID = $('#list-featured-add-templates').val();
    let profileID = localProfile.currentProfile;

    $.post(`/api/featured/${profileID}/${templateID}`, function (packageGet) {
        console.log(packageGet);
    });
}

// Inline Editing
function app_profile_inline_edit() {
    // Show Inline Edit
    $('#inline-edit').hide();
    $('#inline-save').show();
}

// Inline Editing
function app_profile_inline_save() {
    // Show Inline Edit
    $('#inline-edit').show();
    $('#inline-save').hide();
}

// Create Profile
function app_profile_create() {

    let inputVal = $('#profile-create-name-field').val();
    console.log(inputVal);
    console.log($('#profile-create-name-field').val());

    let objData = {}


    objData.profile_name = $('#profile-create-name-field').val();

    $.post('/api/profiles/create', objData, function (packageGet) {

        // Failure
        if (!packageGet) {
            console.log(packageGet);
        }

        // Success
        if (packageGet) {

            app_profiles_get();
            console.log(packageGet);
            console.log("SUCCESS!");
            $.modal.close();
        }
    });
}

function app_sidebar_update() {

    let obj = {};

    obj.sidebar_header = $('#sidebar-header-field').val();
    obj.backgroundImgId = $('#sidebar-image-choice').val();
    obj.sideBarId = 1;

    $.ajax({
        url: '/api/sidebar/1',
        type: 'PUT',
        data: obj,
        success: function (data) {
            alert('Load was performed.');
        }
    });
}

function app_menu_update(menu) {

    let obj = {};

    obj.menuId = menu;
    obj.menu_header = $(`#menu_${menu}_header`).val();

    obj.item_1 = $(`#menu_${menu}_item_1`).val();
    obj.price_1 = $(`#menu_${menu}_price_1`).val();

    obj.item_2 = $(`#menu_${menu}_item_2`).val();
    obj.price_2 = $(`#menu_${menu}_price_2`).val();

    obj.item_3 = $(`#menu_${menu}_item_3`).val();
    obj.price_3 = $(`#menu_${menu}_price_3`).val();

    obj.item_4 = $(`#menu_${menu}_item_4`).val();
    obj.price_4 = $(`#menu_${menu}_price_4`).val();

    obj.item_5 = $(`#menu_${menu}_item_5`).val();
    obj.price_5 = $(`#menu_${menu}_price_5`).val();

    obj.item_6 = $(`#menu_${menu}_item_6`).val();
    obj.price_6 = $(`#menu_${menu}_price_6`).val();

    obj.item_7 = $(`#menu_${menu}_item_7`).val();
    obj.price_7 = $(`#menu_${menu}_price_7`).val();

    obj.item_8 = $(`#menu_${menu}_item_8`).val();
    obj.price_8 = $(`#menu_${menu}_price_8`).val();

    $.ajax({
        url: '/api/menu/menuId',
        type: 'PUT',
        data: obj,
        success: app_menus_get()
    });

}