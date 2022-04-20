function javaScript {
	console.log("Object.OnClick activated, alerting message is going to be sent. If you didn't receive the message, you may have disabled dialog boxes for this page.");
	alert("Hello HTML, from JavaScript");
}
object.onclick = function(){javaScript}; 
