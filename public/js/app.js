// Burger Board Application
// Designed and Developed by:
// --- Mason Short
// --- Zach Draper
// --- Payton Burr
// --- Michael Miller

// Modal

// LOAD DATA INTO MODALS

app_profiles_get();

app_profile_get(1);

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


function app_profile_get(profileID) {
    $.get('/api/display/1', function (data) {
        console.log(data);
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

    let objData = {}
    objData.profile_name = $('#profile-create-name-field').val();

    $.modal.close();

    $.post('/api/profiles/create', objData, function (packageGet) {

        // Failure
        if (!packageGet) {
            // Failure!
            console.log(packageGet);
        }

        // Success
        if (packageGet) {
            // Failure!
            console.log(packageGet);
            console.log("SUCCESS!");
        }
    });
}
