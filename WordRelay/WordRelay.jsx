const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        text: '오늘도 화이팅',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;