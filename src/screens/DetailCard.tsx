import React from 'react';
import { View, Text, Linking } from 'react-native'
import { Card} from 'react-native-elements'
import { IGithubRepoItem } from './Home';
import { NavigationStackProp } from 'react-navigation-stack';

const DetailCard = (props: {navigation: NavigationStackProp<{item: IGithubRepoItem}>}) => {
	const repo = props.navigation.getParam('item');
	return (
		<Card titleStyle={{fontSize: 24}} title={repo.name} image={{uri: repo.owner.avatar_url}}>
			<>
				{ repo.description ? ( 
					<>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Description: </Text>
						<Text style={{fontSize: 16}}>{repo.description}</Text>
					</>
				) : null }
				{ repo.stargazers_count ? ( 
					<>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Stars: </Text>
						<Text style={{fontSize: 16}}>{repo.stargazers_count}</Text>
					</>
				) : null }
				{ repo.language ? ( 
					<>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Language: </Text>
						<Text style={{fontSize: 16}}>{repo.language}</Text>
					</>
				) : null }
				{ repo.owner.login ? ( 
					<>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Owner: </Text>
						<Text style={{fontSize: 16}}>{repo.owner.login}</Text>
					</>
				) : null }
				<Text style={{fontSize: 18, fontWeight: 'bold'}}>Link To Repo: </Text>
				<Text style={{color: 'blue', fontSize: 16}}
					onPress={() => Linking.openURL(repo.html_url)}>
					{repo.html_url}
				</Text>
			</>
		</Card>
	)
}

export default DetailCard;