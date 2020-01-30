import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  ActivityIndicator,
  ListRenderItemInfo,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import { getRepos } from 'api/index';

interface GithubRepoItem {
  id: string,
  repoName: string, 
  description: string, 
  numOfStars: number, 
  language: string, 
  ownerName: string
}

const App = () => {

  const [state, setState] = useState({
    loading: false,
    repoItems: [],
  });

  const [query, onChangeQuery] = useState('')

  const getResults = (getData: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    setState({ repoItems: [], loading: true});
    const result = getData.nativeEvent.text;
    const getRepoItems = getRepos(result);
    // setState({ repoItems: getRepoItems, loading: false });
  }

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  const renderHeader = () => {
    return <SearchBar 
      onSubmitEditing={getResults} 
      placeholder="Search github repositories here..."
      onChangeText={text => onChangeQuery(text)}
      value={query}
      lightTheme round />;
  };

  const renderFooter = () => {
    if (!state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const keyExtractor = (item: GithubRepoItem, index: number) => index.toString()

  const renderItem = (element: ListRenderItemInfo<GithubRepoItem>) => {
    return (
      <ListItem
        // leftAvatar={{ source: { uri: l.avatar_url } }}
        title={element.item.repoName}
        subtitle={element.item.description}
        bottomDivider
        containerStyle={{ borderBottomWidth: 0 }}
      />
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={state.repoItems}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
