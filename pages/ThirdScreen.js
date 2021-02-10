
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
import {DataSet3} from '../pages/DataSet3'
//import LevelVC from './LevelVC'
//import { DataSet4 } from './DataSet4';
class LevelFirst extends Component {

    state = {
        Questions : 0,
        options : [],
        score : 0,
    }
    static navigationOptions = {
        title: 'Level 3',
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
                questions: DataSet3[Questions].question,
                options : DataSet3[Questions].options,
                answers : DataSet3[Questions].answer
            }
        })
    }

    componentDidMount (){
        this.loadQuiz ();
    }

    nextQuestionHandler = () => {
        const {Questions}= this.state
        if (this.state.Questions <= DataSet3.length-2){
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
                questions: DataSet3[Questions].question,
                options : DataSet3[Questions].options,
                answers : DataSet3[Questions].answer
            }
        })
    }
    else if (Questions==DataSet3.length-1){
    
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
        const {Questions, questions, options, score, setAnswer, Selected} = this.state
        return(
         
              <ImageBackground source = {require('../Assets/qbk4.jpg')} style = {styles.bckimg}>
               
            <View style = {styles.bckview}>
                
        
            <View style = {styles.questionview}>
                <Image style ={{height:'50%',  shadowOffset :{width:2, height:3},
    shadowColor:'white',
    shadowOpacity: 0.6,width:'100%',resizeMode:'contain'}}
                source ={require('../Assets/qblb.png')}></Image>
                
              <Text style = {{color: 'white', fontSize:20,fontFamily:'Cochin' ,textAlign:'center', width:'90%',  fontWeight:'bold', }}>{questions}</Text>
        
            </View>
            <View style = {styles.bodyview}>
                {options.map((option,index) => (

                    <TouchableOpacity style = {styles.optionBtnn}
                    key = {option.id} onPress = {() => {this.computeAns(index); this.nextQuestionHandler()}}
                    
                    >
                  
            <Text style = {styles.optionBtn}
                key = {option.id} onPress = {() => {this.computeAns(index); this.nextQuestionHandler()}}>  
                {option}
            </Text> 
            
          
            </TouchableOpacity>
            
        ))}

        <View style = {styles.scoreView}>
                <Text style = {{ fontFamily:'Cochin',fontSize: 35 }}>Score: {score}</Text>
                
                </View>

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
        //justifyContent:'center',
        alignItems:'center'

    },
    questionview :{
        width:"95%",
        height:"30%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#194D33',
        marginTop: 10,
        shadowOffset :{width:4, height:1},
        shadowColor:'white',
        shadowOpacity: 0.9,
        marginBottom:'17%',
       // borderRadius:5,
        borderBottomLeftRadius :0,
        borderBottomColor : 'white',
        borderWidth : 10,
       
    },
    bckview:{
        width:"100%",
        height:"100%",
        // backgroundColor: 'orange',
        alignItems:"center",
        marginTop:'5%'
        

    },
    bodyview :{
        width:"90%",
        height:"45%",
        alignItems:"center",
        justifyContent:'center'

    },
    optionBtnn:{
        width:"100%",
        height:"22%",
        margin: 8,
        justifyContent:"center",
        // marginLeft: 0.01,
        alignItems:"center",
        shadowOffset:{width:5, height:5},
        shadowColor:'white',
        shadowOpacity:0.7,
        borderBottomLeftRadius :0,
        borderBottomColor : 'white',
        borderWidth : 10,
        backgroundColor : 'pink',
    },
  scoreView:{
    width:"80%",
    height:"18%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white',
    borderWidth: 3,
    marginTop:'10%',
    borderRadius:40,
    shadowOffset :{width:2, height:3},
    shadowColor:'white',
    shadowOpacity: 0.6,
    // marginLeft:'50%',
    //flexDirection : 'row'
    
},
img:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
    justifyContent:'center',
    alignItems:'center'
},
optionBtn:{
    color:'#292938',
    fontSize:20,
    textAlign:'center',
    width:'90%',
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
    alignItems:'center'
},
qsimg:{
    width:'60%',
    height:'100%'
},
})