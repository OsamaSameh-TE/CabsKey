// Cabinet data configuration with location mapping
const cabinets = {
    'شبرا الخيمة 1': {
        name: 'شبرا الخيمة 1',
        location: 'shobra_kheima',
        data: [
            [0,16,0,18,19,20,21,22,23,24],
            [25,0,27,28,29,0,31,32,33,34],
            [35,36,37,38,39,0,0,0,43,44],
            [45,0,0,0,49,0,51,52,53,54],
            [55,56,57,58,0,0,0,0,0,0],
            [65,66,0,68,0,282,296,295,73,74,75],
            [0,0,0,79,91,92,93,94,95,96],
            [97,98,99,100,101,102,103,104,105,106],
            [107,108,109,110,111,112,113,114,115,116],
            [117,118,119,120,121,122,123,124,125]
        ]
    },
    'شبرا الخيمة 2': {
        name: 'شبرا الخيمة 2',
        location: 'shobra_kheima',
        data: [
            [126,127,128,129,130,131,132,133,134,135],
            [136,137,138,139,140,141,142,143,144,145],
            [146,,147,148,149,150,0,152,153,154,155],
            [156,163,185,283,285,203,204,0,206,207],
            [208,209,210,211,212,213,214,215,216,217],
            [218,219,0,221,222,223,224,225,226,227],
            [228,229,230,231,232,233,234,235,236,237],
            [238,280,240,241,242,243,269,245,284,266],
            [268,281,250,251,252,253,254,255,275,257],
            [291,262,277,278,265,270,267,273,272,276]
        ]
    },
    'بيجام 1': {
        name: 'بيجام 1',
        location: 'bigam',
        data: [
            [175,178,177,"08-04","08-05",180,181,182,"08-06",184],
            [185,186,187,188,1,2,0,4,5,6],
            [7,0,0,0,11,12,13,14,15,16],
            [17,18,19,0,21,22,23,0,25,26],
            [27,28,29,0,0,32,33,34,35,0],
            [37,38,39,40,0,42,43,44,45,46],
            [47,48,49,50,51,52,53,54,55,56],
            [57,58,0,60,0,0,0,0,65,66],
            [67,68,69,70,71,72,73,74,75,76],
            [77,78,79,80,81,82,83,84,85,86]
        ]
    },
    'بيجام 2': {
        name: 'بيجام 2',
        location: 'bigam',
        data: [
            [87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
            [97, 99, 99, 100, 101, 102, 103, 0, 105, 106],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 150, 181, 163, 140, 154, 155, 160, 161, 156],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
        ]
    },
    'بهتيم': {
        name: 'بهتيم',
        location: 'bahteem',
        data: [
            [1, 2, 3, 4, 0, 0, 0, 8, 9, 10],
            [11, 12, 13, 14, 0, 16, 0, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 0, 29, 30, 0],
            [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
            [41, 42, 43, 44, 45, 46, 47, 0, 0, 0],
            [0, 0, 53, 54, 55, 56, 57, 0, 0, 60],
            [61, 62, 63, 0, 65, 66, 67, 68, 69, 70],
            [71, 72, 73, 74, 75, 76, 77, 78, 0, 80],
            [0, 0, 95, 0, 85, 0, 0, 90, 97, 100]
        ]
    },
    'شبرا 3': {
        name: 'شبرا 3',
        location: 'shobra3',
        data: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 0, 17, 18, 19, 20, 21],
            [25, 26, 27, 28, 29, 30, 31, 32, 33],
            [34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
            [44, 45, 46, 0, 0, 0, 0, 0, 52, 53],
            [0, 55, 56, 0, 0, 0, 60, 61, 62],
            [63, 64, 65, 66, 67, 68, 69, 70, 0],
            [72, 73, 74, 75, 76, 77, 78, 79, 80],
            [0, 0, 0, 0, 85, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }
};

const cabinetDetails = {
    'شبرا الخيمة 1-16': {
        'fullCode': '02-1-08-16',
        'vendor': 'Huawei',
        'model': 'MA5600T',
        'lon': '30.1161',
        'lat': '31.27246',
        'address': 'ترعة الشابورى بجوار سور عثمان'
    },
    'شبرا الخيمة 1-18': {
        'fullCode': 'SK1-A2',
        'vendor': 'ZTE',
        'model': 'C300',
        'lon': '31.2570',
        'lat': '30.0791',
        'address': 'Cairo, Shobra Al-Kheima 1'
    },
    'بيجام 1-16': {
        'fullCode': 'BGM1-B1',
        'vendor': 'Nokia',
        'model': '7360 FX-4',
        'lon': '31.2200',
        'lat': '30.0500',
        'address': 'Cairo, Bigam'
    },
    'بيجام 1-18': {
        'fullCode': 'BGM1-B2',
        'vendor': 'Ericsson',
        'model': 'DSLAM',
        'lon': '31.2210',
        'lat': '30.0510',
        'address': 'Cairo, Bigam'
    },
    'بهتيم-16': {
        'fullCode': 'BHTM-C1',
        'vendor': 'Cisco',
        'model': 'Catalyst',
        'lon': '31.2800',
        'lat': '30.0900',
        'address': 'Qalyubia, Bahteem'
    },
    'شبرا 3-16': {
        'fullCode': 'SH3-D1',
        'vendor': 'Huawei',
        'model': 'MA5800',
        'lon': '31.3000',
        'lat': '30.1200',
        'address': 'Cairo, Shobra 3'
    },
    // Add more unique details here for each key in each cabinet
};


// Location names mapping
const locationNames = {
    'central': 'سنترال',
    'shobra_kheima': 'شبرا الخيمة 1 و 2',
    'bigam': 'بيجام',
    'bahteem': 'بهتيم',
    'shobra3': 'شبرا 3'
};

// Global state
let highlightedKeys = new Set();
let currentLocation = null;
let notFoundKeys = new Set();

// DOM elements
const locationSection = document.getElementById('locationSection');
const searchSection = document.getElementById('searchSection');
const cabinetsGrid = document.getElementById('cabinetsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const selectedKeysSection = document.getElementById('selectedKeys');
const keyBadgesContainer = document.getElementById('keyBadges');
const backToLocationsBtn = document.getElementById('backToLocations');
const selectedLocationName = document.getElementById('selectedLocationName');
const exportExcelBtn = document.getElementById('exportExcelBtn');
const detailsModal = document.getElementById('detailsModal');
const closeBtn = document.querySelector('.close-btn');
const modalDetailsBody = document.getElementById('modalDetailsBody');


// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupLocationSelection();
    setupEventListeners();
});

// Setup location selection functionality
function setupLocationSelection() {
    const locationOptions = document.querySelectorAll('.location-option');
    
    locationOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            const location = this.dataset.location;
            
            if (location === "we") {
                e.preventDefault();
                return;
            }

            selectLocation(location);
        });
        
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Select a location and show relevant cabinets
function selectLocation(location) {
    currentLocation = location;
    
    locationSection.style.display = 'none';
    searchSection.style.display = 'block';
    cabinetsGrid.style.display = 'grid';
    
    selectedLocationName.textContent = locationNames[location];
    generateCabinetsForLocation(location);
    
    setTimeout(() => {
        searchInput.focus();
    }, 300);
    
    showNotification(`تم اختيار موقع: ${locationNames[location]}`, 'success');
}

