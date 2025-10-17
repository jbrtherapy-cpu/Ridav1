
import React from 'react'
import { Link } from 'react-router-dom'
const articles = [
  {slug: 'healing-through-dhikr', title: 'Healing through dhikr', excerpt: 'How remembrance and reflection can support emotional balance.'},
  {slug: 'nafs-and-wellbeing', title: 'The nafs and wellbeing', excerpt: 'Understanding self from an Islamic psychological perspective.'},
  {slug: 'prophetic-wisdom', title: 'Prophetic approaches to wellbeing', excerpt: 'Practical guidance inspired by the Prophetic tradition.'},
  {slug: 'balancing-spirituality-and-emotional-health', title: 'Balancing spirituality & emotional health', excerpt: 'Integrating spiritual practice with psychological care.'},
  {slug: 'dua-and-therapy', title: 'Integrating dua & therapeutic practice', excerpt: 'How prayer and supplication can complement therapy.'}
]
export default function IslamicAdvice(){
  return (<div><h2 className="font-heading text-2xl mb-4">Islamic Psychology</h2><div className="grid md:grid-cols-3 gap-6">{articles.map(a=>(<article key={a.slug} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-semibold">{a.title}</h3><p className="mt-2 text-sm">{a.excerpt}</p><Link to={`/advice/${a.slug}`} className="mt-4 inline-block underline">Read</Link></article>))}</div></div>)
}
