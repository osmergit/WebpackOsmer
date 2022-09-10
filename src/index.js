import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql} from '@apollo/client'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'

import { App } from './App'
//
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App tab="home" />)
const client = new ApolloClient({
                cache: new InMemoryCache(),
                link: new HttpLink({
                                        uri: 'http://localhost:8080/'
                                })
})
//ReactDom.render(
//      <ApolloProvider client={client}>
//      <App />
//      </ApolloProvider>, document.getElementById('app'))

console.log("Mi proyecto con React Funciona")