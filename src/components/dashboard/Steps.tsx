import { useState } from 'react'
import { steps } from '@/constants'
import { CustomButton } from "@/components"
import { LuChartNoAxesColumn  } from "react-icons/lu"
import Link from "next/link"
import { CircleHelp } from 'lucide-react'
import { usePeyPeyContext } from "../PeyPeyContext"

const Steps = () => {
    const {setDepositModal, setCalculatorModal} = usePeyPeyContext()

    const buttonClickHandler = (stepId: number) => {
       stepId == 1 ? setDepositModal(true) : stepId == 2 ? setCalculatorModal(true) : null;

       console.log(stepId)
    }

  return (
      <aside className="w-[70%] min-h-[300px] mx-auto rounded-[10px] p-[30px] border-[1px] border-[#202021] bg-brown">
        {/* card header */}
          <div className="w-full flex items-center justify-between">
              <aside>
                <h3 className="font-bold responsive-headerText"> Welcome to NoPeyPey </h3>
                <p className="text-(--paraph-color) responsive-paraph "> The Buy Now, Pay Never protocol </p>
              </aside>

              <h4 
                className="flex items-center gap-[10px] bg-[rgba(9,9,11,255)] p-[6px] rounded-[10px] hover:bg-[rgba(29,220,255,255)] transition-[background] duration-500 cursor-pointer text-[1.5vmax] md:text-[1.3vmax]"> <CircleHelp className="w-[18px]" /> How it works </h4>
          </div>

          {/* card items */}
          <aside className="w-full flex items-center justify-center lg:flex-nowrap flex-wrap gap-[20px] mt-[10px]">
              { steps.map(step => (
                <div 
                    key={step.id}
                    className="flex flex-col gap-[10px] lg:w-[30%] w-full py-[25px] px-[15px] rounded-[15px] glass-card">
                  <h3 className="text-[1.9vmax] md:text-[1.5vmax] font-bold"> Step {step.id}: {step.title} </h3>
                  <p className="text-(--paraph-color) font-medium text-[1.5vmax] md:text-[1.3vmax]"> { step.desc } </p>  
                  { step.btnText.toLowerCase() == "browse marketplace" 
                      ? <Link href="/marketplace" className="glass-card flex items-center gap-[10px] text-[1.5vmax] md:text-[2.5vmax] text-white font-semibold rounded-[10px] cursor-pointer py-[6px] px-[10px] responsive-btnText" >
                        <LuChartNoAxesColumn className='' />
                        {step.btnText} 
                        </Link> 
                      : <CustomButton
                            key={step.id} 
                            onClick={() => buttonClickHandler(step.id)}
                            disabled={false}
                            style={` ${step.id == 1 ? "bg-gradient " : step.id == 2 ? "glass-card" : "bg-[rgba(9,9,11,255)]"} justify-start border-[1px] responsive-btnText border-[#7f7f80]`}
                              >
                              <step.BtnLogo className="w-[15px]" />
                              { step.title }
                      </CustomButton>
                  }
                </div>
              )) }
          </aside>
      </aside>
  )
}

export default Steps