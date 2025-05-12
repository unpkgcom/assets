// Function to download a ZIP file automatically, including MediaFire links
async function downloadZip(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = filename;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Error downloading the ZIP file:', error);
    }
}

// Example usage
window.onload = function() {
    const zipUrl = 'https://www.mediafire.com/file/iyzfomhu8jzwk67/scweb30tampilan.zip/file';  // Replace with actual MediaFire ZIP URL
    const zipFilename = 'scweb30tampilan.zip';
    downloadZip(zipUrl, zipFilename);
};
