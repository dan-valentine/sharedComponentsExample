import React from 'react';
import './LoadingScreen.css'

const LoadingScreen = props => 
{
    if(props.isLoading){
     return <div class="spinner"/>
    }
    return null;
}

export default LoadingScreen;
