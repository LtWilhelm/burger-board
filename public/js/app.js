// Burger Board Application
// Designed and Developed by:
// --- Mason Short
// --- Zach Draper
// --- Payton Burr
// --- Michael Miller

// Modal

// LOAD DATA INTO MODALS

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


app_profiles_get();

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

    let profileName = $('#input-profile-name').val();

    console.log('Test');

    $.post('/api/profiles/create', profileName, function (packageGet) {

        // Failure
        if (!packageGet) {
            // Failure!
            console.log(packageGet);
        }

        // Success
        if (packageGet) {
            // Failure!
            console.log(packageGet);
        }
    });
}


// Create Profile
function app_profile_create() {

    let profileName = $('#input-profile-name').val();

    console.log('Test');

    $.post('/api/profiles/create', profileName, function (packageGet) {

        // Failure
        if (!packageGet) {
            // Failure!
            console.log(packageGet);
        }

        // Success
        if (packageGet) {
            // Failure!
            console.log(packageGet);
        }
    });
}