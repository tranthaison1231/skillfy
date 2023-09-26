import Circle from '@/assets/images/big-circle.png'
import logo from '@/assets/svgs/logo-1.svg'
import { Button } from '@/components/Button'

const adminList = [
  {
    id: 1,
    title: 'Item 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    quality: 5,
    price: '$1200',
    totals: '$2.888.00'
  },
  {
    id: 2,
    title: 'Item 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    quality: 5,
    price: '$1200',
    totals: '$2.888.00'
  },
  {
    id: 3,
    title: 'Item 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    quality: 5,
    price: '$1200',
    totals: '$2.888.00'
  },
  {
    id: 4,
    title: 'Item 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    quality: 5,
    price: '$1200',
    totals: '$2.888.00'
  }
]

function Dashboard() {
  return (
    <div className="bg-[#E9ECEF]">
      <img src={Circle} alt="Circle" className="top-0 w-full h-48 opacity-30" />
      <div className="z-10 flex flex-col mt-16 mb-24 ml-10 w-228">
        <h1 className="text-4xl font-bold text-white">Hello Devs !</h1>
        <p className="text-2xl text-white">
          We are on a mission to help developers like you to build beautiful
          projects for free.
        </p>
      </div>
      <div className="z-[-1] top-0 h-59 w-full bg-blue-500 rounded-bl-2xl rounded-br-2xl"></div>
      <div className="w-4/5 mx-auto mb-16">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="mb-4 text-3xl font-bold">Invoice #215462</h1>
          </div>
          <span className="leading-7">DUE DATE: Aug 19, 2022</span>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-8 text-3xl font-bold">Hello , Devon Lane </h1>
          <p className="leading-7 text-zinc-950">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto mb-8">
        <div className="w-1/2">Items</div>
        <div className="flex justify-between w-1/2">
          <span>Quantity</span>
          <span> Price </span>
          <span>Totals</span>
        </div>
      </div>
      <div className="w-4/5 mx-auto h-[1px] bg-[#C4C4C4]"></div>
      {adminList.map(item => (
        <div key={item.id} className="flex w-4/5 mx-auto mt-4 mb-8">
          <div className="flex flex-col w-1/2">
            <span className="leading-7 text-zinc-950">{item.title}</span>
            <span className="leading-7 w-96 text-zinc-950">{item.desc}</span>
          </div>
          <div className="flex justify-between w-1/2 text-zinc-950">
            <span className="leading-7 ">{item.quality}</span>
            <span className="leading-7 ">{item.price}</span>
            <span className="leading-7 ">{item.totals}</span>
          </div>
        </div>
      ))}
      <div className="flex w-4/5 mx-auto mb-8 leading-7 text-zinc-950">
        <div className="w-4/5">Totals</div>
        <div className="flex justify-between w-1/5">
          <span className="ml-auto">$2.888.00</span>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto mb-8 leading-7 text-zinc-950">
        <div className="w-4/5">Taxs</div>
        <div className="flex justify-between w-1/5">
          <span className="ml-auto">$2.888.00</span>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto mb-4 leading-7 text-zinc-950">
        <div className="w-4/5">Discount</div>
        <div className="flex justify-between w-1/5">
          <span className="ml-auto">$2.888.00</span>
        </div>
      </div>
      <div className="w-4/5 mx-auto h-[1px] bg-[#C4C4C4]"></div>
      <div className="flex w-4/5 mx-auto mt-4 mb-12 leading-7 text-zinc-950">
        <div className="w-4/5 text-xl font-medium leading-8">Net Amount</div>
        <div className="flex justify-between w-1/5">
          <span className="ml-auto text-xl font-medium leading-8">
            $2.888.00
          </span>
        </div>
      </div>
      <div className="flex w-4/5 gap-3 mx-auto">
        <img src={logo} alt="logo" />
        <p className="text-sm leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
          interdum tellus sed scelerisque sed habitasse pharetra odio. In sem
          nunc ac cursus maecenas. Et tincidunt ultrices non et quis elit.
          Libero dignissim laoreet mattis mollis molestie vitae odio morbi sed.
        </p>
      </div>
      <Button className="flex mx-auto mt-10 bg-[#3A57E8] px-6 py-2">
        Print
      </Button>
      <div className="bg-white rounded-lg shadow w-[90%] z-[-1] h-313 absolute top-48"></div>
    </div>
  )
}

export default Dashboard
