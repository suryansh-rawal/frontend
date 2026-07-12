import { StyleSheet, Text, View, type ViewProps } from 'react-native';

type Props = ViewProps & {
  title: string;
};

export function Section({ title, children, style, ...rest }: Props) {
  return (
    <View style={[styles.section, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 720,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f5f5f5',
    marginBottom: 12,
  },
});
