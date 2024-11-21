'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Icons } from '@/components/ui/icons';

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const { setTheme } = useTheme();
  const [stateTheme, setStateTheme] = useState<'light' | 'dark' | null>(null);

  const toggleTheme = () => {
    const newTheme = stateTheme === 'dark' ? 'light' : 'dark';

    setStateTheme(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setStateTheme(savedTheme);
    setTheme(savedTheme);
  }, [setTheme]);

  if (stateTheme === null) return null;

  return (
    <div className={`fixed top-1/3 left-full z-40 flex drop-shadow-3xl ease-in-out duration-500 ${open ? "-translate-x-full" : "-translate-x-9 md:-translate-x-10"}`}>
      <div
        onClick={() => setOpen(!open)}
        className="size-9 md:size-10 rounded-l bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center cursor-pointer">
          {
            stateTheme === 'light' ? (
              <Icons.Sun pathClassName='fill-gray-100' className='size-5.5 md:size-6' />
            ) : (
              <Icons.Moon pathClassName='fill-gray-100' className='size-5 md:size-5.5' />
            )
          }
      </div>
      <div className="px-2 py-2 bg-white rounded-bl-lg w-max">
        <h2 className="capitalize font-semibold font-syne md:text-secondary-500 mb-2.5 mx-2">theme switcher</h2>
        <div
          onClick={toggleTheme}
          className={`text-secondary-500 flex items-center gap-2 text-sm pl-2 pr-10 py-1.5 cursor-pointer duration-300 hover:bg-amber-200 ${stateTheme === 'light' ? "bg-amber-200" : ""}`}
        >
          <span className='size-5 grid place-content-center'><Icons.Sun pathClassName='fill-secondary-500' className='size-5' /></span>
          Light
        </div>

        <div
          onClick={toggleTheme}
          className={`text-secondary-500 flex items-center gap-2 text-sm pl-2 pr-10 py-1.5 cursor-pointer duration-300 hover:bg-slate-300 ${stateTheme === 'dark' ? "bg-slate-300" : ""}`}
        >
          <span className='size-5 grid place-content-center'><Icons.Moon pathClassName='fill-secondary-500' className='size-4.5' /></span>
          Dark
        </div>
      </div>
    </div>
  );
}
