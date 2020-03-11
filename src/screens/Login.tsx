import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'
import { getAllCharactersAction } from '../store/actions/charactersActions/charactersActions'

type LoginProps = {
    getAllCharacters: typeof getAllCharactersAction;
    allCharacters: []
}

const Login: React.FC<LoginProps> = ({getAllCharacters, allCharacters}) =>{
    useEffect(() => {
        getAllCharacters()
    })
    
    return(
        <View></View>
    )
}

const mapStateToProps = state => ({
    allCharacters: state.characters.allCharacters
})

const mapDispatchToProps = dispatch => ({
    getAllCharacters: () => dispatch(getAllCharactersAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)