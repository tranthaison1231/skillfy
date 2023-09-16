import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from '@/router'
import signUp from '@/assets/images/bg-signup.png'
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

function isPasswordValid(password) {
  const uppercaseRegex = /[A-Z]/
  const lowercaseRegex = /[a-z]/
  const digitRegex = /[0-9]/
  return (
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    digitRegex.test(password)
  )
}

export default function Login() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const user = {
      fname: data.get('FName'),
      lname: data.get('LName'),
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      password: data.get('password') as string
    }

    const checkbox = data.get('checkbox')
    const confirmPassword = data.get('Cfpassword')
    const checkPasswordValid = isPasswordValid(user.password)
    const checkPassword = checkPasswordValid && user.password.length >= 8
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const checkPhone = user.phone.length === 10

    if (user.password && user.email && user.fname && user.lname && user.phone) {
      const account = [user]
      let accounts = JSON.parse(localStorage.getItem('accounts'))
      const checkEmailExit = accounts.some(
        account => account.email === user.email
      )

      if (!emailPattern.test(user.email)) {
        toast({
          title: 'Error',
          description: 'Email is incorrect',
          variant: 'destructive'
        })
      } else if (!checkPhone) {
        toast({
          title: 'Error',
          description: 'Phone is incorrect',
          variant: 'destructive'
        })
      } else if (!checkPassword) {
        toast({
          title: 'Error',
          description: 'Password have a-z, A-Z, 0-9 and min-length is 8',
          variant: 'destructive'
        })
      } else if (user.password !== confirmPassword) {
        toast({
          title: 'Error',
          description: 'Confirm password is incorrect',
          variant: 'destructive'
        })
      } else if (checkEmailExit) {
        toast({
          title: 'Error',
          description: 'Email is exit',
          variant: 'destructive'
        })
      } else if (!checkbox) {
        toast({
          title: 'Error',
          description: 'Check is agree',
          variant: 'destructive'
        })
      } else {
        accounts = accounts.concat(account)
        const accountJSON = JSON.stringify(accounts)
        localStorage.setItem('accounts', accountJSON)
        navigate('/login')
      }
    } else {
      toast({
        title: 'Error',
        description: 'Fill all information',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="xl:flex xl:justify-between">
      <div className="hidden xl:block">
        <img className="h-screen" src={signUp} alt="background sign up" />
      </div>
      <div className="flex justify-center items-center xl:w-1/2 2xl:w-2/3 h-screen relative">
        <form className="w-1/2 flex flex-col items-center" onSubmit={onSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
            <p className="text-gray-400">Create your Real Estate account</p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <label>
              <span className="text-gray-400">First Name</span>
              <Input name="FName" />
            </label>
            <label>
              <span className="text-gray-400">Last Name</span>
              <Input name="LName" />
            </label>
            <label>
              <span className="text-gray-400">Email</span>
              <Input name="email" />
            </label>
            <label>
              <span className="text-gray-400">Phone No.</span>
              <Input name="phone" />
            </label>
            <label>
              <span className="text-gray-400">Password</span>
              <Input type="password" name="password" />
            </label>
            <label>
              <span className="text-gray-400">Confirm password</span>
              <Input type="password" name="Cfpassword" />
            </label>
          </div>
          <label className=" text-gray-400 my-6">
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
