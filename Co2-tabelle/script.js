// XSS-Schutz: Eingaben bereinigen //
function sanitizeInput(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Tabellenfilter für Länder //
function filterByLand() {
    const filter = sanitizeInput(document.getElementById('filter-land').value.toLowerCase());
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const landCell = rows[i].getElementsByTagName('td')[0];
        if (landCell) {
            const landText = landCell.textContent || landCell.innerText;
            if (landText.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

// Tabellenfilter für Unternehmen
function filterByUnternehmen() {
    const filter = sanitizeInput(document.getElementById('filter-unternehmen').value.toLowerCase());
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const unternehmenCell = rows[i].getElementsByTagName('td')[1];
        if (unternehmenCell) {
            const unternehmenText = unternehmenCell.textContent || unternehmenCell.innerText;
            if (unternehmenText.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

// Kombinierter Filter (Land UND Unternehmen)
function applyFilters() {
    const landFilter = sanitizeInput(document.getElementById('filter-land').value.toLowerCase());
    const unternehmenFilter = sanitizeInput(document.getElementById('filter-unternehmen').value.toLowerCase());
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const landCell = rows[i].getElementsByTagName('td')[0];
        const unternehmenCell = rows[i].getElementsByTagName('td')[1];

        if (landCell && unternehmenCell) {
            const landText = (landCell.textContent || landCell.innerText).toLowerCase();
            const unternehmenText = (unternehmenCell.textContent || unternehmenCell.innerText).toLowerCase();

            const landMatch = landText.indexOf(landFilter) > -1;
            const unternehmenMatch = unternehmenText.indexOf(unternehmenFilter) > -1;

            if (landMatch && unternehmenMatch) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

// Tabellensortierung
function sortTable(columnIndex) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Sortierrichtung bestimmen
    const currentSort = table.getAttribute('data-sort-column');
    const currentDirection = table.getAttribute('data-sort-direction');

    let newDirection = 'asc';
    if (currentSort == columnIndex && currentDirection === 'asc') {
        newDirection = 'desc';
    }

    // Zeilen sortieren
    rows.sort((a, b) => {
        const aCell = a.getElementsByTagName('td')[columnIndex];
        const bCell = b.getElementsByTagName('td')[columnIndex];

        let aText = aCell.textContent || aCell.innerText;
        let bText = bCell.textContent || bCell.innerText;

        // Numerische Spalte (Emissionen) behandeln
        if (columnIndex === 3) {
            aText = parseFloat(aText.replace(/[.,]/g, '')) || 0;
            bText = parseFloat(bText.replace(/[.,]/g, '')) || 0;
            return newDirection === 'asc' ? aText - bText : bText - aText;
        }

        // Textspalten behandeln
        aText = aText.toLowerCase();
        bText = bText.toLowerCase();

        if (newDirection === 'asc') {
            return aText.localeCompare(bText);
        } else {
            return bText.localeCompare(aText);
        }
    });

    // Zeilen wieder anfügen, um die Tabelle zu aktualisieren
    rows.forEach(row => tbody.appendChild(row));

    // Sortierstatus speichern
    table.setAttribute('data-sort-column', columnIndex);
    table.setAttribute('data-sort-direction', newDirection);

    // Sortier-Indikatoren aktualisieren
    updateSortIndicators(columnIndex, newDirection);
}

// Sortier-Indikatoren anpassen
function updateSortIndicators(activeColumn, direction) {
    const headers = document.querySelectorAll('th');

    headers.forEach((header, index) => {
        // Vorhandene Indikatoren entfernen
        header.classList.remove('sort-asc', 'sort-desc');

        // Aktiven Indikator hinzufügen
        if (index === activeColumn) {
            header.classList.add(direction === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });
}

// Event Listener registrieren, sobald der DOM bereit ist
document.addEventListener('DOMContentLoaded', function() {
    // Event Listener für Filter
    const landFilter = document.getElementById('filter-land');
    const unternehmenFilter = document.getElementById('filter-unternehmen');

    if (landFilter) {
        landFilter.addEventListener('input', applyFilters);
    }

    if (unternehmenFilter) {
        unternehmenFilter.addEventListener('input', applyFilters);
    }

    // Event Listener für die Sortierung über Tabellenköpfe
    const headers = document.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => sortTable(index));

        // Hover-Effekt für visuelles Feedback hinzufügen
        header.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });

        header.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    console.log('CO₂-Tabellenfunktion bereit');
});