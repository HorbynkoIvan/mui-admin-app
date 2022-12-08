import { EventProps } from "react-big-calendar";

export const Event = (props: EventProps<any>) => {
  return (
    <span>
      <strong>{props.event.title}</strong>
      {props.event.desc && ":  " + props.event.desc}
    </span>
  );
};
