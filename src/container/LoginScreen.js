import React from 'react';
import {Input, Button, Item, Icon, Content} from 'native-base';
import {View, Text, StatusBar, Platform} from 'react-native';
import {DangerZone} from 'expo';

const {Lottie} = DangerZone;

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.animation.play();
    }

    render() {
        let scale = Platform.OS==='ios' ? 0.75 : 3;
        return (
            <Content style={{flex:1, backgroundColor:'#44F'}} >
                <View style={{backgroundColor:'#44F',  flex:1, alignItems: 'center', justifyContent:'center'}} >
                    <StatusBar hidden />
                    <View style={{flex:1}} >
                        <Lottie
                            ref={animation => {
                            this.animation = animation;
                            }}
                            style={{height: 250, width: 250, transform:[{scale}]  }}
                            source={require('../assets/animation/soda_loader.json')}
                        />
                        <Text style={{fontFamily:'Nunito-ExtraBold', color:'white', fontSize:28}} >Fluffy Lamp Login</Text>
                    </View>
                    <View style={{flex:1, marginTop:15}} >
                        <View  style={{flex:1, width:'80%'}}>
                            <Item rounded style={{width: '100%', backgroundColor:'white'}}>
                                <Icon active name='person' style={{color:"#CCC", marginLeft: 15}} />
                                <Input placeholder='email address' placeholderTextColor="#CCC"  style={{color:'#BBB'}} />
                            </Item>

                            <Item rounded style={{width: '100%', backgroundColor:'white', marginTop:20}}>
                                <Icon active name='lock' style={{color:"#CCC", marginLeft: 15}} />
                                <Input secureTextEntry placeholder='password' placeholderTextColor="#CCC"  style={{color:'#AAA'}} />
                            </Item>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}} >
                                <View style={{flex:1, alignItems:'flex-end'}} >
                                    <Text style={{color:'white'}} >New User ? </Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Button transparent onPress={()=>{this.props.navigation.navigate('Register')}} >
                                        <Text style={{textDecorationStyle:'solid', textDecorationColor:'white', textDecorationLine:'underline', color:'white' }} >Register Here</Text>
                                    </Button>
                                </View>
                                
                                </View>
                            <Button 
                                rounded
                                style={{alignSelf:'center', backgroundColor:'white', marginTop: 30}}
                                onPress={()=>{this.props.navigation.navigate('Home')}}
                            >
                                <Text style={{ paddingLeft: 30, fontFamily:'Nunito-Regular', color:'#AAA', fontSize:18}} >Login</Text>
                                <Icon name='ios-arrow-forward-outline' style={{color:'#CCC', paddingRight:10}} />
                            </Button>
                        </View>
                    </View>
                </View>
            </Content>
        );
    }
}

export default LoginScreen;