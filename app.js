var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyConverter = function (_React$Component) {
  _inherits(CurrencyConverter, _React$Component);

  function CurrencyConverter(props) {
    _classCallCheck(this, CurrencyConverter);

    var _this = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

    _this.state = {
      rate: 0.89,
      usd: 1,
      twd: 1 * 0.036
    };

    _this.handleUsdChange = _this.handleUsdChange.bind(_this);
    _this.handleTwdChange = _this.handleTwdChange.bind(_this);

    return _this;
  }

  _createClass(CurrencyConverter, [{
    key: 'toUsd',
    value: function toUsd(twdAmount, rate) {
      return twdAmount * (1 / rate);
    }
  }, {
    key: 'toTwd',
    value: function toTwd(usdAmount, rate) {
      return usdAmount * rate;
    }
  }, {
    key: 'checkIfNan',
    value: function checkIfNan(input) {
      if (Number.isNaN(input)) {
        this.setState({
          usd: '',
          twd: ''
        });
        return true;
      }
    }
  }, {
    key: 'handleUsdChange',
    value: function handleUsdChange(event) {
      var input = parseFloat(event.target.value);
      if (!this.checkIfNan(input)) {
        var twdDollar = this.toTwd(input, this.state.rate).toFixed(3);
        this.setState({
          usd: input,
          twd: twdDollar
        });
      }
    }
  }, {
    key: 'handleTwdChange',
    value: function handleTwdChange(event) {
      var input = parseFloat(event.target.value);
      if (!this.checkIfNan(input)) {
        var usdDollar = this.toUsd(input, this.state.rate).toFixed(3);
        this.setState({
          usd: usdDollar,
          twd: input
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement(
            'h2',
            { className: 'my-4' },
            ' Currency Converter'
          ),
          React.createElement(
            'h4',
            { className: 'mb-3' },
            ' USD 1 : ',
            this.state.rate,
            ' TWD '
          )
        ),
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'span',
              { className: 'mr-1' },
              ' USD '
            ),
            React.createElement('input', { value: this.state.usd, onChange: this.handleUsdChange }),
            React.createElement(
              'span',
              { className: 'ml-3' },
              ' TWD '
            ),
            React.createElement('input', { value: this.state.twd, onChange: this.handleTwdChange })
          )
        )
      );
    }
  }]);

  return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root'));