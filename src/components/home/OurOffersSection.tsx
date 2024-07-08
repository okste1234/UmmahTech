import { LucideMonitorSmartphone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'

type Props = {}

const OurOffersSection = (props: Props) => {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32  h-auto">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-neutral-200 px-3 py-1 text-sm text-black/80">Explore our Products</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Comprehensive Coverage for Your Tech Needs
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           UmmahTech allows you to stay ahead of the curve with our cutting-edge courses, mentorship, and hands-on learning experiences tailored to the latest industry trends. Become industry-ready and access internships and job opportunities here. We've got you covered.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <Link href="/explore" prefetch={false}  className="flex flex-col cursor-pointer items-center justify-center space-y-4">
          <LucideMonitorSmartphone className="h-12 w-12 text-[#ff7327]/70" />
          <h3 className="text-xl font-bold">Mentorship</h3>
          <p className="text-gray-400">
            Learn from industry experts
          </p>
        </Link>
        <Link href="/explore" prefetch={false} className="flex flex-col items-center justify-center text-center space-y-4 cursor-pointer">
          <HomeIcon className="h-12 w-12 text-[#ff7327]/70" />
          <h3 className="text-xl font-bold">Internship</h3>
          <p className="text-gray-400">
            Growth-driven internship placements with top companies
          </p>
        </Link>
        <Link href="/explore" prefetch={false}  className="cursor-pointer flex flex-col items-center justify-center text-center space-y-4">
          <BsFillJournalBookmarkFill className="h-12 w-12 text-[#ff7327]/70" />
          <h3 className="text-xl font-bold">Jobs</h3>
          <p className="text-gray-400">
            Secure your dream job and make meaningful impacts
          </p>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default OurOffersSection

  function HomeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
