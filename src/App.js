import React from 'react'
import {ApolloClient, HttpLink, gql} from '@apollo/client'
import {Apps} from './components/ListOfObjects'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { GlobalStyle }  from './GlobalStyles'
import { Logo } from './components/Logo'
import { Main } from './components/ListOfVideos'
//const client = new ApolloClient({
  //   link: new HttpLink({
    //         uri: 'http://ec2-3-89-234-138.compute-1.amazonaws.com:8080/'
//     })
//})


export const App = () => (
        <div>
        <Logo />
        <Main />
     
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
        </div>
        )