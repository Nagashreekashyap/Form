$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: $(this).serialize(),
            success: function (response) {
                $('#successMessage').fadeIn();
                $('#registrationForm')[0].reset(); // Clear the form
            },
            error: function () {
                alert('An error occurred. Please try again.');
            }
        });
    });
});
