import { Button } from '@/components/Button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/Dialog'
import { Input } from '@/components/Input'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface Props {
  onSubmit: (data) => void
  onClose: () => void
  isOpen: boolean
  onOpen: () => void
  loading: boolean
}

export default function CreateCompanyModal({
  onSubmit,
  onClose,
  isOpen,
  onOpen,
  loading
}: Props) {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      logo: ''
    }
  })

  return (
    <Dialog
      open={isOpen}
      onOpenChange={open => {
        if (open) {
          onOpen()
        } else {
          onClose()
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Create Company
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create Company</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <label htmlFor="name">Name</label>
            <Input id="name" {...register('name')} />
            <label htmlFor="logo">Logo</label>
            <Input id="logo" {...register('logo')} />
          </div>
          <DialogFooter>
            <Button type="submit" isLoading={loading}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
