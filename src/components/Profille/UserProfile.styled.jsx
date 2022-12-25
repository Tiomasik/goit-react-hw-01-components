import styled from '@emotion/styled'

export const Profile = styled.div`
    width: 400px;
    height: 422px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    padding-top: 20px;
    background-color: bisque;
    border: 1px solid tomato;
    border-radius: 5px;
    margin-bottom: 30px;

    img {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 200px;
        margin-bottom: 30px;
        border-radius: 100%;
        background-color: grey;
    }

    p {
        margin: 0;
        text-align: center;
        font-size: 26px;
        color: grey;

        :not(:last-child) {
            margin-bottom: 10px;
        }

        :nth-of-type(1) {
            color: black;
            font-weight: 500;
        }
    }
`

export const Discription = styled.div`
    margin-bottom: 30px;
`

export const Status = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;

    width: 100%;

    span {
       display: block;
       text-align: center;
       color: grey;

       :last-child {
            color: black;
            font-weight: 500;
        }
    }

    li {
        width: calc(100% / 3);
        height: 50px;

        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        background-color: lightgrey;
        border: 1px solid grey;
        border-radius: 5px;
    }
`
