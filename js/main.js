$(function() {

  $('.question').on('keyup', function(e){
    var answerBox = $('#' + $(this).attr('id') + 'answer');
    var answer = $(this).val();
    answerBox.val(answer);

      // var answer1 = $('#question1answer').val();
      // var answer2 = $('#question2answer').val();
      // var answer3 = $('#question3answer').val();
      // var answer4 = $('#question4answer').val();

      // var homepage = 'http://localhost/github/momsXmas/';
      // // var homepage = 'http://chrismartingisdev.com/';
      // // var homepage = 'http://cmartin.esri.com/github/momsXmas/';

      // var link = homepage + answer1 + answer2 + answer3 + answer4 + '.html';

      // $('#answerLink').attr('href', link);
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

  var lives = 5;
  var total = 0;

  $('.letterButton').on('click', function(){
    $this = $(this);

    $this.removeClass('btn-success');
    $this.addClass('btn-danger');
    $this.attr('disabled', true);

    var letter = $this.attr('id');
    var $letterBox = $('.' + letter);
    $letterBox.text(letter.slice(6));

    total += $letterBox.length;

    // if solved
    if (total === 24) {
      $finaleLink = $('#finaleLink');
      $finaleLink.attr('disabled', false);
      $finaleLink.removeClass('btn-danger');
      $finaleLink.addClass('btn-success');
    }

    if ($letterBox.length < 1){
      lives -= 1;
      $lives = $('#livesSpan');
      $lives.text(lives);

      $livesButton = $('.livesButton');

      if (lives < 4 && lives > 2){
        $livesButton.removeClass('btn-success');
        $livesButton.addClass('btn-warning');
      }

      if (lives < 2){
        $livesButton.removeClass('btn-warning');
        $livesButton.addClass('btn-danger');
      }

      if (lives === 0){
        // clear puzzle
        $('.letterWell').text('');

        // reset lives
        lives = 5;
        $lives.text(lives);
        $livesButton.removeClass('btn-danger');
        $livesButton.addClass('btn-success');

        // reset letters
        $letterButton = $('.letterButton');
        $letterButton.removeClass('btn-danger');
        $letterButton.addClass('btn-success');
        $letterButton.attr('disabled', false);
      }
    }
  });
});
