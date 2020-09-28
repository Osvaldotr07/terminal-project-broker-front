import styled from 'styled-components'

export const ImageWrapper = styled.figure`
  width: 100%;
  height: 80vh;
  overflow:hidden;
  object-fit: cover;
  padding:0;
  margin: 0
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 3em;
`
export const TitleArticle = styled.h1`
  color: #000;
  font-size: 2.5em;
  margin-bottom: 15px;
  font-weight: bold;
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
`

export const Description = styled.p`
  font-size: 16px;
  color: #565656;
  line-height: 24px;
`