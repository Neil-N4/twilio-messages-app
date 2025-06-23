import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    console.log('Sending sign in request:', { username, password });
    try {
      const response = await fetch("http://69.58.113.122:15678/webhook/68b9c07a-73fd-4561-8eb5-c5f7e89c71da", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      console.log('Webhook response:', result);
      if (response.status === 200 && result.success) {
        navigation.navigate('Chats');
      } else {
        Alert.alert("Sign In Failed", result.error || "Invalid username or password.");
      }
    } catch (e) {
      console.log('Network error:', e);
      Alert.alert("Network Error", "Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f8f9fa' }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Top right Next button */}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Chats')}
      >
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://applicationbank.com/timeboss/assets/img/logos/logoo.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Sign In to Messaging</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
          />
        </View>
        <View style={[styles.inputGroup, { marginBottom: 24 }]}> 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.label}>Password</Text>
          </View>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Pressable
              style={styles.passwordToggle}
              onPress={() => setShowPassword(v => !v)}
              accessibilityLabel={showPassword ? "Hide password" : "Show password"}
            >
              <Text style={{ fontSize: 20, color: '#888' }}>{showPassword ? '👁️' : '🙈'}</Text>
            </Pressable>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={handleSignIn}
          disabled={loading}
        >
          <Text style={styles.signInBtnText}>{loading ? "Signing In..." : "Sign In"}</Text>
        </TouchableOpacity>
        <View style={styles.signupBox}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  nextBtn: {
    position: 'absolute',
    top: 48,
    right: 24,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 8,
  },
  nextBtnText: {
    color: '#219aff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    marginTop: '10%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logo: {
    width: 180,
    height: 60,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#222',
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
    color: '#222',
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 14,
    height: 44,
    color: '#333',
    fontSize: 16,
  },
  passwordToggle: {
    position: 'absolute',
    right: 12,
    top: 12,
    height: 24,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    backgroundColor: '#219aff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    opacity: 0.7,
  },
  signInBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupBox: {
    marginTop: 18,
    alignItems: 'center',
  },
  signupText: {
    color: '#888',
    fontSize: 14,
  },
  signupLink: {
    color: '#219aff',
    fontWeight: 'bold',
  },
});
