class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.89,
      usd: 1,
      twd: 1 * 0.036
    }

    this.handleUsdChange = this.handleUsdChange.bind(this);
    this.handleTwdChange = this.handleTwdChange.bind(this);

  }

  toUsd(twdAmount, rate) {
    return twdAmount * (1/rate);
  }
  
  toTwd(usdAmount, rate) {
    return usdAmount * rate;
  }

  checkIfNan(input){
    if(Number.isNaN(input)) {
      this.setState({
        usd:'',
        twd:''
      });
      return true;
    }
  }
  
  handleUsdChange(event){
    const input = parseFloat(event.target.value);
    if(!this.checkIfNan(input)){
      const twdDollar = this.toTwd(input, this.state.rate).toFixed(3);
      this.setState({
        usd: input,
        twd: twdDollar
      });
    }
  }

  handleTwdChange(event){
    const input = parseFloat(event.target.value);
    if(!this.checkIfNan(input)){
      const usdDollar = this.toUsd(input, this.state.rate).toFixed(3);
      this.setState({
        usd: usdDollar,
        twd: input
      });
    }
  }

  render() {
    return (
      <div className = "container">
        <div className = "text-center">
          <h2 className = "my-4"> Currency Converter</h2>
          <h4 className = "mb-3"> USD 1 : {this.state.rate} TWD </h4>
        </div>
        <div className = "row text-center">
          <div className = "col-12">
            <span className = "mr-1"> USD </span>
            <input value = {this.state.usd} onChange = {this.handleUsdChange} /> 
            <span className = "ml-3"> TWD </span>
            <input value = {this.state.twd} onChange = {this.handleTwdChange} />
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render (
  <CurrencyConverter/>,
  document.getElementById('root')
);