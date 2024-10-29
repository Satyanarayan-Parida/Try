function showProject(projectNumber) {
    const contentViewer = document.getElementById('contentViewer');

    // Define file paths for each project's HTML and CSS files
    let filePath = '';
    let cssPath = '';

    // Group 1 Projects
    if (projectNumber === 1) {
        filePath = 'CSS_Getting_Started/HTML/index.html';
        cssPath = 'CSS_Getting_Started/CSS/style.css';
    } else if (projectNumber === 2) {
        filePath = 'CSS_Getting_Started/HTML/practice_01.html';
        cssPath = 'CSS_Getting_Started/CSS/practice_01.css';
    } else if (projectNumber === 3) {
        filePath = 'CSS_Getting_Started/HTML/practice_02.html';
        cssPath = 'CSS_Getting_Started/CSS/practice_02.css';
    } else if (projectNumber === 4) {
        filePath = 'CSS_Getting_Started/HTML/practice_03.html';
        cssPath = 'CSS_Getting_Started/CSS/practice_03.css';
    } else if (projectNumber === 5) {
        filePath = 'CSS_Getting_Started/HTML/practice_04.html';
        cssPath = 'CSS_Getting_Started/CSS/practice_04.css';
    }
    // Adjust other paths in a similar way...
    
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
