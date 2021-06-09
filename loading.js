const img = document.getElementById("output");


$(window).on('load',function(){
  function loaderClose(){
    $("#js-loader").fadeOut();
  }
  const observer = new MutationObserver(records => {
    loaderClose();
  });
  observer.observe(img, {
    attributes: true,
    attributeFilter: ['src']
  });
});