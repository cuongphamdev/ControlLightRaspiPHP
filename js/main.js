var button = document.getElementById( 'button' );
var btn_status = 'inactive';
var div = document.getElementById("result");
var funcs = [];


button.onclick = function () {
        if ( btn_status == 'inactive' ) {
            status(true);

        } else if ( btn_status == 'recording' ) {
            status(false);
        }
        reload();
}

function status(start) {
  if (start) {
    button.classList.add( 'recording' );
    btn_status = 'recording';
    msg_box.innerHTML = "Recording";
  } else {
    button.classList.remove( 'recording' );
    btn_status = 'inactive';
    msg_box.innerHTML = "Click to action";
  }
}

function reload() {
	var values = $("#languagesbox").val();
	if (values == "vi") {
		listenVi();	
	}
	else {
		listenEn();	
	}
}

function listenEn(){
  speechRs.rec_start('en-US',function(final_transcript,interim_transcript){
      div.innerText = final_transcript+interim_transcript;
  });
  for (i = 0; i < dataEn.length; i++) {
   funcs[i] = excute(dataEn[i]);
  }
 for (j = 0; j < dataEn.length; j++) {
      funcs[j]();
  }
}
function listenVi(){
  speechRs.rec_start('vi-VN',function(final_transcript,interim_transcript){
      div.innerText = final_transcript+interim_transcript;
  });
  for (i = 0; i < dataVi.length; i++) {
        funcs[i] = excute(dataVi[i]);
  }
  for (j = 0; j < dataVi.length; j++) {
    funcs[j]();
  }
}
function speak(message) {
    speechRs.speechinit('Google UK English Female',function(e){
        speakSomeThing();
    });

    function speakSomeThing(){
        speechRs.speak(message, function() {
        }, false);
    }
}

function excute(command) {
  return function() {
    if (btn_status == 'recording') {
      speechRs.on(command.turnOn,function(){
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        if(command.gpioPort == -1) {
          $('#light-bulb1').attr('class', 'on');
          $('#light-bulb2').attr('class', 'on');
          $('#light-bulb3').attr('class', 'on');
          $('#light-bulb4').attr('class', 'on');
        } else {
          $('#light-bulb'+command.led).attr('class', 'on');
        }
        div.innerText = "";
        status(false);
        btn_status = 'inactive';
      }
    };
    xhttp.open("POST", "LedConfig.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("on="+command.gpioPort);
    });
    speechRs.on(command.turnOff,function(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML = this.responseText;
          if(command.gpioPort == -1) {
            $('#light-bulb1').attr('class', 'off');
            $('#light-bulb2').attr('class', 'off');
            $('#light-bulb3').attr('class', 'off');
            $('#light-bulb4').attr('class', 'off');
          }else {
            $('#light-bulb'+command.led).attr('class', 'off');
          }
          div.innerText = "";
          status(false);
          btn_status = 'inactive';
       }
      };
      xhttp.open("POST", "LedConfig.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("off="+command.gpioPort);
    });
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
