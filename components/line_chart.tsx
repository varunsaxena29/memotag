'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const data = [
  { year: 2000, cases: 20 },
  { year: 2005, cases: 29 },
  { year: 2010, cases: 35 },
  { year: 2015, cases: 46 },
  { year: 2020, cases: 55 },
  { year: 2025, cases: 65 },
  { year: 2030, cases: 78 },
  { year: 2040, cases: 106 },
  { year: 2050, cases: 139 },
]

export default function DementiaLineChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-card text-xs">
      <ResponsiveContainer height={250} width="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="year"
            stroke="transparent"
            label={"Global cases in Millions per year"}

            className='text-lg font-bold md:flex hidden'
          />
          <YAxis
            tick={{ fill: 'var(--chart-5)' }}
            stroke="var(--chart-5)"
            domain={[0, 150]}
          />
          <Tooltip labelClassName='text-black font-bold leading-none text-center' wrapperClassName='rounded-xl border border-black'/>
          <Line
            type="monotone"
            dataKey="cases"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{ r: 5, stroke: 'var(--accent-foreground)', strokeWidth: 2, fill: 'var(--primary)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
