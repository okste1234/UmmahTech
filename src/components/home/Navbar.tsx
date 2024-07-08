"use client";

import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo/InsurefiLogo.svg"
import Image from 'next/image'
import { Button } from '../ui/button'
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'

type Props = {}

const Navbar = (props: Props) => {
  const { open } = useWeb3Modal()
  const { address, chainId } = useWeb3ModalAccount();

  return (
    <header className="px-4 lg:px-6 h-14 flex justify-between items-center">
    <Link href="/" className="flex items-center justify-center">
      <Image src={logo} width={40} height={42} alt='logo'/>
      <h2 className='font-bold text-xl'>UmmahTech</h2>
    </Link>
    <nav className="flex gap-6 sm:gap-12">
      <Link href="explore" className="text-sm font-medium hover:underline underline-offset-4">
        Explore
      </Link>
      <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        About Us
      </Link>
      <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Contact
      </Link>
    </nav>
    
      {address ?
        (<Button onClick={() => open({ view: 'Account' })} className='hover:bg-[#ff7327]/80'>
            Log Out
        </Button>)
        
        : (
          <div>
            <Button onClick={() => open()} className='hover:bg-[#ff7327]/80'>
              Connect Wallet
            </Button>
        </div>
      )
        
     } 
  </header>  )
}

export default Navbar

  