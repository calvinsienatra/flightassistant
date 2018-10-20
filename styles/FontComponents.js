import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './MasterStyle';
import fontStyles from './FontStyles';

class Roboto extends Component {
	render(){
		return <Text style={[fontStyles.roboto, this.props.style]}>{this.props.output}</Text>
	}
}

export class Header1 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header1, this.props.style]} />
			);
	}
}

export class Header2 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header2, this.props.style]} />
			);
	}
}

export class Header3 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header3, this.props.style]} />
			);
	}
}

export class Header4 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header4, this.props.style]} />
			);
	}
}

export class Header5 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header5, this.props.style]} />
			);
	}
}

export class Header6 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.header6, this.props.style]} />
			);
	}
}

export class Subtitle1 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.subtitle1, this.props.style]} />
			);
	}
}

export class Subtitle2 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.subtitle2, this.props.style]} />
			);
	}
}

export class Body1 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.body1, this.props.style]} />
			);
	}
}

export class Body2 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.body2, this.props.style]} />
			);
	}
}

export class Button1 extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.button, this.props.style]} />
			);
	}
}

export class Caption extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.caption, this.props.style]} />
			);
	}
}

export class Overline extends Component {
	render(){
		return (
			<Roboto output={this.props.output} style={[fontStyles.overline, this.props.style]} />
			);
	}
}