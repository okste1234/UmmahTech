import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {}

const ReviewSection = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from real customers about their experience with StarkCore.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="rounded-lg border bg-neutral-200 p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">John Doe</h4>
                  <span className="text-xs text-muted-foreground">Frontend Track</span>
                </div>
                <p className="text-muted-foreground">
                  "UmmahTech has been transformative for my career. The courses are cutting-edge, and the mentorship from industry experts is invaluable. Thanks to their support, I secured an amazing internship and landed my dream job. I highly recommend UmmahTech to anyone aiming to excel in the tech industry."
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-neutral-200 p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">Jane Appleseed</h4>
                  <span className="text-xs text-muted-foreground">Blockchain Developer</span>
                </div>
                <p className="text-muted-foreground">
                  "I've struggled with udemy courses and youtube courses before UmmahTech, my blockchain journey has been amazing ever since I came across them. I landed my first internship role on this platform just months with my mentor."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ReviewSection