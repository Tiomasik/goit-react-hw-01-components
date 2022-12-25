import styled from '@emotion/styled'

export const CardFriendsStyle = styled.li`

    border: 1px solid tomato;

`

export const CardFriendsSpanStyle = styled.span`
    display: inline-block;

    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid #000000;
    background-color: ${props => {
        if (props.isOnline) {
            return 'green'
        } else {
            return 'red'
        }
        }};
`

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }