import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const ctxIngresos = document.getElementById('chartIngresos').getContext('2d')
const chartIngresos = new Chart(ctxIngresos, {
	type: 'bar',
	data: {
		labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
		datasets: [
			{
				label: 'Ingresos ($)',
				data: [1250.75, 1523.4, 1100.5, 1780.8, 1650.25, 1900.6],
				backgroundColor: 'rgba(13, 110, 253, 0.7)',
				borderColor: 'rgba(13, 110, 253, 1)',
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
				ticks: { callback: (value) => `$${value.toLocaleString()}` },
			},
		},
		plugins: {
			legend: { display: true, position: 'top' },
			tooltip: { mode: 'index', intersect: false },
		},
	},
})

const ctxPedidos = document.getElementById('chartPedidos').getContext('2d')
const chartPedidos = new Chart(ctxPedidos, {
	type: 'bar',
	data: {
		labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
		datasets: [
			{
				label: 'Pedidos',
				data: [32, 47, 28, 53, 41, 60],
				backgroundColor: 'rgba(220, 53, 69, 0.7)',
				borderColor: 'rgba(220, 53, 69, 1)',
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: { beginAtZero: true },
		},
		plugins: {
			legend: { display: true, position: 'top' },
			tooltip: { mode: 'index', intersect: false },
		},
	},
})
