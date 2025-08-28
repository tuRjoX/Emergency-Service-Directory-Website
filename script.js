    // --- Copy Button Logic ---
    const copyCountElem = document.getElementById('copy-count');
    let copyCount = 0;
    if (copyCountElem) {
        const match = copyCountElem.textContent.match(/(\d+)/);
        if (match) copyCount = parseInt(match[1], 10);
    }

    document.querySelectorAll('button.btn > i.fa-copy').forEach(copyIcon => {
        const copyBtn = copyIcon.parentElement;
        copyBtn.addEventListener('click', function() {
            let card = copyBtn.closest('.bg-white.shadow-md.rounded-lg');
            if (!card) return;
            let hotlineNumber = card.querySelector('div.mt-3 h1')?.textContent?.trim();
            if (!hotlineNumber) return;
            navigator.clipboard.writeText(hotlineNumber).then(() => {
                alert(`Hotline number ${hotlineNumber} copied to clipboard!`);
            }, () => {
                alert('Failed to copy hotline number.');
            });
            copyCount++;
            if (copyCountElem) copyCountElem.textContent = copyCount + ' Copy';
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    const heartButtons = document.querySelectorAll('button > i.fa-heart');
    const heartCountElem = document.getElementById('heart-count');
    let count = parseInt(heartCountElem.textContent, 10) || 0;

    document.querySelectorAll('button > i.fa-heart').forEach(btn => {
        btn.parentElement.addEventListener('click', function() {
            count++;
            heartCountElem.textContent = count;
        });
    });

    // --- Call Button Logic ---
    const coinCountElem = document.getElementById('coin-count');
    let coins = parseInt(coinCountElem.textContent, 10) || 0;
    const callHistoryList = document.getElementById('call-history-list');
    const clearHistoryBtn = document.getElementById('clear-history');
    if (clearHistoryBtn && callHistoryList) {
        clearHistoryBtn.addEventListener('click', function() {
            callHistoryList.textContent = '';
        });
    }

    document.querySelectorAll('button.btn.bg-green-600').forEach(callBtn => {
        callBtn.addEventListener('click', function() {
            let card = callBtn.closest('.bg-white.shadow-md.rounded-lg');
            if (!card) return;
            let serviceName = card.querySelector('div.mt-4 h2')?.textContent?.trim();
            let serviceNumber = card.querySelector('div.mt-3 h1')?.textContent?.trim();
            if (!serviceName || !serviceNumber) return;
            if (coins < 20) {
                alert('Not enough coins to make a call! You need at least 20 coins.');
                return;
            }

            coins -= 20;
            coinCountElem.textContent = coins;
            alert(`Calling ${serviceName} at ${serviceNumber}`);
            if (callHistoryList) {
                let entry = document.createElement('div');
                entry.className = 'flex justify-between items-center mt-4 p-2 bg-[var(--Surface,rgba(250,250,250,1))] rounded-lg';
                const now = new Date();
                const timeString = now.toLocaleTimeString('en-US', { hour12: true });
                entry.innerHTML = `
                    <div>
                        <h1 class="text-lg font-bold">${serviceName}</h1>
                        <p>${serviceNumber}</p>
                    </div>
                    <p>${timeString}</p>
                `;
                callHistoryList.appendChild(entry);
            }
        });
    });
});
