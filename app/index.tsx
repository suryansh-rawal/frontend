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
        <View style={styles.hero}>
          <View style={styles.heroTopline}>
            <Text style={styles.mark}>SR / 01</Text>
            <Text style={styles.availability}>OPEN TO BIG IDEAS</Text>
          </View>

          <Text style={styles.eyebrow}>ENGINEERING / AI / CURIOSITY</Text>
          <Text style={styles.name}>Suryansh{`\n`}Rawal.</Text>
          <Text style={styles.role}>{profile.title}</Text>
          <Text style={styles.tagline}>{profile.tagline}</Text>

          <Link href="/chat" style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Meet my AI avatar <Text style={styles.arrow}>↗</Text></Text>
          </Link>
        </View>

        <Section label="01 / PROFILE" title="Building a useful future.">
          <Text style={styles.body}>{profile.about}</Text>
        </Section>

        <Section label="02 / TOOLKIT" title="The tools I reach for.">
          <View style={styles.skillsRow}>
            {profile.skills.map((skill) => (
              <View key={skill} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section label="03 / SELECTED WORK" title="Things I have made.">
          {profile.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Section>

        <Section label="04 / CONTACT" title="Let’s make something matter.">
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>EMAIL</Text>
            <Text style={styles.contactValue}>{profile.links.email}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>GITHUB</Text>
            <Text style={styles.contactValue}>{profile.links.github}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>LINKEDIN</Text>
            <Text style={styles.contactValue}>{profile.links.linkedin}</Text>
          </View>
        </Section>

        <Text style={styles.footer}>SURYANSH RAWAL / MADE WITH INTENT</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f0e9',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 42,
  },
  hero: {
    width: '100%',
    maxWidth: 860,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 86,
  },
  heroTopline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d0c6',
  },
  mark: {
    color: '#171717',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  availability: {
    color: '#e4573d',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  eyebrow: {
    color: '#e4573d',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 58,
  },
  name: {
    fontSize: 68,
    fontWeight: '800',
    color: '#171717',
    letterSpacing: -2,
    lineHeight: 68,
    marginTop: 14,
  },
  role: {
    fontSize: 18,
    color: '#171717',
    fontWeight: '700',
    marginTop: 24,
  },
  tagline: {
    maxWidth: 420,
    fontSize: 17,
    color: '#68645d',
    marginTop: 10,
    lineHeight: 26,
  },
  chatButton: {
    marginTop: 34,
    alignSelf: 'flex-start',
    backgroundColor: '#171717',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  chatButtonText: {
    color: '#f3f0e9',
    fontWeight: '700',
    fontSize: 15,
  },
  arrow: {
    color: '#e4573d',
    fontSize: 19,
  },
  body: {
    maxWidth: 640,
    fontSize: 18,
    color: '#4f4b45',
    lineHeight: 29,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillPill: {
    backgroundColor: '#e8e3d9',
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#d5d0c6',
  },
  skillText: {
    color: '#171717',
    fontSize: 13,
    fontWeight: '700',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#d5d0c6',
    paddingVertical: 14,
    gap: 24,
  },
  contactLabel: {
    width: 72,
    color: '#e4573d',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  contactValue: {
    flex: 1,
    color: '#171717',
    fontSize: 14,
  },
  footer: {
    color: '#9a958b',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginTop: 18,
  },
});
