document.addEventListener("DOMContentLoaded", () => {
    const videoContainers = document.querySelectorAll('.video-container .container');
    const apiKey = 'AIzaSyDs-YPotUcw7zsWIZPR1tZttYk2UWFl0fY';
    const videoIds = ['TgmkqHL_8jQ', 'zD-VwaldzkI', 'wxMTexlm5tM', 'LP7hlbssWLU'];

    videoIds.forEach((videoId, index) => {
        const videoContainer = videoContainers[index];
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`)
            .then(response => response.json())
            .then(data => {
                const video = data.items[0];
                const title = video.snippet.title;
                const description = video.snippet.description;
                const thumbnail = video.snippet.thumbnails.high.url;

                const videoCard = document.createElement('div');
                videoCard.className = 'mb-4';
                videoCard.innerHTML = `
                    <div class="card-body">
                        <div>
                            <iframe src="https://www.youtube.com/embed/${videoId}" width="660" height="415" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                `;
                videoContainer.appendChild(videoCard);
            })
            .catch(error => console.error('Error fetching video data:', error));
    });
});

function toggleVideo(containerId) {
    const container = document.getElementById(containerId);
    const button = document.querySelector(`button[data-container="${containerId}"]`);

    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
        button.textContent = 'Close Video';
    } else {
        container.style.display = 'none';
        button.textContent = 'Open Video';
    }
}