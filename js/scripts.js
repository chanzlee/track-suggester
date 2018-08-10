$(document).ready(function() {

  $("form#tracker").submit(function(event) {
    event.preventDefault();


    var iWhere = $("#where").val();
    var iAcheive = $("#achieve").val();
    var iFeature1 = $("#feature1").val();
    var iFeature2 = $("#feature2").val();
    var iFeature3 = $("#feature3").val();

    if (iWhere === "0" || iAcheive === "0" || iFeature1 === "0" || iFeature2 === "0" || iFeature3 === "0" ) {
      alert("Please fill in the all blanks :)");
    } else {

    $(".net").hide();
    $(".ruby").hide();
    $(".react").hide();

    // iAnswer concats all the string values from inputs

    var iAnswer = iWhere + iAcheive + iFeature1 + iFeature2 + iFeature3;


    // To use length property on inAnswer.match, it should be checked whether it has null value, which causes error.

    if (iAnswer.match(/net/g)) {
      var countNet = iAnswer.match(/net/g).length;
    } else {
      var countNet = 0
    }

    if (iAnswer.match(/ruby/g)) {
      var countRuby = iAnswer.match(/ruby/g).length;
    } else {
      var countRuby = 0
    }

    if (iAnswer.match(/react/g)) {
      var countReact = iAnswer.match(/react/g).length;
    } else {
      var countReact = 0
    }

    // if null value is changed into 0, compare the number of answers related among Net, Ruby, Reactor and show most frequent answer.


    if (countNet >= countRuby && countNet >= countReact) {
      result = "C#/.Net"
      $(".net").toggle();
    } else if (countRuby >= countNet && countRuby >= countReact ) {
      result = "Ruby/Rails"
      $(".ruby").toggle();
    } else if (countReact >= countRuby && countReact >= countNet ) {
      result = "CSS/React"
      $(".react").toggle();
    } else {
      alert("error");
    }

    $("#result").text(result);

    nameInput = prompt("Please enter your name to proceed");
    $("#nameInput").text(nameInput);

    $("#submitModal").modal();
    }
    // close else of the first flow control, checking valid inputs.
  });
  // close submit function

  // $("button#refresh").click(function() {
  //   $(".net").hide();
  //   $(".ruby").hide();
  //   $(".react").hide();
  // });

});
// close submit function
