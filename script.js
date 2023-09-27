
const data = [
    { genre: 'Action', rating: 4.2 },
    { genre: 'Comedy', rating: 3.8 },
    { genre: 'Drama', rating: 4.0 },
    { genre: 'Sci-Fi', rating: 4.3 },
];

const canvas = document.getElementById('bar-chart');


const ctx = canvas.getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(item => item.genre),
        datasets: [{
            label: 'Average Rating',
            data: data.map(item => item.rating),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
            },
        },
    },
});
