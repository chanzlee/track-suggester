$(document).ready(function() {

  $("form#tracker").submit(function(event) {
    event.preventDefault();

    var iWhere = $("#where").val();
    var iAcheive = $("#achieve").val();
    var iFeature1 = $("#feature1").val();
    var iFeature2 = $("#feature2").val();
    var iFeature3 = $("#feature3").val();

    if (iWhere === "" || iAcheive === "" || iFeature1 === "" || iFeature2 === "" || iFeature3 === "" ) {
      alert("Please fill in the all blanks :)");
    } else {

    var iAnswer = iWhere + iAcheive + iFeature1 + iFeature2 + iFeature3;

    alert(iAnswer);

    var countNet = iAnswer.match(/net/g).length;
    var countRuby = iAnswer.match(/ruby/g).length;
    var countReact = iAnswer.match(/react/g).length;

    alert(countNet);

    if (countNet >= countRuby && countNet >= countReact) {
      alert("net");
    } else if (countRuby >= countNet && countRuby >= countReact ) {
      alert("ruby");
    } else if (countReact >= countRuby && countReact >= countNet ) {
      alert("react");
    } else {
      alert("error");
    }

    }
    // close else of the first flow control, checking valid inputs.
  });
  // close click function
});
// close submit function
