import { signIn } from '@/apis/auth'
import bgSignIn from '@/assets/images/bg-signin.png'
import facebook from '@/assets/svgs/facebook.svg'
import gmail from '@/assets/svgs/gmail.svg'
import instagram from '@/assets/svgs/instagram.svg'
import linkedin from '@/assets/svgs/linkedin.svg'
import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'
import { useToast } from '@/components/use-toast'
import { Link, useNavigate } from '@/router'
import { LoginSchema } from '@/utils/shema'
import { setToken } from '@/utils/token'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

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

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'admin@enouvo.com',
      password: 'Enouvo@123'
    }
  })
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async ({
    email,
    password
  }) => {
    try {
      const res = await signIn(email, password)
      setToken(res.data.accessToken)
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
      <div className="relative flex items-center justify-center h-screen lg:w-1/2">
        <form
          className="flex flex-col items-center w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Sign In</h2>
            <p className="text-gray-400">Sign in to stay connected.</p>
          </div>
          <label className="w-full mb-4">
            <span className="text-gray-400">Email</span>
            <Input placeholder="Email" {...register('email')} />
            {errors.email && (
              <p className="mt-1 text-red-500">{errors.email.message}</p>
            )}
          </label>
          <label className="w-full mb-4">
            <span className="text-gray-400">Password</span>
            <Input
              placeholder="Password"
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="mt-1 text-red-500">{errors.password.message}</p>
            )}
          </label>
          <div className="flex justify-between w-full mb-6">
            <label className="text-gray-400 ">
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