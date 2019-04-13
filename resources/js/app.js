
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});

// :::::::: CUSTOM ::::::::

// :::::::: ANIMATIONS ::::::::
// from header to second section
$("#toNextSectionArrow").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutSection").offset().top
    }, 1500);

});

// from this anchor to header
$("#toHeaderArrow").click(function() {

  $([document.documentElement, document.body]).animate({
      scrollTop: $("#headerSection").offset().top
  }, 3000);

});

// unavailable function: temporary message
$(".tempAlert").click(function() {

  alert('Ciao, il sito è ancora in fase di sviluppo e purtroppo questa funzione non è ancora stata implementata.\nMi farebbe piacere se volessi restare aggiornato sullo stato di avanzamento dei lavori, nel caso, ti prego di scrivermi utilizzando il form di contatto qui sotto.\nTi terrò aggiornato con piacere!');

});

// return true if the DOM element is in the Viewport
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.animated').each(function() {

    if ($(this).isInViewport()) {
      $(this).children().addClass('afterScroll');
    }

  });

});

$(window).on('resize scroll', function() {
  $('.chart').each(function() {

    if ($(this).isInViewport()) {
      $(this).children().addClass('column');
    }

  });

});

$(window).on('resize scroll', function() {
  $('#footerSection').each(function() {

    if ($(this).isInViewport()) {
      $(this).children().addClass('fadein');
    }

  });

});
