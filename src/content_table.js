'use strict';

class ContentCell extends React.Component {
	render() {
		let partnerBlock = "";
		let roleBlock = "";
        let imgBlock = "";
		if (this.props.content.partners) {
			partnerBlock = (
				<div class='partner'>
					<dt>In collaboration with:</dt>
					<dd>
						{this.props.content.partners.map(partner => (
							<a class='partner' href={partner.link}>{partner.name}</a>
						))}
					</dd>
				</div>
			);
		}
		if (this.props.content.role) {
			roleBlock = (
				<div class='role'>
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
                    + this.props.content.youtube 
                    + "&origin=http://www.wombatrpgs.net";
            imgBlock = (
                <iframe 
                    class="ytplayer"
                    type="text/html"
                    width="480"
                    height="270"
                    src={src}
                    frameborder="0">
                </iframe>
            );
        }
		return (
			<div class='gameCell'>
                <div class='infoColumn'>
					<div class='title'>
						<a href={this.props.content.link}>{this.props.content.title}</a>
					</div>
                    <dl class='gameDetail'>
                        <dt>Date:</dt>
                        <dd>{this.props.content.date}</dd>
                        <dt>Tech:</dt>
                        <dd>{this.props.content.tech}</dd>
                        {partnerBlock}
                        {roleBlock}
                    </dl>
                    <div class='description'>
                        {this.props.content.description}
                    </div>
                </div>
				<div class='imageColumn'>
					{imgBlock}
				</div>
			</div>
		);
	}
}

class ContentTable extends React.Component {
    render() {
    	const selectedKeys = ["drh", "blockbound", "drh2"];
    	const selected = selectedKeys.map(key => (content[key]));
        return (
        	<div class='contentTable'>
            	{selected.map(item => <ContentCell content={item} />)}
            </div>
         );
    }
}

let domContainer = document.querySelector('#content_table_container');
ReactDOM.render(<ContentTable />, domContainer);
