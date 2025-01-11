document.addEventListener('DOMContentLoaded', function() {
    // Simulated data
    const metrics = {
        totalUsers: 1200,
        activeUsers: 300,
        engagementRate: (300 / 1200 * 100).toFixed(2),
        engagementData: [30, 40, 50, 60, 70, 80, 90, 100]
    };

    // Update metrics
    document.getElementById('totalUsers').textContent = metrics.totalUsers;
    document.getElementById('activeUsers').textContent = metrics.activeUsers;
    document.getElementById('engagementRate').textContent = metrics.engagementRate + '%';

    // Create chart
    const ctx = document.getElementById('engagementChart').getContext('2d');
    const engagementChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'User Engagement',
                data: metrics.engagementData,
                backgroundColor: 'rgba(255, 105, 180, 0.2)',
                borderColor: 'rgba(255, 105, 180, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
