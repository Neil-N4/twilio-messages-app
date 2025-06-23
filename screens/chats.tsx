import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

// Static data (replace with webhook data as needed)
const conversations = [
  {
    id: 1,
    name: "Alice",
    last_message: "Sure, sending it now!",
    last_time: "2025-06-18 15:05:00",
    unread_count: 1,
  },
  {
    id: 2,
    name: "Bob",
    last_message: "Yes, I'll be there in 5 minutes.",
    last_time: "2025-06-18 14:24:10",
    unread_count: 0,
  },
  {
    id: 3,
    name: "Charlie",
    last_message: "Can you send me the report?",
    last_time: "2025-06-18 15:00:00",
    unread_count: 2,
  },
];

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getHours() % 12 || 12}:${d.getMinutes().toString().padStart(2, "0")} ${d.getHours() >= 12 ? "PM" : "AM"}`;
}

export default function ChatsScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const filteredConversations = conversations.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.last_message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://www.applicationbank.com/timeboss/assets/img/logos/logoo.png" }}
        style={styles.logoImg}
        resizeMode="contain"
      />
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={filteredConversations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.convoItem}
            onPress={() => navigation.navigate('Message', { conversationId: item.id, contactName: item.name })}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.convoName}>{item.name}</Text>
              <Text style={styles.convoLastMsg} numberOfLines={1}>{item.last_message}</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.convoTime}>{formatTime(item.last_time)}</Text>
              {item.unread_count > 0 && (
                <View style={styles.unreadBadge}><Text style={styles.unreadBadgeText}>{item.unread_count}</Text></View>
              )}
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <TouchableOpacity style={styles.newChatBtn}>
        <Text style={styles.newChatBtnText}>+ New Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 40,
    paddingHorizontal: 0,
  },
  logoImg: {
    width: 180,
    height: 60,
    alignSelf: 'center',
    marginBottom: 8,
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 16,
    height: 40,
    color: '#333',
  },
  convoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  convoName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  convoLastMsg: {
    color: '#888',
    fontSize: 13,
  },
  rightCol: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  convoTime: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#dc3545',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: 'flex-end',
  },
  unreadBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  newChatBtn: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: '#219aff',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  newChatBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
