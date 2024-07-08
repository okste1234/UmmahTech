import React from 'react'

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-[#1C1C2D]/70 to-[#272737]">

      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center space-y-2">
            <ShieldIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold">All IT Coverage</h3>
            <p className="text-muted-foreground">
             From beginner to expert, our courses cover provide comprehensive coverage for all you need to fully grow into expert in the Tech ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <WalletIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold ">Affordable Rates</h3>
            <p className="text-muted-foreground">
              Access top-quality tech education at affordable rates, and flexible payment options ensuring that you can pursue your learning goals without financial barriers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <ClockIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold">Flexible Learning Process</h3>
            <p className="text-muted-foreground">
             Our learning process tailored to fit your schedule and learning pace, ensuring you can achieve your tech goals without compromising other commitments.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <UsersIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold">Personalized Service</h3>
            <p className="text-muted-foreground">
              Our dedicated team of memtors and experts will work with you to meet your unique needs and help you achieve your tech ambitions efficiently and effectively.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <BoltIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold">Projects and Career Opportunities</h3>
            <p className="text-muted-foreground">
             Gain hands-on experience through real-world projects and unlock exciting career opportunities in the tech industry with our comprehensive support and guidance.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <AwardIcon className="h-12 w-12 text-[#ff7327]/70" />
            <h3 className="text-xl font-bold">Award-Winning Service</h3>
            <p className="text-muted-foreground">
              Our commitment to excellence has earned us numerous industry awards and accolades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection



function AwardIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BoltIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function ClockIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function ShieldIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function UsersIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}