$.fn.accordion = function (options) {
    var defaults = {
        singleOpen: true
    };
    var options = $.extend(defaults, options);
    $(this).find('.accordion-trigger').each(function() {
        $(this).siblings().wrap('<div class="accordion-content"/>');
        $(this).wrapInner('<a href="#" class="accordion-trigger-link"/>');
    });
    $(this).find('.accordion-content').hide().attr('aria-hidden', 'true');
    $(this).find('.expanded').find('.accordion-content').show().attr('aria-hidden', 'false');
    $(this).find('.accordion-trigger-link').parent().on('click', function(e){
        //Keep 1 open & close others
        if (options.singleOpen) {
            $(this).closest('.accordion-wrapper').find('.accordion-content').slideUp().attr('aria-hidden', 'true');
            if (!$(this).parent().hasClass('expanded')) {
                $(this).closest('.accordion-wrapper').find('.expanded').removeClass('expanded');
            }
        }
        if ($(this).parent().hasClass('expanded')) {
            $(this).parent().removeClass('expanded');
            $(this).siblings('.accordion-content').slideUp().attr('aria-hidden', 'true');
        } else {
            $(this).siblings('.accordion-content').slideDown().attr('aria-hidden', 'false');
            $(this).parent().addClass('expanded');
        }
        e.preventDefault();
    });

};

$.fn.destroy= function() {
            $(this).find('.accordion-trigger-link').parent().off();
            $(this).find('.accordion-trigger').siblings().contents().unwrap();
            $(this).find('.accordion-trigger-link').contents().unwrap();
};





$('#first-accordion, #second-accordion').accordion();
