$(function() {

    if ((location.pathname.split("/")[1]) !== ""){
      $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('here');
    }
    else {
      $('nav a.home-link').addClass('here');
    }

});
