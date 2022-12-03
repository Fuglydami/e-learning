import moment from "moment";
import React, { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const EventCalender = () => {
  const localizer = momentLocalizer(moment);
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 11, 15),
      formats: {
        eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
          localizer.format(start, "hh:mm a", culture) +
          " - " +
          localizer.format(end, "hh:mm a", culture),
      },
    }),

    []
  );
  // const allViews = Object.keys(BigCalendar.Views).map(
  //   (k) => BigCalendar.Views[k]
  // );
  const events = [
    {
      title: "GNS 202",
      // allDay: true,
      start: new Date(2022, 11, 11, 2, 0, 0),
      end: new Date(2022, 11, 11, 3, 30, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "CPR 222",
      start: new Date(2022, 11, 15, 11, 0, 0),
      end: new Date(2022, 11, 15, 12, 30, 0),
    },

    {
      title: "POL 202",
      start: new Date(2022, 11, 17, 5, 0, 0),
      end: new Date(2022, 11, 17, 6, 30, 0),
    },

    {
      title: "POL 202",
      start: new Date(2022, 11, 12, 3, 0, 0),
      end: new Date(2022, 11, 12, 4, 30, 0),
    },

    {
      title: "POL 205",
      start: new Date(2015, 3, 9, 4, 0, 0),
      end: new Date(2015, 3, 9, 4, 3, 0),
    },
    {
      title: "SOC 212",
      start: new Date(2022, 11, 14, 5, 3, 0),
      end: new Date(2022, 11, 14, 6, 3, 0),
      desc: "Big conference for important people",
    },
    {
      title: "CLE 209",
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "GNS 202",
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      title: "GTL 215",
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
      title: "POL 205",
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: "Most important meal of the day",
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event);
    const bgColor = () => {
      if (event.title === "POL 202") return "#5EA3B4";
      if (event.title === "CPR 222") return "#DA7467";
      if (event.title === "SOC 212") return "#DBF5FF";
      if (event.title === "GNS 202") return "#FEF3E7";
      if (event.title === "GTL 215") return "#F4E8FF";
      if (event.title === "POL 205") return "#C2FEE1";
      if (event.title === "CLE 209") return "#D9ACFD";
      console.log(event);
    };
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: bgColor(),
      // padding: "30px 0",
      paddingBottom: "40px",

      fontWeight: 600,
      color: "black",
      border: "1px solid #D9ACFD",
      borderRadius: "5px",
      display: "block",
      // margin: "20px",
      // display: "flex",
      // flexDirection: "column",
      // flexWrap: "wrap",
      // justifyContent: "center",
    };
    return {
      style: style,
    };
  };

  return (
    <div className="mt-6">
      <Calendar
        eventPropGetter={eventStyleGetter}
        events={events}
        step={60}
        // views={allViews}
        defaultDate={defaultDate}
        localizer={localizer}
        popup={false}
        defaultView="week"
        resizable
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default EventCalender;
