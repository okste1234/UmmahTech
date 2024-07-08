import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"


type Props = {}

const Faq = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 h-auto">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black/70">FAQs</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about our services? Check out our FAQs for quick answers.
          </p>
        </div>
      </div>
      <div className="mx-auto flex gap-6 py-12 flex-col text-black/70">
        <Collapsible className="space-y-2 ">
          <CollapsibleTrigger className="flex items-center w-full justify-between rounded-md bg-neutral-200 px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <h3 className="text-lg">What types of mentorship do you offer?</h3>
            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform group-[data-state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border bg-neutral-200 px-4 py-3 text-muted-foreground shadow-sm">
            <p>
              UmmahTech offers a wide range of mentorship method...
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-2 ">
          <CollapsibleTrigger className="flex items-center w-full justify-between rounded-md bg-neutral-200 px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <h3 className="text-lg">How do I apply for internship/job?</h3>
            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform group-[data-state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border bg-neutral-200 px-4 py-3 text-muted-foreground shadow-sm">
            <p>
              Application for open roles on UmmahTech...
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-2 ">
          <CollapsibleTrigger className="flex items-center w-full justify-between rounded-md bg-neutral-200 px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <h3 className="text-lg">What is the process for getting a quote?</h3>
            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform group-[data-state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border bg-neutral-200 px-4 py-3 text-muted-foreground shadow-sm">
            <p>
              Obtaining a quote from UmmahTech is simple. You can start the process by visiting our website, ...
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-2 ">
          <CollapsibleTrigger className="flex items-center w-full justify-between rounded-md bg-neutral-200 px-4 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <h3 className="text-lg">Do you offer discounts or bundling options?</h3>
            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform group-[data-state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border bg-neutral-200 px-4 py-3 text-muted-foreground shadow-sm">
            <p>
              Yes, UmmahTech offers a variety of discounts and bundling options to help our users save
              money. For example,...
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </section>
  )
}

export default Faq

function ChevronDownIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  