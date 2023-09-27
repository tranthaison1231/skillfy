import { Button } from '@/components/Button'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '@/index.css'
const localizer = momentLocalizer(moment)

const events = [
  {
    start: moment('2023-08-27T10:00:00').toDate(),
    end: moment('2023-08-27T11:00:00').toDate(),
    title: '5:30a Click for Google'
  },
  {
    start: moment('2023-09-16T10:00:00').toDate(),
    end: moment('2023-09-16T18:00:00').toDate(),
    title: '5:30a Birthday Party'
  },
  {
    start: moment('2023-09-07T19:00:00').toDate(),
    end: moment('2023-09-07T21:00:00').toDate(),
    title: '5:30a All day Event'
  },
  {
    start: moment('2023-09-13T19:00:00').toDate(),
    end: moment('2023-09-13T21:00:00').toDate(),
    title: '5:30a All day Event'
  },
  {
    start: moment('2023-09-17T22:00:00').toDate(),
    end: moment('2023-09-17T23:00:00').toDate(),
    title: '5:30a Repeating Event'
  },
  {
    start: moment('2023-09-27T14:00:00').toDate(),
    end: moment('2023-09-27T15:30:00').toDate(),
    title: '5:30a Doctor Meeting'
  },
  {
    start: moment('2023-09-27T11:00:00').toDate(),
    end: moment('2023-09-27T14:30:00').toDate(),
    title: '5:30a Repeating Event'
  },
  {
    start: moment('2023-09-28T14:00:00').toDate(),
    end: moment('2023-09-28T20:00:00').toDate(),
    title: '5:30a Doctor Meeting'
  },
  {
    start: moment('2023-09-29T14:00:00').toDate(),
    end: moment('2023-09-29T17:30:00').toDate(),
    title: '5:30a Repeating Event'
  },
  {
    start: moment('2023-09-26T7:00:00').toDate(),
    end: moment('2023-09-26T15:30:00').toDate(),
    title: '5:30a Doctor Meeting'
  }
]

export default function Calendars() {
  return (
    <div className="bg-[#E9ECEF] h-full">
      <div className="top-0 w-full bg-blue-500 h-59 rounded-bl-2xl rounded-br-2xl">
        <div className="absolute flex flex-col mt-16 mb-24 ml-10 top-20 z-100 w-228">
          <h1 className="text-4xl font-bold text-white">Hello Devs !</h1>
          <p className="text-2xl text-white">
            We are on a mission to help developers like you to build beautiful
            projects for free.
          </p>
        </div>
      </div>
      <div className="-mt-10">
        <div className="bg-white rounded-lg shadow w-[calc(100%-3.5rem)] py-6 h-full mx-auto flex items-center justify-between">
          <h1 className="ml-3 text-2xl font-semibold text-black">Calendar</h1>
          <Button className="flex  bg-[#3A57E8] px-6 py-2 mr-3">Back</Button>
        </div>
      </div>
      <div className="mt-10">
        <div className="bg-white rounded-lg shadow w-[calc(100%-3.5rem)] pb-8 mb-3 z-[1] h-[100vh] mx-auto">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="text-[#8A92A6] text-xl"
          />
        </div>
      </div>
    </div>
  )
}
