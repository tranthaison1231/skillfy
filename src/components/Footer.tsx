import logoFooter from '@/assets/images/bg-footer.png'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import Plane from '@/assets/images/plane.png'
function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center gap-8 h-400 bg-secondary">
        <img src={Plane} alt="Plane" className="mr-20" />
        <div>
          <h1 className="text-4xl font-bold leading-10">
            Subscribe to newsletter
          </h1>
          <p className="mb-4 text-xl leading-9">
            Get the latest news and interesting offers and real estate
          </p>
          <div className="flex w-2/3 gap-4">
            <Input
              className="pl-2"
              type="email"
              placeholder="Your e-mail address"
            />
            <Button
              type="button"
              className="bg-transparent border-2 text-primary border-primary hover:border-primary/0 hover:text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 max-w-full bg-primary">
        <img src={logoFooter} alt="" />
      </div>
    </footer>
  )
}

export default Footer
