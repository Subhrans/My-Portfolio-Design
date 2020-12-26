$(document).ready(function(){
  var btns=$('.project-area .button-group button');
  btns.click(function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add("active");

    var selector =$(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter:selector
    });
    return false;
  });

    $('.project-area .button-group #btn1').trigger('click');
    $('.project-area .grid .text-popup-link').magnificPopup({
      type:'image',
      showCloseBtn:true,
      removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',
  gallery:{
    enabled:true
  },
});
var CVbtns=$('.site-main .about-area .container-fluid .about .primary-button');
CVbtns.click(function()
{
  function download(filename) {
      var element = document.createElement('a');
      element.href =filename;
      element.setAttribute('download','new_image');
      document.body.appendChild(element);

      element.click();
  }

  // Start file download.
  document.getElementById("resume").addEventListener("click", function(){
      // Generate download of hello.txt file with some content
      // var text = document.getElementById("").value;
      var text="/images/about-us.png";
      var filename = "C:/Users/Subhransu das/Desktop/bootstrap/JQuery+Ajax/Portfolio using bootstrap/images/about-us.png";

      download(filename, text);
  }, false);

});
$('.subscribe-us-area .subscribe .d-sm-flex .w-50 .col .btn-submit .btn-success').click(function(){
  var inputval=$('.subscribe-us-area .subscribe .d-sm-flex .w-50 .flex-wrap .input-textbox .form-control').val();
  alert('Thanks for subscribing.. @'+inputval);
});

// sticky navmenu
var nav_offset_top=$('.header_area').height();
function navbarFixed()
{
  if($('.header_area').length)
  {
    $(window).scroll(function(){
      var scroll=$(window).scrollTop();
      if(scroll >= nav_offset_top)
      {
        $('.header_area .main-menu').addClass('navbar_fixed');
      }
      else{
        $('.header_area .main-menu').removeClass('navbar_fixed');
      }
    });
  }
}
navbarFixed();
 $(window).resize(function() {
  if ( $(window).width() < 766) {
       $('.subscribe-us-area .subscribe').removeClass('container');
      }
    else{
       $('.subscribe-us-area .subscribe').addClass('container');
    }
});

  // ==== Magnific Popup =====
  // $('.first-img').magnificPopup({type:'image'});
});
