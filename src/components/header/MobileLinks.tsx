import React, { SetStateAction, Dispatch } from 'react'
import { ConnectKitButton } from 'connectkit'
import {  usePathname  } from 'next/navigation'
import { navbarLists } from '@/constants'
import Link from 'next/link'
import { LuWallet } from "react-icons/lu";
import { CustomButton } from "@/components"
import { X } from 'lucide-react'

interface IProps {
   showNav: boolean;
   updateShowNav: Dispatch<SetStateAction<boolean>>
}

const MobileLinks = ({showNav, updateShowNav}: IProps) => {
     const path = usePathname()

     console.log("showing mobile nav", showNav)

  return (
    <ul className={`bg-[rgba(9,9,11,255)] z-[22] w-full gap-[40px] ${showNav ? "opacity-[1] flex flex-col fixed top-[0] h-[35vh] right-0 translate-y-0" : "translate-y-[-350px] h-0 w-0"} p-[20px] transition-all duration-500`}>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col gap-[20px]">
                    { navbarLists.map(list => (
                        <Link
                          className={`cursor-pointer  font-bold ${(path.split('/')[1].length == 0 ? "home" : path.split('/')[1]) == list.title.toLowerCase() && "border-b-[2px] border-[#2caec5]"} hover:bg-[#2caec5] py-[6px] px-[10px] rounded-[10px] `}
                          key={list.id} href={list.url || "/"}> 
                          { list.title } 
                        </Link>
                    )) }
                  </div>

                  <X onClick={() => updateShowNav(false)} className="cursor-pointer" />
                </div>
                <ConnectKitButton.Custom >
                   { ({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                       return  <CustomButton
                                onClick={show}
                                disabled={false}
                                style={`bg-gradient min-w-[fit-content]`}
                              >
                                <LuWallet size={20}/>
                                { isConnected ? `${address?.slice(0, 5)}...${address?.slice(35, address?.length-1)}` : "Connect Wallet"}
                            </CustomButton>
                   } }
                </ConnectKitButton.Custom>
        </ul>
  )
}

export default MobileLinks