
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl mb-4">Find calm. Heal. Grow.</h1>
      <p className="mb-6">Therapy for individuals & couples — compassionate, evidence-based support. Online & in person.</p>
      <div className="space-x-4">
        <Link to="/contact" className="inline-block bg-calmteal text-white px-6 py-3 rounded-full">Send a message</Link>
        <Link to="/advice" className="underline">Visit the Advice Hub</Link>
      </div>
    </div>
  )
}
