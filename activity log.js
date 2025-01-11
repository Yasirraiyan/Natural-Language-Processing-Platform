const activityLog = document.getElementById('activityLog'); 
function logActivity() 
{ 
    const timestamp = new Date().toLocaleTimeString(); 
    const logEntry = document.createElement('div'); 
    logEntry.className = 'log-entry'; 
    logEntry.textContent = `Activity logged at ${timestamp}`; 
    activityLog.appendChild(logEntry); 
    activityLog.scrollTop = activityLog.scrollHeight;
 }
