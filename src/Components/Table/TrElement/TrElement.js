import React from "react";
import ThElement from "../ThElement/ThElement";
import TdElement from "../TdElement/TdElement";

const TrElement = props => {
  if (props.th) {
    return (
      <tr className={props.className}>
        {props.tableHeader.map((item, index) => {
          return <ThElement key={item} title={item} />;
        })}
      </tr>
    );
  } else if (!props.th) {
    return (
      <tr
        onClick={props.selectHandler}
        data-bookingid={props.fakeBookingItem.id}
      >
        <TdElement element={props.fakeBookingItem.id} />
        <TdElement element={props.fakeBookingItem.title} />
        <TdElement element={props.fakeBookingItem.firstName} />
        <TdElement element={props.fakeBookingItem.surname} />
        <TdElement element={props.fakeBookingItem.email} />
        <TdElement element={props.fakeBookingItem.roomId} />
        <TdElement element={props.fakeBookingItem.checkInDate} />
        <TdElement element={props.fakeBookingItem.checkOutDate} />
        <TdElement element={props.fakeBookingItem.numberOfNights} />
        <TdElement
          className="toStopEvent"
          onClick={e =>
            props.selectIdHandlerFunction(e, props.fakeBookingItem.id)
          }
          element={
            <button
              onClick={e =>
                props.selectIdHandlerFunction(e, props.fakeBookingItem.id)
              }
              className="toStopEvent"
            >
              Customer Profile
            </button>
          }
        />
      </tr>
    );
  }
};

export default TrElement;
