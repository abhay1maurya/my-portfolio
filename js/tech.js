document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let categories = [
        {
            "title": "Programming",
            "summary": "Core language and query fundamentals",
            "items": ["Python", "SQL"]
        },
        {
            "title": "Machine Learning",
            "summary": "Classical supervised learning stack",
            "items": ["Scikit-learn", "Random Forest", "XGBoost", "Logistic Regression", "Ensemble Methods"]
        },
        {
            "title": "Deep Learning",
            "summary": "Neural modeling for image-driven tasks",
            "items": ["TensorFlow", "Keras", "CNN", "Computer Vision"]
        },
        {
            "title": "ML Lifecycle",
            "summary": "From data prep to model validation",
            "items": ["Data Wrangling", "Feature Engineering", "Hyperparameter Tuning", "Cross Validation", "Model Evaluation"]
        },
        {
            "title": "Deployment",
            "summary": "Serving models and APIs in production",
            "items": ["FastAPI", "Flask", "REST APIs", "Docker", "Streamlit", "JSON Handling"]
        },
        {
            "title": "Tools & Technologies",
            "summary": "Daily workflow and experimentation tools",
            "items": ["Pandas", "NumPy", "Git", "GitHub", "Jupyter Notebook"]
        },
        {
            "title": "Concepts",
            "summary": "Software engineering and integration practices",
            "items": ["OOP", "API Integration", "Debugging", "Data Processing", "Software Development Lifecycle"]
        }
    ];

    var matrix = document.getElementById("skills-matrix");
    if (!matrix) {
        return;
    }

    matrix.innerHTML = "";

    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];

        var card = document.createElement("article");
        card.className = "skill-card";

        var title = document.createElement("h3");
        title.className = "skill-card-title";
        title.innerHTML = category["title"];

        var summary = document.createElement("p");
        summary.className = "skill-card-summary";
        summary.innerHTML = category["summary"];

        var list = document.createElement("div");
        list.className = "skill-pill-list";

        for (var j = 0; j < category["items"].length; j++) {
            var pill = document.createElement("span");
            pill.className = "skill-pill";
            pill.innerHTML = category["items"][j];
            list.appendChild(pill);
        }

        card.appendChild(title);
        card.appendChild(summary);
        card.appendChild(list);
        matrix.appendChild(card);
    }
}