// Generate cabinets for specific location
function generateCabinetsForLocation(location) {
    cabinetsGrid.innerHTML = '';
    
    const locationCabinets = Object.values(cabinets).filter(cabinet => 
        cabinet.location === location
    );
    
    if (locationCabinets.length === 0) {
        cabinetsGrid.innerHTML = `
            <div class="no-cabinets-message">
                <div class="no-cabinets-card">
                    <svg class="no-cabinets-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h3>لا توجد دواليب متاحة</h3>
                    <p>هذا الموقع لا يحتوي على دواليب مفاتيح حالياً</p>
                </div>
            </div>
        `;
        return;
    }
    
    locationCabinets.forEach(cabinet => {
        const cabinetElement = createCabinetElement(cabinet);
        cabinetsGrid.appendChild(cabinetElement);
    });
}

// Create a single cabinet element
function createCabinetElement(cabinet) {
    const cabinetDiv = document.createElement('div');
    cabinetDiv.className = 'cabinet-card';
    
    const totalKeys = cabinet.data.flat().filter(key => key !== 0).length;
    
    cabinetDiv.innerHTML = `
        <div class="cabinet-header">
            <div class="cabinet-info">
                <svg class="cabinet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m15 2 5 7-5 7-5-7 5-7z"></path>
                    <path d="m2 9 5 7 5-7-5-7-5 7z"></path>
                </svg>
                <div class="cabinet-details">
                    <h3 class="cabinet-title">${cabinet.name}</h3>
                    <span class="cabinet-stats">${totalKeys} مفتاح</span>
                </div>
            </div>
            <div class="cabinet-status" id="status-${cabinet.name.replace(/\s+/g, '-')}">
                <span class="status-text">جاهز</span>
            </div>
        </div>
        <div class="cabinet-container">
            ${generateCabinetRows(cabinet.data, cabinet.name)}
        </div>
    `;

    return cabinetDiv;
}

