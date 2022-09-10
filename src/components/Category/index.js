import React from 'react'
import { Anchor, Image} from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?'}) => (
        <Anchor href={path}>
        <Image src={cover} />
        {emoji}
        <div>Hello World 1 </div> <div> Hello World 2 </div>
        </Anchor>
)