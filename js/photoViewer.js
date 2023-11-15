(function($) {
    $.fn.photoViewer = function() {
        return this.each(function() {
            var $imgContainer = $(this);
            var $mainImg = $imgContainer.find('#main-img');

            $imgContainer.find('img').on({
                mouseover: function() {
                    $(this).css({
                        'cursor': 'default',
                        'border-color': 'red'
                    });
                },
                mouseout: function() {
                    $(this).css({
                        'cursor': 'default',
                        'border-color': 'grey'
                    });
                },
                click: function() {
                    var imgURL = $(this).attr('src');
                    $mainImg.fadeOut(100, function() {
                        $mainImg.attr('src', imgURL);
                    }).fadeIn(100);
                }
            });
        });
    };
})(jQuery);

$(document).ready(function() {
    $('#img-container').photoViewer();
});
