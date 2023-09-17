import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from '@/router'
import bgSignUp from '@/assets/images/bg-signup.png'
import gmail from '@/assets/svgs/gmail.svg'
import facebook from '@/assets/svgs/facebook.svg'
import linkedin from '@/assets/svgs/linkedin.svg'
import instagram from '@/assets/svgs/instagram.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUp } from '@/apis/auth'
import { validator } from '@/utils/validator'

const socials = [
  {
    name: 'gmail',
    image: gmail,
    link: 'https://accounts.google.com/v3/signin/identifier?flowName=GlifWebSignIn'
  },
  {
    name: 'facebook',
    image: facebook,
    link: 'https://www.facebook.com/'
  },
  {
    name: instagram,
    image: instagram,
    link: 'https://www.instagram.com/'
  },
  {
    name: linkedin,
    image: linkedin,
    link: 'https://www.linkedin.com/'
  }
]
interface Inputs {
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
  confirmPassword: string
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur'
  })
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    firstName,
    lastName,
    phone,
    confirmPassword
  }) => {
    try {
      const res = await signUp(
        email,
        password,
        firstName,
        lastName,
        phone,
        confirmPassword
      )
      localStorage.setItem('access_token', res.data.accessToken)
      navigate('/sign-up')
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message,
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="xl:flex xl:justify-between">
      <div className="hidden xl:block">
        <img className="h-screen" src={bgSignUp} alt="background sign up" />
      </div>
      <div className="relative flex items-center justify-center h-screen xl:w-1/2 2xl:w-2/3">
        <form
          className="flex flex-col items-center w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Sign Up</h2>
            <p className="text-gray-400">Create your Real Estate account</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            <label>
              <span className="text-gray-400">First Name</span>
              <Input
                placeholder="First Name"
                {...register('firstName', {
                  required: 'First Name is required',
                  pattern: {
                    value: validator.firstName,
                    message: 'First Name must be valid'
                  }
                })}
              />
              {errors.firstName && (
                <p className="mt-1 text-red-500">{errors.firstName.message}</p>
              )}
            </label>
            <label>
              <span className="text-gray-400">Last Name</span>
              <Input
                placeholder="Last Name"
                {...register('lastName', {
                  required: 'Last Name is required',
                  pattern: {
                    value: validator.lastName,
                    message: 'Last Name must be valid'
                  }
                })}
              />
              {errors.lastName && (
                <p className="mt-1 text-red-500">{errors.lastName.message}</p>
              )}
            </label>
            <label>
              <span className="text-gray-400">Email</span>
              <Input
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: validator.email,
                    message: 'Email must be valid'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email.message}</p>
              )}
            </label>
            <label>
              <span className="text-gray-400">Phone No.</span>
              <Input
                placeholder="Phone"
                {...register('phone', {
                  required: 'Phone is required',
                  pattern: {
                    value: validator.phone,
                    message: 'Phone must be valid'
                  }
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500">{errors.phone.message}</p>
              )}
            </label>
            <label>
              <span className="text-gray-400">Password</span>
              <Input
                placeholder="Password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value: validator.password,
                    message:
                      'Password must contain at least 8 characters, 1 letter and 1 number'
                  }
                })}
              />
              {errors.password && (
                <p className="mt-1 text-red-500">{errors.password.message}</p>
              )}
            </label>
            <label>
              <span className="text-gray-400">Confirm password</span>
              <Input
                placeholder="Confirm Password"
                type="password"
                {...register('confirmPassword', {
                  required: 'confirmPassword is required',
                  pattern: {
                    value: validator.confirmPassword,
                    message:
                      'confirmPassword must contain at least 8 characters, 1 letter and 1 number'
                  }
                })}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </label>
          </div>
          <label className="my-6 text-gray-400 ">
            <Checkbox name="checkbox" />
            <span className="ml-2">I agree with the terms of use</span>
          </label>
          <Button className="w-48" type="submit">
            Sign Up
          </Button>
          <div className="mt-4 text-center">
            <p>or sign up with other accounts?</p>
            <div className="flex justify-center mt-4">
              {socials.map(social => (
                <a href={social.link} key={social.name}>
                  <img src={social.image} alt={social.name} />
                </a>
              ))}
            </div>
            <p>
              Already have an Account{' '}
              <Link to="/login" className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
