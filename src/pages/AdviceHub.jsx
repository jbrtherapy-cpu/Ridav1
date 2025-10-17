
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import GeneralAdvice from './advice/GeneralAdvice'
import IslamicAdvice from './advice/IslamicAdvice'
import AdviceArticle from './advice/AdviceArticle'

export default function AdviceHub(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-6">Advice Hub</h1>
      <div className="flex gap-6 mb-8">
        <Link to="/advice/general" className="underline">General Advice</Link>
        <Link to="/advice/islamic" className="underline">Islamic Psychology</Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Select a section above.</div>} />
        <Route path="general/*" element={<GeneralAdvice />} />
        <Route path="islamic/*" element={<IslamicAdvice />} />
        <Route path=":slug" element={<AdviceArticle />} />
      </Routes>
    </section>
  )
}
