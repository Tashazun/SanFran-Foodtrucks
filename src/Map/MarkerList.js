import React, { Fragment } from "react";
import { Marker, Popup } from "react-leaflet";

const PopupMarker = content => (
  <Marker position={content.coords}>
    <Popup>
      <div>
        <h4>{content.applicant}</h4>
        <p>{content.location}</p>
        <p>
          {content.starttime} - {content.endtime}
        </p>
        <p>{content.optionaltext}</p>
      </div>
    </Popup>
  </Marker>
);

const MarkerList = ({ markers }) => {
  const items = markers.map(({ ...props }, index) => (
    <PopupMarker key={index} {...props} />
  ));
  return <Fragment>{items}</Fragment>;
};

export default MarkerList;
