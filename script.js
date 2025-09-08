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
            [167, 168, 169, 170, 171, 172, 173, 174],
            [175, 176, 177, 178, 179, 180, 181, 182],
            [183, 184, 185, 186, 187, 188, 189, 190],
            [191, 192, 193, 194, 195, 196, 197, 198],
            [199, 200, 201, 202, 203, 204, 205, 206],
            [207, 208, 209, 210, 211, 212, 213, 214]
        ]
    },
    'بيجام 2': {
        name: 'بيجام 2',
        location: 'bigam',
        data: [
            [215, 216, 217, 218, 219, 220, 221, 222],
            [223, 224, 225, 226, 227, 228, 229, 230],
            [231, 232, 233, 234, 235, 236, 237, 238],
            [239, 240, 241, 242, 243, 244, 245, 246],
            [247, 248, 249, 250, 251, 252, 253, 254],
            [255, 256, 257, 258, 259, 260, 261, 262]
        ]
    },
    'بهتيم': {
        name: 'بهتيم',
        location: 'bahteem',
        data: [
            [263, 264, 265, 266, 267, 268, 269],
            [270, 271, 272, 273, 274, 275, 276],
            [277, 278, 279, 280, 281, 282, 283],
            [284, 285, 286, 287, 288, 289, 290],
            [291, 292, 293, 294, 295, 296, 297]
        ]
    },
    'شبرا 3': {
        name: 'شبرا 3',
        location: 'shobra3',
        data: [
            [298, 299, 300, 301, 302, 303, 304],
            [305, 306, 307, 308, 309, 310, 311],
            [312, 313, 314, 315, 316, 317, 318],
            [319, 320, 321, 322, 323, 324, 325],
            [326, 327, 328, 329, 330, 331, 332]
        ]
    }
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
            
            // لو الموقع اسمه we → ما يعملش أي حاجة
            if (location === "we") {
                e.preventDefault();
                return;
            }

            selectLocation(location);
        });
        
        // Hover animation
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
    
    // Update UI
    locationSection.style.display = 'none';
    searchSection.style.display = 'block';
    cabinetsGrid.style.display = 'grid';
    
    // Update breadcrumb
    selectedLocationName.textContent = locationNames[location];
    
    // Generate cabinets for selected location
    generateCabinetsForLocation(location);
    
    // Focus on search input
    setTimeout(() => {
        searchInput.focus();
    }, 300);
    
    // Show success notification
    showNotification(`تم اختيار موقع: ${locationNames[location]}`, 'success');
}

