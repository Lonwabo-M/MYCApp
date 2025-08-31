import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ChartBar as BarChart3, Trophy, Target, TrendingUp, CircleCheck as CheckCircle } from 'lucide-react-native';

const progressData = [
  { subject: 'Mathematics', progress: 85, color: '#2563EB' },
  { subject: 'Physical Sciences', progress: 72, color: '#059669' },
  { subject: 'Life Sciences', progress: 94, color: '#7C3AED' },
  { subject: 'English', progress: 67, color: '#DC2626' },
  { subject: 'History', progress: 78, color: '#B45309' },
];

const achievements = [
  { id: '1', title: 'Quiz Master', description: 'Completed 10 quizzes', icon: '🧠', earned: true },
  { id: '2', title: 'Mathematics Pro', description: '90% average in Math quizzes', icon: '📐', earned: true },
  { id: '3', title: 'Study Streak', description: '7 days of continuous learning', icon: '🔥', earned: false },
  { id: '4', title: 'Video Scholar', description: 'Watched 25 video lessons', icon: '🎥', earned: true },
];

const recentActivity = [
  { id: '1', action: 'Completed quiz', subject: 'Mathematics', score: '85%', time: '2 hours ago' },
  { id: '2', action: 'Watched video', subject: 'Physical Sciences', time: '1 day ago' },
  { id: '3', action: 'Downloaded paper', subject: 'Life Sciences', time: '2 days ago' },
];

export default function ProgressScreen() {
  const renderProgressBar = (item: any) => (
    <View key={item.subject} style={styles.progressItem}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressSubject}>{item.subject}</Text>
        <Text style={styles.progressPercent}>{item.progress}%</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${item.progress}%`,
              backgroundColor: item.color,
            },
          ]}
        />
      </View>
    </View>
  );

  const renderAchievementCard = (achievement: any) => (
    <View
      key={achievement.id}
      style={[
        styles.achievementCard,
        !achievement.earned && styles.achievementCardLocked,
      ]}
    >
      <View style={styles.achievementContent}>
        <Text style={styles.achievementIcon}>{achievement.icon}</Text>
        <View style={styles.achievementInfo}>
          <Text style={[
            styles.achievementTitle,
            !achievement.earned && styles.achievementTitleLocked,
          ]}>
            {achievement.title}
          </Text>
          <Text style={styles.achievementDescription}>
            {achievement.description}
          </Text>
        </View>
        {achievement.earned && (
          <CheckCircle size={20} color="#059669" />
        )}
      </View>
    </View>
  );

  const renderActivityItem = (item: any) => (
    <View key={item.id} style={styles.activityItem}>
      <View style={styles.activityContent}>
        <Text style={styles.activityAction}>{item.action}</Text>
        <Text style={styles.activitySubject}>{item.subject}</Text>
        {item.score && (
          <Text style={styles.activityScore}>Score: {item.score}</Text>
        )}
      </View>
      <Text style={styles.activityTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <BarChart3 size={32} color="#2563EB" />
            <Text style={styles.headerTitle}>Your Progress</Text>
          </View>
          <Text style={styles.headerSubtitle}>Track your learning journey</Text>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Trophy size={24} color="#EA580C" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statCard}>
            <Target size={24} color="#059669" />
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Quiz Average</Text>
          </View>
          <View style={styles.statCard}>
            <TrendingUp size={24} color="#7C3AED" />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Hours Studied</Text>
          </View>
        </View>

        {/* Subject Progress */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Subject Progress</Text>
          <View style={styles.progressContainer}>
            {progressData.map(renderProgressBar)}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsList}>
            {achievements.map(renderAchievementCard)}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityContainer}>
            {recentActivity.map(renderActivityItem)}
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
    marginBottom: 24,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
    textAlign: 'center',
  },
  progressSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  progressContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  progressItem: {
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  progressPercent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  achievementsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  achievementsList: {
    gap: 12,
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  achievementCardLocked: {
    opacity: 0.6,
  },
  achievementContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  achievementTitleLocked: {
    color: '#94a3b8',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  activitySection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  activityContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  activitySubject: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 2,
  },
  activityScore: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
  activityTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
});