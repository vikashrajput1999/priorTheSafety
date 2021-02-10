import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView}  from 'react-native';

export default class MainScreen extends Component {

    constructor(props){
        super(props);
       setTimeout(() =>
        {
            this.props.navigation.navigate('');
        }, 1000); 
    }   
    

    static navigationOptions = {
        title: 'Category',
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
        
                <ImageBackground source = {require('../Assets/qbk.jpg')} style = {Styles.bgImg}>

                 
                 
                <View style = {Styles.container}>
                < Image source= {require('../Assets/qblb.png')} 
                 style={Styles.icnImg}/> 

                 <View  style = {Styles.btnContainer}>
                     
                     <TouchableOpacity style = {Styles.btnStyles1} onPress = {() => this.props.navigation.navigate('Level1')}>
                        
                         <Text style = {Styles.btnText}>Level 1</Text>
                        
                     </TouchableOpacity>
                     <TouchableOpacity style = {Styles.btnStyles2} onPress = {() => this.props.navigation.navigate('Level2')}>
                     
                         <Text style = {Styles.btnText2}>Level 2</Text>
                        
                     </TouchableOpacity>
                     <TouchableOpacity style = {Styles.btnStyles1} onPress = {() => this.props.navigation.navigate('Level3')}>
                    
                         <Text style = {Styles.btnText}>Level 3</Text>
                        
                     </TouchableOpacity>
                     <TouchableOpacity style = {Styles.btnStyles2} onPress = {() => this.props.navigation.navigate('Level4')}>
                    
                         <Text style = {Styles.btnText2}>Level 4</Text>

                         
                       
                     </TouchableOpacity>
                    
                 </View>
                 
                </View>
                
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
    TextContainer:{
        width:'95%',
        height:'30%',
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
      //  marginTop:'-30%'
    },
    btnContainer:{
        width:'95%',
        height:'70%',
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'-10%',
       // marginLeft:'-20%'
    },
    btnStyles1 :{
        width:'80%',
        height:'18%',
        backgroundColor:'#4a148c',
        borderWidth: 3,
        borderTopLeftRadius: 40,
        borderTopEndRadius:40,
        borderBottomStartRadius:40,
        margin:'2%',
        justifyContent:'center',
        alignItems:'center',
       // marginRight:'30%',
        shadowOffset:{width:5, height:5},
        shadowColor:'yellow',
        shadowOpacity:0.7
    },
    btnStyles2 :{
        width:'80%',
        borderTopEndRadius:50,
        borderWidth: 3,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        height:'18%',
        backgroundColor:'#f0e68c',
        margin:'2%',
        justifyContent:'center',
        alignItems:'center',
       // marginLeft:'30%',
        shadowOffset:{width:5, height:5},
        shadowColor:'purple',
        shadowOpacity:0.7

    },
    appText:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        shadowOffset:{width:3, height:3},
        shadowColor:'#d61a39',
        shadowOpacity:0.7,
        marginTop:'-20%',
        fontFamily:'Cochin'
    },
    btnText:{
        fontSize:35,
        fontWeight:'bold',
        color:'white',
        shadowOffset:{width:3, height:3},
        shadowColor:'yellow',
        shadowOpacity:0.7,
        fontFamily:'Cochin'
        
    },
    btnText2:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        shadowOffset:{width:3, height:3},
        shadowColor:'purple',
        shadowOpacity:0.7,
        fontFamily:'Cochin'
        
    },
    bgImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    btnImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center'
    },

    icnImg:{
width: '30%',
height: '20%',
justifyContent: 'center',
marginTop: 5,

    }
    
})