import React from 'react';
import { View, Text } from 'react-native'
import { Card} from 'react-native-elements'
import { IGithubRepoItem } from './Home';
import { NavigationStackProp } from 'react-navigation-stack';

const DetailCard = (props: {navigation: NavigationStackProp<{item: IGithubRepoItem}>}) => {
	const repo = props.navigation.getParam('item');
	return (
		<Card titleStyle={{fontSize: 24}} title={repo.name} image={{uri: repo.owner.avatar_url}}>
			<View>
				{ repo.description ? ( 
					<View>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Description: </Text>
						<Text style={{fontSize: 16}}>{repo.description}</Text>
					</View>
				) : null }
				{ repo.stargazers_count ? ( 
					<View>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Stars: </Text>
						<Text style={{fontSize: 16}}>{repo.stargazers_count}</Text>
					</View>
				) : null }
				{ repo.language ? ( 
					<View>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Language: </Text>
						<Text style={{fontSize: 16}}>{repo.language}</Text>
					</View>
				) : null }
				{ repo.owner.login ? ( 
					<View>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Owner: </Text>
						<Text style={{fontSize: 16}}>{repo.owner.login}</Text>
					</View>
				) : null }
			</View>
		</Card>
	)
}

export default DetailCard;