var colors = ['#69CCE8', '#AA3939', '#779526', '#522523', '#7E2873', '#805D71', '#BCF8EC', '#9FA0C3', '#420039', '#454E9E', '#018E42', '#F7D002', '#F9A03F'];

function getData () {
    $.getJSON("https://api.myjson.com/bins/zj5s9", function(data) {
      var index = Math.floor(Math.random() * data.length);
      var color = Math.floor(Math.random() * colors.length);

      $('#quote, #author-text').animate({
        opacity: 0
      }, function() {
        $('#quote, #author-text').animate({
          color: colors[color],
          opacity: 1 });
        $('#text').html(data[index].quote);
        $('#author-text').html('-' + data[index].author);
        $('body, .button').animate({
          backgroundColor: colors[color]
        });
      });
    });
  };

$(document).ready(function() {
  getData();
  
  $('#button').click(function(){
    getData();
  });
  
  $('#tweet').click(function(){
    window.open('https://twitter.com/intent/tweet?text=' + $('#text').text(), 'Tweet Quote', '_blank');
  })
})