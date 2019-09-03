// Burger Board Application
// Designed and Developed by:
// --- Mason Short
// --- Zach Draper
// --- Payton Burr
// --- Michael Miller

// Modal


// Create Profile
function app_profile_create(element, data) {

    $.post('/api/profiles/create', packageSent, function (packageGet) {


        // Failure
        if (!packageGet) {
            // Failure!
            $(element 'alert-error').show();
        }

        // Success
        if (packageGet) {
            // Failure!
            $(element 'alert-success').show();
        }
    });
}
