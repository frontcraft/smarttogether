/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    body = document.querySelector( 'body' ),
    didScroll = false,
    changeHeaderOn = 1245;

  function init() {
    scrollPage();
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 100 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if (!$('body').hasClass('front')) {
      changeHeaderOn = 10;
    }

    if ( sy >= changeHeaderOn ) {
      classie.add( body, 'navbar-shrink' );
    }
    else {
      classie.remove( body, 'navbar-shrink' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();
