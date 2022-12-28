import styled from '@emotion/styled'

export const CardStyle = styled.li`
    width: calc(100% / 5);
    background-color: ${getRandomHexColor};
    height: 100px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}