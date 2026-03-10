document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});

function createChip(text) {
    var chip = document.createElement("span");
    chip.className = "label exp-chip";
    chip.innerHTML = text;
    return chip;
}


function mapExperienceData() {

    let exp = [
        {
            "org": "Infosys Springboard",
            "position": "AI Engineer Intern",
            "duration": "Dec 2025 - Present",
            "mode": "Virtual",
            "location": "Remote",
            "technologies": [
                "OCR",
                "Google Gemini 2.5 Flash",
                "Streamlit",
                "Python",
                "REST APIs",
                "JSON"
            ],
            "details": [
                "Building an end-to-end receipt and invoice digitization pipeline with image (JPG/PNG) and PDF ingestion.",
                "Implemented OCR-based data extraction and structured outputs into machine-readable JSON.",
                "Migrated OCR from Tesseract to Google Gemini 2.5 Flash to improve extraction accuracy."
            ]
        },
        {
            "org": "Edunet Foundation (AICTE-IBM SkillsBuild)",
            "position": "AI & Cloud Technology Intern",
            "duration": "Sept 2025 - Oct 2025",
            "mode": "Virtual",
            "location": "Remote",
            "technologies": [
                "Python",
                "Streamlit",
                "Cloud-based AI Services",
                "Deployment Fundamentals"
            ],
            "details": [
                "Developed AI-driven web applications in a mentor-guided, milestone-based delivery environment.",
                "Gained practical exposure to cloud AI services and technical documentation practices."
            ]
        }
    ];

    var experiences = document.getElementById("exp");
    var existingCards = experiences.querySelectorAll(".exp-card");
    for (var x = 0; x < existingCards.length; x++) {
        existingCards[x].remove();
    }

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var metaRow = document.createElement("div");
        metaRow.className = "exp-meta-row";
        metaRow.appendChild(createChip(exp[i]["duration"]));
        metaRow.appendChild(createChip(exp[i]["mode"]));
        metaRow.appendChild(createChip(exp[i]["location"]));

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }

        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(metaRow);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);

        var expContentDiv = document.createElement("div");
        expContentDiv.className = "exp-content";

        var impactTitle = document.createElement("p");
        impactTitle.className = "label exp-impact-title";
        impactTitle.innerHTML = "Key Contributions";

        expContentDiv.appendChild(impactTitle);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expContentDiv.appendChild(detailsList);
        expCard.appendChild(expContentDiv);

        experiences.appendChild(expCard);
    }
}