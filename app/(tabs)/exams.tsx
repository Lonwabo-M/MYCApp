import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Download, Calendar, FileText, Search } from 'lucide-react-native';

const examPapers = [
  {
    id: '1',
    subject: 'Mathematics',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Question Paper',
    pages: 8,
    color: '#2563EB',
  },
  {
    id: '2',
    subject: 'Mathematics',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Memo',
    pages: 6,
    color: '#2563EB',
  },
  {
    id: '3',
    subject: 'Physical Sciences',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Question Paper',
    pages: 12,
    color: '#059669',
  },
  {
    id: '4',
    subject: 'Life Sciences',
    grade: 'Grade 11',
    year: '2023',
    term: 'June',
    type: 'Question Paper',
    pages: 10,
    color: '#7C3AED',
  },
  {
    id: '5',
    subject: 'English',
    grade: 'Grade 11',
    year: '2023',
    term: 'September',
    type: 'Question Paper',
    pages: 6,
    color: '#DC2626',
  },
];

const filterOptions = ['All Grades', 'Grade 11', 'Grade 12'];
const yearOptions = ['All Years', '2023', '2022', '2021'];

export default function ExamsScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All Grades');
  const [selectedYear, setSelectedYear] = useState('All Years');

  const filteredPapers = examPapers.filter(paper => {
    const matchesGrade = selectedFilter === 'All Grades' || paper.grade === selectedFilter;
    const matchesYear = selectedYear === 'All Years' || paper.year === selectedYear;
    return matchesGrade && matchesYear;
  });

  const renderPaperCard = (paper: any) => (
    <View key={paper.id} style={[styles.paperCard, { borderLeftColor: paper.color }]}>
      <View style={styles.paperHeader}>
        <View style={styles.paperInfo}>
          <Text style={styles.paperSubject}>{paper.subject}</Text>
          <Text style={styles.paperDetails}>
            {paper.grade} • {paper.year} • {paper.term}
          </Text>
          <Text style={styles.paperType}>{paper.type}</Text>
        </View>
        <View style={styles.paperStats}>
          <Text style={styles.paperPages}>{paper.pages} pages</Text>
          <TouchableOpacity style={styles.downloadButton} activeOpacity={0.7}>
            <Download size={16} color="#2563EB" />
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <FileText size={32} color="#2563EB" />
            <Text style={styles.headerTitle}>Past Papers</Text>
          </View>
          <Text style={styles.headerSubtitle}>Practice with previous exams</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Search size={20} color="#64748b" />
            <Text style={styles.searchPlaceholder}>Search papers...</Text>
          </View>
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterSection}>
              {filterOptions.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterButton,
                    selectedFilter === filter && styles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedFilter(filter)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedFilter === filter && styles.filterButtonTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.filterSection}>
              {yearOptions.map((year) => (
                <TouchableOpacity
                  key={year}
                  style={[
                    styles.filterButton,
                    selectedYear === year && styles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedYear(year)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedYear === year && styles.filterButtonTextActive,
                    ]}
                  >
                    {year}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Papers List */}
        <View style={styles.papersContainer}>
          <View style={styles.papersHeader}>
            <Text style={styles.papersTitle}>Available Papers</Text>
            <Text style={styles.papersCount}>
              {filteredPapers.length} papers found
            </Text>
          </View>
          <View style={styles.papersList}>
            {filteredPapers.map(renderPaperCard)}
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
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
  searchPlaceholder: {
    fontSize: 16,
    color: '#64748b',
    marginLeft: 12,
  },
  filtersContainer: {
    marginBottom: 24,
  },
  filterSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  filterButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  papersContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  papersHeader: {
    marginBottom: 16,
  },
  papersTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  papersCount: {
    fontSize: 14,
    color: '#64748b',
  },
  papersList: {
    gap: 12,
  },
  paperCard: {
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
  paperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  paperInfo: {
    flex: 1,
  },
  paperSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  paperDetails: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  paperType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#059669',
  },
  paperStats: {
    alignItems: 'flex-end',
  },
  paperPages: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
  },
  downloadText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
  },
});