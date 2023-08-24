import styled from 'styled-components';

const MainPhoto = styled.img`
  // display: block;
  width:700px;
  height:800px;
  object-fit: cover;
  cursor: zoom-in;
`;
const DefaultContainer = styled.div`
// width: 100px;
// height: 100px;
position: relative;
// min-height:700px;
display: flex;
justify-content: center;
align-items: center;
}
`;

const DefaultThumbnails = styled.div`
position: absolute;
top: 690px;
max-width: 900px;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
z-index: 997;
`;

const DefaultThumbnail = styled.img`
// display: block;
width:90px;
height:100px;
object-fit: cover;
// padding: 2px;
opacity: 0.5;
z-index: 997;
`;

const CurrentThumbnail = styled.img`
// display: block;
width:90px;
height:100px;
object-fit: cover;
border: 1px solid white;
`;

const ScrollButton = styled.input`
  height:50px;
  width:30px;
  background-color:white;
  color:#222222;
  opacity: 65%;
  border: 0px;
`;

const ExpandedMainPhoto = styled.img`
  display: flex;
  width:700px;
  height:660px;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  cursor: ${({ $displayZoomed }) => ($displayZoomed ? 'zoom-out' : 'zoom-in')};
  z-index: 999;
`;

const ModalWrapper = styled.div`
  display: ${({ $displaymodal }) => ($displaymodal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.90);
`;

const Modal = styled.div`
  // display: ${({ $displaymodal }) => ($displaymodal ? 'flex' : 'none')};
  // flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  // background-color: #fefefe;
  padding: 20px;
  // border: 1px solid #888;
  width: 80%;
  height: 85%;
  `;

const ExpandedThumbnail = styled.img`
// display: block;
width:70px;
height:70px;
object-fit: cover;
opacity: 0.7;
// padding: 2px;
`;

const CurExpandedThumbnail = styled.img`
// display: block;
width:70px;
height:70px;
object-fit: cover;
border: 1px solid white;
`;

const Icons = styled.div`
float: left;

/* -webkit-column-count: 2;
 -moz-column-count: 2;
      column-count: 2; */
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 600px;
      min-width:15%;
      width: 15%;
      /* border: 1px solid black; */
      padding: 5px;
      gap: 5px;
`;

const ExpandedImageContainer = styled.div`
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const ExitExpanded = styled.div`
position:absolute;
top:10px;
right: 10px;
`;

// clear floats after the columns
const ExpandedNormal = styled.div`
&:after {
  // content: "";
  // display: table;
  // clear: both;
}
`;

export default {
  MainPhoto,
  DefaultContainer,
  DefaultThumbnails,
  DefaultThumbnail,
  CurrentThumbnail,
  ScrollButton,
  ExpandedMainPhoto,
  ModalWrapper,
  Modal,
  ExpandedThumbnail,
  CurExpandedThumbnail,
  Icons,
  ExpandedImageContainer,
  ExitExpanded,
  ExpandedNormal,
  // ZoomedArea,
};
