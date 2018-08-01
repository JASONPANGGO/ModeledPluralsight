"use strict";
$(document).ready(function(){

    $('.navbar').hover(function(){
        $('.nav-logo-name').toggle();
        $('.nav-logo-name').toggleClass('name-move');
        $('.site-name').toggle();
        $(this).toggleClass('navbar-full');
    })

    $('.nav-item').hover(function(){
        $(this).children('.nav-logo').toggleClass('hovered');
        $(this).children('.nav-logo-name').toggleClass('hovered');
        
    })

    $('#search-input').click(function(){
        $('.search-page').toggle();
        $('.search-input-full').focus();
    })

    $('.fa-times').click(function(){
        $('.search-page').toggle();
    })

    $('.user-more').click(function(){
        $('.user').children('ul').toggle();
    })

    $('.course-preview').hover(function(){
        $(this).children('.course-play').toggle();
        $(this).children('.course-play').toggleClass('animated fadeIn');
    })

    $('.fa-navicon').click(function(){
        $('.navbar').toggle();
    })

    if($('.fa-navicon').css('display') == 'block'){
        $('.navbar').addClass('.navbar-full');
    }
})