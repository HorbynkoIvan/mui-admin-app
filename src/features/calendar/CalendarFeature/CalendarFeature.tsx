import {
  Calendar as BigCalendar,
  momentLocalizer,
  EventWrapperProps,
  EventProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from "@mui/material";
import { Button } from "common";
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const events = [
  {
    title: "test",
    start: moment().add(1, "days").subtract(5, "hours").toDate(),
    end: moment().add(1, "days").subtract(4, "hours").toDate(),
    allDay: false,
  },
  {
    title: "test larger",
    start: moment().startOf("day").add(5, "hours").toDate(),
    end: moment().startOf("day").add(10, "hours").toDate(),
    allDay: false,
  },

  {
    title: "test larger",
    start: moment().startOf("day").add(15, "hours").toDate(),
    end: moment().startOf("day").add(23, "hours").toDate(),
    allDay: false,
  },
  {
    title: "test all day",
    start: moment().startOf("day").toDate(),
    end: moment().startOf("day").add(1, "day").toDate(),
    allDay: true,
  },
  {
    title: "test 2 days",
    start: moment().startOf("day").toDate(),
    end: moment().startOf("day").add(2, "days").toDate(),
    allDay: true,
  },
  {
    title: "test multi-day",
    start: moment().toDate(),
    end: moment().add(3, "days").toDate(),
    allDay: false,
  },
];
export const navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE",
};
const Toolbar = (props: any) => {
  console.log(props);
  return (
    <Box sx={{ mt: 40 }}>
      <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Prev</Button>
      <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Next</Button> Toolbar
    </Box>
  );
};
const Event = (props: EventProps<any>) => {
  return (
    <span>
      <strong>{props.event.title}</strong>
      {props.event.desc && ":  " + props.event.desc}
    </span>
  );
};

const EventWrapper = (props: EventWrapperProps<any>) => {
  console.log(props);
  // const { continuesEarlier, event, label, accessors = {}, style } = props;
  return <Box sx={{ width: "24px", height: "24px", backgroundColor: "#000fff" }}>event</Box>;
};
export const CalendarFeature = () => {
  return (
    <>
      <BigCalendar
        views={["month", "week", "agenda"]}
        defaultView={"month"}
        step={60}
        showMultiDayTimes
        localizer={localizer}
        defaultDate={new Date(new Date().setDate(new Date().getDate()))}
        toolbar={true}
        components={{
          event: Event,
          // agenda: {
          //   event: EventAgenda,
          // },
          toolbar: Toolbar,
          eventWrapper: EventWrapper,
        }}
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
