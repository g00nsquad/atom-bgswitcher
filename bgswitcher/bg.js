$ = window.jQuery;

$(function(){
  $.get("https://raw.githubusercontent.com/g00nsquad/atom-bgswitcher/master/list.txt", function (data) {
    var imgs = mgs = data.split("\n").map(function(x) { return "https://raw.githubusercontent.com/g00nsquad/atom-bgswitcher/master/images/"+x; });
    console.log('loaded background images');
    console.dir(imgs);
    $("body").bgswitcher({
      images: imgs,
      loop: true,
      shuffle: true,
      duration: 1400,
      /* switch once per 2~4 minutes */
      interval: (180 * 1000) + ((Math.floor(Math.random() * 200)) * 50)
    });
  });
});
