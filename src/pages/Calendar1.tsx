import React from "react";
import FullCalendar, { sliceEvents, createPlugin } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

// https://fullcalendar.io/docs/v6/customButtons
// https://codepen.io/shen-yang-tw/pen/wbmvPW
function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}1</b>
      <i>{eventInfo.event.title}2</i>
    </>
  );
}
export const Calendar = () => {
  const handleDateClick = (arg: any) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  return (
    <>
      <h1>Calendar page</h1>
      <FullCalendar
        // plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2022-12-06" },
          { title: "event 2", date: "2022-12-07" },
        ]}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
      />
    </>
  );
};

const CustomView = (props: any) => {
  const segs = sliceEvents(props, true); // allDay=true

  return (
    <>
      <div className="view-title">{props.dateProfile.currentRange.start.toUTCString()}</div>
      <div className="view-events">{segs.length} events</div>
    </>
  );
};

export default createPlugin({
  views: {
    custom: CustomView,
  },
});
