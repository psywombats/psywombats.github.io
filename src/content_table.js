'use strict';

class ContentCell extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}

		return (
			<button onClick={() => this.setState({ liked: true }) }>
				Like
			</button>
		);
	}
}

class ContentTable extends React.Component {
    render() {
        return (
        	<div>
            	<ContentCell />
            	<ContentCell />
            	<ContentCell />
            </div>
         );
    }
}

let domContainer = document.querySelector('#content_table_container');
ReactDOM.render(<ContentTable />, domContainer);
