/* ═══════════════════════════════════════════
   CERTIFICATIONS.JS — Dynamic Credentials Grid & Filtering
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    mapCertificationsData();
});

var certificationsData = [
    {
        title: "Certified Generative AI Professional",
        org: "Oracle Cloud Infrastructure (OCI)",
        initials: "ORA",
        date: "Oct 2025 – Oct 2027",
        category: "ai-genai",
        themeColor: "#f43f5e",
        themeColorRgb: "244, 63, 94",
        link: "https://credential.oracle.com/", // Placeholder/Oracle verify link
        skills: ["Generative AI", "LLMs", "RAG architectures", "Fine-Tuning", "Vector Databases"]
    },
    {
        title: "Principles of Generative AI",
        org: "Infosys Springboard",
        initials: "INF",
        date: "Oct 2025",
        category: "ai-genai",
        themeColor: "#06b6d4",
        themeColorRgb: "6, 182, 212",
        link: "https://springboard.infosys.com/", 
        skills: ["GenAI Principles", "Prompt Design", "Transformer Models", "Responsible AI"]
    },
    {
        title: "Artificial Intelligence Fundamentals",
        org: "IBM SkillsBuild",
        initials: "IBM",
        date: "Sept 2025",
        category: "ai-genai",
        themeColor: "#2563eb",
        themeColorRgb: "37, 99, 235",
        link: "https://www.credly.com/", 
        skills: ["AI Fundamentals", "Machine Learning", "Deep Learning", "AI Ethics", "Neural Networks"]
    },
    {
        title: "OCI Certified AI Foundations Associate",
        org: "Oracle Cloud Infrastructure (OCI)",
        initials: "ORA",
        date: "Aug 2025 – Aug 2027",
        category: "cloud",
        themeColor: "#f43f5e",
        themeColorRgb: "244, 63, 94",
        link: "https://credential.oracle.com/",
        skills: ["AI Cloud foundations", "Cognitive Services", "Machine Learning Pipelines", "Infrastructure"]
    },
    {
        title: "Artificial Intelligence Primer",
        org: "Infosys Springboard",
        initials: "INF",
        date: "Oct 2025",
        category: "ai-genai",
        themeColor: "#06b6d4",
        themeColorRgb: "6, 182, 212",
        link: "https://springboard.infosys.com/",
        skills: ["AI Primer", "AI Search Algorithms", "Knowledge Representation", "Robotics Basics"]
    },
    {
        title: "Machine Learning A-Z: AI & Python",
        org: "Udemy",
        initials: "UDM",
        date: "Sept 2024",
        category: "ds-ml",
        themeColor: "#f97316",
        themeColorRgb: "249, 115, 22",
        link: "https://www.udemy.com/",
        skills: ["Machine Learning", "Supervised Learning", "Regression", "Clustering", "XGBoost", "Python"]
    },
    {
        title: "Data Science - Foundation Level",
        org: "IIT Madras",
        initials: "IITM",
        date: "Dec 2023",
        category: "ds-ml",
        themeColor: "#be123c",
        themeColorRgb: "190, 18, 60",
        link: "https://www.iitm.ac.in/",
        skills: ["Python Programming", "Statistics for Data Science", "Exploratory Data Analysis", "Mathematics"]
    }
];

function mapCertificationsData() {
    var grid = document.getElementById("cert-grid");
    var filterContainer = document.getElementById("cert-filters");
    if (!grid) return;

    // 1. Build sliding filter tabs UI
    if (filterContainer) {
        var filters = [
            { label: "All Credentials", value: "all" },
            { label: "AI & GenAI", value: "ai-genai" },
            { label: "Cloud & Infrastructure", value: "cloud" },
            { label: "Data Science & ML", value: "ds-ml" }
        ];

        filterContainer.innerHTML = "";
        filters.forEach(function (filt, idx) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "cert-filter-btn " + (idx === 0 ? "active" : "");
            btn.textContent = filt.label;
            btn.setAttribute("data-filter", filt.value);

            btn.addEventListener("click", function () {
                document.querySelectorAll(".cert-filter-btn").forEach(function (b) {
                    b.classList.remove("active");
                });
                btn.classList.add("active");
                filterCredentialsGrid(filt.value);
            });
            filterContainer.appendChild(btn);
        });
    }

    // 2. Render Cards
    grid.innerHTML = "";
    certificationsData.forEach(function (cert, index) {
        var card = document.createElement("article");
        card.className = "cert-card glass";
        card.setAttribute("data-category", cert.category);
        card.setAttribute("data-animate", "fade-up-blur");
        card.setAttribute("data-delay", String(index * 70));

        // Dynamic accents via CSS variables
        card.style.setProperty("--cert-accent-theme", cert.themeColor);
        card.style.setProperty("--cert-accent-rgb", cert.themeColorRgb);

        // Header info: Brand Emblem + Title
        var header = document.createElement("div");
        header.className = "cert-card-header";

        var emblem = document.createElement("div");
        emblem.className = "cert-emblem";
        emblem.textContent = cert.initials;

        var headerInfo = document.createElement("div");
        headerInfo.className = "cert-header-info";

        var title = document.createElement("h3");
        title.className = "cert-title";
        title.textContent = cert.title;

        var org = document.createElement("p");
        org.className = "cert-org";
        org.textContent = cert.org;

        headerInfo.appendChild(title);
        headerInfo.appendChild(org);
        header.appendChild(emblem);
        header.appendChild(headerInfo);

        // Issue Date
        var dateRow = document.createElement("div");
        dateRow.className = "cert-date-row";
        dateRow.innerHTML = `
            <span class="cert-date-label">Issued / Validity</span>
            <span class="cert-date-val">${cert.date}</span>
        `;

        // Skills List
        var skillsWrap = document.createElement("div");
        skillsWrap.className = "cert-skills-wrap";
        
        cert.skills.forEach(function (skill) {
            var skillTag = document.createElement("span");
            skillTag.className = "cert-skill-tag";
            skillTag.textContent = skill;
            skillsWrap.appendChild(skillTag);
        });

        // Verification link button
        var actionRow = document.createElement("div");
        actionRow.className = "cert-action-row";
        
        var verifyLink = document.createElement("a");
        verifyLink.className = "cert-verify-btn";
        verifyLink.href = cert.link;
        verifyLink.target = "_blank";
        verifyLink.innerHTML = `
            <span>Verify Credential</span>
            <i class="fa fa-external-link"></i>
        `;
        actionRow.appendChild(verifyLink);

        // Assemble card
        card.appendChild(header);
        card.appendChild(dateRow);
        card.appendChild(skillsWrap);
        card.appendChild(actionRow);

        grid.appendChild(card);
    });
}

function filterCredentialsGrid(filterValue) {
    var grid = document.getElementById("cert-grid");
    if (!grid) return;

    var cards = grid.querySelectorAll(".cert-card");
    cards.forEach(function (card) {
        var cat = card.getAttribute("data-category");
        var isMatch = filterValue === "all" || cat === filterValue;

        if (isMatch) {
            card.classList.remove("hidden", "fade-leave-active");
            card.style.display = "";
            void card.offsetHeight; // force repaint
            card.classList.add("fade-enter-active");
        } else {
            card.classList.add("fade-leave-active");
            card.classList.remove("fade-enter-active");

            setTimeout(function () {
                if (card.classList.contains("fade-leave-active")) {
                    card.style.display = "none";
                    card.classList.add("hidden");
                }
            }, 150);
        }
    });
}
