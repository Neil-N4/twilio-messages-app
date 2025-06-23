import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Add this import at the top if using Expo

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isStrongPassword = (pwd: string) =>
    pwd.length >= 8 && /[A-Za-z]/.test(pwd) && /\d/.test(pwd);

  const handleSignUp = async () => {
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!isStrongPassword(password)) {
      setError("Password must be at least 8 characters including both letters and numbers.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://69.58.113.122:15678/webhook/35d763f4-e3e0-4703-bcc8-5dd093e8d72d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: fullName, // changed from fullName to fullname
          phone: "+1" + phone.replace(/^\+?1?/, ""),
          username,
          password,
          confirm,
        }),
      });
      const result = await response.json();
      if (response.status === 200 && result.success) {
        alert("Account created successfully!");
      } else {
        setError(result.error || "Account creation failed.");
      }
    } catch (e: any) {
      setError(e?.message ? String(e.message) : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image
        source={{ uri: "https://applicationbank.com/timeboss/assets/img/logos/logoo.png" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Sign Up for Messaging</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <Text style={styles.plusOne}>+1</Text>
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 4 }]}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Choose a username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1, paddingRight: 38 }]}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword((v) => !v)}
            accessibilityLabel="Show password"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1, paddingRight: 38 }]}
            placeholder="Re-enter password"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry={!showConfirm}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowConfirm((v) => !v)}
            accessibilityLabel="Show confirm password"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={showConfirm ? "eye" : "eye-off"}
              size={22}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>
      {error ? (
        <Text style={{ color: "#d32f2f", marginBottom: 10, textAlign: "center" }}>{error}</Text>
      ) : null}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.signUpButtonText}>{loading ? "Signing Up..." : "Sign Up"}</Text>
      </TouchableOpacity>
      <Text style={styles.bottomText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: "#f8f9fa",
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 22,
    textAlign: "center",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontWeight: "500",
    color: "#222",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    padding: 4,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    opacity: 0.7,
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  bottomText: {
    marginTop: 18,
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusOne: {
    color: "#444",
    fontSize: 16,
    marginRight: 2,
    fontWeight: "bold",
  },
});
