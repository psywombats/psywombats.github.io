'use strict';

class Header extends React.Component {
	render() {
		return (
			"<b>lol it's the header</b>"
		);
	}
}

let domContainer = document.querySelector('#header_container');
ReactDOM.render(<LikeButton />, domContainer);
