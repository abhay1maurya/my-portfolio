/* ═══════════════════════════════════════════
   TECH.JS — Dynamic Toolkit & Interactive ML Explorer
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    initTechStack();
});

// Category Vector Icons (Inline SVG format)
const CATEGORY_ICONS = {
    programming: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    ml: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    dl: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"></circle><circle cx="5" cy="12" r="2.5"></circle><circle cx="19" cy="12" r="2.5"></circle><circle cx="12" cy="19" r="2.5"></circle><line x1="12" y1="7.5" x2="12" y2="16.5"></line><line x1="7.1" y1="13.4" x2="16.9" y2="13.4"></line><line x1="6.8" y1="10.8" x2="10.2" y2="6.2"></line><line x1="17.2" y1="10.8" x2="13.8" y2="6.2"></line><line x1="6.8" y1="13.2" x2="10.2" y2="17.8"></line><line x1="17.2" y1="13.2" x2="13.8" y2="17.8"></line></svg>`,
    genai: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 22l-2.5-6.5L3 11l6.5-2.5L12 2zM5 3l1 2.5L8.5 6l-2.5 1L5 9.5 4 7 1.5 6 4 5l1-2.5z"></path></svg>`,
    dataeng: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" r="9" fill="none" stroke="currentColor" stroke-width="2"></ellipse><path d="M3 5v14c0 2.2 4 4 9 4s9-1.8 9-4V5"></path><path d="M3 12c0 2.2 4 4 9 4s9-1.8 9-4"></path></svg>`,
    ops: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line><line x1="10" y1="6" x2="18" y2="6"></line><line x1="10" y1="18" x2="18" y2="18"></line></svg>`,
    tools: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
};


const PIPELINE_STAGES = [
    {
        id: "data-eng",
        label: "01. Data Engineering",
        shortLabel: "Data Ingest",
        title: "Data Engineering & Pipeline Ingestion",
        summary: "Extracting, structuring, and exploring datasets",
        accent: "#a78bfa",
        accentRgb: "167, 139, 250",
        icon: CATEGORY_ICONS.dataeng,
        description: "Before machine learning modeling starts, raw data must be structured, cleaned, and explored. I engineer ingestion processes from SQL databases, carry out robust feature engineering pipelines, clean incomplete rows, and conduct Exploratory Data Analysis (EDA) to verify features.",
        items: ["Python", "SQL", "Pandas", "NumPy", "Data Cleaning", "Feature Engineering", "Exploratory Data Analysis (EDA)", "Statistical Modeling"]
    },
    {
        id: "model-train",
        label: "02. Model Training",
        shortLabel: "ML Core",
        title: "Model Development & Deep Learning",
        summary: "Supervised classifiers, tabular models, and computer vision",
        accent: "#21f3b0",
        accentRgb: "33, 243, 176",
        icon: CATEGORY_ICONS.ml,
        description: "Fitting predictive estimators to statistical patterns. I specialize in selecting models (XGBoost, Random Forests, deep networks), building CNN classification pipelines for visual data, implementing cross-validation folds, and evaluating performance scores.",
        items: ["Scikit-learn", "Random Forest", "XGBoost", "Logistic Regression", "Ensemble Learning", "Model Evaluation", "Cross Validation", "TensorFlow", "Keras", "CNN", "Neural Networks", "Computer Vision"]
    },
    {
        id: "genai-rag",
        label: "03. GenAI & Retrieval",
        shortLabel: "Retrieval",
        title: "Generative AI & Semantic Retrieval RAG",
        summary: "Prompt patterns, vector indexes, and LLM integrations",
        accent: "#22d3ee",
        accentRgb: "34, 211, 238",
        icon: CATEGORY_ICONS.genai,
        description: "Connecting raw Language Models with vector datastores. I build Retrieval-Augmented Generation (RAG) applications using FAISS indexing and lexical search algorithms (BM25) driven by LangChain agents, implementing prompt iteration structures.",
        items: ["Retrieval-Augmented Generation (RAG)", "LangChain", "Prompt Engineering", "Semantic Search", "LLM Evaluation", "FAISS", "BM25", "Sentence Transformers", "OpenAI API", "Ollama", "Groq API"]
    },
    {
        id: "serving-ops",
        label: "04. Serving & Deployment",
        shortLabel: "MLOps",
        title: "Model Deployment & Integration",
        summary: "REST microservices, containerization, and interfaces",
        accent: "#3b82f6",
        accentRgb: "59, 130, 246",
        icon: CATEGORY_ICONS.ops,
        description: "Bridging the gap between engineering scripts and live software. I package inference pipelines inside FastAPI REST servers, containerize applications with Docker, build interactive Streamlit dashboards, and manage project workflows via Git/GitHub.",
        items: ["FastAPI", "Flask", "REST APIs", "Docker", "Streamlit", "Model Deployment", "API Integration", "Git", "GitHub", "Jupyter Notebook"]
    }
];

function initTechStack() {
    const categories = [
        {
            id: "programming",
            title: "Programming Languages",
            summary: "Core programming and query fundamentals",
            filter: "data-lang",
            accent: "#a78bfa",
            accentRgb: "167, 139, 250",
            icon: CATEGORY_ICONS.programming,
            items: ["Python", "SQL"]
        },
        {
            id: "ml",
            title: "Machine Learning",
            summary: "Supervised & unsupervised modeling",
            filter: "ai-ml",
            accent: "#21f3b0",
            accentRgb: "33, 243, 176",
            icon: CATEGORY_ICONS.ml,
            items: ["Scikit-learn", "Random Forest", "XGBoost", "Logistic Regression", "Ensemble Learning", "Model Evaluation", "Cross Validation"]
        },
        {
            id: "dl",
            title: "Deep Learning",
            summary: "Neural architectures & computer vision",
            filter: "ai-ml",
            accent: "#fb7185",
            accentRgb: "251, 113, 133",
            icon: CATEGORY_ICONS.dl,
            items: ["TensorFlow", "Keras", "CNN", "Neural Networks", "Computer Vision"]
        },
        {
            id: "genai",
            title: "Generative AI & Retrieval",
            summary: "LLMs, vector databases, & RAG architectures",
            filter: "ai-ml",
            accent: "#22d3ee",
            accentRgb: "34, 211, 238",
            icon: CATEGORY_ICONS.genai,
            items: [
                "Retrieval-Augmented Generation (RAG)", "LangChain", "Prompt Engineering",
                "Semantic Search", "LLM Evaluation", "FAISS", "BM25",
                "Sentence Transformers", "OpenAI API", "Ollama", "Groq API"
            ]
        },
        {
            id: "dataeng",
            title: "Data Engineering",
            summary: "Processing, exploration, and statistical analysis",
            filter: "data-lang",
            accent: "#fb923c",
            accentRgb: "251, 146, 60",
            icon: CATEGORY_ICONS.dataeng,
            items: ["Data Cleaning", "Feature Engineering", "Exploratory Data Analysis (EDA)", "Statistical Modeling"]
        },
        {
            id: "ops",
            title: "Deployment & Integration",
            summary: "API design, containerization, and orchestration",
            filter: "ops",
            accent: "#3b82f6",
            accentRgb: "59, 130, 246",
            icon: CATEGORY_ICONS.ops,
            items: ["FastAPI", "Flask", "REST APIs", "Docker", "Streamlit", "Model Deployment", "API Integration"]
        },
        {
            id: "tools",
            title: "Tools & Libraries",
            summary: "Development workflow and computing utilities",
            filter: "data-lang",
            accent: "#f472b6",
            accentRgb: "244, 114, 182",
            icon: CATEGORY_ICONS.tools,
            items: ["Pandas", "NumPy", "Git", "GitHub", "Jupyter Notebook"]
        }
    ];

    const matrix = document.getElementById("skills-matrix");
    const filterContainer = document.getElementById("tech-filters");

    // ═══ Setup Sliding Toggle logic ═══
    const togglePipelineBtn = document.getElementById("toggle-pipeline-view");
    const toggleGridBtn = document.getElementById("toggle-grid-view");
    const pipelineView = document.getElementById("tech-pipeline-view");
    const gridView = document.getElementById("tech-grid-view");

    if (togglePipelineBtn && toggleGridBtn && pipelineView && gridView) {
        togglePipelineBtn.addEventListener("click", () => {
            togglePipelineBtn.classList.add("active");
            toggleGridBtn.classList.remove("active");
            pipelineView.classList.remove("hidden");
            pipelineView.classList.add("active");
            gridView.classList.add("hidden");
            gridView.classList.remove("active");
        });

        toggleGridBtn.addEventListener("click", () => {
            toggleGridBtn.classList.add("active");
            togglePipelineBtn.classList.remove("active");
            gridView.classList.remove("hidden");
            gridView.classList.add("active");
            pipelineView.classList.add("hidden");
            pipelineView.classList.remove("active");
        });
    }

    // ═══ RENDER VIEW 1: INTERACTIVE PIPELINE LIFE CYCLE ═══
    initPipelineView();

    // ═══ RENDER VIEW 2: SKILLS MATRIX GRID ═══
    if (matrix) {
        // 1. Build Filter UI dynamically
        if (filterContainer) {
            const filters = [
                { label: "All Tools", value: "all" },
                { label: "AI/ML & GenAI", value: "ai-ml" },
                { label: "Data & Languages", value: "data-lang" },
                { label: "Model Ops & Cloud", value: "ops" }
            ];

            filterContainer.innerHTML = "";
            filters.forEach((filt, idx) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = `filter-btn ${idx === 0 ? "active" : ""}`;
                btn.textContent = filt.label;
                btn.setAttribute("data-filter", filt.value);
                
                btn.addEventListener("click", function () {
                    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    filterCards(filt.value);
                });
                filterContainer.appendChild(btn);
            });
        }

        // 2. Build Category Cards
        matrix.innerHTML = "";
        categories.forEach(function (category, index) {
            var card = document.createElement("article");
            card.className = "skill-card";
            card.setAttribute("data-category", category.filter);
            card.setAttribute("data-animate", "fade-up-blur");
            card.setAttribute("data-delay", String(index * 60));

            // Inject Accent Colors via Inline CSS Properties
            card.style.setProperty("--card-accent", category.accent);
            card.style.setProperty("--card-accent-rgb", category.accentRgb);

            // Card Header layout (Icon + Text)
            var cardHeader = document.createElement("div");
            cardHeader.className = "skill-card-header";

            var iconWrapper = document.createElement("div");
            iconWrapper.className = "skill-card-icon";
            iconWrapper.innerHTML = category.icon;

            var textWrapper = document.createElement("div");
            textWrapper.className = "skill-card-titles";

            var title = document.createElement("h3");
            title.className = "skill-card-title";
            title.textContent = category.title;

            var summary = document.createElement("p");
            summary.className = "skill-card-summary";
            summary.textContent = category.summary;

            textWrapper.appendChild(title);
            textWrapper.appendChild(summary);
            cardHeader.appendChild(iconWrapper);
            cardHeader.appendChild(textWrapper);

            var list = document.createElement("div");
            list.className = "skill-pill-list";

            category.items.forEach(function (item) {
                var pill = document.createElement("span");
                pill.className = "skill-pill";

                const textNode = document.createTextNode(item);
                pill.appendChild(textNode);
                list.appendChild(pill);
            });

            card.appendChild(cardHeader);
            card.appendChild(list);
            matrix.appendChild(card);
        });
    }

    function filterCards(filterValue) {
        const cards = matrix.querySelectorAll(".skill-card");
        cards.forEach(card => {
            const cat = card.getAttribute("data-category");
            const isMatch = filterValue === "all" || cat === filterValue;

            if (isMatch) {
                card.classList.remove("hidden", "fade-leave-active");
                card.style.display = "";
                void card.offsetHeight;
                card.classList.add("fade-enter-active");
            } else {
                card.classList.add("fade-leave-active");
                card.classList.remove("fade-enter-active");
                
                setTimeout(() => {
                    if (card.classList.contains("fade-leave-active")) {
                        card.style.display = "none";
                        card.classList.add("hidden");
                    }
                }, 150);
            }
        });
    }
}

// ═══ Pipeline timeline rendering logic ═══
function initPipelineView() {
    const track = document.getElementById("pipeline-track");
    if (!track) return;

    track.innerHTML = "";

    PIPELINE_STAGES.forEach((stage, idx) => {
        const node = document.createElement("div");
        node.className = `pipeline-node ${idx === 0 ? "active" : ""}`;
        node.setAttribute("data-stage", stage.id);
        node.style.setProperty("--stage-accent", stage.accent);
        node.style.setProperty("--stage-accent-rgb", stage.accentRgb);

        node.innerHTML = `
            <div class="node-dot-ring">
                <div class="node-dot"></div>
            </div>
            <div class="node-content">
                <span class="node-short-label">${stage.shortLabel}</span>
                <h4 class="node-heading">${stage.title.split(" & ")[0]}</h4>
            </div>
        `;

        node.addEventListener("click", () => {
            selectPipelineStage(stage.id);
        });

        track.appendChild(node);
    });

    // Load initial stage details
    selectPipelineStage(PIPELINE_STAGES[0].id);
}

function selectPipelineStage(stageId) {
    const stage = PIPELINE_STAGES.find(s => s.id === stageId);
    if (!stage) return;

    // Toggle active state on track buttons
    document.querySelectorAll(".pipeline-node").forEach(node => {
        if (node.getAttribute("data-stage") === stageId) {
            node.classList.add("active");
        } else {
            node.classList.remove("active");
        }
    });

    // Update active timeline line animation heights (optional CSS variable controls)
    const track = document.getElementById("pipeline-track");
    const activeIndex = PIPELINE_STAGES.findIndex(s => s.id === stageId);
    if (track) {
        track.style.setProperty("--active-percent", `${(activeIndex / (PIPELINE_STAGES.length - 1)) * 100}%`);
    }

    const panel = document.getElementById("pipeline-details-panel");
    if (!panel) return;

    // Transition effect: fade-out details panel temporarily
    panel.classList.add("switching");

    setTimeout(() => {
        panel.style.setProperty("--card-accent", stage.accent);
        panel.style.setProperty("--card-accent-rgb", stage.accentRgb);

        // Build skill pills list
        let pillsHtml = "";
        stage.items.forEach(item => {
            pillsHtml += `<span class="skill-pill">${item}</span>`;
        });

        // Pipeline stage visualizers
        let visualizerHtml = "";
        if (stageId === "data-eng") {
            visualizerHtml = `
                <div class="stage-viz data-eng-viz">
                    <div class="db-node source-db"><i class="fa fa-database"></i> Database</div>
                    <div class="flow-arrow"><i class="fa fa-arrow-right"></i></div>
                    <div class="db-node df-node"><i class="fa fa-table"></i> Dataframe</div>
                    <div class="flow-arrow"><i class="fa fa-arrow-right"></i></div>
                    <div class="db-node clean-db"><i class="fa fa-check-circle"></i> Clean Features</div>
                </div>`;
        } else if (stageId === "model-train") {
            visualizerHtml = `
                <div class="stage-viz nn-viz">
                    <div class="nn-layer">
                        <span class="nn-neuron"></span>
                        <span class="nn-neuron"></span>
                        <span class="nn-neuron"></span>
                    </div>
                    <div class="nn-links">
                        <svg viewBox="0 0 40 80" width="40" height="80" stroke="rgba(33, 243, 176, 0.4)" stroke-width="1.5"><line x1="0" y1="15" x2="40" y2="25"></line><line x1="0" y1="40" x2="40" y2="25"></line><line x1="0" y1="65" x2="40" y2="25"></line><line x1="0" y1="15" x2="40" y2="55"></line><line x1="0" y1="40" x2="40" y2="55"></line><line x1="0" y1="65" x2="40" y2="55"></line></svg>
                    </div>
                    <div class="nn-layer">
                        <span class="nn-neuron"></span>
                        <span class="nn-neuron"></span>
                    </div>
                    <div class="nn-links">
                        <svg viewBox="0 0 40 80" width="40" height="80" stroke="rgba(33, 243, 176, 0.4)" stroke-width="1.5"><line x1="0" y1="25" x2="40" y2="40"></line><line x1="0" y1="55" x2="40" y2="40"></line></svg>
                    </div>
                    <div class="nn-layer">
                        <span class="nn-neuron output"></span>
                    </div>
                </div>`;
        } else if (stageId === "genai-rag") {
            visualizerHtml = `
                <div class="stage-viz rag-viz">
                    <div class="rag-node user-node">Prompt</div>
                    <div class="flow-arrow"><i class="fa fa-plus-circle"></i></div>
                    <div class="rag-node vector-node"><i class="fa fa-book"></i> Vector DB Context</div>
                    <div class="flow-arrow"><i class="fa fa-arrow-right"></i></div>
                    <div class="rag-node llm-node"><i class="fa fa-rocket"></i> LLM Generate</div>
                </div>`;
        } else if (stageId === "serving-ops") {
            visualizerHtml = `
                <div class="stage-viz ops-viz">
                    <div class="ops-box client-box"><i class="fa fa-desktop"></i> Client Request</div>
                    <div class="flow-arrow"><i class="fa fa-exchange"></i></div>
                    <div class="ops-box server-box">
                        <div class="docker-pill"><i class="fa fa-ship"></i> Docker Container</div>
                        <span class="router-label"><i class="fa fa-server"></i> FastAPI Server</span>
                    </div>
                </div>`;
        }

        panel.innerHTML = `
            <div class="detail-header">
                <div class="detail-icon" style="background: rgba(${stage.accentRgb}, 0.12); color: ${stage.accent}; border: 1px solid rgba(${stage.accentRgb}, 0.2)">
                    ${stage.icon}
                </div>
                <div>
                    <span class="detail-stage-label" style="color: ${stage.accent}">${stage.label}</span>
                    <h3 class="detail-title">${stage.title}</h3>
                </div>
            </div>
            
            <p class="detail-description">${stage.description}</p>
            
            <div class="detail-tools-section">
                <h4 class="detail-section-title">Tools & Frameworks</h4>
                <div class="skill-pill-list">${pillsHtml}</div>
            </div>

            <div class="detail-viz-section">
                <h4 class="detail-section-title">Stage Workflow Visualizer</h4>
                ${visualizerHtml}
            </div>
        `;

        panel.classList.remove("switching");
    }, 200);
}