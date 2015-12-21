$(function() {

    $('.question').on('keyup', function(e){
      var answerBox = $('#' + $(this).attr('id') + 'answer');
      var answer = $(this).val();
      answerBox.val(answer);

      var answer1 = $('#question1answer').val();
      var answer2 = $('#question2answer').val();
      var answer3 = $('#question3answer').val();
      var answer4 = $('#question4answer').val();

      var homepage = 'http://localhost/github/momsXmas/';
      // var homepage = 'http://chrismartingisdev.com/';

      var link = homepage + answer1 + answer2 + answer3 + answer4 + '.html';

      $('#answerLink').attr('href', link);
    });
});
