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
import { Play, Clock, User, BookOpen } from 'lucide-react-native';

const videoLessons = [
  {
    id: '1',
    title: 'Introduction to Derivatives',
    subject: 'Mathematics',
    grade: 'Grade 12',
    instructor: 'Mr. Johnson',
    duration: '28:45',
    thumbnail: 'https://images.pexels.com/photos/6238119/pexels-photo-6238119.jpeg',
    views: 1240,
    color: '#2563EB',
  },
  {
    id: '2',
    title: 'Atomic Structure & Bonding',
    subject: 'Physical Sciences',
    grade: 'Grade 11',
    instructor: 'Ms. Patel',
    duration: '35:12',
    thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    views: 987,
    color: '#059669',
  },
  {
    id: '3',
    title: 'DNA Structure & Function',
    subject: 'Life Sciences',
    grade: 'Grade 12',
    instructor: 'Dr. Williams',
    duration: '42:30',
    thumbnail: 'https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg',
    views: 1156,
    color: '#7C3AED',
  },
  {
    id: '4',
    title: 'Essay Writing Techniques',
    subject: 'English',
    grade: 'Grade 11',
    instructor: 'Ms. Thompson',
    duration: '24:18',
    thumbnail: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
    views: 789,
    color: '#DC2626',
  },
  {
    id: '5',
    title: 'Quadratic Functions',
    subject: 'Mathematics',
    grade: 'Grade 11',
    instructor: 'Mr. Johnson',
    duration: '31:25',
    thumbnail: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    views: 1023,
    color: '#2563EB',
  },
];

const categories = ['All Subjects', 'Mathematics', 'Physical Sciences', 'Life Sciences', 'English'];

export default function VideosScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Subjects');

  const filteredVideos = videoLessons.filter(video =>
    selectedCategory === 'All Subjects' || video.subject === selectedCategory
  );

  const renderVideoCard = (video: any) => (
    <TouchableOpacity key={video.id} style={styles.videoCard} activeOpacity={0.8}>
      <View style={styles.videoThumbnailContainer}>
        <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
        <View style={styles.playOverlay}>
          <Play size={24} color="#ffffff" />
        </View>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{video.duration}</Text>
        </View>
      </View>
      
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <View style={styles.videoMeta}>
          <View style={[styles.subjectBadge, { backgroundColor: video.color + '20' }]}>
            <Text style={[styles.subjectText, { color: video.color }]}>
              {video.subject}
            </Text>
          </View>
          <Text style={styles.gradeText}>{video.grade}</Text>
        </View>
        
        <View style={styles.videoFooter}>
          <View style={styles.instructorInfo}>
            <User size={14} color="#64748b" />
            <Text style={styles.instructorText}>{video.instructor}</Text>
          </View>
          <Text style={styles.viewsText}>{video.views} views</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Play size={32} color="#2563EB" />
            <Text style={styles.headerTitle}>Video Lessons</Text>
          </View>
          <Text style={styles.headerSubtitle}>Learn from expert instructors</Text>
        </View>

        {/* Featured Video */}
        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>📚 Featured Lesson</Text>
          <TouchableOpacity style={styles.featuredVideo} activeOpacity={0.8}>
            <View style={styles.featuredThumbnailContainer}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg' }} 
                style={styles.featuredThumbnail} 
              />
              <View style={styles.featuredPlayButton}>
                <Play size={32} color="#ffffff" />
              </View>
            </View>
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredVideoTitle}>Advanced Calculus Concepts</Text>
              <Text style={styles.featuredVideoDescription}>
                Master complex calculus problems with step-by-step explanations
              </Text>
              <View style={styles.featuredMeta}>
                <Text style={styles.featuredDuration}>45:30</Text>
                <Text style={styles.featuredViews}>2.1K views</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Category Filters */}
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesList}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.categoryButtonActive,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === category && styles.categoryButtonTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Videos List */}
        <View style={styles.videosContainer}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 'All Subjects' ? 'All Lessons' : selectedCategory}
          </Text>
          <View style={styles.videosList}>
            {filteredVideos.map(renderVideoCard)}
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
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  featuredVideo: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredThumbnailContainer: {
    position: 'relative',
    height: 200,
  },
  featuredThumbnail: {
    width: '100%',
    height: '100%',
  },
  featuredPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -24 }, { translateY: -24 }],
    backgroundColor: 'rgba(37, 99, 235, 0.9)',
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredInfo: {
    padding: 16,
  },
  featuredVideoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  featuredVideoDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 12,
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredDuration: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
  featuredViews: {
    fontSize: 12,
    color: '#64748b',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesList: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  categoryButtonTextActive: {
    color: '#ffffff',
  },
  videosContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  videosList: {
    gap: 16,
  },
  videoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  videoThumbnailContainer: {
    position: 'relative',
    height: 140,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
  playOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  durationText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  videoInfo: {
    padding: 12,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  videoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  subjectBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  subjectText: {
    fontSize: 12,
    fontWeight: '500',
  },
  gradeText: {
    fontSize: 12,
    color: '#64748b',
  },
  videoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  instructorText: {
    fontSize: 12,
    color: '#64748b',
  },
  viewsText: {
    fontSize: 12,
    color: '#64748b',
  },
});