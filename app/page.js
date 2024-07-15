"use client";

import { currencyFormatter } from '@/lib/utils'
import ExpenseCategoryItem from '@/components/ExpenseCategoryItem'


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
	{
		id: 1,
		title: 'Entertainment',
		color: '#FF3366',
		total: 500
	},
	{
		id: 2,
		title: 'Food',
		color: '#FF9900',
		total: 200
	},
	{
		id: 3,
		title: 'Transport',
		color: '#0099FF',
		total: 100
	},
	{
		id: 4,
		title: 'Grocery',
		color: '#33CC33',
		total: 300
	},
	{
		id: 5,
		title: 'Health',
		color: '#FF0000',
		total: 150
	},

]

export default function Home() {
	return <main className="container max-w-2xl px-6 py-6 mx-auto">
		<section className="py-3">
			<small className="text-gray-400 text-md">My Balance</small>
			<h2 className="text-4xl font-bold">{currencyFormatter(100)}</h2>
		</section>


		<section className="flex items-center gap-2 py-3">
			<button className="btn btn-primary">+ Expenses</button>
			<button className="btn btn-primary-outline">+ Income</button>
		</section>

		{/* Expenses*/}
		<section className="py-6">
			<h3 className="text-2xl">My Expenses</h3>
			<div className="flex flex-col gap-4 mt-6">

				{DUMMY_DATA.map((expense => {
					return <ExpenseCategoryItem key={expense.id} color={expense.color} title={expense.title} total={expense.total} />
				}))}

			</div>
		</section>

		{/* Chart Section */}
		<section className="py-6">
			<h3 className="text-2xl">Stats</h3>
			<div className="w-1/2 mx-auto">
				<Doughnut
					data={{
						labels: DUMMY_DATA.map(expense => expense.title),
						datasets: [
							{
								label: "Expenses",
								data: DUMMY_DATA.map(expense => expense.total),
								backgroundColor: DUMMY_DATA.map(expense => expense.color),
								bolderColor: ['#18181b'],
								bolderWidth: 5,
							}
						]
					}} />

			</div>
		</section>
	</main>
}
