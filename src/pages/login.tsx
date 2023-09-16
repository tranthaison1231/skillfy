import { signIn } from '@/apis/auth'
import bgSignIn from '@/assets/images/bg-signin.png'
import facebook from '@/assets/svgs/facebook.svg'
import gmail from '@/assets/svgs/gmail.svg'
import instagram from '@/assets/svgs/instagram.svg'
import linkedin from '@/assets/svgs/linkedin.svg'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Input } from '@/components/ui/Input'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from '@/router'
import { validator } from '@/utils/validator'
import { SubmitHandler, useForm } from 'react-hook-form'

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
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: 'admin@enouvo.com',
      password: 'Enouvo@123'
    }
  })
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const res = await signIn(email, password)
      localStorage.setItem('access_token', res.data.accessToken)
      navigate('/admin')
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message,
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="lg:flex lg:justify-between">
      <div className="flex justify-center items-center lg:w-1/2 h-screen relative">
        <form
          className="w-1/2 flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
            <p className="text-gray-400">Sign in to stay connected.</p>
          </div>
          <label className="w-full mb-4">
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
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </label>
          <label className="w-full mb-4">
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
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </label>
          <div className="flex justify-between w-full mb-6">
            <label className=" text-gray-400 ">
              <Checkbox />
              <span className="ml-2">Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-primary">
              Forgot Password
            </Link>
          </div>
          <Button className="w-48" type="submit">
            Sign In
          </Button>
          <div className="mt-4 text-center">
            <p>or sign in with other accounts?</p>
            <div className="flex justify-center mt-4">
              {socials.map(social => (
                <a href={social.link} key={social.name}>
                  <img src={social.image} alt={social.name} />
                </a>
              ))}
            </div>
            <p>
              Don't have an account?{' '}
              <br className="sm:hidden lg:block xl:hidden" />
              <Link to="/sign-up" className="text-primary">
                Click here to sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <img className="h-screen" src={bgSignIn} alt="background sign in" />
      </div>
    </div>
  )
}