// New function to show cabinet details in a modal
function showCabinetDetailsModal(cabinetName, keyNumber) {
    const key = `${cabinetName}-${keyNumber}`;
    const details = cabinetDetails[key];

    if (!details) {
        modalDetailsBody.innerHTML = `
            <h3>No details available</h3>
            <p>No additional details available for this key  at the moment.</p>
        `;
    } else {
        // Correct GPS link format for Google Maps
        const gpsLink = `https://www.google.com/maps/place/${details.lat},${details.lon}`;
        
        const detailsHTML = `
            <h3>Details for Key ${keyNumber} in ${cabinetName}</h3>
            <p><strong>Full Code:</strong> ${details.fullCode}</p>
            <p><strong>Vendor:</strong> ${details.vendor}</p>
            <p><strong>Model:</strong> ${details.model}</p>
            <p><strong>Longitude:</strong> ${details.lon}</p>
            <p><strong>Latitude:</strong> ${details.lat}</p>
            <p><strong>Address:</strong> ${details.address}</p>
            <p><a href="${gpsLink}" target="_blank" class="gps-link">Open Location on Google Maps</a></p>
        `;
        modalDetailsBody.innerHTML = detailsHTML;
    }
    
    detailsModal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    detailsModal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
});


// Generate cabinet rows
function generateCabinetRows(data, cabinetName) {
    let rowsHTML = '';
    
    data.forEach((row, rowIndex) => {
        const columnsCount = row.length;
        rowsHTML += `
            <div class="cabinet-row" style="grid-template-columns: repeat(${columnsCount}, 1fr);">
                ${generateRowSlots(row, rowIndex, cabinetName)}
            </div>
        `;
    });
    
    return rowsHTML;
}

// Generate key slots
function generateRowSlots(row, rowIndex, cabinetName) {
    let slotsHTML = '';
    
    row.forEach((keyNumber, colIndex) => {
        const isEmpty = keyNumber === 0;
        const isHighlighted = highlightedKeys.has(keyNumber);
        const isNotFound = notFoundKeys.has(keyNumber);

        const key = `${cabinetName}-${keyNumber}`;
        const hasDetails = !!cabinetDetails[key];

        slotsHTML += `
            <div class="key-slot ${isEmpty ? 'empty' : ''} ${isHighlighted ? 'highlighted' : ''} ${isNotFound ? 'not-found' : ''} ${hasDetails ? 'has-details' : ''}" 
                 data-key="${keyNumber}" 
                 data-cabinet="${cabinetName}"
                 data-row="${rowIndex}" 
                 data-col="${colIndex}"
                 title="${isEmpty ? 'مكان فارغ' : `مفتاح رقم ${keyNumber}`}">
                ${isEmpty ? '-' : keyNumber}
            </div>
        `;
    });
    
    return slotsHTML;
}

