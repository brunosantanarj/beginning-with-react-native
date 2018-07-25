/**
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert,
	FlatList,
} from 'react-native';

type Props = {};

export default class App extends Component <Props> {
	constructor() {
		super();
		this.state = {
			pic: {
				uri: 'https://www.jasminealimentos.com/wp-content/uploads/2017/09/tipos-de-frutas-1-860x485.jpg',
			},
			isShowText: false,
			text: '',
		}
	}
	render = () => (
		<View>
			<Text>{ this.state.isShowText && 'Showing text with state' }</Text>
			<Image source={this.state.pic} style = {{ width: '100%', height: 110 }} />
			<TextInput
				style={{height: 40}}
          		placeholder="Type here to translate!"
				onChangeText={(text) => this.setState({ text })}
			/>
			<Text style={{padding: 10, fontSize: 42}}>
				{ this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
			</Text>
			<Button
				onPress={() => Alert.alert('Santana')}
				title="Press Me"
			/>
			<FlatList
				data={[
					{ key: 'Bruno' },
					{ key: 'sdfsdf' },
					{ key: 'James' },
					{ key: 'Joel' },
					{ key: 'John' },
					{ key: 'Jillian' },
					{ key: 'Jimmy' },
					{ key: 'Julie' },
				]}
				renderItem={({item}) => <Text>{item.key}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
