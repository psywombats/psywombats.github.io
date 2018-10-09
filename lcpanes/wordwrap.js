// courtesy of James Padolsey

function wordwrap( str, width, brk, cut ) {
 
    brk = brk || '\n';
    width = width || 75;
    cut = cut || false;
 
    if (!str) { return str; }
 
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
	
	var temp = str.match( RegExp(regex, 'g') );
	if (!temp) return str;
 
    return temp.join( brk );
 
}