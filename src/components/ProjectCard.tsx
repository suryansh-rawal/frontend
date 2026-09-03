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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#d5d0c6',
  },
  cardPressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#171717',
    marginBottom: 4,
  },
  description: {
    maxWidth: 580,
    fontSize: 14,
    color: '#68645d',
    lineHeight: 21,
  },
});
