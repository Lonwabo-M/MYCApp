import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { X, BookOpen, Clock, CircleCheck as CheckCircle } from 'lucide-react-native';

interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  description: string;
}

interface SubjectContentModalProps {
  visible: boolean;
  subject: {
    name: string;
    color: string;
    topics: Topic[];
  } | null;
  onClose: () => void;
}

export default function SubjectContentModal({
  visible,
  subject,
  onClose,
}: SubjectContentModalProps) {
  if (!subject) return null;

  const renderTopicCard = (topic: Topic) => (
    <TouchableOpacity key={topic.id} style={styles.topicCard} activeOpacity={0.7}>
      <View style={styles.topicHeader}>
        <View style={styles.topicInfo}>
          <Text style={styles.topicTitle}>{topic.title}</Text>
          <Text style={styles.topicDescription}>{topic.description}</Text>
        </View>
        <View style={styles.topicMeta}>
          {topic.completed && (
            <CheckCircle size={20} color="#059669" style={styles.completedIcon} />
          )}
          <View style={styles.durationContainer}>
            <Clock size={14} color="#64748b" />
            <Text style={styles.durationText}>{topic.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <View style={styles.headerContent}>
            <View style={[styles.subjectIcon, { backgroundColor: subject.color + '20' }]}>
              <BookOpen size={24} color={subject.color} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.modalTitle}>{subject.name}</Text>
              <Text style={styles.modalSubtitle}>
                {subject.topics.length} topics available
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color="#64748b" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
          <View style={styles.topicsContainer}>
            {subject.topics.map(renderTopicCard)}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subjectIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 2,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
  },
  topicsContainer: {
    padding: 20,
    gap: 12,
  },
  topicCard: {
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
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topicInfo: {
    flex: 1,
    marginRight: 12,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  topicMeta: {
    alignItems: 'flex-end',
  },
  completedIcon: {
    marginBottom: 8,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  durationText: {
    fontSize: 12,
    color: '#64748b',
  },
});