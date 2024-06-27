"use client";
import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { IoClose } from "react-icons/io5";

type Props = {
  title: string
  children?: ReactNode
  popupOpen: boolean
  setPopupOpen: (open: boolean) => void
}

const Popup: FC<Props> = ({ title, children, popupOpen, setPopupOpen }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopupOpen(false);
      }
    };

    if (popupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupOpen, setPopupOpen]);
  return (
    <div className={`w-full h-full bg-projectOverlay fixed top-0 left-0 z-50 px-7 lg:px-20 py-5 lg:py-10 overflow-y-auto duration-500 ${popupOpen ? "block" : "hidden"}`}>
      <div ref={popupRef} className="bg-white pt-7 pb-10 px-5 relative">
        <div onClick={() => setPopupOpen(false)} className="text-3xl text-secondary-300 absolute top-2 right-2 cursor-pointer">
          <IoClose />
        </div>
        <h3 className="text-3xl font-medium text-secondary-500 capitalize text-center mb-3.5 md:mb-5">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default Popup