import { Country, getCountries } from '@/apis/countries'
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
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries({})
        setCountries(data.data.items)
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
            <SelectItem key={country.id} value={country.id}>
              {country.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
