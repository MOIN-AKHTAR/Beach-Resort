import Styled from 'styled-components'

export const CustomHero=Styled.div`
min-height: 60vh;
background: url(${props=>props.img}) center/cover no-repeat;
display: flex;
justify-content: center;
align-items: center;
`