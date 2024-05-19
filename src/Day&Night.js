export function themeSwitcher() {
    let currentHour = new Date().getHours();
    let startNight = 17
    let endNight = 7
    let root = document.documentElement;

    if (currentHour >= startNight || currentHour < endNight){
        root.style.setProperty('--bg-color', '#1A1F3E');
        root.style.setProperty('--primary-color', '#95a3ab'); 
        root.style.setProperty('--hover-color', '1A1F3E'); 
        root.style.setProperty('--border-color', '1A1F3E');
        root.style.setProperty('--accent-color', 'rgb(36, 85, 124)'); 
        root.style.setProperty('--accent-hover-color', 'rgb(120, 167, 206)');
        root.style.setProperty('--secondary-bg-color', '#0e141f'); 
        root.style.setProperty('--secondary-border-color', '#95a3ab');
        root.style.setProperty('--shadow-color', '#666666'); 
        root.style.setProperty('--title-color', '#c3c9cc'); 
        root.style.setProperty('--code-border-color', '#95a3ab'); 
        root.style.setProperty('--font-color', '#95a3ab'); 
        root.style.setProperty('--bar-color', 'rgb(120, 167, 206)');
        root.style.setProperty('--bar-background', '#161b22'); 
    } else {
        root.style.setProperty('--bg-color', '#f1ebe0');
        root.style.setProperty('--primary-color', '#6a5c54');
        root.style.setProperty('--hover-color', '#3c3630');
        root.style.setProperty('--border-color', '#bfb9b2');
        root.style.setProperty('--accent-color', '#cb7b84');
        root.style.setProperty('--accent-hover-color', '#87a898');
        root.style.setProperty('--secondary-bg-color', '#eae4d9');
        root.style.setProperty('--secondary-border-color', '#191c1f');
        root.style.setProperty('--shadow-color', '#c3c9cc');
        root.style.setProperty('--title-color', 'black');
        root.style.setProperty('--code-border-color', '#191c1f');
        root.style.setProperty('--font-color', '#191c1f');
        root.style.setProperty('--bar-color', '#da6d25');
        root.style.setProperty('--bar-background', '#1f4a59');
    }
}