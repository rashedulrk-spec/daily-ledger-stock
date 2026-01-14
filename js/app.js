let entries = JSON.parse(localStorage.getItem('ledger')) || [];

// Ledger Form Submit
document.getElementById('ledger-form').addEventListener('submit', function(e){
    e.preventDefault();
    let desc = document.getElementById('desc').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.getElementById('type').value;

    // Add entry
    entries.push({desc, amount, type});
    localStorage.setItem('ledger', JSON.stringify(entries));

    // Refresh table
    renderLedger();
    
    // Clear form
    e.target.reset();
});

// Render Ledger Table
function renderLedger(){
    let tbody = document.getElementById('ledger-body');
    tbody.innerHTML = '';
    entries.forEach(entry => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${entry.desc}</td><td>${entry.amount}</td><td>${entry.type}</td>`;
        tbody.appendChild(tr);
    });
}

// Initial render
renderLedger();
