import styled from 'styled-components';

const MainPhoto = styled.img`
  // display: block;
  width:700px;
  height:660px;
  object-fit: cover;
  cursor: zoom-in;

`;
const DefaultContainer = styled.div`
// width: 100px;
// height: 100px;
position: relative;
// min-height:700px;
}
`;

const DefaultThumbnails = styled.div`
position: absolute;
top: 550px;
left: 45px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-end;
`;

const DefaultThumbnail = styled.img`
// display: block;
width:90px;
height:100px;
object-fit: cover;
// padding: 2px;
opacity: 0.5;
`;

const CurrentThumbnail = styled.img`
// display: block;
width:90px;
height:100px;
object-fit: cover;
border: 1px solid white;
`;

const ScrollButton = styled.input`
 height:100px;
  width:30px;
  color:black;
`;

export default {
  MainPhoto,
  DefaultContainer,
  DefaultThumbnails,
  DefaultThumbnail,
  CurrentThumbnail,
  ScrollButton,
};
