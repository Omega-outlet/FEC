import styled from 'styled-components';

const StyleSelectorContainer = styled.div`
  width: 500px;
`;

const StyleEntryThumbnail = styled.img`
  display: block;
  width:80px;
  height:100px;
  object-fit: cover;
`;

const ClickedStyleThumbnail = styled.div`
position: absolute;
font-size:25px;
top: 0px;
right: 23px;
color: #ede19d;
opacity: 80%;
`;

const EntryContainer = styled.div`
  position: relative;
  text-align: center;
}
`;
/* https://stackoverflow.com/questions/29546550/flexbox-4-items-per-row */
const StyleEntry = styled.div`
  display: inline-block;
  margin:10px 0 0 10px;
  flex-grow: 1;
  /* height:100px; */
  width: 20%;
`;

const SaleText = styled.span`
  color: red;
`;

const SocialMediaIcon = styled.a`
fill: ${({ $theme }) => ($theme === 'light' ? '' : '#c4c4c4')};
margin: 5px;
&:hover {
  opacity: 50%;
}
`;

// const ShareButton = styled.div`
// > * {
// padding: 10px;
// margin: 10px;
// }
// `;

const Ratings = styled.div`
position:relative;
float: right;
`;

const Dropdown = styled.div`
position: absolute
`;

const Menu = styled.ul`
> li {
  margin: 0;
  background-color: white;
  color:   ${({ $theme }) => ($theme === 'light' ? '' : 'black')};
}

li:hover {
  background-color: lightgray;
}

> li > button {
  width: 100%;
  height: 100%;
  text-align: left;

  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
}

position: absolute;

list-style-type: none;
margin: 5px 0;
padding: 0;

border: 1px solid grey;
width: 150px;
z-index: 1000

`;

const DropdownRow = styled.div`
> * {
  margin: 10px 60px 10px 0;
}
display:flex;
flex-direction:row;
`;

const StyledDropdownButton = styled.button`
display: inline-block;
border: 1px solid gray;
border-radius: 4px;
padding: 10px 10px 10px 10px;
background-color: #ffffff;
cursor: pointer;
white-space: nowrap;
`;

const StyledDropdownButtonDisabled = styled.button`
display: inline-block;
border: 1px solid gray;
border-radius: 4px;
padding: 10px 10px 10px 10px;
background-color: lightgray;
cursor: pointer;
white-space: nowrap;
`;
const Title = styled.h1`
font-weight: lighter;
margin-bottom: 10px;
`;
const Description = styled.h3`
font-weight: lighter;
`;
const Category = styled.p`
font-weight: lighter;
`;
const Share = styled.div`
font-weight: lighter;
margin-top: 15px;
`;

const StyleName = styled.p`
font-weight: lighter;
`;

export default {
  StyleSelectorContainer,
  StyleEntryThumbnail,
  StyleEntry,
  SaleText,
  SocialMediaIcon,
  ClickedStyleThumbnail,
  EntryContainer,
  Ratings,
  Dropdown,
  Menu,
  DropdownRow,
  StyledDropdownButton,
  StyledDropdownButtonDisabled,
  Title,
  Description,
  Category,
  Share,
  StyleName
};
