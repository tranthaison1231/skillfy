import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from '@/router'
import signin from '@/assets/images/bg-signin.png'
import logo from '@/assets/svgs/logo.svg'
import gmail from '@/assets/svgs/gmail.svg'
import facebook from '@/assets/svgs/facebook.svg'
import linkedin from '@/assets/svgs/linkedin.svg'
import instagram from '@/assets/svgs/instagram.svg'

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
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    const accounts = JSON.parse(localStorage.getItem('accounts'))
    const checkAccount = accounts.some(account => {
      return account.email === email && account.password === password
    })

    console.log(checkAccount)
    if (checkAccount) {
      localStorage.setItem('isAuth', 'true')
      navigate('/admin')
    } else {
      toast({
        title: 'Error',
        description: 'Email or password is incorrect',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="lg:flex lg:justify-between">
      <div className="flex justify-center items-center lg:w-1/2 h-screen relative">
        <div className="absolute top-2 left-2 flex items-center gap-3 opacity-60">
          <img src={logo} alt="logo" />
          <span className="text-xl font-bold">
            REAL
            <br />
            ESTATE
          </span>
        </div>
        <form className="w-1/2 flex flex-col items-center" onSubmit={onSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
            <p className="text-gray-400">Sign in to stay connected.</p>
          </div>
          <label className="w-full">
            <span className="text-gray-400">Email</span>
            <Input placeholder="Email" className="mb-4" name="email" />
          </label>
          <label className="w-full">
            <span className="text-gray-400">Password</span>
            <Input
              placeholder="Password"
              className="mb-4"
              type="password"
              name="password"
            />
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
              <Link to="/signup" className="text-primary">
                Click here to sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <img className="h-screen" src={signin} alt="background sign in" />
      </div>
    </div>
  )
}
