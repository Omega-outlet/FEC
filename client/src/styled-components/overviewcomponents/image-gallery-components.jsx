import styled from 'styled-components';

const MainPhoto = styled.img`
  // display: block;
  width:660px;
  height:660px;
  object-fit: cover;

`;
const DefaultContainer = styled.div`
// width: 100px;
// height: 100px;
position: relative;
// min-height:700px;
}
`;

const DefaultThumbnails = styled.div`
width: 100%;
height: 99%;
position: absolute;
top: 0;
left: 120px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-end;
`;

const DefaultThumbnail = styled.img`
// display: block;
width:50px;
height:60px;
object-fit: cover;
// padding: 2px;
opacity: 0.6;
`;

const CurrentThumbnail = styled.img`
// display: block;
width:50px;
height:60px;
object-fit: cover;
border: 1px solid white;
`;

const ScrollButton = styled.input`
  height:64px;
  width:27px;
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
