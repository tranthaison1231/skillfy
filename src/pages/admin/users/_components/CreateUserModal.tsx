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
}

export default function CreateUserModal({
  onSubmit,
  onClose,
  isOpen,
  onOpen
}: Props) {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      username: ''
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
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
