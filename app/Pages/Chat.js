import { Pressable, StyleSheet, Text, View, Animated, LogBox, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import ChatText from '../components/ChatText'
import { TextInput } from 'react-native-gesture-handler'


const Chat = ({navigation}) => {
    
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications

    const [message, setMessage] = useState('')
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);


    const handleSubmit = () => {
        if (message.trim() === '') return; // Avoid submitting empty messages
    
        // Save the current message to display in Text component
        setSubmittedMessage(message);
        setMessage('');
    
        // Add "Give me a second..." message
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), content: 'Give me a second...' },
        ]);
    
        // Add "Test" message after a few seconds
        setTimeout(() => {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now(), content: 'In a resume, "achievements" refer to the specific successes and accomplishments you have attained in your professional, educational, or personal life. ' },
          ]);
        }, 3000); // 3000ms = 3 seconds
      };




  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>AI Assistant</Text>
            <Pressable style = {{position: 'absolute', left: -10,}}onPress={()=> navigation.goBack('')}>
            <Ionicons name  = 'chevron-back-outline' size={50} color={'white'}/> 
            </Pressable>

        </View>
            <View style = {[styles.chatBubble, styles.border, styles.boxShadow]}>
                <ChatText style = {styles.bubbleText} styleText = {styles.bubbleText} content = {'Hey, I am an AI assistant here to help you.'}/>


            </View>

                <Text style = {[{top: 6, right: 2}, styles.whiteBubble, ]}> {message || submittedMessage} </Text>

                <View style ={{height: 90,}}>

                </View>

                {chatMessages.map((chatMessage) => (
          <View key={chatMessage.id}>
            <ChatText style = {[styles.blueBubble, styles.boxShadow, styles.border]} content={chatMessage.content} />
          </View>
        ))}

        <View style={{position: 'absolute',top:750}}>
            <TextInput 
            style = {[styles.textInput, styles.textBorder]}
            keyboardType='default'   
            value={message}            
            onChangeText={(text)=>setMessage(text)}
            onSubmitEditing={handleSubmit}
            autoComplete='false'
            autoCorrect='false'
            />
            <View style = {styles.sendButton}>
                <Image style={{left: 20, bottom: 2 }} source = {require('../../assets/icons-white/send.png')}/> 
            </View>
        </View>

    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
container:{
    height: '100%',
    backgroundColor:'white'
},
header:{
    width: 430, 
    height: 82, 
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
    display: 'inline-flex'
},
headerText:{
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700',
    wordWrap: 'break-word'
},
chatBubble:{
    borderRadius: 20,
    top: 18.96,
    left: 12.26,
    width: 172.10, 
    height: 80, 
    backgroundColor: '#005FEE', 
},
border:{
    borderWidth: 3.12,
    borderColor: 'white',
    borderStyle: 'solid'
},
boxShadow:{
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: 4,
    shadowRadius: 4
},
bubbleText:{ 
    top: 9.48,
    left: 2,
    width: 150.65, 
    height: 66.37, 
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'Nunito', 
    fontWeight: '500', 
    lineHeight: 22.40,
    wordWrap: 'break-word'
},
textInput:{
    position:'absolute',
    top: 0,
    width: 427, 
    height: 48, 
    paddingLeft: 16, 
    paddingRight: 16, 
    paddingTop: 12, 
    paddingBottom: 12, 
    backgroundColor: 'white', 
    borderRadius: 9999, 
    overflow: 'hidden', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    gap: 8, 
    display: 'inline-flex'
},
textBorder:{
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: 'solid'
},
whiteBubble:{
    padding: 7,
    top: 50,
    left: 250,
    width: 170,
    backgroundColor: 'white',
    borderWidth: 3.12,
    borderColor: 'black',
    borderRadius:20,
},
blueBubble:{

    marginBottom: 30,
    padding: 7,
    paddingRight: 10,
    borderRadius: 20,
    top: 18.96,
    left: 12.26,
    width: 230, 
    backgroundColor: '#005FEE', 
},
sendButton:{
    width: 70, 
    height: 35,
    backgroundColor: '#005FEE', 
    borderRadius: 19,
    top: 7,
    left: 350,

}
})