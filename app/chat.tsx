import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi, I'm an AI trained on Suryansh's background. Ask me anything about his work, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const send = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMessage: Message = { id: `${Date.now()}-user`, role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSending(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-assistant`, role: 'assistant', text: data.reply ?? '...' },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: 'assistant',
          text: "I couldn't reach the backend. Make sure the API is running and EXPO_PUBLIC_API_URL is set.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View
              style={[
                styles.bubble,
                item.role === 'user' ? styles.userBubble : styles.assistantBubble,
              ]}
            >
              <Text
                style={[
                  styles.bubbleText,
                  item.role === 'user' ? styles.userBubbleText : styles.assistantBubbleText,
                ]}
              >
                {item.text}
              </Text>
            </View>
          )}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Ask something..."
            placeholderTextColor="#6b7080"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={send}
            returnKeyType="send"
          />
          <Pressable style={styles.sendButton} onPress={send} disabled={sending}>
            <Text style={styles.sendButtonText}>{sending ? '...' : 'Send'}</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1115',
  },
  flex: {
    flex: 1,
  },
  list: {
    padding: 16,
    gap: 10,
  },
  bubble: {
    maxWidth: '85%',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 10,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#8ab4f8',
  },
  assistantBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#1a1d24',
    borderWidth: 1,
    borderColor: '#2a2e38',
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userBubbleText: {
    color: '#0f1115',
  },
  assistantBubbleText: {
    color: '#f5f5f5',
  },
  inputRow: {
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: '#2a2e38',
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1d24',
    color: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#2a2e38',
  },
  sendButton: {
    backgroundColor: '#8ab4f8',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#0f1115',
    fontWeight: '700',
  },
});
