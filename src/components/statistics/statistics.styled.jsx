import styled from "@emotion/styled";

export const StatBox = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid;
border-radius: 8px;
background-color: tomato;
padding: 10px;
margin-top: 10px;
`;
export const StatTitle = styled.h2`
display: flex;
margin-bottom: 10px;
margin-top: 0;
font-weight: 700;
font-size: 18px;
line-height: 2;
letter-spacing: 0.06em;`;
export const StatList = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
list-style: none;
padding: 0;
margin: 0;
`;
export const StatListItem = styled.li`
display: flex;
flex-wrap: wrap;
background-color: ${props => props.randomColor};
border-radius: 8px;
margin-right: 10px;
padding: 5px;
`;
export const StatLabel = styled.span`
margin-right: 4px;
font-weight: 700;
font-size: 18px;
line-height: 2;
letter-spacing: 0.06em;`;
export const StatPercentage = styled.span`
margin-bottom: 4px;
font-weight: 700;
font-size: 18px;
line-height: 2;
letter-spacing: 0.06em;
`;

