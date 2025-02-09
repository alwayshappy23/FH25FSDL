document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('gradesChart').getContext('2d');
    var gradesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Assignment 1', 'Assignment 2', 'Assignment 3'],
            datasets: [{
                label: 'Grades',
                data: [85, 90, 78],
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: 'rgba(76, 175, 80, 1)',
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