$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        outlineColour: "transparent",
        cursor: "initial",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        textFont: null,
        textColour: null,
        weightMode: "both",
        weight: true,
        weightGradient: {
          0: "rgb(135,113,220)",
          0.5: "#FF77A1",
          1: "#F9F871",
        },
      },
      "tags"
    )
  ) {
    $("#myCanvasContainer").hide();
  }
});
