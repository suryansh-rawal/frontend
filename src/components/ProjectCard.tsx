import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  description: string;
  link?: string;
};

export function ProjectCard({ title, description, link }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && link ? styles.cardPressed : null]}
      onPress={link ? () => Linking.openURL(link) : undefined}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1d24',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2e38',
  },
  cardPressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f5f5f5',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#a8adb8',
    lineHeight: 20,
  },
});
