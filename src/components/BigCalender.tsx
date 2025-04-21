"use client";

import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import { Calendar as BigCalendarComponent, Views, CalendarProps } from "react-big-calendar";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = <TEvent extends object = Event, TResource extends object = object>({
  data,
}: {
  data: CalendarProps<TEvent, TResource>["events"];
}) => {
  const [view, setView] = useState<keyof typeof Views>("WORK_WEEK");

  const handleOnChangeView = (selectedView: keyof typeof Views) => {
    setView(selectedView);
  };

  const BigCalendar = BigCalendarComponent as any;

  return (
    <BigCalendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default MyCalendar;
