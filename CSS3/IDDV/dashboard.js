document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February'],
            datasets: [{
                label: 'Sales',
                data: [10000, 12000],
                backgroundColor: ['#007bff', '#28a745'],
                borderColor: ['#007bff', '#28a745'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});