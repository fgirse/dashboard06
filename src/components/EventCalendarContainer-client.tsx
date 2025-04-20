"use client"

import { use } from "react"

interface EventCalendarContainerProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function EventCalendarContainer({ searchParams }: EventCalendarContainerProps) {
  // Use the 'use' function to handle the Promise in a client component
  const resolvedSearchParams = use(searchParams)

  // Now you can use resolvedSearchParams directly
  const view = (resolvedSearchParams.view as string) || "month"
  const date = (resolvedSearchParams.date as string) || new Date().toISOString().split("T")[0]

  return (
    <div className="event-calendar-container">
      {/* Use resolvedSearchParams in your component */}
      <div className="mb-4">
        <p>Current view: {view}</p>
        <p>Selected date: {date}</p>
      </div>

      {/* Your calendar implementation */}
      <div className="calendar-wrapper border rounded-lg p-4">
        {/* Calendar content based on resolvedSearchParams */}
      </div>
    </div>
  )
}
