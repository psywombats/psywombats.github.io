'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentCell = function (_React$Component) {
    _inherits(ContentCell, _React$Component);

    function ContentCell() {
        _classCallCheck(this, ContentCell);

        return _possibleConstructorReturn(this, (ContentCell.__proto__ || Object.getPrototypeOf(ContentCell)).apply(this, arguments));
    }

    _createClass(ContentCell, [{
        key: "render",
        value: function render() {
            var partnerBlock = "";
            var roleBlock = "";
            var imgBlock = "";
            if (this.props.content.partners) {
                partnerBlock = React.createElement(
                    "div",
                    { className: "partner" },
                    React.createElement(
                        "dt",
                        null,
                        "In collaboration with:"
                    ),
                    React.createElement(
                        "dd",
                        null,
                        this.props.content.partners.map(function (partner, key) {
                            return React.createElement(
                                "span",
                                { className: "partner", key: key },
                                React.createElement(
                                    "a",
                                    { href: partner.link },
                                    partner.name
                                )
                            );
                        })
                    )
                );
            }
            if (this.props.content.role) {
                roleBlock = React.createElement(
                    "div",
                    { className: "role" },
                    React.createElement(
                        "dt",
                        null,
                        "Role:"
                    ),
                    React.createElement(
                        "dd",
                        null,
                        this.props.content.role
                    )
                );
            }
            if (!this.props.content.youtube) {
                imgBlock = React.createElement(
                    "a",
                    { href: this.props.content.link },
                    React.createElement("img", { src: 'img/' + this.props.content.img })
                );
            } else {
                var src = "https://www.youtube.com/embed/" + this.props.content.youtube + "?" + +"origin=http://www.wombatrpgs.net";
                imgBlock = React.createElement("iframe", {
                    id: "ytplayer",
                    type: "text/html",
                    width: "480",
                    height: "270",
                    src: src,
                    frameBorder: "0" });
            }
            return React.createElement(
                "div",
                { className: "gameCell" },
                React.createElement(
                    "div",
                    { className: "infoColumn" },
                    React.createElement(
                        "div",
                        { className: "title" },
                        React.createElement(
                            "a",
                            { href: this.props.content.link },
                            this.props.content.title
                        )
                    ),
                    React.createElement(
                        "dl",
                        { className: "gameDetail" },
                        React.createElement(
                            "dt",
                            null,
                            "Date:"
                        ),
                        React.createElement(
                            "dd",
                            null,
                            this.props.content.date
                        ),
                        React.createElement(
                            "dt",
                            null,
                            "Tech:"
                        ),
                        React.createElement(
                            "dd",
                            null,
                            this.props.content.tech
                        ),
                        partnerBlock,
                        roleBlock
                    ),
                    React.createElement(
                        "div",
                        { className: "description" },
                        this.props.content.description.split('\n').map(function (item, key) {
                            return React.createElement(
                                "span",
                                { key: key },
                                item,
                                React.createElement("br", null)
                            );
                        })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "imageColumn" },
                    imgBlock
                )
            );
        }
    }]);

    return ContentCell;
}(React.Component);

var ContentTable = function (_React$Component2) {
    _inherits(ContentTable, _React$Component2);

    function ContentTable(props) {
        _classCallCheck(this, ContentTable);

        var _this2 = _possibleConstructorReturn(this, (ContentTable.__proto__ || Object.getPrototypeOf(ContentTable)).call(this, props));

        _this2.state = { gameSet: pageContent.links[0].games };
        return _this2;
    }

    _createClass(ContentTable, [{
        key: "render",
        value: function render() {
            var selected = this.state.gameSet.map(function (key) {
                return content[key];
            });
            return React.createElement(
                "div",
                { className: "contentTable" },
                selected.map(function (item, key) {
                    return React.createElement(ContentCell, { content: item, key: key });
                })
            );
        }
    }, {
        key: "setGameSet",
        value: function setGameSet(gameSet) {
            this.setState({ gameSet: gameSet });
        }
    }]);

    return ContentTable;
}(React.Component);

'use strict';

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this3 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this3.state = { pageContent: pageContent };
        _this3.reloadGames = _this3.reloadGames.bind(_this3);
        return _this3;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            var divStyle = {
                backgroundImage: 'url(http://www.wombatrpgs.net/img/' + this.state.pageContent.image + ')'
            };
            return React.createElement(
                "div",
                { className: "header" },
                React.createElement(
                    "div",
                    { className: "title", style: divStyle },
                    React.createElement(
                        "h1",
                        null,
                        this.state.pageContent.title
                    )
                ),
                React.createElement(
                    "div",
                    { className: "subtitle" },
                    this.state.pageContent.subtitle
                ),
                React.createElement(
                    "ul",
                    { className: "navbar" },
                    this.state.pageContent.links.map(function (link, key) {
                        return React.createElement(
                            "li",
                            { key: key },
                            React.createElement(
                                "a",
                                { onClick: _this4.reloadGames(link.games), href: "#" },
                                ">" + link.title
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: "reloadGames",
        value: function reloadGames(games) {
            var _this5 = this;

            return function (clickEvent) {
                _this5.props.contentTable.setGameState(games);
            };
        }
    }]);

    return Header;
}(React.Component);

var Portfolio = function (_React$Component4) {
    _inherits(Portfolio, _React$Component4);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        var _this6 = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

        _this6.contentTable = React.createElement(ContentTable, null);
        _this6.header = React.createElement(Header, { contentTable: _this6.contentTable });
        return _this6;
    }

    _createClass(Portfolio, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "body" },
                this.header,
                this.contentTable
            );
        }
    }]);

    return Portfolio;
}(React.Component);

var domContainer = document.querySelector('#portfolio_container');
ReactDOM.render(React.createElement(Portfolio, null), domContainer);