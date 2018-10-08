'use strict';

class ContentCell extends React.Component {
	render() {
		let partnerBlock = "";
		let roleBlock = "";
        let imgBlock = "";
		if (this.props.content.partners) {
			partnerBlock = (
				<div className='partner'>
					<dt>In collaboration with:</dt>
					<dd>
						{this.props.content.partners.map((partner, key) => (
							<a className='partner' key={key} href={partner.link}>{partner.name}</a>
						))}
					</dd>
				</div>
			);
		}
		if (this.props.content.role) {
			roleBlock = (
				<div className='role'>
					<dt>Role:</dt>
					<dd>{this.props.content.role}</dd>
				</div>
			);
		}
        if (!this.props.content.youtube) {
            imgBlock = (
                <a href={this.props.content.link}>
                    <img src={'img/' + this.props.content.img} />
                </a>
            );
        } else {
            const src = "https://www.youtube.com/embed/"
                    + this.props.content.youtube + "?" +
                    + "origin=http://www.wombatrpgs.net";
            imgBlock = (
                <iframe 
                    id="ytplayer"
                    type="text/html"
                    width="480"
                    height="270"
                    src={src}
                    frameBorder="0">
                </iframe>
            );
        }
		return (
			<div className='gameCell'>
                <div className='infoColumn'>
					<div className='title'>
						<a href={this.props.content.link}>{this.props.content.title}</a>
					</div>
                    <dl className='gameDetail'>
                        <dt>Date:</dt>
                        <dd>{this.props.content.date}</dd>
                        <dt>Tech:</dt>
                        <dd>{this.props.content.tech}</dd>
                        {partnerBlock}
                        {roleBlock}
                    </dl>
                    <div className='description'>
                        {this.props.content.description.split('\n').map((item, key) => {
							return <span key={key}>{item}<br/></span>
						})}
                    </div>
                </div>
				<div className='imageColumn'>
					{imgBlock}
				</div>
			</div>
		);
	}
}

class ContentTable extends React.Component {
    render() {
    	const selectedKeys = ["drh", "blockbound", "drh2", "saga4"];
    	const selected = selectedKeys.map(key => (content[key]));
        return (
        	<div className='contentTable'>
            	{selected.map((item, key) => <ContentCell content={item} key={key}/>)}
            </div>
         );
    }
}

let domContainer = document.querySelector('#content_table_container');
ReactDOM.render(<ContentTable />, domContainer);
