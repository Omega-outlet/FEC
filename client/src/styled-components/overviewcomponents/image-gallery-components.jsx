import styled from 'styled-components';

const MainPhoto = styled.img`
  display: block;
  width:660px;
  height:660px;
  object-fit: cover;

`;
const DefaultContainer = styled.div`
width: 100px;
height: 100px;
position: relative;
min-height:700px;
}
`;

const DefaultThumbnails = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`;

const Thumbnail = styled.img`
display: block;
width:80px;
height:100px;
object-fit: cover;
`;

export default {
  MainPhoto,
  DefaultContainer,
  DefaultThumbnails,
  Thumbnail,
};
