import styled from '@emotion/styled'

export const Row = styled.tr`
    :nth-of-type(2n) {
        background-color: lightblue;
    }
    
    td {
        border: 1px solid lightgrey;
        width: 250px;
        text-align: center;
        padding: 12px 0;
        color: grey;
    }
`

