import styled from '@emotion/styled'

export const CardFriendsStyle = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: flex-start;
    padding-left: 20px;

    width: 300px;
    height: 80px;

    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 20px 0;

    img {
       width: 48px; 
    }
`

export const OnlineStyle = styled.span`
    display: inline-block;

    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => {
        if (props.isOnline) {
            return 'green'
        } else {
            return 'red'
        }
        }};
`
export const NameStyle = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 0;
`