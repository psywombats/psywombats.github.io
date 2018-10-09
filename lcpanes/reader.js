var rawScenes;
var sceneLines;
var bookmark;
var vars;

function readerInit(data) {
	rawScenes = data;
	bookmark = 0;
	vars = new Array();
}

function setBookmarkAtScene(number) {
	var tempScenes = rawScenes[number].split('\n');
    sceneLines = [];
    for (var i = 0; i < tempScenes.size; i += 1) {
        line = tempScenes[i];
        line = line.replace('\r','');
        if (line && line.length > 0) {
            sceneLines.push(line);
        }
    }
	bookmark = 0;
}

function getSingleLine() {
	bookmark += 1;
	return sceneLines[bookmark - 1];
}

function getSingleDisplayLine() {
	while(true) {
		bookmark += 1;
		var candidate = sceneLines[bookmark - 1];
		//if (!candidate) return;
		//if (candidate == "<br>") continue;
		//if (candidate.trim() == "") continue;
		return candidate;
	}
}

/** should only return when it's got some text to print i guess */
function nextAction() {
	var cbuffer = "";
	lineb = 1;
	while (true) {
		bookmark += 1;
		var next = sceneLines[bookmark - 1];
		if (!next) alert("err"); // for christ's sake no I don't mean !next==""
		//if (next.indexOf("\r", next.length - 2) !== -1) {
		//	next = next.concat("\r");
		//}
		if (!next || next == "" || next.trim() == "") {
			// this should clear the screen of characters etc
			continue;
		}
		if (next[0] == '[') {
			if (next[1] == 's') {
				// yeah don't start any commands with 's', okay?
				continue;
			}
			var cmd;
			if (next.indexOf(' ') != -1) {
				cmd = next.substring(1, next.indexOf(' '));
			} else {
				cmd = next.substring(1, next.length-2);
			}
			var arg1 = next.substring(next.indexOf(' ')+1, next.length-1);
			if (cmd == "date" ) {
				// screw it
				continue;
			}
			if (cmd == "title") {
				document.title = arg1.substring(0, arg1.length-1);
			}
			if (cmd == "goto") {
				arg1 = arg1.substring(1);
				return(advanceToScene(parseInt(arg1, 10)));
			}
			if (cmd == "increment") {
				arg1 = arg1.substring(0, arg1.length-1);
				if (vars[arg1]) {
					vars[arg1] += 1;
				} else {
					vars[arg1] = 1;
				}
			}
			if (cmd == "decrement") {
				arg1 = arg1.substring(0, arg1.length-1);
				if (vars[arg1]) {
					vars[arg1] -= 1;
				} else {
					vars[arg1] = -1;
				}
			}
			if (cmd == "type") {
				if (lastType) lineb = 0;
				lastType = true;
				var space2 = arg1.indexOf(' ');
				var space3 = arg1.indexOf(' ', space2+1);
				var from = arg1.substring(0, space2);
				var minutes = arg1.substring(space2+1, space3-1);
				var d = new Date();
				var mins = d.getMinutes()-parseInt(minutes);
				var dmsg = ""+d.getHours()+":"+mins+":"+d.getSeconds();
				var msg = arg1.substring(space3);
				return from + "(" + dmsg + "): " + msg;
			}
			if (cmd == "choice" ) { // oh fuck
				var index = 0;
				var choice = new Object();
				choice.options = new Array();
				choice.scenes = new Array();
				while (sceneLines[bookmark]) {
					arg1 = sceneLines[bookmark].substring(1);
					if (arg1[arg1.length-1]=='\n' || arg1[arg1.length]=='\n') {
						arg1 = arg1.substring(0, arg1.length-1);
					}
					var scene = arg1.substring(arg1.length-6, arg1.length-2);
					if (!parseInt(scene, 10)) {
						scene = arg1.substring(arg1.length-5, arg1.length-1);
					}
					var option = arg1.substring(0, arg1.length-10);
					choice.scenes[index] = parseInt(scene, 10);
					choice.options[index] = option;
					bookmark += 1;
					index += 1;
				}
				choose(choice);
				return cbuffer;
			}
			if (cmd == "branch") { // whyyyy
				arg1 = arg1.substring(0, arg1.length-1);
				var next2 = sceneLines[bookmark];
				var case1 = next2.substring(next2.lastIndexOf(' ')+2, next2.indexOf(']'));
				next2 = sceneLines[bookmark + 1];
				var case2 = next2.substring(next2.lastIndexOf(' ')+2, next2.indexOf(']'));
				var variable = arg1.substring(0, arg1.indexOf(' '));
				arg1 = arg1.substring(arg1.indexOf(' ')+1);
				var operStr = arg1.substring(0, arg1.indexOf(' '));
				arg1 = arg1.substring(arg1.indexOf(' ')+1);
				var constant = parseInt(arg1, 10);
				var tf;
				var comp;
				if (vars[variable]) {
					comp = vars[variable];
				} else {
					comp = 0;
				}
				if (operStr == "=") {
					tf = (comp == constant);
				}
				if (operStr == ">") {
					tf = (comp > constant);
				}
				if (operStr == "<") {
					tf = (comp < constant);
				}
				if (tf) {
					return(advanceToScene(parseInt(case1, 10)));
				} else {
					return(advanceToScene(parseInt(case2, 10)));
				}
			}
		} else {
			lastType = false;
			var peek = sceneLines[bookmark + 1];
			if (peek.indexOf("choice") != -1) {
				cbuffer = next;
				console.log("next is a choice");
			} else {
				return next;
			}
		}
	}
}

function advanceToScene(number) {
	setBookmarkAtScene(number);
	return nextAction();
}
	