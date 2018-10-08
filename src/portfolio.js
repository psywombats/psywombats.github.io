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
    constructor(props) {
        super(props);
        this.state.gameSet = pageContent.links[0].games;
    }

    render() {
    	const selected = this.state.gameSet.map(key => (content[key]));
        return (
        	<div className='contentTable'>
            	{selected.map((item, key) => <ContentCell content={item} key={key}/>)}
            </div>
         );
    }
}

'use strict';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state.pageContent = pageContent;
        this.reloadGames = this.reloadGames.bind(this);
    }

	render() {
        const divStyle = {
            backgroundImage: 'url(' + this.state.pageContent.header.image + ')',
        };
		return (
			<div className='header'>
                <div className='title' style={divStyle}>
                    <h1>{this.state.pageContent.header.title}</h1>
                </div>
                <div className='subtitle'>
                    {this.state.pageContent.header.subtitle}
                </div>
                <ul className='navbar'>
                    {this.state.pageContent.header.links.map((link, key) => (
                        <li>
                            <a onClick={reloadGames(link.games)}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
		);
	}
    
    reloadGames(games) {
        return (clickEvent) => {
            this.props.contentTable.state.gameSet = games;
        }
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.contentTable = (<ContentTable />);
        this.header = (<ContentTable contentTable={this.contentTable}/>);
    }

    render() {
        return (<div className='body'>
            {this.header}
            {this.contentTable}
        </div>);
    }
}

let domContainer = document.querySelector('#portfolio_container');
ReactDOM.render(<Portfolio />, domContainer);