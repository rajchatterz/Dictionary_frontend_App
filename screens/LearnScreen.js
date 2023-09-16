import React, { useState } from 'react';
import { View, Text,Image, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Bar'; // Import ProgressBar
import SlideAlert from '../components/SlideAlert';
import HomeInfoCards from '../components/HomeInfoCards';
import HomeTrendingCard from '../components/HomeTrendingCards'
import HomeWordGames from '../components/HomeWordGameCard';

const categoriesData = [
  {
    id: 1,
    name: 'Category 1',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100218/300-ZM1038421.jpg",
    wordCount: 10,
    views: 220,
  },
  {
    id: 2,
    name: 'Category 2',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100218/300-ZM1038421.jpg",
    wordCount: 15,
    views: 320,
  },
  {
    id: 3,
    name: 'Category 3',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100218/300-ZM1038421.jpg",
    wordCount: 20,
    views: 420,
  },
];

const funGamesData = [
  {
    id: 4,
    name: 'Game 1',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 50,
    views: 120,
    progress: 0.5, // Example: 50% progress
  },
  {
    id: 5,
    name: 'Game 2',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 45,
    views: 180,
    progress: 0.3, // Example: 30% progress
  },
  {
    id: 6,
    name: 'Game 3',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 60,
    views: 250,
    progress: 0.6, // Example: 60% progress
  },
  {
    id: 7,
    name: 'Game 4',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 75,
    views: 300,
    progress: 0.75, // Example: 75% progress
  },
  {
    id: 8,
    name: 'Game 4',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 75,
    views: 300,
    progress: 0.75, // Example: 75% progress
  },
  {
    id: 9,
    name: 'Game 4',
    image: "https://d3nn873nee648n.cloudfront.net/900x600/100245/300-ZM1024051.jpg",
    wordCount: 75,
    views: 300,
    progress: 0.75, // Example: 75% progress
  },
];

const LearnPage = () => {
 
  const [loading, setLoading] = useState(false);
  const [slideAlertMessage, setSlideAlertMessage] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={styles.heading}>BrainBox</Text>
      </View>

    {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}

      {slideAlertMessage !== '' && (
        <SlideAlert message={slideAlertMessage} onSlideUpComplete={() => setSlideAlertMessage('')} />
      )}


<ScrollView style={styles.scrollview}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Word Categories</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryScrollContent}
      >
        {categoriesData.map((category) => (
          <View key={category.id} style={styles.card}>
            <Image source={{ uri: category.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.leftContent}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryWordCount}>{category.wordCount} words</Text>
              </View>
              <View style={styles.rightContent}>
                <View style={styles.viewsContainer}>
                  <Icon name="eye" size={16} color="gray" style={styles.eyeIcon} />
                  <Text style={styles.viewsCount}>{category.views}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.funGamesHeader}>
        <Text style={styles.headerText}>Fun Games</Text>
      </View>
      {funGamesData.map((game) => (
        <View key={game.id} style={styles.verticalCard}>
          <Image source={{ uri: game.image }} style={styles.verticalCardImage} />
          <View style={styles.verticalCardContent}>
            <Text style={styles.gameName}>{game.name}</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.gameWordCount}>Progress: {Math.round(game.progress * 100)}%</Text>
              <ProgressBar
                progress={game.progress}
                width={180}
                height={7}
                color="#4caf50"
                borderColor="gray"
                borderRadius={4}
              />
            </View>
            <Text style={styles.gameWordCount}>{game.wordCount} words</Text>
            <View style={styles.viewsContainer}>
              <Icon name="eye" size={16} color="gray" style={styles.eyeIcon} />
              <Text style={styles.viewsCount}>{game.views}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>

    


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollview:{
    padding: 16,
  },
  header: {
    marginVertical: 8,
  },
  funGamesHeader: {
    marginVertical: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryScroll: {
    flexDirection: 'row',
  },
  categoryScrollContent: {
    paddingLeft: 8,
  },
  card: {
    width: 170,
    height: 150,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  verticalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  verticalCardImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  cardContent: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalCardContent: {
    flex: 1,
    flexDirection: 'column',
  },
  leftContent: {
    flexDirection: 'column',
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  categoryWordCount: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
  },
  gameName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  gameWordCount: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  viewsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 8,
    right: 8,
  },
  eyeIcon: {
    fontSize: 16,
    color: 'gray',
  },
  viewsCount: {
    fontSize: 14,
    color: 'gray',
  },
  progressContainer: {
    marginTop: 8,
  },
  blueBackground: {
    backgroundColor: '#2E86C1',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 120,
    paddingLeft: 20, // Added padding to align the heading to the left
    justifyContent: 'center', // Align text vertically in the middle
  },
  heading: {
    marginTop:50,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold', // Make the font bold
  },
 
 
 
  definition: {
    fontSize: 14,
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '20%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
  },
 
});

export default LearnPage;
