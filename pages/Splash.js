import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity}  from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class Splash extends Component{

constructor(props){
    super(props);
   setTimeout(() =>
    {
        this.props.navigation.navigate('');
    }, 1000); 
    
    
}
static navigationOptions = {
    title: 'Home',
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
        console.disableYellowBox =true;
        return(
          
                <ImageBackground source = {require('../Assets/qbk.jpg')} style = {Styles.bckImg}>
                <View style = {Styles.container}>
                <View style = {Styles.appName}>
                    <Text style={Styles.appText}>Prior The Safety</Text>
                 </View>
             
                 <View style = {Styles.btnContainer}>
                     <TouchableOpacity style = {Styles.btnStyles1} onPress = {() => this.props.navigation.navigate('Category')}>
                        
                         <Text style = {Styles.btnText} >Play</Text>
                      
                     
                     </TouchableOpacity>
                     <TouchableOpacity style = {Styles.btnStyles2} onPress = {() => this.props.navigation.navigate('About')}>
                     
                         <Text style = {Styles.btnText}>About Us</Text>
                    
                     </TouchableOpacity>
                
                 </View>
                 {/* <View style = {Styles.appName}>
                    <Text style={Styles.appText}>SafetY FirsT</Text> */}
                 </View>
             
              
                {/* </View> */}
                </ImageBackground>
       

               )
    }
}
const Styles = StyleSheet.create({
    container :{
        width:'100%',
        height:'100%',
         justifyContent:'center',
        alignItems:'center'
    },
    appName:{
        width:'95%',
        height:'20%',
        backgroundColor:'#db2138',
        borderRadius: 10,
        borderWidth: 5,
        shadowColor: 'white',
        shadowOpacity: 5,
        shadowOffset:{height:5,width:2},
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        width:'100%',
        height:'60%',
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    btnStyles1 :{
        width:'70%',
        height:'20%',
        backgroundColor:'#f4c609',
        // margin:'5%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:'30%',
        shadowOffset:{height:2,width:3},
        shadowOpacity:0.9,
        borderBottomEndRadius:40,
        borderTopEndRadius:40,
        borderWidth: 3

    },
    btnStyles2 :{
        width:'70%',
        height:'20%',
        backgroundColor:'#f4c609',
        margin:'5%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'35%',
        shadowOffset:{height:2,width:3},
        shadowOpacity:0.9,
        borderBottomLeftRadius:40,
        borderTopLeftRadius:40,
        borderWidth: 3


    },
    appText:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        shadowOffset:{width:3, height:3},
        shadowColor:'white',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        justifyContent:'center' ,
        textAlign:'center'
    },
    btnText:{
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'cochin',
       // color:'white',
        shadowOffset:{width:3, height:3},
        shadowColor:'red',
        shadowOpacity:1,
    },
    bckImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
    },
    btnbck:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    appText:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        shadowOffset:{width:3, height:3},
        shadowColor:'#5454f0',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        marginBottom : -20
    },
    
})