import { presignedUrl } from '@/apis/upload'
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
import UploadButton from '@/components/UploadButton'
import axios from 'axios'
import { Plus } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

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
  const { register, handleSubmit, reset, clearErrors } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      logo: ''
    }
  })

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      clearErrors('logo')
      const file = e.target.files?.[0]
      if (!file) return
      const formData = new FormData()
      formData.append('file', file)
      const { data } = await presignedUrl({
        fileName: file.name,
        type: file.type
      })
      const res = await axios({
        url: data.uploadUrl,
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': file.type
        }
      })
      console.log(res)
    } catch (error) {
      toast.error('Upload fail!')
    }
  }

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
            <UploadButton
              id="logo"
              accept="image/*"
              {...register('logo')}
              onChange={onUpload}
            />
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
