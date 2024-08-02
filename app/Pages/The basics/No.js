import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import Template from '../../components/TemplateOne';

const templates = [
  { id: 'TemplateOne', source: require('../../../assets/templates/template1.png') },
  { id: 'TemplateTwo', source: require('../../../assets/templates/template2.png') },
  { id: 'TemplateThree', source: require('../../../assets/templates/template3.png') },
  { id: 'TemplateFour', source: require('../../../assets/templates/template4.png') }
];

const No = ({ navigation }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelect = (template) => {
    setSelectedTemplate(template.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The Basics</Text>
      </View>
      <View style={[styles.loadingBarContainer, styles.shadowProp]}>
        <View style={styles.loadingBar}></View>
      </View>
      <View style={{ height: 30 }}></View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: -10 }}>
        <View>
          <Text style={styles.templatesText}>Well here's some templates for you to get started</Text>
        </View>
        <View style={styles.imageContainer}>
          {templates.map((template) => (
            <Template
              key={template.id}
              template={template}
              onSelect={handleSelect}
              isSelected={selectedTemplate === template.id}
            />
          ))}
        </View>
      </ScrollView>
      <View style={[styles.footer, styles.shadowUp]}>
        <Pressable
        style={styles.unsureButton}
        onPress = {()=>navigation.navigate('ResumeBasics')}
        >
            <Text style ={styles.unsureText}>Not sure what to do?</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonNext, !selectedTemplate && styles.buttonNextOff]}
          onPress={() => navigation.navigate(selectedTemplate)}
          disabled={!selectedTemplate}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

      </View>
    </View>
  );
};

export default No;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    width: 430,
    height: 66,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#005FEE',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex',
  },
  headerText: {
    width: 345,
    color: 'white',
    fontSize: 25,
    fontFamily: 'Nunito',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  loadingBarContainer: {
    top: 21,
    left: 30,
    width: 370,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 27.5,
  },
  loadingBar: {
    width: 148,
    height: 55,
    backgroundColor: '#005FEE',
    borderRadius: 25.5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  templatesText: {
    top: 42,
    left: 24,
    width: 382,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  imageContainer: {
    top: 89,
    left: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonYes: {
    bottom: 54,
    left: 220,
    width: 192,
    height: 54,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#005FEE',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex',
  },
  buttonText: {
    width: 298,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Nunito',
    fontWeight: '900',
    wordWrap: 'break-word',
  },
  footer: {
    width: 430,
    height: 118,
    paddingTop: 16,
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
    display: 'inline-flex',
  },
  shadowUp: {
    shadowColor: '#171717',
    shadowOffset: { height: -12 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  buttonNext: {
    bottom: 64,
    left: 200,
    width: 192, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#005FEE', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
  },
  buttonNextOff: {
    bottom: 64,
    left: 200,
    width: 192, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#A9C5EE', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
  },
  unsureButton:{
    right: 10,
    width: 192, 
    height: 54, 
    paddingTop: 16, 
    paddingBottom: 17, 
    paddingLeft: 24, 
    paddingRight: 24, 
    backgroundColor: '#005FEE', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
  },
  unsureText:{
    width: 200, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 15, 
    fontFamily: 'Nunito', 
    fontWeight: '900', 
    wordWrap: 'break-word'
  },
});
