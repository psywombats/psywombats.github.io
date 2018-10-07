'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentCell = function (_React$Component) {
  _inherits(ContentCell, _React$Component);

  function ContentCell(props) {
    _classCallCheck(this, ContentCell);

    var _this = _possibleConstructorReturn(this, (ContentCell.__proto__ || Object.getPrototypeOf(ContentCell)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(ContentCell, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: styles.headerStyle },
          this.props.content.title
        ),
        React.createElement(
          'div',
          { style: styles.itemStyle },
          this.props.content.date
        ),
        React.createElement(
          'div',
          { style: styles.bodyStyle },
          this.props.content.description
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        content.map(function (item) {
          return React.createElement(ContentCell, { content: item });
        })
      );
    }
  }]);

  return ContentTable;
}(React.Component);

var styles = {
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

var domContainer = document.querySelector('#content_table_container');
ReactDOM.render(React.createElement(ContentTable, null), domContainer);