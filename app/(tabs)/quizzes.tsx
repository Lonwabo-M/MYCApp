import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Brain, Clock, Target, Trophy, ChevronRight } from 'lucide-react-native';

const quizzes = [
  {
    id: '1',
    title: 'Algebra Fundamentals',
    subject: 'Mathematics',
    grade: 'Grade 11',
    questions: 15,
    duration: '20 min',
    difficulty: 'Easy',
    completed: true,
    score: 85,
    color: '#2563EB',
  },
  {
    id: '2',
    title: 'Chemical Bonding',
    subject: 'Physical Sciences',
    grade: 'Grade 12',
    questions: 20,
    duration: '25 min',
    difficulty: 'Medium',
    completed: false,
    score: 0,
    color: '#059669',
  },
  {
    id: '3',
    title: 'Cell Biology',
    subject: 'Life Sciences',
    grade: 'Grade 11',
    questions: 12,
    duration: '15 min',
    difficulty: 'Easy',
    completed: true,
    score: 92,
    color: '#7C3AED',
  },
  {
    id: '4',
    title: 'Shakespeare Analysis',
    subject: 'English',
    grade: 'Grade 12',
    questions: 18,
    duration: '30 min',
    difficulty: 'Hard',
    completed: false,
    score: 0,
    color: '#DC2626',
  },
];

const difficultyColors = {
  Easy: '#059669',
  Medium: '#EA580C',
  Hard: '#DC2626',
};

export default function QuizzesScreen() {
  const [selectedTab, setSelectedTab] = useState<'available' | 'completed'>('available');

  const availableQuizzes = quizzes.filter(quiz => !quiz.completed);
  const completedQuizzes = quizzes.filter(quiz => quiz.completed);

  const renderQuizCard = (quiz: any) => (
    <TouchableOpacity
      key={quiz.id}
      style={[styles.quizCard, { borderLeftColor: quiz.color }]}
      activeOpacity={0.7}
    >
      <View style={styles.quizHeader}>
        <View style={styles.quizInfo}>
          <Text style={styles.quizTitle}>{quiz.title}</Text>
          <Text style={styles.quizSubject}>
            {quiz.subject} • {quiz.grade}
          </Text>
        </View>
        {quiz.completed && (
          <View style={styles.scoreContainer}>
            <Trophy size={16} color="#EA580C" />
            <Text style={styles.scoreText}>{quiz.score}%</Text>
          </View>
        )}
      </View>

      <View style={styles.quizDetails}>
        <View style={styles.quizStat}>
          <Target size={16} color="#64748b" />
          <Text style={styles.quizStatText}>{quiz.questions} questions</Text>
        </View>
        <View style={styles.quizStat}>
          <Clock size={16} color="#64748b" />
          <Text style={styles.quizStatText}>{quiz.duration}</Text>
        </View>
        <View style={[
          styles.difficultyBadge,
          { backgroundColor: difficultyColors[quiz.difficulty as keyof typeof difficultyColors] + '20' }
        ]}>
          <Text style={[
            styles.difficultyText,
            { color: difficultyColors[quiz.difficulty as keyof typeof difficultyColors] }
          ]}>
            {quiz.difficulty}
          </Text>
        </View>
      </View>

      <View style={styles.quizAction}>
        <Text style={styles.actionText}>
          {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
        </Text>
        <ChevronRight size={16} color="#2563EB" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Brain size={32} color="#2563EB" />
            <Text style={styles.headerTitle}>Quizzes</Text>
          </View>
          <Text style={styles.headerSubtitle}>Test your knowledge</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>87%</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'available' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('available')}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'available' && styles.tabButtonTextActive,
              ]}
            >
              Available ({availableQuizzes.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'completed' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('completed')}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'completed' && styles.tabButtonTextActive,
              ]}
            >
              Completed ({completedQuizzes.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quizzes List */}
        <View style={styles.quizzesContainer}>
          <View style={styles.quizzesList}>
            {selectedTab === 'available'
              ? availableQuizzes.map(renderQuizCard)
              : completedQuizzes.map(renderQuizCard)}
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
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  tabSelector: {
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
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#2563EB',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  tabButtonTextActive: {
    color: '#ffffff',
  },
  quizzesContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  quizzesList: {
    gap: 12,
  },
  quizCard: {
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
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  quizSubject: {
    fontSize: 14,
    color: '#64748b',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  scoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EA580C',
  },
  quizDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  quizStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  quizStatText: {
    fontSize: 12,
    color: '#64748b',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '500',
  },
  quizAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
});