'use strict';

class ContentCell extends React.Component {
	render() {
		return (
			<div>
				<div style={styles.headerStyle}>
					{this.props.content.title}
				</div>
				<div style={styles.itemStyle}>{this.props.content.date}</div>
				<div style={styles.bodyStyle}>{this.props.content.description}</div>
			</div>
		);
	}
}

class ContentTable extends React.Component {
    render() {
    	var selectedContent = [ content["pri"], content["prod"] ];
        return (
        	<div>
            	{selectedContent.map(item => <ContentCell content={item} />)}
            </div>
         );
    }
}

const styles = {
    headerStyle: {
    	fontSize: '18px'
    },
    itemStyle: {
    	fontSize: '12px'
    },
    bodyStyle: {
    	fontSize: '8px'
    }
};

let domContainer = document.querySelector('#content_table_container');
ReactDOM.render(<ContentTable />, domContainer);
