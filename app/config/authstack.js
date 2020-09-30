import React from 'react';
import AuthContext from './authcontext';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import aws_exports from './aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreens, HomeScreens } from './router';
import Welcome from '../components/common/welcome';


Amplify.configure(aws_exports);

export default class AuthStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userToken: 'undefined',
            user: {
                name: '',
                said: null,
                given_name: '',
                phone_number: '',
                phone_country_code: ''
            },
            // device: device,
            // os: os,
            // signOut: this.signOut,
            // updateUser: this.updateUser
        };
    }

    // async componentDidMount() {
    // Auth.currentAuthenticatedUser()
    //     .then((res) => {
    //         let said = 'custom:said';
    //         let countrycode = 'custom:phone_country_code';
    //         setTimeout(() => {
    //             this.setState({
    //                 user: {
    //                     name: res.attributes.name,
    //                     said: res.attributes[said],
    //                     given_name: res.attributes.given_name,
    //                     phone_number: res.attributes.phone_number,
    //                     phone_country_code: res.attributes[countrycode]
    //                 },
    //                 userToken: res.signInUserSession.idToken.jwtToken
    //             })
    //         }, 1500)
    //     })
    //     .catch((e) => {
    //         if (e == 'not authenticated') {
    //             setTimeout(() => {
    //                 this.setState({
    //                     userToken: null
    //                 })
    //             }, 1500)
    //         }
    //     })
    // }

    signOut = () => {
        Auth.signOut()
            .then((res) => {
                this.setState({
                    userToken: null,
                })
            })
            .catch(res => console.log(res))
    }

    updateUser = (res) => {
        let token = res.signInUserSession.idToken.jwtToken;
        let said = 'custom:said';
        let countrycode = 'custom:phone_country_code';
        this.setState({
            user: {
                ...this.state.user,
                name: res.attributes.name,
                said: res.attributes[said],
                given_name: res.attributes.given_name,
                phone_number: res.attributes.phone_number,
                phone_country_code: res.attributes[countrycode]
            },
            userToken: token,
        })
    }

    render() {
        const authProviderValue = {
            ...this.state,
        };
        return (
            <AuthContext.Provider value={authProviderValue}>
                {this.state.userToken === undefined ?
                    <Welcome />
                    :


                    <NavigationContainer>

                        {this.state.userToken === null ?
                            <LoginScreens />
                            :
                            <HomeScreens />
                        }

                    </NavigationContainer>


                }
            </AuthContext.Provider>
        );
    }
}