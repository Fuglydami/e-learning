import moment from "moment";
import React, { useMemo } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import toolbar from "react-big-calendar/lib/Toolbar";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const CustomToolbar = () => {
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("next");
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate("current");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col md:flex-row md:gap-3 gap-0">
        <p className="md:text-[20px] text-[14px] font-[700] text-base_range">
          {moment(new Date()).format("dddd, MMMM Do YYYY")}
        </p>
        <div className="flex  items-center space-x-3 text-lightGrey md:justify-between justify-start">
          <button
            type="button"
            className="bg-sidebarOrange rounded-full"
            // onClick={goToBack}
          >
            <span className="sr-only">Previous month</span>
            <MdNavigateBefore
              className="w-7 h-7 text-base_range"
              aria-hidden="true"
            />
          </button>

          <button
            // onClick={goToNext}
            className="bg-sidebarOrange rounded-full"
            type="button"
          >
            <span className="sr-only">Next month</span>
            <MdNavigateNext
              className="w-7 h-7 text-base_range"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div>
        <div
          id="input"
          className={` rounded-md outline border-none ring-0 outline-lightGrey  my-5 `}
        >
          <select placeholder="october" id="month" className="">
            <option selected>october</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
};
const EventCalender = () => {
  const localizer = momentLocalizer(moment);
  const { defaultDate, components } = useMemo(
    () => ({
      defaultDate: new Date(2022, 11, 15),
      components: {
        toolbar: CustomToolbar,
      },
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
      start: new Date(2022, 11, 11, 12, 0, 0),
      end: new Date(2022, 11, 11, 1, 30, 0),
      // desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "CPR 222",
      start: new Date(2022, 11, 14, 11, 0, 0),
      end: new Date(2022, 11, 14, 12, 30, 0),
    },

    {
      title: "POL 202",
      start: new Date(2022, 11, 12, 10, 0, 0),
      end: new Date(2022, 11, 12, 11, 0, 0),
    },

    {
      title: "POL 205",
      start: new Date(2015, 3, 9, 4, 0, 0),
      end: new Date(2015, 3, 9, 4, 3, 0),
    },
    {
      title: "SOC 212",
      start: new Date(2022, 11, 15, 8, 3, 0),
      end: new Date(2022, 11, 15, 9, 30, 0),
      desc: "Big conference for important people",
    },
    {
      title: "CLE 209",
      start: new Date(2022, 11, 13, 10, 30, 0, 0),
      end: new Date(2022, 11, 13, 12, 30, 0, 0),
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
      start: new Date(2022, 11, 16, 14, 0, 0, 0),
      end: new Date(2022, 11, 16, 15, 0, 0, 0),
    },
    {
      title: "POL 205",
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 30, 0, 0),
      desc: "Most important meal of the day",
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const bgColor = () => {
      if (event.title === "POL 202") return "#5EA3B4";
      if (event.title === "CPR 222") return "#DA7467";
      if (event.title === "SOC 212") return "#DBF5FF";
      if (event.title === "GNS 202") return "#FEF3E7";
      if (event.title === "GTL 215") return "#F4E8FF";
      if (event.title === "POL 205") return "#C2FEE1";
      if (event.title === "CLE 209") return "#D9ACFD";
      console.log(isSelected, "isSelected");
      console.log(start, end, "istart");
    };
    const borderColor = () => {
      if (event.title === "POL 202") return "#00ccff";
      if (event.title === "CPR 222") return "#ff1e00";
      if (event.title === "SOC 212") return "#5cd1ff";
      if (event.title === "GNS 202") return "#ffa341";
      if (event.title === "GTL 215") return "#bf7bff";
      if (event.title === "POL 205") return "#46ffa6";
      if (event.title === "CLE 209") return "#9b20ff";
    };

    var style = {
      backgroundColor: bgColor(),
      margin: "0 auto",
      fontWeight: 600,
      color: "black",
      border: `2px solid ${borderColor()} `,
      borderRadius: "5px",
      display: "block",
    };
    return {
      style: style,
    };
  };
  const today = new Date();
  return (
    <div className="mt-6">
      <Calendar
        eventPropGetter={eventStyleGetter}
        events={events}
        step={30}
        min={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8)
        }
        max={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16)
        }
        components={components}
        defaultDate={defaultDate}
        localizer={localizer}
        popup={false}
        defaultView={Views.WEEK}
        resizable
        startAccessor="start"
        endAccessor="end"
        // views={views}
      />
    </div>
  );
};

export default EventCalender;
