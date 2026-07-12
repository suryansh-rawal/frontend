import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProjectCard } from '../src/components/ProjectCard';
import { Section } from '../src/components/Section';
import { profile } from '../src/data/profile';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Section title="">
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.title}</Text>
          <Text style={styles.tagline}>{profile.tagline}</Text>

          <Link href="/chat" style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat with my AI avatar →</Text>
          </Link>
        </Section>

        <Section title="About">
          <Text style={styles.body}>{profile.about}</Text>
        </Section>

        <Section title="Skills">
          <View style={styles.skillsRow}>
            {profile.skills.map((skill) => (
              <View key={skill} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Projects">
          {profile.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Section>

        <Section title="Contact">
          <Text style={styles.body}>{profile.links.email}</Text>
          <Text style={styles.body}>{profile.links.github}</Text>
          <Text style={styles.body}>{profile.links.linkedin}</Text>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f1115',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  name: {
    fontSize: 32,
    fontWeight: '800',
    color: '#f5f5f5',
  },
  role: {
    fontSize: 16,
    color: '#8ab4f8',
    marginTop: 4,
  },
  tagline: {
    fontSize: 15,
    color: '#a8adb8',
    marginTop: 12,
    lineHeight: 22,
  },
  chatButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#8ab4f8',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  chatButtonText: {
    color: '#0f1115',
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
    color: '#c4c8d1',
    lineHeight: 22,
    marginBottom: 4,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillPill: {
    backgroundColor: '#1a1d24',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#2a2e38',
  },
  skillText: {
    color: '#f5f5f5',
    fontSize: 13,
  },
});
