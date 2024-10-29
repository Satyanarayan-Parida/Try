function showProject(projectNumber) {
    const contentViewer = document.getElementById('contentViewer');

    // Define file paths for each project's HTML and CSS files
    let filePath = '';
    let cssPath = '';

    // Group 1 Projects
    if (projectNumber === 1) {
        filePath = '../CSS_Getting_Started/HTML/index.html';
        cssPath = '../CSS_Getting_Started/CSS/style.css';
    } else if (projectNumber === 2) {
        filePath = '../CSS_Getting_Started/HTML/practice_01.html';
        cssPath = '../CSS_Getting_Started/CSS/practice_01.css';
    } else if (projectNumber === 3) {
        filePath = '../CSS_Getting_Started/HTML/practice_02.html';
        cssPath = '../CSS_Getting_Started/CSS/practice_02.css';
    } else if (projectNumber === 4) {
        filePath = '../CSS_Getting_Started/HTML/practice_03.html';
        cssPath = '../CSS_Getting_Started/CSS/practice_03.css';
    } else if (projectNumber === 5) {
        filePath = '../CSS_Getting_Started/HTML/practice_04.html';
        cssPath = '../CSS_Getting_Started/CSS/practice_04.css';
    }
    // Group 2 Projects
    else if (projectNumber === 6) {
        filePath = '../HTML/Practice_01.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 7) {
        filePath = '../HTML/Practice_02_User.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 8) {
        filePath = '../HTML/Practice_03.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 9) {
        filePath = '../HTML/Practice_04.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 10) {
        filePath = '../HTML/Practice_05.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 11) {
        filePath = '../HTML/Practice_06.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 12) {
        filePath = '../HTML/Practice_07.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 13) {
        filePath = '../HTML/Question_answer.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 14) {
        filePath = '../HTML/solvequestions.html';
        cssPath = ''; // No CSS file for this project
    } else if (projectNumber === 15) {
        filePath = '../CSS_Part_2/HTML/Exp.html';
        cssPath = '../CSS_Part_2/CSS/Exp.css'; // No CSS file for this project
    }
    else if (projectNumber === 16) {
        filePath = '../CSS_Part_2/HTML/index.html';
        cssPath = '../CSS_Part_2/CSS/style.css'; // No CSS file for this project
    }else if (projectNumber === 17) {
        filePath = '../CSS_Part_2/HTML/inheritance_demo.html';
        cssPath = '../CSS_Part_2/CSS/inheritance_demo.css'; // No CSS file for this project
    }else if (projectNumber === 18) {
        filePath = '../CSS_Part_2/HTML/Practice.html';
        cssPath = '../CSS_Part_2/CSS/Practice.css'; // No CSS file for this project
    }else if (projectNumber === 19) {
        filePath = '../CSS_Part_2/HTML/PracticeQs.html';
        cssPath = '../CSS_Part_2/CSS/PracticeQs.css'; // No CSS file for this project
    }else if (projectNumber === 20) {
        filePath = '../MY_PROJECT/Project_1.html';
        cssPath = '../MY_PROJECT/Project_1.css'; // No CSS file for this project
    }else if (projectNumber === 21) {
        filePath = '../MY_PROJECT/traffic_light.html';
        cssPath = '../MY_PROJECT/traffic_light.css'; // No CSS file for this project
    }
    

    // Load HTML content
    if (filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok.");
                return response.text();
            })
            .then(html => {
                contentViewer.innerHTML = html;

                // Only load CSS if a path is provided
                if (cssPath) {
                    loadCSS(cssPath);
                } else {
                    // Reset any previously loaded CSS styles
                    resetCSS();
                }
            })
            .catch(error => {
                contentViewer.innerHTML = `<h2>Error</h2><p>Could not load the content for Project ${projectNumber}.</p>`;
                console.error("There was a problem with the fetch operation:", error);
            });
    } else {
        // Default inline content if no file path is defined
        contentViewer.innerHTML = `
            <h2>Project ${projectNumber}</h2>
            <p>This is the content for Project ${projectNumber}. You can add any information here.</p>
        `;
    }
}

function loadCSS(cssPath) {
    // Clear any existing dynamically added CSS
    resetCSS();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.id = 'dynamic-css'; // Add an ID for easier reference
    document.head.appendChild(link);
}

function resetCSS() {
    // Remove previously loaded CSS
    const existingLink = document.getElementById('dynamic-css');
    if (existingLink) {
        existingLink.remove();
    }
}

