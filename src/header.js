'use strict';

class Header extends React.Component {
    construct(props) {
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
                        <a onClick='reloadGames(link.games)'>{link.title}</a>
                    )}
            </div>
		);
	}
    
    reloadGames(games) {
        return (clickEvent) => {
            
        }
    }
}

let domContainer = document.querySelector('#header_container');
ReactDOM.render(<Header />, domContainer);
