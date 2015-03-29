var diglett = 'http://fc06.deviantart.net/fs70/f/2010/165/9/4/050___Diglett_by_cammarin.png';
var strikes = 0;

$('body').on('click', function(e) {
  e.preventDefault();
  strikes++;
  if (strikes < 3) {
    alert('STOP REDDITING');
  } else {
    var begging = prompt('YOU ARE AN UNPRODUCTIVE TAINT -- SAY SORRY');
    if (begging.toLowerCase() !== 'sorry') {
      $('body').html('<h1>YOU\'VE BEEN SERVED</h1><img src=' + diglett + '>');
      $('h1').css({fontSize: '100px', color: 'white'});
    } else {
      alert('you are forgiven');
    }
  }
});