import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Br} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 export default class AboutVC extends Component{
    static navigationOptions = {
        title: 'About The App',
        //Sets Header text of Status Bar
        headerStyle: {
          backgroundColor:'white',
          //Sets Header color
        },
        headerTintColor: 'black',
        //Sets Header text color
        headerTitleStyle: {
          fontWeight: 'bold',
          //Sets Header text style
        },
      };
     render(){
         return(
            
                 <View style = {styles.maincontainer}>
                    
                    
                    
                    
                    
                     <ImageBackground source = {require('../Assets/qbk.jpg')}style = {styles.bck_img}>
                    
                    
                  <View style ={{height:'90%',width:'95%',backgroundColor:'white',
                  
                justifyContent:'center',alignItems:'center',
                borderRadius: 20,
                borderWidth : 10,
               // backgroundColor : 'yellow',
                }} >
                    
                    
                      <Text style = {{width:'80%', fontSize: 20, textAlign:'justify'}}>
                      A very simple, amazing and ads free app togather and Music N Dance Fun about music and dance fields . {"\n"} {"\n"}

The user will get questions related to the selected levels. {"\n"}{"\n"} With each question, there will be four options related to the selected level.

If the answer selected by the user is correct then the answer will be marked as correct and the user will get the +1 mark. {"\n"}{"\n"}

If the answer selected by the user is incorrect then the answer will be marked as incorrect and the user will get 0 marks. {"\n"}{"\n"}

Download the app and increase more knowledge.

                     </Text>
            </View>
                     </ImageBackground>
                 </View>
          
         )
     }
 }

 const styles =StyleSheet.create({
     maincontainer:{
         width:'100%',
         height:'100%',
         justifyContent :'center',
         alignItems:'center',
         backgroundColor:'blue'

     },
     bck_img:{
         width:'100%',
         height:'100%',
         resizeMode:'cover',
         justifyContent:'center',
         alignItems:'center'
     }
 })