/* ═══════════════════════════════════════════
   PROJECTS.JS — Interactive Project Showcase & Specs Modal
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
    initModalControls();
});

var projectsData = [
    {
        title: "DocuMind AI – Hybrid RAG Knowledge Assistant",
        image: "images/projects/documind.png",
        type: "Generative AI",
        category: "genai",
        spec: "RAG Pipeline",
        themeColor: "#a78bfa",
        themeColorRgb: "167, 139, 250",
        summary: "Full-stack AI knowledge assistant combining hybrid retrieval (BM25 + FAISS + Cross-Encoder reranking) and dynamic LLM provider switching to deliver context-aware, citation-backed document Q&A.",
        stack: ["Spring Boot", "FastAPI", "LangChain", "FAISS", "MySQL", "Ollama", "OpenAI"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/hybrid-rag-knowledge-assistant" }
        ],
        features: [
            "Implemented hybrid lexical-semantic search combining BM25 score metrics and FAISS dense vector embeddings.",
            "Developed a custom FastAPI backend performing Cross-Encoder reranking to elevate context relevance grades by 25%.",
            "Engineered real-time LLM provider router allowing runtime fallback to local Ollama instances when OpenAI API quotas are exhausted."
        ]
    },
    {
        title: "Automated Receipt and Invoice Digitizer",
        image: "images/projects/receipt.png",
        type: "AI Automation",
        category: "web-auto",
        spec: "OCR Pipeline",
        themeColor: "#22d3ee",
        themeColorRgb: "34, 211, 238",
        summary: "Full-stack expense digitizer automating receipt processing via Google Gemini OCR, multi-level fallbacks (spaCy NER + Regex), and duplicate detection.",
        stack: ["Python", "Streamlit", "SQLite", "Gemini API", "spaCy", "OpenCV"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/Receipt-and-Invoice-Digitizer" }
        ],
        features: [
            "Constructed asynchronous processing pipeline using Google Gemini API OCR for high-speed multi-page document parsing.",
            "Engineered robust extraction fallback mechanisms using spaCy Named Entity Recognition (NER) and context Regex matches.",
            "Created custom hashing check logic in SQLite to filter out duplicate uploads with 99.8% precision rate."
        ]
    },
    {
        title: "Smart Crop Advisory System (SCAS)",
        image: "images/projects/crop.png",
        type: "AgriTech ML",
        category: "ml",
        spec: "CNN Classifier",
        themeColor: "#21f3b0",
        themeColorRgb: "33, 243, 176",
        summary: "Multilingual precision agriculture web app assisting farmers with soil-based crop recommendation, fertilizer advisory, and CNN crop pest/disease detection.",
        stack: ["Spring Boot", "Python", "TensorFlow", "Scikit-learn", "MySQL"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/Smart_crop_advisory_system" }
        ],
        features: [
            "Trained Convolutional Neural Network (CNN) in TensorFlow/Keras to identify 15+ crop pests/diseases with a 93% accuracy.",
            "Developed soil parameter recommendation engine using Scikit-Learn Random Forest classifiers for custom fertilizer advisories.",
            "Architected localized Spring Boot backend integrating multilingual user support for vernacular accessibility."
        ]
    },
    {
        title: "AI-Powered Fitness & Diet Planner",
        image: "images/projects/fitness.png",
        type: "Generative AI",
        category: "genai",
        spec: "LLM Planner",
        themeColor: "#a78bfa",
        themeColorRgb: "167, 139, 250",
        summary: "Personalized wellness system generating fitness plans and meal routines using the Gemini API and natural-language goal interpretation.",
        stack: ["Python", "Streamlit", "Gemini API", "NLP", "Pandas"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/AI_powered_fitness_and_diet_planner" }
        ],
        features: [
            "Crafted robust system prompts parsing complex dietary constraints and biometric indicators into structured plan profiles.",
            "Designed conversational user interface using Streamlit, facilitating dynamic modifications to fitness goals.",
            "Integrated lightweight local profiling to match caloric targets using Pandas query structures."
        ]
    },
    {
        title: "Task Manager with Progress Tracker",
        image: "images/projects/task.png",
        type: "Web Engineering",
        category: "web-auto",
        spec: "Interactive Board",
        themeColor: "#3b82f6",
        themeColorRgb: "59, 130, 246",
        summary: "Responsive task management board featuring real-time time tracking, priority organization, and local storage data persistence.",
        stack: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/task-manager-app" }
        ],
        features: [
            "Programmed drag-and-drop state updates using pure vanilla JavaScript Web API interfaces.",
            "Created modular time tracker recording active task duration with session saving states.",
            "Leveraged browser LocalStorage to maintain complete user data persistence without server overhead."
        ]
    },
    {
        title: "System Threat Forecaster",
        image: "images/projects/threat.png",
        type: "Cybersecurity ML",
        category: "ml",
        spec: "XGBoost Predictor",
        themeColor: "#fb7185",
        themeColorRgb: "251, 113, 133",
        summary: "Predictive cybersecurity pipeline forecasting a system's probability of malware infection based on antivirus telemetry characteristics.",
        stack: ["Python", "Scikit-learn", "XGBoost", "FastAPI"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/System-Threat-Forecaster" }
        ],
        features: [
            "Processed large telemetry dataset using Scikit-Learn pipeline transformers for custom scale engineering.",
            "Trained high-accuracy XGBoost binary classifiers forecasting threat vectors with a 91% ROC-AUC score.",
            "Packaged ML pipeline under FastAPI routes for ultra-low latency model prediction calls."
        ]
    },
    {
        title: "Data-Driven Sales Optimization (BDM Capstone)",
        image: "images/projects/bdm.png",
        type: "Data Analytics",
        category: "web-auto",
        spec: "Revenue Model",
        themeColor: "#fb923c",
        themeColorRgb: "251, 146, 60",
        summary: "Sales and profitability trend analysis for a micro-manufacturing firm, using graphical insights and revenue modeling to design retail expansion strategies.",
        stack: ["Excel", "Data Analysis", "Revenue Modeling"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/BDM-Capstone-Project" }
        ],
        features: [
            "Engineered multivariate revenue projection models predicting retail growth constraints across regional outlets.",
            "Analyzed bulk order transaction volumes to segment customer profitability thresholds.",
            "Designed clean visual dashboard matrices showcasing margin variations to support executive decision-making."
        ]
    },
    {
        title: "Books Recommendation System",
        image: "images/projects/book.png",
        type: "Machine Learning",
        category: "ml",
        spec: "KNN Rec Engine",
        themeColor: "#21f3b0",
        themeColorRgb: "33, 243, 176",
        summary: "Content-based recommendation engine utilizing Nearest Neighbors (KNN) and Pandas preprocessing to suggest books similarity-matched to user inputs.",
        stack: ["Python", "Flask", "Scikit-learn", "Pandas", "Bootstrap"],
        labels: [
            { title: "GitHub", link: "https://github.com/abhay1maurya/books-recommendation-system" }
        ],
        features: [
            "Constructed high-dimensional feature vectors mapping book attributes and descriptive tags.",
            "Trained Nearest Neighbors (KNN) algorithms calculating Cosine Similarity to find similar books in milliseconds.",
            "Built responsive Flask web server serving fast AJAX recommendations to search client requests."
        ]
    }
];

function mapProjectsData() {
    var projectsDiv = document.getElementById("projects");
    var filterContainer = document.getElementById("projects-filters");
    if (!projectsDiv) return;

    // 1. Build Filter Tabs UI dynamically
    if (filterContainer) {
        var filters = [
            { label: "All Projects", value: "all" },
            { label: "Generative AI", value: "genai" },
            { label: "Machine Learning", value: "ml" },
            { label: "Web & Automation", value: "web-auto" }
        ];

        filterContainer.innerHTML = "";
        filters.forEach(function (filt, idx) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "projects-filter-btn " + (idx === 0 ? "active" : "");
            btn.textContent = filt.label;
            btn.setAttribute("data-filter", filt.value);

            btn.addEventListener("click", function () {
                document.querySelectorAll(".projects-filter-btn").forEach(function (b) {
                    b.classList.remove("active");
                });
                btn.classList.add("active");
                filterProjectsGrid(filt.value);
            });
            filterContainer.appendChild(btn);
        });
    }

    // 2. Render Cards
    projectsDiv.innerHTML = "";
    projectsData.forEach(function (project, index) {
        var card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-category", project.category);
        card.setAttribute("data-animate", "fade-up-blur");
        card.setAttribute("data-delay", String(index * 80));

        // Inject accents dynamically via CSS custom variables
        card.style.setProperty("--proj-theme", project.themeColor);
        card.style.setProperty("--proj-theme-rgb", project.themeColorRgb);

        // Spec Badge
        var specBadge = document.createElement("span");
        specBadge.className = "p-spec-badge";
        specBadge.textContent = project.spec;

        // Type badge
        var typeBadge = document.createElement("div");
        typeBadge.className = "label p-type";
        typeBadge.textContent = project.type;

        // Image container
        var imageContainer = document.createElement("div");
        imageContainer.className = "p-image";

        var img = document.createElement("img");
        img.className = "p-image-bg";
        img.src = project.image;
        img.alt = project.title;
        img.loading = "lazy";

        imageContainer.appendChild(typeBadge);
        imageContainer.appendChild(specBadge);
        imageContainer.appendChild(img);

        // Title
        var titleEl = document.createElement("p");
        titleEl.className = "body1 p-title";
        titleEl.textContent = project.title;

        // Summary
        var summaryEl = document.createElement("p");
        summaryEl.className = "body2 p-summary";
        summaryEl.textContent = project.summary;

        // Stack pills
        var stackWrap = document.createElement("div");
        stackWrap.className = "p-stack";

        project.stack.forEach(function (tech) {
            var pill = document.createElement("span");
            pill.className = "label p-stack-item";
            pill.textContent = tech;
            stackWrap.appendChild(pill);
        });

        // Action labels
        var labelsWrap = document.createElement("div");
        labelsWrap.className = "p-labels";

        project.labels.forEach(function (labelData) {
            var label = document.createElement("a");
            label.className = "p-label";
            label.href = labelData.link || "javascript:void(0)";
            label.target = labelData.link ? "_blank" : "_self";

            if (!labelData.link) {
                label.classList.add("p-label-disabled");
                label.setAttribute("aria-disabled", "true");
            }

            var labelIcon = document.createElement("i");
            if (labelData.title === "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (labelData.title === "Web" || labelData.title === "Case Study") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (labelData.title === "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.textContent = labelData.title;

            label.appendChild(labelIcon);
            label.appendChild(labelText);
            labelsWrap.appendChild(label);
        });

        // Assemble card
        card.appendChild(imageContainer);
        card.appendChild(titleEl);
        card.appendChild(summaryEl);
        card.appendChild(stackWrap);
        card.appendChild(labelsWrap);

        // Click event on card opens specs modal (skipping label clicks)
        card.addEventListener("click", function (e) {
            if (e.target.closest(".p-label")) return;
            openProjectModal(project);
        });

        // 3D tilt effect
        card.addEventListener("mousemove", function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / centerY * -3;
            var rotateY = (x - centerX) / centerX * 3;
            card.style.transform = "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
        });

        projectsDiv.appendChild(card);
    });
}

function filterProjectsGrid(filterValue) {
    var projectsDiv = document.getElementById("projects");
    if (!projectsDiv) return;

    var cards = projectsDiv.querySelectorAll(".project-card");
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

function openProjectModal(project) {
    var modal = document.getElementById("project-modal");
    var modalBody = document.getElementById("project-modal-body");
    if (!modal || !modalBody) return;

    // Build contributions/features list
    var featuresHtml = "";
    project.features.forEach(function (feat) {
        featuresHtml += '<li class="modal-feature-item">' +
            '<span class="modal-feature-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>' +
            '<span>' + feat + '</span>' +
            '</li>';
    });

    // Build tech pills
    var techHtml = "";
    project.stack.forEach(function (tech) {
        techHtml += '<span class="modal-tech-pill">' + tech + '</span>';
    });

    // Build actions links
    var linksHtml = "";
    project.labels.forEach(function (lbl) {
        var iconClass = "fa fa-external-link";
        if (lbl.title === "GitHub") iconClass = "fa fa-github";
        else if (lbl.title === "Web" || lbl.title === "Case Study") iconClass = "fa fa-globe";
        else if (lbl.title === "App") iconClass = "fa fa-apple";

        linksHtml += '<a href="' + (lbl.link || "javascript:void(0)") + '" target="' + (lbl.link ? "_blank" : "_self") + '" class="modal-link-btn ' + (!lbl.link ? "disabled" : "") + '">' +
            '<i class="' + iconClass + '"></i> <span>' + lbl.title + '</span>' +
            '</a>';
    });

    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <!-- Left Pane: Info Summary -->
            <div class="modal-overview-pane">
                <div class="modal-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="modal-img">
                    <span class="modal-type-badge">${project.type}</span>
                </div>
                <h3 class="modal-project-title">${project.title}</h3>
                <p class="modal-project-summary">${project.summary}</p>
            </div>
            
            <!-- Right Pane: specs & feature sets -->
            <div class="modal-specs-pane">
                <div class="modal-section">
                    <h4 class="modal-section-title">Key Contributions & Architecture</h4>
                    <ul class="modal-features-list">${featuresHtml}</ul>
                </div>
                
                <div class="modal-section">
                    <h4 class="modal-section-title">Technologies Used</h4>
                    <div class="modal-tech-list">${techHtml}</div>
                </div>
                
                <div class="modal-section modal-actions-section">
                    ${linksHtml}
                </div>
            </div>
        </div>
    `;

    modal.style.setProperty("--modal-theme", project.themeColor);
    modal.style.setProperty("--modal-theme-rgb", project.themeColorRgb);
    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // disable screen scrolling
}

function initModalControls() {
    var closeBtn = document.getElementById("project-modal-close");
    var modal = document.getElementById("project-modal");
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", function () {
            modal.classList.remove("open");
            document.body.style.overflow = "";
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.remove("open");
                document.body.style.overflow = "";
            }
        });
    }
}