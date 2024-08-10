import { StyleSheet, Text, View, Image, LogBox, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext';
import Footer from "../../components/Home Page Components/footer";
import Recommended from '../../components/SearchPage/recommended';
import SavedSearches from '../../components/SearchPage/SavedSearches';
import Available from '../../components/SearchPage/Available';

const Search = ({ navigation }) => {

    LogBox.ignoreAllLogs();

    const { selectedCategories, cardsData, addRecentJob } = useContext(AppContext);
    const [input, setInput] = useState("");

    const handleSearch = (text) => {
        setInput(text);
    };

    const selectedOptions = selectedCategories;

    const selectedData = selectedOptions
        .map(option => cardsData.find(card => card.category === option))
        .filter(card => card !== undefined);

    const filteredJobs = cardsData
        .flatMap(option => option.jobs)
        .filter(job => job.titleJob.toLowerCase().includes(input.toLowerCase()));

    const handleSelectJob = (job) => {
        addRecentJob(job);
        navigation.navigate('SpecificJobs', { job, colleges: job.colleges, jobs: cardsData[0].jobs });
    };

    const handleSelectInterest = (job) => {
        addRecentJob(job);
        navigation.navigate("SpecificJobs", {
            job,
            colleges: job.colleges,
            collegesImage: job.collegesImage,
            jobs: cardsData[0].jobs
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Search Page</Text>
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Search</Text>
                <View style={[styles.searchBar, styles.searchBarOutline]}>
                    <TextInput
                        value={input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => handleSearch(text)}
                        clearButtonMode='always'
                        style={[styles.searchBarText]}
                        placeholder='Search...'
                    />
                </View>
            </View>

            {input === "" ? (
                <ScrollView contentContainerStyle={{paddingBottom: 100}}>
                    <Text style={styles.recentTextContainer}>Recent Searches</Text>
                <View style={{left: 24}}>
                    <SavedSearches />
                </View>   
                    <Text style={styles.recommendedCareersContainer}>Recommended Careers for you</Text>
                <View style={{left: 24}}>
                    <FlatList
                        data={selectedData.flatMap((option) => option.jobs)}
                        renderItem={({ item: job }) => (
                            <Recommended
                                onPress={() => handleSelectInterest(job)}
                                title={job.titleJob}
                                description={job.descriptionJob}
                                image={job.imageURIJob}
                            />
                        )}
                    />
                </View>
                    <Text style={styles.availableTextContainer}>Popular Careers</Text>
                <View style={{left: 24}}>   
                    <FlatList
                        data={cardsData.flatMap((option) => option.jobs)}
                        renderItem={({ item: job }) => (
                            <Available
                                onPress={() => handleSelectInterest(job)}
                                title={job.titleJob}
                                description={job.descriptionJob}
                                image={job.imageURIJob}
                            />
                        )}
                    />
                </View>     
                </ScrollView>
            ) : (
               <View style={{left: 24, top: 30, height: '100%'}}> 
                <FlatList
                    data={filteredJobs}
                    renderItem={({ item: job }) => (
                        <Available
                            onPress={() => handleSelectInterest(job)}
                            title={job.titleJob}
                            description={job.descriptionJob}
                            image={job.imageURIJob}
                        />
                
                    )}
                />
                </View>
            )}

            <Footer navigation={navigation} selectedOptions={selectedOptions} />
            <Image style={styles.searchOn} source={require('../../../assets/footer/searchOn.png')} />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
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
        display: 'flex',
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    searchContainer: {
        paddingHorizontal: 22,
        paddingVertical: 10,
    },
    searchText: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    searchBar: {
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderRadius: 9999,
        borderColor: '#D9D9D9',
        borderWidth: 1,
    },
    searchBarText: {
        color: '#1E1E1E',
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: '400',
    },
    recentTextContainer: {
        marginLeft: 24,
        marginVertical: 10,
        color: 'black',
        fontSize: 25,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    recommendedCareersContainer: {
        marginLeft: 30,
        marginVertical: 10,
        color: 'black',
        fontSize: 25,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    availableTextContainer: {
        marginLeft: 24,
        marginVertical: 10,
        color: 'black',
        fontSize: 25,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    searchOn: {
        position: 'absolute',
        width: 32,
        height: 32,
        bottom: 21,
        left: 199.2,
    },
});
