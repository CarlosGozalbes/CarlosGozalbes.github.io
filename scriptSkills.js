$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        //textColour: '#ff0000',
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
          0: "rgb(135,113,220)", // red
          0.5: "#FF77A1", // yellow
          //0.66: '#0f0', // green
          1: "#F9F871", // blue
        },
      },
      "tags"
    )
  ) {
    // something went wrong, hide the canvas container
    $("#myCanvasContainer").hide();
  }
});
//To change the color of text randomly
