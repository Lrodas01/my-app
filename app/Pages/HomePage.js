import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Interests from '../components/Home Page Components/interests'
import Internships from '../components/Home Page Components/internships'
import Recent from '../components/Home Page Components/recent'
import Footer from '../components/Home Page Components/footer'
import { AppContext } from '../AppContext'
import { TabActions } from '@react-navigation/native'

const ActualHome = ({ navigation, route }) => {

  const {cardsData, recentJobs, addRecentJob} = useContext(AppContext)
  const handleSelectInterest = (job) => {
    addRecentJob(job);
    navigation.navigate('SpecificJobs', { job, colleges: job.colleges, collegesImage: job.collegesImage });
};

  return (
    <View style={styles.container}>
      <View contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
          <Ionicons style={styles.funnel} name='funnel-outline' size={36} color={'white'} />
        </View>
        <View>
          <Text style={styles.exploreText}>Explore</Text>
        </View>
        <View style={[styles.searchBar, styles.searchBarOutline]}>
          <Text style={[styles.searchBarText]}>
            Search...
          </Text>
          <View style={styles.ionoconsContainer}>
            <Ionicons style={styles.ionocon} name='close-outline' size={16} />
          </View>
        </View>
        <View style={styles.recentContainer}>
          <Text style={styles.recentText}>Recent</Text>
 <ScrollView 
    showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={[styles.scrollContent, styles.recentContent]}
  >
    {recentJobs.length === 0 ? (
      <View style={styles.scrollableItem}>
        <View style = {{width: 50,}}> 
          <Text>
            Oh there seems to be nothing here.
          </Text>
        </View>
      </View>
    ) : (
      recentJobs.map((job, index) => (
        <Recent 
        key={index} 
        job={job} 
        onPress = {() => handleSelectInterest(job)}/>
      ))
    )}
  </ScrollView>
        </View>
        <View style={styles.intershipContainer}>
          <Text style={styles.intershipText}>Interships for you</Text>
<ScrollView 
  showsHorizontalScrollIndicator = {false}
  horizontal  //This makes my scrollable horizontal yipeee!!!
  contentContainerStyle={[styles.scrollContent]}>  
  <View style={styles.scrollableItem}>
    <Internships />
  </View>
  <View style={styles.scrollableItem}>
    <Internships />
  </View>
  <View style={styles.scrollableItem}>
    <Internships />
  </View>
  <View style={styles.scrollableItem}>
    <Internships />
  </View>
</ScrollView>
        </View>
        <View style={styles.careerContainer}>
          <Text style={styles.careerText}>Popular Career Interests</Text>
<ScrollView
  showsHorizontalScrollIndicator = {false}
  horizontal
  contentContainerStyle={[styles.scrollContent]}>
  <View style={[styles.scrollableItem, {flexDirection: 'row'}]}>
  {(cardsData.flatMap(option => option.jobs)).map((job, index) => (
      <Interests
          onPress = {() => handleSelectInterest(job)}
          key={index}
          jobName={job.titleJob}
          image={job.imageURIJob}
      />
  ))}
  </View>
</ScrollView>
        </View>
      </View>
      <Footer navigation={navigation}/>
    </View>
  )
}

export default ActualHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, // To make space for the footer
  },
  funnel: {
    position: 'absolute',
    right: 24,
  },
  scrollContent: {
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    paddingRight: 48,
    height: 'auto',
  },
  header: {
    width: '100%',
    height: 68,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#005FEE',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  exploreText: {
    marginLeft: 29,
    color: 'black',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  searchBar: {
    marginTop: 13,
    marginHorizontal: 24,
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBarOutline: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  searchBarText: {
    flex: 1,
    color: '#1E1E1E',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  ionoconsContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentText: {
    
    color: 'black',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  recentContainer: {
    marginTop: 33,
    marginLeft: 31,
    marginRight: 31,
  },
  recentContent: {
    marginTop: 18,
    paddingRight: 48,
    height: 'auto',
  },
  intershipContainer: {
    marginTop: 20,
    marginLeft: 29,
    marginRight: 29, 
  },
  intershipText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  careerContainer: {
    marginTop: 20,
    marginLeft: 31,
    marginRight: 31, 
    marginBottom: 20, 
  },
  careerText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },

  scrollableItem: {

  },
  
})
