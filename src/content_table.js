'use strict';

import ContentCell from 'content_cell.js';

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
ReactDOM.render(<LikeButton />, domContainer);
