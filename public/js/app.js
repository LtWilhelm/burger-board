// Burger Board Application
// Designed and Developed by:
// --- Mason Short
// --- Zach Draper
// --- Payton Burr
// --- Michael Miller

// Modal

// LOAD DATA INTO MODALS

// Load List of Profiles
//app_profiles_get();

// Load list of images
//app_images_get();

//app_templates_get();

//app_template_add_to_feature();

//app_profile_get(1);

// Load Template list
function app_templates_get() {
    $.get('/api/templates', function (data) {
        let myHTML = ``;

        // Loop through array and load options
        data.forEach(function (templateData) {
            myHTML += `<option name="${templateData.id}">${templateData.template_name}</option>`;
        });

        $('.list-templates').html(myHTML);
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

    console.log(objData.backgroundImgId);

    $.post('/api/template/create', objData, function (packageGet) {
        console.log(packageGet);
    });

}

function app_template_add_to_feature() {

    $.post('/api/featured/1/2', function (packageGet) {
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