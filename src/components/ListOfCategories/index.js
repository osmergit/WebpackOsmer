import React,{useState} from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'
export const ListOfCategories = () => {
        //const [categories1, setCategories ] = useState (categories )
        return (
                <div>
                <List>
                {
               [0,1,2,3,4].map(cat => {
                       return(
                       <Item key = {cat.id} > <Category
                         emoji = {cat.emoji} cover = {cat.cover} /> </Item>)
                })}
                </List>
                </div>
        );

}