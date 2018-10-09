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
							<span className='partnerEntry' key={key}>
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
                    <img src={'http://www.wombatrpgs.net/img/' + this.props.content.img} />
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

class Navbar extends React.Component {
    constructor(props) {
		super(props);
		this.switchTab = this.switchTab.bind(this);
        this.elementForKey = this.elementForKey.bind(this);
	}

    render() {
        return (<ul className='navbar'>
            {this.props.header.links.map((link, key) => (
                this.elementForLink(link, key);
            ))}
        </ul>);
    }
    
    switchTab(tab) {
		return () => {
			this.props.reloader(tab);
		}
	}
    
    elementForLink(link, key) {
        if (link.link) {
            return (<li key={key}>
                <a href={link.link}>
                    {">"+link.title}
                </a>
            </li>);
        } else {
            return (<li key={key}>
                <a onClick={this.switchTab(link)} href='#'>
                    {">"+link.title}
                </a>
            </li>);
        }
    }
}

class Header extends React.Component {
	render() {
        const divStyle = {
            backgroundImage: 'url(http://www.wombatrpgs.net/img/' + this.props.header.image +  + ') no-repeat left top',
        };
		return (
			<div className='header'>
                <div className='title' style={divStyle}>
                    <h1>{this.props.header.title}</h1>
                </div>
                <div className='subtitle'>
                    {this.props.header.subtitle}
                </div>
                <Navbar
                    header={this.props.header}
                    reloader={this.props.reloader}
                />
            </div>
		);
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
            	header={this.state.pageContent}
            />
            <ContentTable 
            	selectedTab={this.state.selectedTab}
            />
            <Navbar
                selectedTab={this.state.selectedTab}
            	reloader={this.changeTab}
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
