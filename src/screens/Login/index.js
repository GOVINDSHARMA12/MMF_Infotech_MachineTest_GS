import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const LoginScreen = ({onLoginButtonPress}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const baseUrl = 'https://mmfinfotech.co/machine_test/api';

  const loginUser = () => {
    console.log('TT01 LoginUSer function called');
    axios
      .post(
        `${baseUrl}/userLogin`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log('Login api res res.data.record', res.data.record);

        const userData = res.data.record;

        console.log('useDataStringify login screen', userData);

        // AsyncStorage.setItem("userData",useDataStringify)

        if (res.status == '200') {
          onLoginButtonPress(userData);
        }
      })
      .catch(err => {
        console.log('API error is', err);
      });
  };

  const validateLogin = () => {
    console.log('TT01 validateLogin function called');
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Perform actual login logic here
    // For simplicity, just log the email and password for now
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear any previous error
    setError('');

    loginUser();

    // onLoginButtonPress()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Text style={styles.forgotTextStyle}>Forgot Password?</Text>

      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={() => validateLogin()}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>

      <Text style={{color: '#fff'}}>Don’t have a Account? Sign up</Text>
      <Text style={styles.notHaveAccountTextStyle}>
        Don’t have a Account? <Text style={styles.linkTextStyle}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    alignSelf: 'flex-start',
    fontWeight: '400',
    color: '#212226',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  loginButtonContainer: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '10%',
    backgroundColor: '#007AFF',
    paddingVertical: '4%',
  },
  forgotTextStyle: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#212226',
    fontWeight: '400',
  },
  notHaveAccountTextStyle: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#212226',
    fontWeight: '400',
  },
  linkTextStyle: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#5096F1',
    fontWeight: '400',
  },
});

export default LoginScreen;