// New function to export data to Excel
function exportToExcel() {
    const keysToExport = Array.from(highlightedKeys);
    
    if (keysToExport.length === 0) {
        showNotification('برجاء تحديد مفاتيح أولاً', 'error');
        return;
    }
    
    const data = [];
    const headers = ["Msan Code", "Vendor", "Model", "Long", "Lat", "Location", "GPS"];
    data.push(headers);
    
    keysToExport.forEach(keyNumber => {
        const keySlot = document.querySelector(`.key-slot[data-key="${keyNumber}"].highlighted`);
        if (!keySlot) return; // Skip if element is not found
        
        const cabinetName = keySlot.dataset.cabinet;
        const key = `${cabinetName}-${keyNumber}`;
        const details = cabinetDetails[key];
        
        if (details) {
            // Correct GPS link format for Google Maps
            const gpsLink = `https://www.google.com/maps/place/${details.lat},${details.lon}`;
            const row = [
                details.fullCode || "",
                details.vendor || "",
                details.model || "",
                details.lon || "",
                details.lat || "",
                details.address || "",
                gpsLink
            ];
            data.push(row);
        }
    });

    if (data.length > 1) {
        const ws = XLSX.utils.aoa_to_sheet(data);
        
        const headerStyle = {
            font: { bold: true, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "1E40AF" } }, // A professional dark blue
            border: { top: { style: "thin" }, bottom: { style: "thin" }, left: { style: "thin" }, right: { style: "thin" } },
            alignment: { horizontal: "center" }
        };

        const dataStyle = {
            border: { top: { style: "thin" }, bottom: { style: "thin" }, left: { style: "thin" }, right: { style: "thin" } },
            fill: { fgColor: { rgb: "F3F4F6" } } // A light gray
        };

        const cellRange = XLSX.utils.decode_range(ws['!ref']);
        for (let C = cellRange.s.c; C <= cellRange.e.c; ++C) {
            const cell = ws[XLSX.utils.encode_cell({ c: C, r: 0 })];
            if (cell) {
                cell.s = headerStyle;
            }
        }
        
        for (let R = cellRange.s.r + 1; R <= cellRange.e.r; ++R) {
            for (let C = cellRange.s.c; C <= cellRange.e.c; ++C) {
                const cell = ws[XLSX.utils.encode_cell({ c: C, r: R })];
                if (cell) {
                    cell.s = dataStyle;
                }
            }
        }
        
        ws['!autofilter'] = { ref: "A1:G1" };
        
        const wscols = [
            {wch: 15}, // Msan Code
            {wch: 15}, // Vendor
            {wch: 15}, // Model
            {wch: 12}, // Long
            {wch: 12}, // Lat
            {wch: 30}, // Location
            {wch: 40}  // GPS
        ];
        ws['!cols'] = wscols;

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Cabinet Data");
        XLSX.writeFile(wb, "cabinet_data.xlsx");
        showNotification('تم تصدير البيانات بنجاح!', 'success');
    } else {
        showNotification('لا توجد بيانات متاحة للتصدير', 'error');
    }
}


// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    clearBtn.addEventListener('click', handleClear);
    backToLocationsBtn.addEventListener('click', backToLocationSelection);
    exportExcelBtn.addEventListener('click', exportToExcel);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (searchInput.value.trim()) {
                handleSearch();
            } else {
                handleClear();
            }
        }, 500);
    });

    // Event delegation for key slots
    cabinetsGrid.addEventListener('click', (event) => {
        const keySlot = event.target.closest('.key-slot');
        if (keySlot && !keySlot.classList.contains('empty')) {
            const keyNumber = keySlot.dataset.key;
            const cabinetName = keySlot.dataset.cabinet;
            showCabinetDetailsModal(cabinetName, keyNumber);
        }
    });
}

// Handle search
function handleSearch() {
    const searchValue = searchInput.value.trim();
    
    if (!searchValue) {
        handleClear();
        return;
    }
    
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<div class="loading"></div> جاري البحث...';
    searchBtn.disabled = true;
    
    setTimeout(() => {
        const keyNumbers = parseKeyNumbers(searchValue);
        
        if (keyNumbers.length === 0) {
            showNotification('لم يتم العثور على أرقام صحيحة', 'error');
            resetSearchButton(originalText);
            return;
        }
        
        const validationResult = validateKeys(keyNumbers);
        
        highlightedKeys = new Set(validationResult.found);
        notFoundKeys = new Set(validationResult.notFound);
        
        updateCabinetHighlights();
        updateSelectedKeysDisplay();
        updateCabinetStatus();
        
        if (validationResult.found.length > 0) {
            exportExcelBtn.style.display = 'inline-flex';
        } else {
            exportExcelBtn.style.display = 'none';
        }
        
        if (validationResult.notFound.length > 0) {
            showNotification(
                `تم العثور على ${validationResult.found.length} مفتاح، ${validationResult.notFound.length} مفتاح غير موجود`, 
                'warning'
            );
        } else {
            showNotification(`تم العثور على ${validationResult.found.length} مفتاح`, 'success');
        }
        
        resetSearchButton(originalText);
    }, 300);
}

