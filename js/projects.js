document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
        {
            "title": "Smart Crop Advisory System",
            "image": "images/projects/stf.svg",
            "type": "Machine Learning",
            "summary": "Crop recommendation and plant health insights using ensemble learning and image-based disease detection.",
            "stack": ["Python", "Random Forest", "CNN", "Feature Engineering"],
            "labels": [
                {
                    "title": "Case Study",
                    "link": ""
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/abhay1maurya"
                }
            ]
        },
        {
            "title": "System Threat Forecaster",
            "image": "images/projects/bdm.svg",
            "type": "Machine Learning",
            "summary": "Threat prediction pipeline built on system-log features with robust evaluation across precision-focused metrics.",
            "stack": ["XGBoost", "Random Forest", "Python", "Model Evaluation"],
            "labels": [
                {
                    "title": "Case Study",
                    "link": ""
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/abhay1maurya/System-Threat-Forecaster"
                }
            ]
        },
        {
            "title": "Data-Driven Sales Optimization",
            "image": "images/projects/brs.svg",
            "type": "Data Analysis",
            "summary": "Sales trend analysis and dashboard-driven reporting to identify revenue gaps and improve business decisions.",
            "stack": ["Excel", "Pandas", "NumPy", "Reporting"],
            "labels": [
                {
                    "title": "Case Study",
                    "link": ""
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/abhay1maurya"
                }
            ]
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var projectSummary = document.createElement("p");
        projectSummary.className = "body2 p-summary";
        projectSummary.innerHTML = project.summary;

        var stackWrap = document.createElement("div");
        stackWrap.className = "p-stack";

        for (var s = 0; s < project.stack.length; s++) {
            var stackTag = document.createElement("span");
            stackTag.className = "label p-stack-item";
            stackTag.innerHTML = project.stack[s];
            stackWrap.appendChild(stackTag);
        }

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web" || title == "Case Study") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            if (!link) {
                label.classList.add("p-label-disabled");
                label.href = "javascript:void(0)";
                label.target = "_self";
                label.setAttribute("aria-disabled", "true");
            }

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(projectSummary);
        card.appendChild(stackWrap);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }
}