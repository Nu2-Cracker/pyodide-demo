const canvas = document.getElementById("random-walk-chart");


$(window).on('load',function(){
  function loaderClose(){
    $("#js-loader").fadeOut();
  }
  const observer = new MutationObserver(records => {
    loaderClose();
  });
  observer.observe(canvas, {
    attributes: true,
    attributeFilter: ['width']
  });
});