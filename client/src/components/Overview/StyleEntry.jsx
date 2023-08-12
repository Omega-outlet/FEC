import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

function styleEntry({ style }) {
  console.log("in styleEntry", style);

  return (
    <div>
      <img className="styleEntryThumbnail" src={style.photos[0].thumbnail_url} alt={style.name} />
    </div>
  );
}

export default styleEntry;
