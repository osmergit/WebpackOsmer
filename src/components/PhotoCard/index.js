import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE = 'https://gravatar.com/avatar/8e04be7dab487d77f16969fd3e0d45d4 '
export const PhotoCard = ({ id, likes = 0, src=DEFAULT_IMAGE }) =>  {
          return (
                  <article>
                      <a href = {'/detail/${id}'}>
            <ImgWrapper>

                  <Img src = {src} />

             </ImgWrapper>
                              </a>
                     <Button>
                             < MdOutlineFavoriteBorder size = '35px' /> {likes} likes!
                     </Button>
                  </article>
          ) }