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
font-size:30px;
top: 8px;
right: 25px;
color: black;
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

const TwitterButton = styled.a`
  display: inline-block;
  width: 50px;
  height: 20px;
  background: #1DA1F2;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  line-height: 25px;
`;

const FacebookButton = styled.a`
  display: inline-block;
  width: 50px;
  height: 20px;
  background: #4267B2;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  line-height: 25px;
`;

const PinterestButton = styled.a`
display: inline-block;
  width: 50px;
  height: 20px;
  background: #E60023;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  line-height: 25px;
`;

const ShareButton = styled.div`
> * {
padding: 1px;
margin: 1px;
}
`;

const Ratings = styled.div`
position:relative;
float: right;
`;

export default {
  StyleSelectorContainer,
  StyleEntryThumbnail,
  StyleEntry,
  SaleText,
  TwitterButton,
  FacebookButton,
  PinterestButton,
  ShareButton,
  ClickedStyleThumbnail,
  EntryContainer,
  Ratings,
};
