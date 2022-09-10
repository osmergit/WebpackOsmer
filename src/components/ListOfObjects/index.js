import {ApolloClient, gql, useQuery} from '@apollo/client'

const query = gql `
query {
        allPersons {
                id
                name
                phone
                address {
                        street
                        city
                }
        }
   }
`
 export function Apps() {
         const result = useQuery( ALL_PERSONS)
         console.log(result)
        return (
                <div className = "Apps">
             <header className  = "App-header" >
                <p> GRAPHQL  + REAACT </p>
                </header>
                </div>
        )}
//export default Apps