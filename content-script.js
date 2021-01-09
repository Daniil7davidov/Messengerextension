function copyToClipboard(evt) {
  var temp = document.createElement("input");
  document.body.append(temp);
  console.log(evt.target.innerHTML);
  temp.value = evt.target.innerHTML;
  temp.select();
  document.execCommand("copy");
  temp.remove();
}

window.addEventListener("load", myMain, false);

function myMain(evt) {
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (document.querySelector("#side header")) {
      clearInterval(jsInitChecktimer);
      // DO YOUR STUFF HERE.
      // let inp = document.createElement("input")
      // inp.style.display = "none";
      // document.appendChild(inp)

      let messages = ["привет", "отвечу чуть позже", "наберу через 15 мин)"];

      let help = document.createElement("ul");
      for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);
        let message = document.createElement("li");
        message.append(messages[i]);
        message.style.margin = "15px";
        message.onclick = copyToClipboard;
        help.appendChild(message);
      }

      help.style.margin = "15px";

      document
        .querySelector("#side")
        .insertBefore(help, document.querySelector("#side header"));
    }
  }
}
