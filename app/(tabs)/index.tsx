import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { ChevronRight, Star } from 'lucide-react-native';

const subjects = {
  grade11: [
    { id: '1', name: 'Mathematics', icon: '📐', color: '#2563EB', topics: 12 },
    { id: '2', name: 'Physical Sciences', icon: '⚗️', color: '#059669', topics: 8 },
    { id: '3', name: 'Life Sciences', icon: '🧬', color: '#7C3AED', topics: 10 },
    { id: '4', name: 'English', icon: '📚', color: '#DC2626', topics: 6 },
    { id: '5', name: 'Afrikaans', icon: '🗣️', color: '#EA580C', topics: 6 },
    { id: '6', name: 'History', icon: '🏛️', color: '#B45309', topics: 7 },
  ],
  grade12: [
    { id: '7', name: 'Mathematics', icon: '📐', color: '#2563EB', topics: 14 },
    { id: '8', name: 'Physical Sciences', icon: '⚗️', color: '#059669', topics: 10 },
    { id: '9', name: 'Life Sciences', icon: '🧬', color: '#7C3AED', topics: 12 },
    { id: '10', name: 'English', icon: '📚', color: '#DC2626', topics: 8 },
    { id: '11', name: 'Afrikaans', icon: '🗣️', color: '#EA580C', topics: 8 },
    { id: '12', name: 'History', icon: '🏛️', color: '#B45309', topics: 9 },
  ],
};

export default function ContentScreen() {
  const [selectedGrade, setSelectedGrade] = useState<'grade11' | 'grade12'>('grade11');

  const renderSubjectCard = (subject: any) => (
    <TouchableOpacity
      key={subject.id}
      style={[styles.subjectCard, { borderLeftColor: subject.color }]}
      activeOpacity={0.7}
    >
      <View style={styles.subjectContent}>
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectIcon}>{subject.icon}</Text>
          <View style={styles.subjectInfo}>
            <Text style={styles.subjectName}>{subject.name}</Text>
            <Text style={styles.topicCount}>{subject.topics} topics</Text>
          </View>
        </View>
        <ChevronRight size={20} color="#9ca3af" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image 
              source={require('../../assets/images/myc logo.png')} 
              style={styles.logo}
            />
            <Text style={styles.headerTitle}>MYC Education</Text>
          </View>
          <Text style={styles.headerSubtitle}>Learn, Practice, Excel</Text>
        </View>

        {/* Grade Selection */}
        <View style={styles.gradeSelector}>
          <TouchableOpacity
            style={[
              styles.gradeButton,
              selectedGrade === 'grade11' && styles.gradeButtonActive,
            ]}
            onPress={() => setSelectedGrade('grade11')}
          >
            <Text
              style={[
                styles.gradeButtonText,
                selectedGrade === 'grade11' && styles.gradeButtonTextActive,
              ]}
            >
              Grade 11
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gradeButton,
              selectedGrade === 'grade12' && styles.gradeButtonActive,
            ]}
            onPress={() => setSelectedGrade('grade12')}
          >
            <Text
              style={[
                styles.gradeButtonText,
                selectedGrade === 'grade12' && styles.gradeButtonTextActive,
              ]}
            >
              Grade 12
            </Text>
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredHeader}>
            <Star size={20} color="#EA580C" />
            <Text style={styles.featuredTitle}>Featured This Week</Text>
          </View>
          <TouchableOpacity style={styles.featuredCard} activeOpacity={0.8}>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredSubject}>📐 Mathematics</Text>
              <Text style={styles.featuredTopic}>Calculus: Derivatives & Applications</Text>
              <Text style={styles.featuredDescription}>
                Master the fundamentals of calculus with step-by-step examples
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Subjects */}
        <View style={styles.subjectsSection}>
          <Text style={styles.sectionTitle}>Subjects</Text>
          <View style={styles.subjectsList}>
            {subjects[selectedGrade].map(renderSubjectCard)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e293b',
    marginLeft: 12,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  gradeSelector: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  gradeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  gradeButtonActive: {
    backgroundColor: '#2563EB',
  },
  gradeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
  gradeButtonTextActive: {
    color: '#ffffff',
  },
  featuredSection: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 8,
  },
  featuredCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredContent: {
    gap: 8,
  },
  featuredSubject: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EA580C',
  },
  featuredTopic: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  featuredDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  subjectsSection: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  subjectsList: {
    gap: 12,
  },
  subjectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  subjectContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subjectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subjectIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  topicCount: {
    fontSize: 14,
    color: '#64748b',
  },
});