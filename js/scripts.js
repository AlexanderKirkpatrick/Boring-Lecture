$(document).ready(function() {
  $("button#highlight").click(function() {
    $("p.intro").removeClass();
    $("p").addClass("yellow-background");
    });
});