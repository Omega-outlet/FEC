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

const SocialMediaButton = styled.a`
  display: block;
  width: 50px;
  height: 20px;
  background: #4E9CAF;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  line-height: 25px;
`;
export default {
  StyleSelectorContainer,
  StyleEntryThumbnail,
  StyleEntry,
  SaleText,
  SocialMediaButton,
};
