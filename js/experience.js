/* ═══════════════════════════════════════════
   EXPERIENCE.JS — Dynamic Timeline Work History
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function createChip(text) {
    var chip = document.createElement("span");
    chip.className = "label exp-chip";
    chip.textContent = text;
    return chip;
}

function mapExperienceData() {
    var exp = [
        {
            org: "Infosys Springboard",
            initials: "INF",
            position: "AI Engineer Intern",
            duration: "Dec 2025 – Present",
            mode: "Virtual",
            location: "Remote",
            themeColor: "#fb923c",
            themeColorRgb: "251, 146, 60",
            metrics: [
                { label: "Extraction Pipelines", val: "End-to-End" },
                { label: "Prompt Inference API", val: "Gemini LLM" }
            ],
            technologies: [
                "Google Gemini API", "Streamlit", "Python", 
                "OCR", "REST APIs", "JSON"
            ],
            details: [
                "Developed end-to-end AI pipeline for receipt and invoice digitization including data preprocessing, OCR extraction, feature structuring, and model inference.",
                "Integrated Large Language Models (LLMs) using Google Gemini API to enhance structured text generation and improve extraction accuracy.",
                "Built and deployed scalable ML-enabled web application using Streamlit with modular inference workflows."
            ]
        },
        {
            org: "Edunet Foundation (IBM SkillsBuild)",
            initials: "IBM",
            position: "AI & Cloud Technology Intern",
            duration: "Sept 2025 – Oct 2025",
            mode: "Virtual",
            location: "Remote",
            themeColor: "#22d3ee",
            themeColorRgb: "34, 211, 238",
            metrics: [
                { label: "Workspace Hosting", val: "Cloud Host" },
                { label: "Project Focus Track", val: "SkillsBuild" }
            ],
            technologies: [
                "Python", "Streamlit", "Cloud-based AI Services", 
                "Deployment Fundamentals", "API Integration"
            ],
            details: [
                "Developed AI-powered web applications using Python and implemented ML model integration within cloud-based environments.",
                "Collaborated on deploying AI solutions with focus on scalability, API integration, and performance optimization."
            ]
        }
    ];

    var wrapper = document.getElementById("exp-cards-wrapper");
    if (!wrapper) return;

    wrapper.innerHTML = "";

    exp.forEach(function (item, index) {
        // Create the card wrapper that holds the timeline dot and card
        var cardWrapper = document.createElement("div");
        cardWrapper.className = "exp-card-wrapper";
        cardWrapper.style.setProperty("--exp-theme", item.themeColor);
        cardWrapper.style.setProperty("--exp-theme-rgb", item.themeColorRgb);

        // Timeline Node Dot
        var dot = document.createElement("div");
        dot.className = "exp-card-node-dot";
        cardWrapper.appendChild(dot);

        // The experience card
        var card = document.createElement("article");
        card.className = "exp-card glass";
        card.setAttribute("data-animate", "fade-up-blur");
        card.setAttribute("data-delay", String(index * 150));

        // Card Header (Emblem + Titles)
        var cardHeader = document.createElement("div");
        cardHeader.className = "exp-card-header";

        var emblem = document.createElement("div");
        emblem.className = "exp-emblem";
        emblem.textContent = item.initials;
        
        var headerInfo = document.createElement("div");
        headerInfo.className = "exp-header-info";

        var orgName = document.createElement("h3");
        orgName.className = "exp-org";
        orgName.textContent = item.org;

        var position = document.createElement("span");
        position.className = "exp-position";
        position.textContent = item.position;

        headerInfo.appendChild(orgName);
        headerInfo.appendChild(position);
        cardHeader.appendChild(emblem);
        cardHeader.appendChild(headerInfo);

        // Meta rows (Chips)
        var metaRow = document.createElement("div");
        metaRow.className = "exp-meta-row";
        metaRow.appendChild(createChip(item.duration));
        metaRow.appendChild(createChip(item.mode));
        metaRow.appendChild(createChip(item.location));

        // Card Grid Body
        var cardBody = document.createElement("div");
        cardBody.className = "exp-card-body";

        // Left Pane: Key contributions
        var leftPane = document.createElement("div");
        leftPane.className = "exp-card-body-left";

        var impactTitle = document.createElement("p");
        impactTitle.className = "exp-impact-title";
        impactTitle.textContent = "Key Contributions";

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        item.details.forEach(function (detail) {
            var li = document.createElement("li");
            li.className = "exp-detail-item";
            
            // Custom bullet svg
            var checkIcon = `<span class="exp-bullet-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>`;
            li.innerHTML = checkIcon + `<span>${detail}</span>`;
            
            detailsList.appendChild(li);
        });

        leftPane.appendChild(impactTitle);
        leftPane.appendChild(detailsList);

        // Right Pane: Stats & Tech
        var rightPane = document.createElement("div");
        rightPane.className = "exp-card-body-right";

        // Stats section
        var statsSection = document.createElement("div");
        statsSection.className = "exp-stats-section";
        
        item.metrics.forEach(function(stat) {
            var statBox = document.createElement("div");
            statBox.className = "exp-stat-box";
            statBox.innerHTML = `
                <span class="exp-stat-val">${stat.val}</span>
                <span class="exp-stat-label">${stat.label}</span>
            `;
            statsSection.appendChild(statBox);
        });

        // Tech section
        var techSection = document.createElement("div");
        techSection.className = "exp-tech-section";

        var techHeading = document.createElement("span");
        techHeading.className = "exp-tech-title";
        techHeading.textContent = "Technologies";

        var techList = document.createElement("div");
        techList.className = "exp-tech-list";

        item.technologies.forEach(function (tech) {
            var techItem = document.createElement("span");
            techItem.className = "exp-tech-pill";
            techItem.textContent = tech;
            techList.appendChild(techItem);
        });

        techSection.appendChild(techHeading);
        techSection.appendChild(techList);

        rightPane.appendChild(statsSection);
        rightPane.appendChild(techSection);

        cardBody.appendChild(leftPane);
        cardBody.appendChild(rightPane);

        card.appendChild(cardHeader);
        card.appendChild(metaRow);
        card.appendChild(cardBody);

        cardWrapper.appendChild(card);
        wrapper.appendChild(cardWrapper);
    });
}