// Generate cabinets for specific location
function generateCabinetsForLocation(location) {
    cabinetsGrid.innerHTML = '';
    
    // Filter cabinets by location
    const locationCabinets = Object.values(cabinets).filter(cabinet => 
        cabinet.location === location
    );
    
    if (locationCabinets.length === 0) {
        // Show message for locations without cabinets (like central)
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

// Create a single cabinet element with enhanced design
function createCabinetElement(cabinet) {
    const cabinetDiv = document.createElement('div');
    cabinetDiv.className = 'cabinet-card';
    
    // Count total keys (excluding empty slots)
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

// Generate cabinet rows with individual grid layouts
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

// Generate key slots for a single row
function generateRowSlots(row, rowIndex, cabinetName) {
    let slotsHTML = '';
    
    row.forEach((keyNumber, colIndex) => {
        const isEmpty = keyNumber === 0;
        const isHighlighted = highlightedKeys.has(keyNumber);
        const isNotFound = notFoundKeys.has(keyNumber);
        
        slotsHTML += `
            <div class="key-slot ${isEmpty ? 'empty' : ''} ${isHighlighted ? 'highlighted' : ''} ${isNotFound ? 'not-found' : ''}" 
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

// Generate key slots for a cabinet with enhanced styling (legacy function - kept for compatibility)
function generateKeySlots(data, cabinetName) {
    let slotsHTML = '';
    
    data.forEach((row, rowIndex) => {
        row.forEach((keyNumber, colIndex) => {
            const isEmpty = keyNumber === 0;
            const isHighlighted = highlightedKeys.has(keyNumber);
            const isNotFound = notFoundKeys.has(keyNumber);
            
            slotsHTML += `
                <div class="key-slot ${isEmpty ? 'empty' : ''} ${isHighlighted ? 'highlighted' : ''} ${isNotFound ? 'not-found' : ''}" 
                     data-key="${keyNumber}" 
                     data-cabinet="${cabinetName}"
                     data-row="${rowIndex}" 
                     data-col="${colIndex}"
                     title="${isEmpty ? 'مكان فارغ' : `مفتاح رقم ${keyNumber}`}">
                    ${isEmpty ? '-' : keyNumber}
                </div>
            `;
        });
    });
    
    return slotsHTML;
}

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    clearBtn.addEventListener('click', handleClear);
    backToLocationsBtn.addEventListener('click', backToLocationSelection);
    
    // Allow search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Real-time search as user types (with debounce)
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
}

// Handle search functionality with key validation
function handleSearch() {
    const searchValue = searchInput.value.trim();
    
    if (!searchValue) {
        handleClear();
        return;
    }
    
    // Show loading state
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<div class="loading"></div> جاري البحث...';
    searchBtn.disabled = true;
    
    // Simulate search delay for better UX
    setTimeout(() => {
        // Parse key numbers from input
        const keyNumbers = parseKeyNumbers(searchValue);
        
        if (keyNumbers.length === 0) {
            showNotification('لم يتم العثور على أرقام صحيحة', 'error');
            resetSearchButton(originalText);
            return;
        }
        
        // Validate keys and separate found/not found
        const validationResult = validateKeys(keyNumbers);
        
        // Update highlighted keys and not found keys
        highlightedKeys = new Set(validationResult.found);
        notFoundKeys = new Set(validationResult.notFound);
        
        // Update UI
        updateCabinetHighlights();
        updateSelectedKeysDisplay();
        updateCabinetStatus();
        
        // Show appropriate notification
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

// Validate keys against current location cabinets
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

// Update cabinet status indicators
function updateCabinetStatus() {
    const locationCabinets = Object.values(cabinets).filter(cabinet => 
        cabinet.location === currentLocation
    );
    
    locationCabinets.forEach(cabinet => {
        const statusElement = document.getElementById(`status-${cabinet.name.replace(/\s+/g, '-')}`);
        if (!statusElement) return;
        
        const cabinetKeys = cabinet.data.flat().filter(key => key !== 0);
        const foundInCabinet = cabinetKeys.filter(key => highlightedKeys.has(key));
        const notFoundInCabinet = cabinetKeys.filter(key => notFoundKeys.has(key));
        
        if (foundInCabinet.length > 0) {
            statusElement.innerHTML = `
                <span class="status-text found">${foundInCabinet.length} موجود</span>
            `;
            statusElement.className = 'cabinet-status active';
        } else if (notFoundInCabinet.length > 0) {
            statusElement.innerHTML = `
                <span class="status-text not-found">غير موجود</span>
            `;
            statusElement.className = 'cabinet-status inactive';
        } else {
            statusElement.innerHTML = `
                <span class="status-text">جاهز</span>
            `;
            statusElement.className = 'cabinet-status';
        }
    });
}

// Parse key numbers from search input
function parseKeyNumbers(input) {
    return input
        .split(/[,\s]+/)
        .map(key => parseInt(key.trim()))
        .filter(key => !isNaN(key) && key > 0);
}

// Reset search button to original state
function resetSearchButton(originalText) {
    searchBtn.innerHTML = originalText;
    searchBtn.disabled = false;
}

// Handle clear functionality
function handleClear() {
    searchInput.value = '';
    highlightedKeys.clear();
    notFoundKeys.clear();
    updateCabinetHighlights();
    updateCabinetStatus();
    hideSelectedKeysDisplay();
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
    
    // Clear search input
    searchInput.value = '';
    hideSelectedKeysDisplay();
    
    showNotification('العودة لاختيار الموقع', 'info');
}

// Update cabinet highlights
function updateCabinetHighlights() {
    const allKeySlots = document.querySelectorAll('.key-slot');
    
    allKeySlots.forEach(slot => {
        const keyNumber = parseInt(slot.dataset.key);
        
        // Remove all highlight classes first
        slot.classList.remove('highlighted', 'not-found');
        
        if (highlightedKeys.has(keyNumber)) {
            slot.classList.add('highlighted');
            // Add a small delay for staggered animation
            setTimeout(() => {
                slot.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'center'
                });
            }, 100);
        } else if (notFoundKeys.has(keyNumber)) {
            slot.classList.add('not-found');
        }
    });
}

// Update selected keys display with enhanced styling
function updateSelectedKeysDisplay() {
    const totalKeys = highlightedKeys.size + notFoundKeys.size;
    
    if (totalKeys === 0) {
        hideSelectedKeysDisplay();
        return;
    }
    
    // Sort keys for better display
    const foundKeys = Array.from(highlightedKeys).sort((a, b) => a - b);
    const notFoundKeysArray = Array.from(notFoundKeys).sort((a, b) => a - b);
    
    let badgesHTML = '';
    
    // Add found keys
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
    
    // Add not found keys
    notFoundKeysArray.forEach(key => {
        badgesHTML += `
            <div class="key-badge not-found">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
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

// Show notification with enhanced styling
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    const icons = {
        success: '<path d="M20 6L9 17l-5-5"></path>',
        error: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${icons[type]}
        </svg>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (currentLocation) {
            searchInput.focus();
            searchInput.select();
        }
    }
    
    // Escape to clear search or go back
    if (e.key === 'Escape') {
        if (currentLocation) {
            if (searchInput.value.trim()) {
                handleClear();
            } else {
                backToLocationSelection();
            }
        }
        searchInput.blur();
    }
});

// Add click handlers for key slots (for additional interactivity)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('key-slot') && !e.target.classList.contains('empty')) {
        const keyNumber = parseInt(e.target.dataset.key);
        
        if (highlightedKeys.has(keyNumber)) {
            // Remove from highlights
            highlightedKeys.delete(keyNumber);
        } else {
            // Add to highlights
            highlightedKeys.add(keyNumber);
            // Remove from not found if it was there
            notFoundKeys.delete(keyNumber);
        }
        
        // Update search input
        const allSelectedKeys = [...highlightedKeys, ...notFoundKeys];
        searchInput.value = allSelectedKeys.sort((a, b) => a - b).join(', ');
        
        // Update UI
        updateCabinetHighlights();
        updateSelectedKeysDisplay();
        updateCabinetStatus();
    }
});

// Add touch support for mobile devices
let touchStartTime = 0;
document.addEventListener('touchstart', function(e) {
    touchStartTime = Date.now();
});

document.addEventListener('touchend', function(e) {
    const touchDuration = Date.now() - touchStartTime;
    
    // Only trigger click if it's a quick tap (not a scroll)
    if (touchDuration < 200 && e.target.classList.contains('key-slot')) {
        e.target.click();
    }
});

// Performance optimization: Debounce resize events
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate layouts if needed
        updateCabinetHighlights();
    }, 250);
});

