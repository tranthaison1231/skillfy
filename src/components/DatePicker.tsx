import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Button } from './Button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './Calendar'
import dayjs from 'dayjs'

interface Props {
  value?: Date
  onChange: (date: Date) => void
  format?: string
}

export default function DatePicker({
  value,
  onChange,
  format = 'DD/MM/YYYY'
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? dayjs(value).format(format) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
