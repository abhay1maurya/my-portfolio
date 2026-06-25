/* ═══════════════════════════════════════════
   CONTACT.JS — Dynamic Status & Copyable Contact Grid
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    mapContactDetails();
    initLiveWorkspace();
});

var contactInfo = [
    {
        category: "phone",
        icon: "fa fa-phone",
        label: "+91 8191826630",
        link: "https://wa.me/918191826630",
        copyValue: "+918191826630",
        copyable: true
    },
    {
        category: "email",
        icon: "fa fa-envelope",
        label: "abhay.maurya0303@gmail.com",
        link: "mailto:abhay.maurya0303@gmail.com",
        copyValue: "abhay.maurya0303@gmail.com",
        copyable: true
    },
    {
        category: "github",
        icon: "fa fa-github",
        label: "github.com/abhay1maurya",
        link: "https://github.com/abhay1maurya",
        copyable: false
    },
    {
        category: "linkedin",
        icon: "fa fa-linkedin-square",
        label: "linkedin.com/in/abhay-maurya03",
        link: "https://www.linkedin.com/in/abhay-maurya03/",
        copyable: false
    }
];

function mapContactDetails() {
    var wrapper = document.getElementById("contacts-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = "";

    contactInfo.forEach(function (c) {
        var card = document.createElement("a");
        card.className = "contact-card card-" + c.category;
        card.href = c.link;
        card.target = "_blank";

        var iconEl = document.createElement("i");
        iconEl.className = "contact-icon " + c.icon;

        var labelEl = document.createElement("span");
        labelEl.className = "body2 contact-label";
        labelEl.textContent = c.label;

        card.appendChild(iconEl);
        card.appendChild(labelEl);

        // Append Copier button if copyable
        if (c.copyable) {
            var copyBtn = document.createElement("button");
            copyBtn.type = "button";
            copyBtn.className = "contact-copy-btn";
            copyBtn.setAttribute("aria-label", "Copy contact info");
            
            // Tooltip span
            var tooltip = document.createElement("span");
            tooltip.className = "copy-tooltip";
            tooltip.textContent = "Copy";
            copyBtn.appendChild(tooltip);

            // Copy SVG icon
            copyBtn.insertAdjacentHTML("beforeend", `
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-svg">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            `);

            copyBtn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                navigator.clipboard.writeText(c.copyValue).then(function () {
                    // Update tooltip text
                    tooltip.textContent = "Copied!";
                    copyBtn.classList.add("copied");

                    // Swap copy icon to checkmark svg temporarily
                    var svg = copyBtn.querySelector("svg");
                    svg.outerHTML = `
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#21f3b0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="copy-svg check-svg">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    `;

                    setTimeout(function () {
                        tooltip.textContent = "Copy";
                        copyBtn.classList.remove("copied");
                        var activeSvg = copyBtn.querySelector(".copy-svg");
                        if (activeSvg) {
                            activeSvg.outerHTML = `
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-svg">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            `;
                        }
                    }, 1800);
                });
            });

            card.appendChild(copyBtn);
        } else {
            var chevron = document.createElement("i");
            chevron.className = "fa fa-chevron-right contact-chevron";
            card.appendChild(chevron);
        }

        wrapper.appendChild(card);
    });
}

function initLiveWorkspace() {
    updateWorkspaceClock();
    // Start interval
    setInterval(updateWorkspaceClock, 1000);
}

function updateWorkspaceClock() {
    var current = new Date();
    
    // Convert to Indian Standard Time (IST: UTC + 5.5)
    var utc = current.getTime() + (current.getTimezoneOffset() * 60000);
    var istTime = new Date(utc + (3600000 * 5.5));

    // 1. Update Clock
    var hours = istTime.getHours();
    var minutes = istTime.getMinutes();
    var seconds = istTime.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    var clockEl = document.getElementById("local-time");
    if (clockEl) clockEl.textContent = timeString;

    // 2. Update Availability Pulse based on hour (Active 9 AM to 10 PM IST)
    var statusLabel = document.getElementById("status-availability");
    var statusDot = document.getElementById("status-dot");
    
    var actualHoursIST = istTime.getHours();
    var isActive = actualHoursIST >= 9 && actualHoursIST < 22;

    if (statusLabel && statusDot) {
        if (isActive) {
            statusLabel.textContent = "Active Now — Open to Chat";
            statusDot.className = "status-dot-pulse active";
        } else {
            statusLabel.textContent = "Offline — Back Online Tomorrow";
            statusDot.className = "status-dot-pulse away";
        }
    }

    // 3. Update Calendar widget based on IST calendar date
    var monthName = istTime.toLocaleDateString("en-US", { month: "long" });
    var dateNum = istTime.getDate();
    var dayName = istTime.toLocaleDateString("en-US", { weekday: "long" });

    var monthEl = document.getElementById("month");
    if (monthEl) monthEl.textContent = monthName;

    var dateEl = document.getElementById("date");
    if (dateEl) dateEl.textContent = dateNum;

    var dayEl = document.getElementById("day");
    if (dayEl) dayEl.textContent = dayName;
}