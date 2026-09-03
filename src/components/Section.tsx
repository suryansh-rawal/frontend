import { StyleSheet, Text, View, type ViewProps } from 'react-native';

type Props = ViewProps & {
  label: string;
  title: string;
};

export function Section({ label, title, children, style, ...rest }: Props) {
  return (
    <View style={[styles.section, style]} {...rest}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 860,
    paddingHorizontal: 28,
    paddingVertical: 34,
    borderTopWidth: 1,
    borderTopColor: '#d5d0c6',
  },
  label: {
    color: '#e4573d',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#171717',
    letterSpacing: -0.8,
    marginBottom: 20,
  },
});
