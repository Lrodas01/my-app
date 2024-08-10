import { Text, View, StyleSheet, Animated } from 'react-native'
import React, { Component } from 'react'

export default class ChatText extends React.Component {
    animateValues = [];
    constructor(props) {
        super(props);

        const textArr = props.content.trim().split(' ');
        textArr.forEach((_, i)=>{
            this.animateValues[i] = new Animated.Value(0);
        })
        this.textArr = textArr;
    }

    componentDidMount() {
        this.animated()
    }

    animated = (toValue = 1) => {
        const animations = this.textArr.map((_, i) => {
            return Animated.timing(this.animateValues[i], {
                toValue, 
                duration: 500,

            })
        });
        Animated.stagger(100, animations).start();
    }




  render() {
    return (
      <View style = {[this.props.style, styles.textWrapper]}>
        {this.textArr.map((word, index)=>{  
          return <Animated.Text 
          key = {`${word}-${index}`}

          style = {[this.props.textStyle, {color: 'white', top: 9.48, left: 11.53},
            {opacity: this.animateValues[index],
             transform: [{
                translateY: Animated.multiply(

            // This makes the text pop from the top or below, setting the value to 0 lets
            //  the text appear from the right
            
                    this.animateValues[index],
                    new Animated.Value(0)
                )
             }]
            }
          ]}>
            {word}
            {`${index < this.textArr.length ? ' ' : ' '}`}
            </Animated.Text>
            }
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textWrapper:{
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
})