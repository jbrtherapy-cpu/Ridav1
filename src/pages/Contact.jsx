
import React, { useState } from 'react'
import { CONFIG } from '../config'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.target)
    try{
      const res = await fetch(CONFIG.FORM_ENDPOINT, {
        method: 'POST',
        body: form,
        headers: { 'Accept': 'application/json' }
      })
      if (res.ok) {
        setStatus('ok')
        e.target.reset()
      } else {
        const data = await res.json()
        setStatus('error')
        console.error(data)
      }
    } catch(err){
      setStatus('error')
      console.error(err)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Contact</h1>
      <p className="mb-6">If you’d like to enquire or book, please send a brief message below and I’ll reply within 48 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows="5" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <label className="flex items-center text-sm">
          <input type="checkbox" name="consent" required className="mr-2" /> I consent to my data being stored to respond to my enquiry. See <a href="/privacy" className="underline">privacy policy</a>.
        </label>
        <div>
          <button type="submit" className="inline-block bg-calmteal text-white px-5 py-2 rounded-full">Send message</button>
        </div>
        {status==='sending' && <p className="text-sm text-gray-600">Sending…</p>}
        {status==='ok' && <p className="text-sm text-green-600">Thanks — I’ll reply within 48 hours.</p>}
        {status==='error' && <p className="text-sm text-red-600">There was an error sending your message. Please try again later.</p>}
      </form>
    </section>
  )
}
