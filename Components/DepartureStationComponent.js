import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';


class DepartureStationComponent extends Component {
	static renderAirport(airport){
		const {name, city, iata} = airport;
		return(
			<View>
				<Text>
				{iata} {name} {city}
				</Text>
			</View>
		);
	}

	constructor(props){
		super(props);
		this.state = {
			airports: [],
			query: ''
		};
	}

	componentDidMount(){
		{/*Making JSON file */}	
		
	}

	findAirport(query){
		if (query === ''){
			return[];
		}

		const{ airports } = this.state;
		const regex = new RegExp('${query.trim()}', 'i');
		return airports.filter(airport => airport.city.search(regex) >= 0);
	}

	render(){
		const {query} = this.state;
		const airports = this.findAirport(query);
		const comp = (a,b) => a.toLowerCase().trim() === b.toLowerCase().trim();
		return (
	      <View style={styles.maincontainer}>
	      	{/* UPPER CONTAINER --> MODIFY*/} 
	        <View style={{flex: 1,flexDirection: "row"}}>
	          <View style={{flex: 3, justifyContent: "center", padding: 20}}>
	            <Header3 output='Where are you flying from?' style={{textAlign: "center"}}/>
	          	<Autocomplete
		          	autoCapitalize="none"
		          	autoCorrect={false}
		          	containerStyle={styles.autocompleteContainer}
		          	data={airports.length === 1 && comp(query, airports[0].city) ? [] : airports}
		          	defaultValue={query}
		          	onChangeText={text => this.setState({query: text})}
		          	placeholder="Enter city name"
		          	renderItem={({iata, name, city}) => (
		          		<TouchableOpacity onPress={() => this.setState({query: city})}>
		          			<Text>
								{iata} {name} {city}
							</Text>
		          		</TouchableOpacity>
		          	)}
		          />
	          </View>
	        </View>
	        
	        {/* BOTTOM CONTAINER --> DO NOT MODIFY*/} 
	        <View style={styles.bottomcontainer}>
	          <Body1 output="Press to continue" style={{marginBottom: 10}}/>
	          <Icon 
	              raised
	              name='arrow-right'
	              type= 'material-community'
	              color= 'blue'
	              size = {40}
	              style= {{justifyContent: 'space-evenly', alignItems: 'center'}}
	              onPress={() =>
	              navigate('SecondSlide')
	              }
	          />
	        </View>
	      </View>
	    );
	}
}

export default DepartureStationComponent;


