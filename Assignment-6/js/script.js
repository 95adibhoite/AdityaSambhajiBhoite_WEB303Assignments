$(document).ready(function () {
    // Accordion functionality
    $('.accordian h3').click(function () {
        var panel = $(this).next('.accordian-panel');
        
        if (panel.is(':visible')) {
            panel.slideUp();
        } else {
            $('.accordian-panel').slideUp();
            panel.slideDown();
        }
    });

    // Tab functionality
    $(".tab-button").click(function () {
        // Remove the "active" class from all tab buttons and tab content
        $(".tab-button, .tab-content").removeClass("active");

        // Add the "active" class to the clicked tab button
        $(this).addClass("active");

        // Get the data-target attribute value from the clicked button
        var target = $(this).data("target");

        // Add the "active" class to the tab content with the corresponding ID
        $("#" + target).addClass("active");
    });
});
