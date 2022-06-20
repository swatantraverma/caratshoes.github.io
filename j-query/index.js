$(document).ready(function() {


    // SUB-MENU-IN-NAVIGATION-BAR-CODE-START


    $(".sub-menu").mouseover(function() {
        $("nav ul li:nth-child(4)").css({
            "color": "rgb(255, 165, 0)"
        })
    })
    $(".sub-menu").mouseout(function() {
            $("nav ul li:nth-child(4)").css({
                "color": "white"
            })
        })
        // SUB-MENU-IN-NAVIGATION-BAR-CODE-START





    // NAVIGATION-FOR-MOBILE-START
    $(".fa-bars").click(function() {
            $(this).toggleClass("fa-xmark")
            $("nav ul").toggleClass("menu")
        })
        // NAVIGATION-FOR-MOBILE-END




    // NIGHT - DAY - MODE - START
    $(".fa-moon").click(function() {
            $("body").toggleClass("night-mode")
            $(this).toggleClass("fa-sun")
        })
        // NIGHT - DAY - MODE - END




    // LIKE BUTTON HEART ICON - START
    $(".fa-heart").click(function() {
            $(this).css({
                "color": "orange"
            })
        })
        // LIKE BUTTON HEART ICON-END





    // OPEN-CLOSE-SHOPPIN-CART-START
    $(".fa-bag-shopping").click(function() {
            $(".cart-window").toggleClass('cart-close-open')
        })
        // OPEN-CLOSE-SHOPPIN-CART-END





    // DETAILS-CARD-HIDE-START
    $(".details .close").click(function() {
        $(".details").css({
            "visibility": "hidden"
        })
    })
    $(".details .fa-xmark").click(function() {
            $(".details").css({
                "visibility": "hidden"
            })
        })
        // DETAILS-CARD-HIDE-END






    // SET-PRODUCT-IMAGE-IN-DETAILS-CARD-START

    $(".view-details").click(function() {
        $(".details").css({
            "visibility": "visible"
        })
    })

    let cards = $(".cards");
    for (i = 0; i < cards.length; i++) {
        $(cards[i]).click(function() {
            let mainImg = $(this).html();
            $(".details .text-img .text").html(mainImg);
            $(".details .text-img .img").html(mainImg);
            $(".details .text-img .text .img").remove();
            $(".details .text-img .text a").remove();
            $(".details .text-img .img .same").remove();
            $(".details .text-img .img .new").remove();
            $(".details .text-img .img a").remove();
            $(".details .text-img .img .name-star-price").remove();
            $(".details .text-img .img .background").remove();
        })
    }

    let x = $(".img");
    for (i = 0; i < x.length; i++) {
        $(x[i]).click(function() {
            let y = $(this).html();
            $(".details .shoes-collection-dots .shoes").html(y);
            $(".details .shoes-collection-dots .shoes .view-details").remove();
            $(".details .shoes-collection-dots .shoes .btn").remove();
            $(".details .shoes-collection-dots .shoes .background").remove();
            $(".details .shoes-collection-dots .name-star-price").remove();

            // IMAGE-CHANGE-PROCESS-IN-DETAILS-CARD-STARt
            let z = $(".details .shoes-collection-dots .shoes img")
            for (i = 0; i < z.length; i++) {
                $(z[i]).click(function() {
                    let a = $(this).attr("src");
                    $(".details .text-img .img img").attr("src", a);
                    $(this).css({
                        "border-bottom": "2px solid rgb(255, 165, 0)"
                    })
                    $(this).siblings().css({
                        "border-bottom": "2px solid rgb(244, 245, 247)"
                    })

                })
            }


            // IMAGE-CHANGE-PROCESS-IN-DETAILS-CARD-END
        })
    }

    // SET-PRODUCT-IMAGE-IN-DETAILS-CARD-END




    // FAQ'S-PAGE-QUESTION-ANSWER-CODE-HERE-START
    let question = $('.faq .inner-section .question-box');
    let down = $('.faq .inner-section .question-box .fa-angle-down');
    let up = $('.faq .inner-section .question-box .fa-angle-up');
    let answer = $('.faq .inner-section .question-box .question-answer .answer');
    for (let i = 0; i < down.length; i++) {
        $(question[i]).click(function() {
            $(down[i]).css({
                'display': "none"
            })
            $(answer[i]).css({
                "height": "100%"
            })
            $(up[i]).css({
                'display': "block"
            })
        })
    }
    for (let i = 0; i < up.length; i++) {
        $(answer[i]).click(function(event) {
            event.stopPropagation();
            $(up[i]).css({
                'display': "none"
            })
            $(this).css({
                "height": "0px"
            })
            $(down[i]).css({
                'display': "block"
            })

        })
    }
    for (let i = 0; i < up.length; i++) {
        $(up[i]).click(function(event) {
            event.stopPropagation();
            $(this).css({
                'display': "none"
            })
            $(answer[i]).css({
                "height": "0px"
            })
            $(down[i]).css({
                'display': "block"
            })

        })
    }

    // FAQ'S-PAGE-QUESTION-ANSWER-CODE-HERE-END






    // FORM-PAGE-START-HERE
    $("form .all-input .first-one input, form .all-input .second-one input").focus(function() {
        $(this).css({
            "border-color": "rgb(255, 165, 0)"
        })
    })
    $("form .all-input .first-one input, form .all-input .second-one input").blur(function() {
        $(this).css({
            "border-color": "rgb(31, 31, 31)",
            "background-color": "transparent"
        })
    })
    $('.footer .inner-section .footer-two ul li:nth-child(4)').click(function() {
        $('.footer .inner-section .footer-two ul li:nth-child(4) ul').toggleClass('showme');
    })
    $('nav .main-menu li:nth-child(4)').click(function() {
            $(' nav .main-menu li:nth-child(4):hover .sub-menu').toggleClass('showme')
        })
        // FORM-PAGE-END-HERE


})