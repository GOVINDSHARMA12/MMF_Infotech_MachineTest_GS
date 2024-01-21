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
import axios from 'axios';
import UserDataGridFormat from '../../components/UserDataGridFormat';
import UserDataListFormat from '../../components/UserDataListFormat';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userListData, setUserListData] = useState([]);
  const [userData, setUserData] = useState();
  const [toggleUserList, setToggleUserList] = useState(false);

  const baseUrl = 'https://mmfinfotech.co/machine_test/api';

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzU2ZGU5ZGE1Y2EzZjJkMzgzNjY2ZThhNTc3ZGNhODQ0NWNkNjViOGM1NGEyZjBlMzRmNTgwOWJlMDcwMzFjNjdkZDkxZTIwYWZkNzQ3ZGYiLCJpYXQiOjE2Nzc2NTUzMjMuOTQwOTgxLCJuYmYiOjE2Nzc2NTUzMjMuOTQwOTkyLCJleHAiOjE3MDkyNzc3MjMuOTE0MTgzLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.Bz0XBpgtcldCG0ID2sZb0hHMw1Jf-V4-MTvzDVIW9Q8TWx4F6w-qNool3TMNt016aeQAL2KNBPLCOrueppUDnF0SyRqV_DLoZKHsY3p6IN-iOF7LlIPNQR3AI_uE0CPY6IJSzqnaUdTJmaFM9qhemlRXd1i5aRJtK98mIw3LDsFJHEV60-CVcQyHbIeUeloK8szqP1CcB34dxZtSqfJFaxV_6RtqeaaJ-s5GA6IvfpyjUX45yTXX4dPMUXei8CyPb0o6_IZmF1v1ELi2Xk8Fl49AoLoI6pf-Nnuws645vHnR5DnEi87oUYzZncWp8fvkz3xQi0H4HEBM7dGy5UfS0o_1QSuslEvLBm6qPyRnK6K4CNnTZJU9ZdiJiN7WW504NnbBkQVFKPweH2MQ7YYxN6d-PED72l59e4Gzp4XN72dy3nsJgbvtR9YagiN5lKn4klh49TGQFc7s9Ax0ZFxEA9KiDlWSj-ePWfwMkIjN1Ty5BsjpZCv2tNQ8AH5sskErYU8A53jLOb5M80LHex-qokQXDkvdbIvNJCno0pykFijMHhddRXVyNX9cUbiPDqMz9B9Ef_n8PlDo_YMAz-jRQziGvD_gTwDKL7pXPROnBLmnnaXjM5vl8YAbZYWmft6Smewt6_Mo2rQX10O6vloNwtggBz3cWF61cSEYuvXflug';

  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };

  useEffect(() => {
    console.log('TT01 home screen useeffect called');

    axios
      .get(`${baseUrl}/userList`, config)
      .then(res => {
        console.log('userList api res', res.data.userList);

        setUserListData(res.data.userList);
      })
      .catch(err => console.log('userList api err', err));
  }, []);

  console.log('TT01 userData is', userData);

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

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.userTextStyle}>{item.first_name}</Text>
      <Text style={styles.userTextStyle}>{item.last_name}</Text>
      <Text numberOfLines={1} style={styles.userTextStyle}>
        {item.email}
      </Text>
      <Text style={styles.userTextStyle}>{item.phone_no}</Text>

      <View style={styles.gridViewButtonContainer}>
        <Text style={{color: '#007AFF'}}>View Profile</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.baseContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/Images/profile.png')}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.userNameStyle}>Kathryn R. Russell</Text>
          <Text style={styles.userEmailStyle}>name@gmail.com</Text>
        </View>
      </View>

      <View style={styles.toggleButtonContainer}>
        <Text style={styles.userNameStyle}>User list</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setToggleUserList(!toggleUserList)}>
            <Image
              style={styles.iconImageStyle}
              source={require('../../../assets/Images/list_icon.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setToggleUserList(!toggleUserList)}>
            <Image
              style={styles.iconImageStyle}
              source={require('../../../assets/Images/grid_icon.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      {toggleUserList ? 
        <UserDataListFormat data={userListData} />
       : 
        <UserDataGridFormat data={userListData} />
      }
    </View>
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

export default HomeScreen;
