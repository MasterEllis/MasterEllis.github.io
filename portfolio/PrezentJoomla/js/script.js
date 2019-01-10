

jQuery(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    jQuery(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = jQuery(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = jQuery(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = jQuery(window).height();        // Высота окна браузера
        var d_height = jQuery(document).height();      // Высота всего документа

        var e_height = jQuery(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            jQuery(".cifra-big").spincrement({
                from: 0,                // Стартовое число
                to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
                decimalPlaces: 0,       // Сколько знаков оставлять после запятой
                decimalPoint: ".",      // Разделитель десятичной части числа
                thousandSeparator: " ", // Разделитель тыcячных
                duration: 1200          // Продолжительность анимации в миллисекундах
            });

            show = false;
        }
    });
});

jQuery(document).ready(function(){
    jQuery(function() {
        jQuery('.hide-block:not(:first)').hide();
        jQuery('.caption').click(function() {
            jQuery('.hide-block').hide();
            jQuery(this).siblings('.hide-block').show();
        })
        jQuery('.close1').click(function(){
            jQuery('.hide-block').hide();
        })
    })
    jQuery('.module-owl, .slider-site').owlCarousel({
        items:1,
        nav: true,
        dots: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        navText: ["",""]
    });
    jQuery("a.link-to-anchor").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });
});

jQuery(document).ready(function(){
    var panel= jQuery('#main-menu'),pos=670;
    jQuery(window).scroll(function(){
        /* Start(Тестовые функции) */
        jQuery('#posOffSet').html(pos); jQuery('#wsOffSet').html( jQuery(this).scrollTop());
        /* End(Тестовые функции) */
        if( jQuery(this).scrollTop() > pos && !panel.hasClass('opened')){
            panel.removeClass('default').addClass('opened');
        }else if( jQuery(this).scrollTop() < pos && panel.hasClass('opened')){
            panel.removeClass('opened').addClass('default');
        }});
});