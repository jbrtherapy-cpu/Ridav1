
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-heading text-lg">Rida Therapy</h4>
          <p className="text-sm mt-2">Compassionate therapy for individuals and couples. Confidential and evidence-based.</p>
        </div>
        <div>
          <h5 className="font-semibold">Pages</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/advice">Advice</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">Email: <a href="mailto:hello@ridatherapy.com">hello@ridatherapy.com</a></p>
          <p className="text-sm">Registered counsellor · Online & In person</p>
        </div>
      </div>
      <div className="bg-warmneutral text-sm py-4 text-center">© {new Date().getFullYear()} Rida Therapy. Privacy · Terms</div>
    </footer>
  )
}
