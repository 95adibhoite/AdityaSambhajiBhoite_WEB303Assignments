$(document).ready(function () {
    // Event handler for opening the box
    $('#open-box').on('click', function(){
        $("#box-container").show();
    });

    // Event handler for closing the box
    $('#close').on('click', function(){
        $("#box-container").hide();
    });

    // Initial click on the first thumbnail
    var $thumbs = $('.thumbnail'); // Assuming you have a class for thumbnails
    $thumbs.eq(0).click();

    // Event handler for clicking a photo box inside a frame
    var $frame = $('#frame'); // Assuming you have an ID for the frame
    $frame.on('click', 'a.photo-box', function (e) {
        e.preventDefault();
        var $img = $(this).find('img').clone();

        // Set the modal image source
        $('#modal-image').attr('src', $img.attr('src'));

        // Show the modal
        $('#modal').css('display', 'block');
    });

    // Close the modal when the close button is clicked
    $('#modal').on('click', 'span.close-modal', function () {
        $('#modal').css('display', 'none');
    });

    // Custom photo viewer functionality
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        // Additional modal code can be added here if needed
    });
});
