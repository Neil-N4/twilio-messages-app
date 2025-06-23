import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

// Dummy data (should be shared or fetched in real app)
const messages = [
  { conversation_id: 1, sent_at: "2025-06-18 14:23:00", sender: "Alice", recipient: "You", message: "Hey, are you coming to the meeting?" },
  { conversation_id: 1, sent_at: "2025-06-18 14:24:10", sender: "You", recipient: "Alice", message: "Yes, I'll be there in 5 minutes." },
  { conversation_id: 1, sent_at: "2025-06-18 15:05:00", sender: "Alice", recipient: "You", message: "Alright make sure you have an agenda in mind" },
  { conversation_id: 2, sent_at: "2025-06-18 13:00:00", sender: "Bob", recipient: "You", message: "Lunch today?" },
  { conversation_id: 2, sent_at: "2025-06-18 13:01:00", sender: "You", recipient: "Bob", message: "Sounds good!" },
  { conversation_id: 2, sent_at: "2025-06-18 14:24:10", sender: "Bob", recipient: "You", message: "Alright let's meet at the Athletic." },
  { conversation_id: 3, sent_at: "2025-06-18 15:00:00", sender: "Charlie", recipient: "You", message: "Can you send me the report?" },
  { conversation_id: 3, sent_at: "2025-06-18 15:02:00", sender: "You", recipient: "Charlie", message: "Sure, sending it now!" },
];

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getHours() % 12 || 12}:${d.getMinutes().toString().padStart(2, "0")} ${d.getHours() >= 12 ? "PM" : "AM"}`;
}

export default function MessageScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { conversationId, contactName } = route.params as { conversationId: number, contactName: string };
  const [input, setInput] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);

  const activeMessages = messages.filter(m => m.conversation_id === conversationId);

  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [conversationId]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{contactName}</Text>
      </View>
      {/* Messages */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesArea}
          contentContainerStyle={{ paddingVertical: 12 }}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {activeMessages.map((msg, idx) => (
            <View
              key={idx}
              style={[styles.messageRow, msg.sender === "You" ? styles.messageSent : styles.messageReceived]}
            >
              <View style={[styles.bubble, msg.sender === "You" ? styles.bubbleSent : styles.bubbleReceived]}>
                <Text style={msg.sender === "You" ? styles.bubbleTextSent : styles.bubbleTextReceived}>{msg.message}</Text>
              </View>
              <Text style={styles.meta}>{formatTime(msg.sent_at)}</Text>
            </View>
          ))}
        </ScrollView>
        {/* Message input */}
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.sendBtn}
            onPress={() => {
              setInput("");
            }}
          >
            <Text style={styles.sendBtnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  backBtn: {
    marginRight: 10,
    padding: 4,
  },
  backBtnText: {
    color: '#219aff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageRow: {
    marginBottom: 14,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageSent: {
    alignItems: 'flex-end',
  },
  messageReceived: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    minWidth: 40,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: '#e9ecef',
  },
  bubbleSent: {
    backgroundColor: '#219aff',
  },
  bubbleReceived: {
    backgroundColor: '#e9ecef',
  },
  bubbleTextSent: {
    color: '#fff',
  },
  bubbleTextReceived: {
    color: '#333',
  },
  meta: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    alignSelf: 'flex-end',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    padding: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 20,
    paddingHorizontal: 14,
    backgroundColor: '#f8f9fa',
    marginRight: 8,
    color: '#333',
  },
  sendBtn: {
    backgroundColor: '#219aff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  sendBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
