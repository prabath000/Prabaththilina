/**
 * Project Service
 * Handles fetching projects from data source
 */

// Get projects from local JSON file
export async function getProjects() {
    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Export for backward compatibility
window.getProjects = getProjects;
