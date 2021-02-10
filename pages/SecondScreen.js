
import React, {Component} from 'react';
import {Text, 
    View, 
    StyleSheet, 
    SafeAreaView,
    Image,
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity} from 'react-native';
import {Dataset2} from '../pages/Dataset2'
//import LevelVC from './LevelVC'
//import { DataSet4 } from './DataSet4';
class LevelFirst extends Component {

    state = {
        Questions : 0,
        options : [],
        score : 0,
    }
    static navigationOptions = {
        title: 'Level 2',
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

    loadQuiz = () => {
        const {Questions} = this.state;
        this.setState(() => {
            return {
                image : Dataset2[Questions].image,
                questions: Dataset2[Questions].question,
                options : Dataset2[Questions].options,
                answers : Dataset2[Questions].answer
            }
        })
    }

    componentDidMount (){
        this.loadQuiz ();
    }

    nextQuestionHandler = () => {
        const {Questions}= this.state
        if (this.state.Questions <= Dataset2.length-2){
        this.setState ({
            Questions: this.state.Questions + 1
        })
    }
    }


componentDidUpdate (prevProps, prevState) {
    const {Questions} = this.state;
    if (this .state.Questions !== prevState.Questions){
        this.setState (() => {
            return {
                image : Dataset2[Questions].image,
                questions: Dataset2[Questions].question,
                options : Dataset2[Questions].options,
                answers : Dataset2[Questions].answer
            }
        })
    }
    else if (Questions==Dataset2.length-1){
    
        setTimeout(() => {
            Alert.alert(  
                'Quizz Over',  
                'press ok to finish',
              
                [  
                
                  
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},  
                ]  
            ); 
            }, 5000);
   
    }
}
computeAns = (index) => {
    const {answers}=this.state
    if (answers === index){
        alert('correct')
        this.setState({
            score: this.state.score +1
        })
    }
    else {
        alert('incorrect')
    }
}



    render() {
        const {Questions, questions, options, score,image} = this.state
        return(
                     

           
             <ImageBackground source = {require('../Assets/qbk2.jpg')} style = {styles.bckimg}>

<View style = {styles.questionview}>
               
               <Text style = {{ fontSize:25, textAlign:'center', width:'95%',  fontWeight:'bold', fontFamily:'Cochin' }}>{questions}</Text>
             
             </View>

                <View style = {styles.qsImg}>
                <Image source = {image} style = {styles.qsImgg}></Image>
                </View>
            
            <View style = {styles.bodyview}>
                {options.map((option,index) => (

                    <TouchableOpacity style = {styles.optionBtnn} onPress = {() => {this.computeAns(index); this.nextQuestionHandler()}}>
            <Text style = {styles.optionBtn}
                key = {option.id} >  
                {option}
            </Text> 
            
            
            </TouchableOpacity>
        ))}
        
        <View style = {styles.scoreView}>
                <Text style = {{ color: 'black',fontSize: 35 }}>Score:{score}</Text>
                
                </View>

            </View>
            </ImageBackground>


        )
    }
}

export default LevelFirst;




const styles = StyleSheet.create ({
    mainviewstyle:{
        width:"100%", 
        height:"100%",
        justifyContent:'center',
        alignItems:'center',


    },
    questionview :{
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10,
        shadowOffset :{width:2, height:3},
        shadowColor:'black',
        shadowOpacity: 0.6,
        marginBottom:"5%",
        backgroundColor:'white',
        borderWidth : 4,
        borderColor : 'orange',
    },
    bckview:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        //justifyContent:'center'
        
        backgroundColor:'orange',


    },
    bodyview :{
        width:"95%",
        height:"45%",
        alignItems:"center",
        justifyContent:'center'

    },
    optionBtnn:{
        width:"85%",
        height:"22%",
        margin: 5,
        justifyContent:"center",
        alignItems:"center",
        shadowOffset:{width:5, height:5},
          shadowColor:'black',
          shadowOpacity:0.7,
          backgroundColor:'#fef3bd',
          borderBottomEndRadius:10,
          borderBottomStartRadius:10,
          borderWidth : 7,
          borderTopColor: 'white',
          borderBottomColor: 'yellow',
          borderLeftColor: 'blue',
    },
scoreView:{
    width:"80%",
    height:"18%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white',
    marginTop:'1%',
   borderRadius: 40,
   borderWidth: 3,
    shadowOffset :{width:2, height:3},
    shadowColor:'white',
    shadowOpacity: 0.6,
    // marginLeft:'50%',
    //flexDirection : 'row'
    // marginBottom:'0.01%'
},
img:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
    justifyContent:'center',
    alignItems:'center',
    borderColor : 'black',
    flexDirection:'row',
    borderWidth : 40,
    
},
optionBtn:{
    color:'black',
    fontSize:22,
    textAlign:'center',
    width:'85%',
    fontWeight:'bold',
    fontFamily:'Cochin'
},
bckimg:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
},
quesbckimg:{
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems:'center',
   

},

btnImg:{
    width:'20%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
},
qsImg:{
    width:'85%',
    height:'25%',
    alignSelf:'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'blue',
    marginBottom:'10%',
    shadowOffset :{width:2, height:3},
    shadowColor:'yellow',
    shadowOpacity: 0.6,
    borderWidth : 8,
    
},
qsImgg:{
    width:'100%',
    //marginLeft: 50,
    alignSelf:'center',
    height:'100%',
    resizeMode:'center',
    justifyContent:'center',
    alignItems:'center',
    shadowOffset :{width:2, height:3},
    shadowColor:'orange',
    shadowOpacity: 0.6,
}
})