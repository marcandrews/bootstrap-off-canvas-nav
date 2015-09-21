/*!
 * Bootstrap Off-Canvas Nav (http://github.com/marcandrews/bootstrap-off-canvas-nav)
 * Copyright (c) 2015 Marc Andrews
 * Licensed under the MIT license
 */

$(function() {
  $('button.navbar-toggle').click(function(){ 
    $('body').toggleClass('out');
    $('nav.navbar-fixed-top').toggleClass('out');
    if ($('body').hasClass('out')) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  });
});

$(document).click(function(e) {
  if (!$(e.target).closest('.navbar-collapse, button.navbar-toggle').length && $('body').hasClass('out')) {
    e.preventDefault();
    $('button.navbar-toggle').trigger('click');
  }
}).keyup(function(e) {
  if (e.keyCode == 27 && $('body').hasClass('out')) {
    $('button.navbar-toggle').trigger('click');
  } 
});
