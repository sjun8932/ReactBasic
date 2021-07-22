const React = require('react');
const {Component} = React;

class GuGuDan extends Component {
                
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    };

onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
        this.setState({
            result: `정답은 ${this.state.value}`,
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
        });
    } else {
        this.setState({
            result: '땡',
            value: '',
        });
    }
};

onChange = (e) => {
    this.setState({ value: e.target.value });
};

render() {
    return (
        <React.Fragment>
            <div>{this.state.first} 곱하기 {this.state.second}는?</div>
            <form onSubmit={this.onSubmit}>
                <input type="number" value={this.state.value} onChange={this.onChange} />
                <button>입력!</button>
            </form>
            <div>{this.state.result}</div>
        </React.Fragment>
    );
}
}

module.exports = GuGuDan;