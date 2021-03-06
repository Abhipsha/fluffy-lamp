import React from 'react';
import {Content, Container} from 'native-base';
import {connect} from 'react-redux';
import LoginActions from '../redux/LoginRedux';
import ShopActions from '../redux/ShopRedux';
import StoreListModal from '../components/StoreListModal';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
    componentWillMount() {
        this.props.getShopList();
    }
    render() {
        return (
            <Container style={{flex:1}} >
                {this.state.showModal && <StoreListModal onClose={()=>this.setState({showModal:false})} onSelectStore={(shopId)=>{this.setState({showModal:false}); this.props.navigation.navigate('Shop', {shopId})}} />}
                <View style={{flex:7, alignItems:'center', justifyContent:'center', marginTop:30 }} >
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Settings')}} >
                        <Image source={require('../assets/images/user-avatar.png')}
                            style={{height:200, width: 200, borderRadius: 100 }} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
                    <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F'}} >{ _.get(this.props,'user.displayName','Display name')}</Text>
                </View>
                <View style={{flex:10, alignItems:'center', justifyContent:'center' }} >
                    <View style={{flex:3, alignItems:'center', justifyContent:'center'}} >
                        <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:20, color:'#44F'}} >your wallet balance is: </Text>
                        <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:40, color:'#44F'}} >₹{_.get(this.props,'user.walletBalance',0)}</Text>
                    </View>
                    <View style={{flex:3}}>
                        <TouchableOpacity 
                            onPress={()=>{this.setState({showModal:true})}}
                            style={{borderColor:'#44F', borderWidth:2, height:100, width:100, alignItems:'center', justifyContent:'center', borderRadius:50 }}
                        >
                            <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:18, color:'#44F'}} >Shop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.login.currentUser,
    };
}

const bindActions = dispatch => {
    return {
        getShopList:()=>dispatch(ShopActions.getShopList())
    };
}

export default connect(mapStateToProps, bindActions)(HomeScreen);