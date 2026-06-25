/* ═══════════════════════════════════════════
   EDUCATION.JS — Dynamic Timeline & Academic Showcase
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    mapEducationData();
});

// Dynamic degree icons
var DEGREE_ICONS = {
    cap: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
    db: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" r="9"></ellipse><path d="M3 5v14c0 2.2 4 4 9 4s9-1.8 9-4V5"></path><path d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4"></path></svg>`,
    book: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    pencil: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
};

var educationData = [
    {
        id: "btech-cse",
        degree: "B.Tech in Computer Science",
        org: "Uttarakhand Technical University",
        location: "Dr. APJ Abdul Kalam Institute of Technology, Tanakpur",
        duration: "2022 – 2026",
        score: "CGPA: 7.21 / 10",
        themeColor: "#fb923c",
        themeColorRgb: "251, 146, 60",
        icon: DEGREE_ICONS.cap,
        courses: [
            "Data Structures & Algorithms", 
            "Database Management Systems (DBMS)", 
            "Operating Systems", 
            "Computer Networks", 
            "Compiler Design", 
            "Software Engineering"
        ],
        highlights: [
            "Trained and evaluated a Convolutional Neural Network (CNN) in TensorFlow/Keras for plant disease diagnostics for undergraduate capstone project.",
            "Maintained solid B.Tech computer science foundations while concurrently pursuing a rigorous Data Science diploma from IIT Madras.",
            "Elected campus student coordinator facilitating technology laboratories and university workshops."
        ]
    },
    {
        id: "diploma-ds",
        degree: "Diploma in Data Science",
        org: "IIT Madras",
        location: "IIT Madras BS degree in Data Science and Applications",
        duration: "2022 – 2025",
        score: "CGPA: 7.29 / 10",
        themeColor: "#22d3ee",
        themeColorRgb: "34, 211, 238",
        icon: DEGREE_ICONS.db,
        courses: [
            "Machine Learning Foundations", 
            "Python Programming & DSA", 
            "Exploratory Data Analysis (EDA)", 
            "Business Data Management", 
            "Tools for Data Science", 
            "Database Management Systems (SQL)"
        ],
        highlights: [
            "Acquired formal qualifications in statistical modeling, database operations, and linear algebra from a premium national engineering institute.",
            "Completed multiple practical project implementations including hybrid search engines and system forecast networks.",
            "Applied robust data analysis structures and algorithmic problem solving using Python."
        ]
    },
    {
        id: "class-12",
        degree: "Class XII (High School)",
        org: "CBSE, Science & Math Stream",
        location: "English Medium Schooling",
        duration: "Passed in 2022",
        score: "Score: 84.8%",
        themeColor: "#a78bfa",
        themeColorRgb: "167, 139, 250",
        icon: DEGREE_ICONS.book,
        courses: [
            "Physics", 
            "Chemistry", 
            "Mathematics", 
            "Computer Science (Python)", 
            "English Language"
        ],
        highlights: [
            "Achieved honors performance in mathematics and computing streams.",
            "Programmed initial console applications using standard control flow and file operations in high school Python classes."
        ]
    },
    {
        id: "class-10",
        degree: "Class X (Secondary School)",
        org: "CBSE",
        location: "English Medium Schooling",
        duration: "Passed in 2020",
        score: "Score: 86.8%",
        themeColor: "#fb7185",
        themeColorRgb: "251, 113, 133",
        icon: DEGREE_ICONS.pencil,
        courses: [
            "Mathematics", 
            "Science & Lab Fundamentals", 
            "Social Sciences", 
            "English", 
            "Hindi"
        ],
        highlights: [
            "Completed secondary school coursework with top tier score evaluations.",
            "Earned distinctions in core Mathematics and Science subjects."
        ]
    }
];

function mapEducationData() {
    var wrapper = document.getElementById("edu-cards-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = "";

    educationData.forEach(function (item, index) {
        // Timeline Item Wrapper
        var itemWrapper = document.createElement("div");
        itemWrapper.className = "edu-item-wrapper " + (index === 0 ? "active" : "");
        itemWrapper.setAttribute("data-id", item.id);
        itemWrapper.style.setProperty("--edu-theme", item.themeColor);
        itemWrapper.style.setProperty("--edu-theme-rgb", item.themeColorRgb);

        // Glowing Connection Dot
        var dotRing = document.createElement("div");
        dotRing.className = "edu-dot-ring";
        dotRing.innerHTML = '<div class="edu-dot"></div>';

        // Card structure
        var card = document.createElement("div");
        card.className = "edu-card glass glass-hover";
        card.setAttribute("data-animate", "fade-up-blur");
        card.setAttribute("data-delay", String(index * 100));

        // Card Header (Icon + Titles)
        var cardHeader = document.createElement("div");
        cardHeader.className = "edu-card-header";

        var iconBox = document.createElement("div");
        iconBox.className = "edu-card-icon";
        iconBox.innerHTML = item.icon;

        var titleBox = document.createElement("div");
        titleBox.className = "edu-card-title-box";

        var degree = document.createElement("h4");
        degree.className = "edu-degree-title";
        degree.textContent = item.degree;

        var org = document.createElement("p");
        org.className = "edu-org-title";
        org.textContent = item.org;

        titleBox.appendChild(degree);
        titleBox.appendChild(org);
        cardHeader.appendChild(iconBox);
        cardHeader.appendChild(titleBox);

        // Meta chips
        var metaRow = document.createElement("div");
        metaRow.className = "edu-meta-row";

        var durationChip = document.createElement("span");
        durationChip.className = "edu-chip";
        durationChip.textContent = item.duration;

        var scoreChip = document.createElement("span");
        scoreChip.className = "edu-chip";
        scoreChip.textContent = item.score;

        metaRow.appendChild(durationChip);
        metaRow.appendChild(scoreChip);

        // Mobile Inline Accordion Container
        var mobileDetails = document.createElement("div");
        mobileDetails.className = "edu-mobile-accordion";
        // Pre-build accordion inner container
        var accordionInner = document.createElement("div");
        accordionInner.className = "edu-accordion-inner";
        mobileDetails.appendChild(accordionInner);

        card.appendChild(cardHeader);
        card.appendChild(metaRow);
        card.appendChild(mobileDetails);

        itemWrapper.appendChild(dotRing);
        itemWrapper.appendChild(card);

        // Click handler to select and update showcase or expand accordion
        card.addEventListener("click", function () {
            selectEducationMilestone(item.id);
        });

        wrapper.appendChild(itemWrapper);
    });

    // Load initial item
    selectEducationMilestone(educationData[0].id);
}

function selectEducationMilestone(id) {
    var item = educationData.find(function (e) { return e.id === id; });
    if (!item) return;

    // Toggle active state on cards
    document.querySelectorAll(".edu-item-wrapper").forEach(function (wrapper) {
        if (wrapper.getAttribute("data-id") === id) {
            wrapper.classList.add("active");
        } else {
            wrapper.classList.remove("active");
        }
    });

    // Update active vertical line glow tracking (CSS variable logic)
    var container = document.getElementById("edu-cards-wrapper");
    var activeIndex = educationData.findIndex(function (e) { return e.id === id; });
    if (container) {
        var pct = (activeIndex / (educationData.length - 1)) * 100;
        container.parentElement.style.setProperty("--edu-active-percent", pct + "%");
    }

    // ═══ Update desktop showcase panel ═══
    var panel = document.getElementById("edu-showcase-panel");
    if (panel) {
        panel.classList.add("switching");

        setTimeout(function () {
            panel.style.setProperty("--edu-theme", item.themeColor);
            panel.style.setProperty("--edu-theme-rgb", item.themeColorRgb);

            // Coursework tags
            var coursesHtml = "";
            item.courses.forEach(function (course) {
                coursesHtml += '<span class="edu-course-pill">' + course + '</span>';
            });

            // Accomplishments list
            var highlightsHtml = "";
            item.highlights.forEach(function (high) {
                highlightsHtml += '<li class="edu-highlight-item">' +
                    '<span class="edu-highlight-check">' +
                    '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
                    '</span>' +
                    '<span>' + high + '</span>' +
                    '</li>';
            });

            panel.innerHTML = `
                <div class="edu-detail-header">
                    <div class="edu-detail-icon" style="background: rgba(${item.themeColorRgb}, 0.12); color: ${item.themeColor}; border: 1px solid rgba(${item.themeColorRgb}, 0.2)">
                        ${item.icon}
                    </div>
                    <div>
                        <span class="edu-detail-score" style="color: ${item.themeColor}">${item.score}</span>
                        <h3 class="edu-detail-degree">${item.degree}</h3>
                        <p class="edu-detail-org">${item.org} — <span class="edu-detail-loc">${item.location}</span></p>
                    </div>
                </div>
                
                <div class="edu-detail-section">
                    <h4 class="edu-detail-section-title">Core Coursework Focus</h4>
                    <div class="edu-course-list">${coursesHtml}</div>
                </div>

                <div class="edu-detail-section">
                    <h4 class="edu-detail-section-title">Key Academic Accomplishments</h4>
                    <ul class="edu-highlights-list">${highlightsHtml}</ul>
                </div>
            `;
            panel.classList.remove("switching");
        }, 200);
    }

    // ═══ Update mobile inline accordion content ═══
    document.querySelectorAll(".edu-item-wrapper").forEach(function (wrapper) {
        var wrapperId = wrapper.getAttribute("data-id");
        var accordion = wrapper.querySelector(".edu-mobile-accordion");
        var inner = wrapper.querySelector(".edu-accordion-inner");

        if (wrapperId === id) {
            // Build content if not already loaded or always refresh
            var currentItem = educationData.find(function (e) { return e.id === wrapperId; });
            if (currentItem && inner) {
                var coursesHtml = "";
                currentItem.courses.forEach(function (course) {
                    coursesHtml += '<span class="edu-course-pill">' + course + '</span>';
                });

                var highlightsHtml = "";
                currentItem.highlights.forEach(function (high) {
                    highlightsHtml += '<li class="edu-highlight-item">' +
                        '<span class="edu-highlight-check" style="color: ' + currentItem.themeColor + '">' +
                        '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
                        '</span>' +
                        '<span>' + high + '</span>' +
                        '</li>';
                });

                inner.innerHTML = `
                    <div class="edu-detail-section">
                        <h5 class="edu-detail-section-title">Coursework Focus</h5>
                        <div class="edu-course-list">${coursesHtml}</div>
                    </div>
                    <div class="edu-detail-section">
                        <h5 class="edu-detail-section-title">Accomplishments</h5>
                        <ul class="edu-highlights-list">${highlightsHtml}</ul>
                    </div>
                `;
            }
            // Expand accordion heights
            if (accordion) {
                accordion.style.maxHeight = inner.offsetHeight + "px";
            }
        } else {
            // Collapse accordion
            if (accordion) {
                accordion.style.maxHeight = "0px";
            }
        }
    });
}
