import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const UserDataListFormat = ({data}) => {
  console.log('TT01 userDataListFormat data', data);

  const renderUserDataInListFormat = ({item}) => (
    <View style={styles.itemListContainer}>
      <View style={styles.textBaseContainer}>
        <View style={styles.listViewTextContainer}>
          <Text style={styles.userTextStyle}>{item.first_name}</Text>
          <View style={styles.marginContainer} />
          <Text style={styles.userTextStyle}>{item.last_name}</Text>
        </View>

        <View style={styles.listViewTextContainer}>
          <Text numberOfLines={1} style={styles.userTextStyle}>
            {item.email}
          </Text>
          <View style={styles.marginContainer} />
          <Text style={styles.userTextStyle}>{item.phone_no}</Text>
        </View>
      </View>

      <View style={styles.listViewButtonContainer}>
        <Text style={{color: '#007AFF'}}>View Profile</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderUserDataInListFormat}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 2,
  },
  userTextStyle: {
    fontSize: 12,
    color: '#212226',
    fontWeight: '400',
  },
  baseContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    marginLeft: '8%',
    marginTop: '10%',
  },
  image: {
    width: 50,
    height: 50,
  },
  userNameStyle: {
    fontSize: 17,
    color: '#212226',
    fontWeight: '500',
  },
  userEmailStyle: {
    fontSize: 13,
    color: '#949BA5',
    fontWeight: '400',
  },
  textContainer: {
    marginLeft: '5%',
  },
  toggleButtonContainer: {
    marginTop: '5%',
    paddingLeft: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  iconContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    border: 5,
    borderColor: '#DCDEDF',
    justifyContent: 'space-between',
    padding: '2%',
    width: '20%',
  },
  iconImageStyle: {
    width: 20,
    height: 20,
  },
  itemListContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginContainer: {
    marginLeft: '2%',
  },
  listViewTextContainer: {
    flexDirection: 'row',
  },
  textBaseContainer: {
    width: '45%',
  },
  listViewButtonContainer: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridViewButtonContainer: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});

export default UserDataListFormat;
