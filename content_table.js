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
          { "class": "partner" },
          React.createElement(
            "dt",
            null,
            "In collaboration with:"
          ),
          React.createElement(
            "dd",
            null,
            this.props.content.partners.map(function (partner) {
              return React.createElement(
                "a",
                { "class": "partner", href: partner.link },
                partner.name
              );
            })
          )
        );
      }
      if (this.props.content.role) {
        roleBlock = React.createElement(
          "div",
          { "class": "role" },
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
        var src = "https://www.youtube.com/embed/" + this.props.content.youtube + "&origin=http://www.wombatrpgs.net";
        imgBlock = React.createElement("iframe", {
          "class": "ytplayer",
          type: "text/html",
          width: "480",
          height: "270",
          src: src,
          frameborder: "0" });
      }
      return React.createElement(
        "div",
        { "class": "gameCell" },
        React.createElement(
          "div",
          { "class": "infoColumn" },
          React.createElement(
            "div",
            { "class": "title" },
            React.createElement(
              "a",
              { href: this.props.content.link },
              this.props.content.title
            )
          ),
          React.createElement(
            "dl",
            { "class": "gameDetail" },
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
            { "class": "description" },
            this.props.content.description
          )
        ),
        React.createElement(
          "div",
          { "class": "imageColumn" },
          imgBlock
        )
      );
    }
  }]);

  return ContentCell;
}(React.Component);

var ContentTable = function (_React$Component2) {
  _inherits(ContentTable, _React$Component2);

  function ContentTable() {
    _classCallCheck(this, ContentTable);

    return _possibleConstructorReturn(this, (ContentTable.__proto__ || Object.getPrototypeOf(ContentTable)).apply(this, arguments));
  }

  _createClass(ContentTable, [{
    key: "render",
    value: function render() {
      var selectedKeys = ["drh", "blockbound", "drh2"];
      var selected = selectedKeys.map(function (key) {
        return content[key];
      });
      return React.createElement(
        "div",
        { "class": "contentTable" },
        selected.map(function (item) {
          return React.createElement(ContentCell, { content: item });
        })
      );
    }
  }]);

  return ContentTable;
}(React.Component);

var domContainer = document.querySelector('#content_table_container');
ReactDOM.render(React.createElement(ContentTable, null), domContainer);