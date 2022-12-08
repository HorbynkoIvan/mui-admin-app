import { useMemo } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Toolbar, Event, EventWrapper } from "./components";

const localizer = momentLocalizer(moment);

export const CalendarFeature = () => {
  const { components, defaultDate } = useMemo(
    () => ({
      components: {
        event: Event,
        // agenda: {
        //   event: EventAgenda,
        // },
        toolbar: Toolbar,
        eventWrapper: EventWrapper,
      },
      defaultDate: new Date(new Date().setDate(new Date().getDate())),
    }),
    []
  );
  return (
    <>
      <BigCalendar
        views={["month", "week", "agenda"]}
        defaultView={"month"}
        step={60}
        showMultiDayTimes
        localizer={localizer}
        defaultDate={defaultDate}
        toolbar={true}
        components={components}
        events={[
          {
            title: "NOW",
            start: new Date(),
            end: new Date(),
          },
        ]}
      />
    </>
  );
};

// https://www.npmjs.com/package/react-big-calendar
// https://github.com/jquense/react-big-calendar
// https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/examples--example-4
