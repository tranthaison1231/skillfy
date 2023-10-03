import { getCountries } from '@/apis/users'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/Select'
import { SelectProps } from '@radix-ui/react-select'
import { useEffect, useState } from 'react'

export default function CountrySelector({ value, onValueChange }: SelectProps) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries()
        setCountries(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCountries()
  }, [])
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-40" onValueChange={onValueChange}>
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {countries.map(country => (
            <SelectItem key={country} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
