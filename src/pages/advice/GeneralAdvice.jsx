
import React from 'react'
import { Link } from 'react-router-dom'
const articles = [
  {slug: 'coping-with-stress', title: 'Coping with stress', excerpt: 'Practical steps to reduce daily stress and build resilience.'},
  {slug: 'building-resilience', title: 'Building resilience', excerpt: 'How to recover from setbacks and strengthen mental wellbeing.'},
  {slug: 'relationships-communication', title: 'Relationships & communication', excerpt: 'Tools for better listening and clearer communication.'},
  {slug: 'overcoming-burnout', title: 'Overcoming burnout', excerpt: 'Recognising burnout and practical recovery steps.'},
  {slug: 'managing-anxiety-attacks', title: 'Managing panic and anxiety attacks', excerpt: 'Grounding techniques and practical stabilisation for acute anxiety.'}
]
export default function GeneralAdvice(){
  return (<div><h2 className="font-heading text-2xl mb-4">General Advice</h2><div className="grid md:grid-cols-3 gap-6">{articles.map(a=>(<article key={a.slug} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-semibold">{a.title}</h3><p className="mt-2 text-sm">{a.excerpt}</p><Link to={`/advice/${a.slug}`} className="mt-4 inline-block underline">Read</Link></article>))}</div></div>)
}
