import React from 'react'

export default function Card({name, role, image}) {

  return (
    <figure className="flex flex-col items-center md:flex-row bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 max-w-xl mx-auto gap-6 m-10">
      <img
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-sky-500 shadow-md"
        src= {image}
        alt="Sarah Dayan"
      />
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-xl font-semibold text-slate-900 dark:text-white italic">
            "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-600 dark:text-sky-400 text-lg font-bold">
            { name }
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">
            { role}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
