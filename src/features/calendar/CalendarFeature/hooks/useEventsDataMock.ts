import moment from "moment";
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
export const useEventsDataMock = () => null;
