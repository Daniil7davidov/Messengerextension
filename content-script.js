window.addEventListener("load", myMain, false);

function myMain(evt) {
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (document.querySelector("#side header")) {
      clearInterval(jsInitChecktimer);
      // DO YOUR STUFF HERE.
      let help = document.createElement("div");
      help.append("help");
      help.style.cursor = "pointer";
      help.onclick = function () {
        console.log(123);
      };
      help.style.margin = "15px";

      document
        .querySelector("#side")
        .insertBefore(help, document.querySelector("#side header"));
    }
  }
}
