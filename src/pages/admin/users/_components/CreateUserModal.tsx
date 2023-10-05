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

export default function CreateUserModal({
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
      username: '',
      email: '',
      phoneNumber: '',
      country: '',
      avatar: ''
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
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <label htmlFor="name">Name</label>
            <Input id="name" {...register('name')} />
            <label htmlFor="name">User name</label>
            <Input id="username" {...register('username')} />
            <label htmlFor="email">Email</label>
            <Input id="email" {...register('email')} />
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input id="phoneNumber" {...register('phoneNumber')} />
            <label htmlFor="country">Country</label>
            <Input id="country" {...register('country')} />
            <label htmlFor="avatar">Avatar</label>
            <Input id="avatar" {...register('avatar')} />
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
