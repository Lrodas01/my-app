import { Unmatched } from 'expo-router';
import Welcome from './Pages/welcome'
import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef} from 'react'
// import Home from './Pages/login'
import axios from 'axios';
import Jobs from './components/jobs'

export default function app() {

  const fetchApi = async () => {
      try {
    const res = await axios.get('https://localhost:3200/')
    console.log(res.data)
      } catch (error) {
          console.log (error.message);
      }

  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <Welcome/>
  )
}