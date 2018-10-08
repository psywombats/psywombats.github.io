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
							<span className='partner' key={key}>
								<a href={partner.link}>{partner.name}</a>
							</span>
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
    	const selected = this.props.selectedTab.games.map(key => (content[key]));
        return (
        	<div className='contentTable'>
            	{selected.map((item, key) => <ContentCell content={item} key={key}/>)}
            </div>
         );
    }
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.switchTab = this.switchTab.bind(this);
	}

	render() {
        const divStyle = {
            backgroundImage: 'url(http://www.wombatrpgs.net/img/' + this.props.headerImage + ')',
        };
		return (
			<div className='header'>
                <div className='title' style={divStyle}>
                    <h1>{this.props.pageContent.title}</h1>
                </div>
                <div className='subtitle'>
                    {this.props.pageContent.subtitle}
                </div>
                <ul className='navbar'>
                    {this.props.pageContent.links.map((link, key) => (
                        <li key={key}>
                            <a onClick={this.switchTab(link)} href='#'>
                            	{">"+link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
		);
	}
	
	switchTab(tab) {
		return () => {
			this.props.reloader(tab);
		}
	}
}

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.changeTab = this.changeTab.bind(this);
		this.state = {
			pageContent: pageContent,
			selectedTab: pageContent.links[0]
		};
	}

    render() {
        return (<div className='body'>
            <Header
            	selectedTab={this.state.selectedTab}
            	reloader={this.changeTab}
            />
            <ContentTable 
            	selectedTab={this.state.selectedTab}
            	headerImage={this.state.pageContent.header.image}
            />
        </div>);
    }
    
	changeTab(tab) {
        this.setState({
        	pageContent: this.state.pageContent,
        	selectedTab: tab
        });
    }
}

let domContainer = document.querySelector('#portfolio_container');
ReactDOM.render(<Portfolio />, domContainer);
