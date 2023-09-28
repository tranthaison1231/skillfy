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
  },
  {
    id: 5,
    title: 'Totals',
    price: '$2.888.00'
  },
  {
    id: 6,
    title: 'Taxs',
    price: '$2.888.00'
  },
  {
    id: 7,
    title: 'Discount',
    price: '$2.888.00'
  }
]

function Dashboard() {
  return (
    <div className="bg-[#E9ECEF] h-full">
      <div className="top-0 w-full bg-blue-500 h-59 rounded-bl-2xl rounded-br-2xl">
        <div className="absolute flex flex-col mt-16 mb-24 ml-10 top-20 z-100 w-228">
          <h1 className="text-4xl font-bold text-white">Hello Devs !</h1>
          <p className="text-2xl text-white">
            We are on a mission to help developers like you to build beautiful
            projects for free.
          </p>
        </div>
      </div>
      <div className="-mt-10">
        <div className="bg-white rounded-lg shadow w-[calc(100%-3.5rem)] pb-8 mb-3 z-[1] h-full mx-auto">
          <div className="w-[calc(100%-3.5rem)] mx-auto mb-16">
            <div className="flex justify-between">
              <h1 className="mt-10 mb-4 text-3xl font-bold">Invoice #215462</h1>
              <span className="mt-10 leading-7">DUE DATE: Aug 19, 2022</span>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-8 text-3xl font-bold">Hello , Devon Lane </h1>
              <p className="leading-7 text-zinc-950">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
          <div className="flex w-[calc(100%-3.5rem)] mx-auto mb-2 border-b h-10">
            <div className="w-1/2">Items</div>
            <div className="flex justify-between w-1/2">
              <span>Quantity</span>
              <span> Price </span>
              <span>Totals</span>
            </div>
          </div>
          {adminList.slice(0, -3).map(item => (
            <div
              key={item.id}
              className="flex w-[calc(100%-3.5rem)] mx-auto mt-4 mb-8"
            >
              <div className="flex flex-col w-1/2">
                <span className="leading-7 text-zinc-950">{item.title}</span>
                <span className="w-full leading-7 text-zinc-950">
                  {item.desc}
                </span>
              </div>
              <div className="flex justify-between w-1/2 text-zinc-950">
                <span className="ml-6 leading-7">{item.quality}</span>
                <span className="ml-6 leading-7">{item.price}</span>
                <span className="leading-7 ">{item.totals}</span>
              </div>
            </div>
          ))}
          {adminList.slice(-3).map(admin => (
            <div
              key={admin.title}
              className="flex w-[calc(100%-3.5rem)] mx-auto mb-6 leading-7 text-zinc-950"
            >
              <div className="w-4/5">{admin.title}</div>
              <div className="flex justify-between w-1/5">
                <span className="ml-auto">{admin.price}</span>
              </div>
            </div>
          ))}
          <div className="flex w-[calc(100%-3.5rem)] mx-auto items-center  mb-6 leading-7 border-t text-zinc-950">
            <div className="w-4/5 mt-2 text-xl font-medium leading-8">
              Net Amount
            </div>
            <div className="flex justify-between w-1/5">
              <span className="ml-auto text-xl font-medium leading-8">
                $2.888.00
              </span>
            </div>
          </div>
          <div className="flex w-[calc(100%-3.5rem)] gap-3 mx-auto">
            <img src={logo} alt="logo" />
            <p className="text-sm leading-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
              interdum tellus sed scelerisque sed habitasse pharetra odio. In
              sem nunc ac cursus maecenas. Et tincidunt ultrices non et quis
              elit. Libero dignissim laoreet mattis mollis molestie vitae odio
              morbi sed.
            </p>
          </div>
          <span className="flex mt-5 ml-8 text-sm">
            Please pay within 15 days. Thank you for your business.
          </span>
          <div className="">
            <Button className="flex mx-auto mt-10 bg-[#3A57E8] px-6  py-2">
              Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
