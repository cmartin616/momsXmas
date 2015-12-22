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
      // var homepage = 'http://cmartin.esri.com/github/momsXmas/';

      var link = homepage + answer1 + answer2 + answer3 + answer4 + '.html';

      $('#answerLink').attr('href', link);
    });

    $('#validateButton').on('click', function(){
      var answers = [$('#question1answer'), $('#question2answer'), $('#question3answer'), $('#question4answer')];

      var validations = [$('#question1validate'), $('#question2validate'), $('#question3validate'), $('#question4validate')];

      var answersLength = answers.length;
      var count = 0;

      _.each(answers, function (ans, i){
        $div = $('#' + ans.attr('id'));
        if (ans.val() === validations[i].val()){
          if ($div.hasClass('failValidate')){
            $div.removeClass('failValidate');
          }
          $div.addClass('passValidate');
          count += 1;
        } else {
          if ($div.hasClass('passValidate')){
            $div.removeClass('passValidate');
          }
          $div.addClass('failValidate');
        }
      });

      if (answersLength === count) {
        var $answerLink = $('#answerLink');
        $answerLink.removeClass('btn-danger');
        $answerLink.addClass('btn-success');
        $answerLink.removeAttr('disabled');
      }

    });

    $('.hintButton').on('click', function(){
      $this = $(this);
      // console.log($this.attr('id'));
      var hint = $this.attr('id').slice(0, -6);
      $hint = $('.' + hint);
      $hint.show();
    });
});
