"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Butto"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation"

// Mock data for events - replace with actual data fetching
type Event = {
  id: string
  title: string
  date: Date
  type: "class" | "exam" | "meeting" | "holiday"
}

const mockEvents: Event[] = [
  { id: "1", title: "Math Exam", date: new Date(2025, 3, 20), type: "exam" },
  { id: "2", title: "Science Class", date: new Date(2025, 3, 15), type: "class" },
  { id: "3", title: "Parent Meeting", date: new Date(2025, 3, 18), type: "meeting" },
  { id: "4", title: "Spring Break", date: new Date(2025, 3, 25), type: "holiday" },
  { id: "5", title: "Art Class", date: new Date(2025, 3, 22), type: "class" },
  { id: "6", title: "History Exam", date: new Date(2025, 3, 28), type: "exam" },
]

const typeColors = {
  class: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  exam: "bg-red-100 text-red-800 hover:bg-red-200",
  meeting: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  holiday: "bg-green-100 text-green-800 hover:bg-green-200",
}

export default function EventCalendarContainer({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>(mockEvents)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Filter events for the selected date
  const selectedDateEvents = selectedDate ? events.filter((event) => isSameDay(event.date, selectedDate)) : []

  // Get days for the current month
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  })

  // Handle month navigation
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  // Handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day))
  }

  // Fetch events - replace with actual API call
  useEffect(() => {
    // Here you would fetch events from your API
    // For now, we're using mock data
    setEvents(mockEvents)
  }, [])

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Events Calendar</CardTitle>
          <Button variant="outline" size="icon" onClick={() => router.push("/events/new")}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add event</span>
          </Button>
        </div>
        <CardDescription>View and manage upcoming events</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <div className="p-4 pb-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm">
            {Array.from({ length: startOfMonth(currentDate).getDay() }).map((_, i) => (
              <div key={`empty-start-${i}`} className="h-10 p-1" />
            ))}

            {days.map((day) => {
              const dayEvents = getEventsForDay(day)
              const isSelected = selectedDate && isSameDay(day, selectedDate)

              return (
                <TooltipProvider key={day.toString()}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleDateClick(day)}
                        className={cn(
                          "h-10 w-full rounded-md p-1 text-center relative",
                          !isSameMonth(day, currentDate) && "text-muted-foreground",
                          isToday(day) && "bg-accent text-accent-foreground",
                          isSelected && "bg-primary text-primary-foreground",
                          dayEvents.length > 0 && !isSelected && "font-medium",
                        )}
                      >
                        <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
                        {dayEvents.length > 0 && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                            {dayEvents.length <= 3 ? (
                              dayEvents.map((event, i) => (
                                <div
                                  key={event.id}
                                  className={cn(
                                    "w-1 h-1 rounded-full",
                                    event.type === "class" && "bg-blue-500",
                                    event.type === "exam" && "bg-red-500",
                                    event.type === "meeting" && "bg-purple-500",
                                    event.type === "holiday" && "bg-green-500",
                                  )}
                                />
                              ))
                            ) : (
                              <div className="text-[0.6rem] text-muted-foreground">{dayEvents.length}</div>
                            )}
                          </div>
                        )}
                      </button>
                    </TooltipTrigger>
                    {dayEvents.length > 0 && (
                      <TooltipContent side="bottom" align="center">
                        <div className="text-xs font-medium">
                          {dayEvents.map((event) => (
                            <div key={event.id}>{event.title}</div>
                          ))}
                        </div>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              )
            })}

            {Array.from({
              length: 6 - endOfMonth(currentDate).getDay(),
            }).map((_, i) => (
              <div key={`empty-end-${i}`} className="h-10 p-1" />
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="border-t mt-2">
            <div className="p-4">
              <h3 className="font-medium mb-2">{format(selectedDate, "MMMM d, yyyy")}</h3>
              <ScrollArea className="h-[180px]">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-2">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-2 rounded-md bg-accent/50">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={cn(typeColors[event.type])}>
                            {event.type}
                          </Badge>
                          <span className="font-medium">{event.title}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">No events scheduled for this day</div>
                )}
              </ScrollArea>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2 text-xs">
          <Badge variant="outline" className={cn(typeColors.class)}>
            Class
          </Badge>
          <Badge variant="outline" className={cn(typeColors.exam)}>
            Exam
          </Badge>
          <Badge variant="outline" className={cn(typeColors.meeting)}>
            Meeting
          </Badge>
          <Badge variant="outline" className={cn(typeColors.holiday)}>
            Holiday
          </Badge>
        </div>
        <Button variant="outline" size="sm" onClick={() => router.push("/events")}>
          View All
        </Button>
      </CardFooter>
    </Card>
  )
}