// ✅ Parse key numbers (يدعم النصوص زي 08-04)
function parseKeyNumbers(input) {
    return input
        .split(/[,\s]+/)
        .map(key => key.trim())
        .filter(key => key.length > 0)
        .map(key => {
            if (key.includes("-")) {
                return key; // نص زي ما هو
            }
            const num = parseInt(key, 10);
            return isNaN(num) ? null : num;
        })
        .filter(key => key !== null);
}

// Validate keys
function validateKeys(keyNumbers) {
    const locationCabinets = Object.values(cabinets).filter(cabinet => 
        cabinet.location === currentLocation
    );
    
    const allLocationKeys = new Set();
    locationCabinets.forEach(cabinet => {
        cabinet.data.flat().forEach(key => {
            if (key !== 0) allLocationKeys.add(key);
        });
    });
    
    const found = [];
    const notFound = [];
    
    keyNumbers.forEach(key => {
        if (allLocationKeys.has(key)) {
            found.push(key);
        } else {
            notFound.push(key);
        }
    });
    
    return { found, notFound };
}

// Reset search button
function resetSearchButton(originalText) {
    searchBtn.innerHTML = originalText;
    searchBtn.disabled = false;
}

// Handle clear
function handleClear() {
    searchInput.value = '';
    highlightedKeys.clear();
    notFoundKeys.clear();
    updateCabinetHighlights();
    updateCabinetStatus();
    hideSelectedKeysDisplay();
    exportExcelBtn.style.display = 'none';
    showNotification('تم مسح البحث', 'info');
}

// Back to location selection
function backToLocationSelection() {
    currentLocation = null;
    highlightedKeys.clear();
    notFoundKeys.clear();
    
    locationSection.style.display = 'block';
    searchSection.style.display = 'none';
    cabinetsGrid.style.display = 'none';
    
    searchInput.value = '';
    hideSelectedKeysDisplay();
    exportExcelBtn.style.display = 'none';
    
    showNotification('العودة لاختيار الموقع', 'info');
}

// Update cabinet highlights
function updateCabinetHighlights() {
    const allKeySlots = document.querySelectorAll('.key-slot');
    
    allKeySlots.forEach(slot => {
        const keyNumber = slot.dataset.key;
        
        slot.classList.remove('highlighted', 'not-found');
        
        if (highlightedKeys.has(keyNumber) || highlightedKeys.has(parseInt(keyNumber))) {
            slot.classList.add('highlighted');
            setTimeout(() => {
                slot.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'center'
                });
            }, 100);
        } else if (notFoundKeys.has(keyNumber) || notFoundKeys.has(parseInt(keyNumber))) {
            slot.classList.add('not-found');
        }
    });
}

// Update selected keys display
function updateSelectedKeysDisplay() {
    const totalKeys = highlightedKeys.size + notFoundKeys.size;
    
    if (totalKeys === 0) {
        hideSelectedKeysDisplay();
        return;
    }
    
    const foundKeys = Array.from(highlightedKeys);
    const notFoundKeysArray = Array.from(notFoundKeys);
    
    let badgesHTML = '';
    
    foundKeys.forEach(key => {
        badgesHTML += `
            <div class="key-badge found">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                ${key}
            </div>
        `;
    });
    
    notFoundKeysArray.forEach(key => {
        badgesHTML += `
            <div class="key-badge not-found">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
                ${key}
            </div>
        `;
    });
    
    keyBadgesContainer.innerHTML = badgesHTML;
    selectedKeysSection.style.display = 'block';
}

// Hide selected keys display
function hideSelectedKeysDisplay() {
    selectedKeysSection.style.display = 'none';
    keyBadgesContainer.innerHTML = '';
}

// Update cabinet status
function updateCabinetStatus() {
    const locationCabinets = Object.values(cabinets).filter(cabinet => 
        cabinet.location === currentLocation
    );
    
    locationCabinets.forEach(cabinet => {
        const cabinetStatus = document.getElementById(`status-${cabinet.name.replace(/\s+/g, '-')}`);
        
        if (!cabinetStatus) return;
        
        // Filter to count only the highlighted keys that are in the current cabinet's data
        const foundKeysCount = cabinet.data.flat().filter(key => highlightedKeys.has(String(key)) || highlightedKeys.has(parseInt(key))).length;
        
        if (foundKeysCount > 0) {
            cabinetStatus.innerHTML = `
                <span class="status-text success">تم العثور (${foundKeysCount})</span>
            `;
        } else {
            cabinetStatus.innerHTML = `
                <span class="status-text">جاهز</span>
            `;
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
