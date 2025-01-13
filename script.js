  // script.js
  const moodButtons = document.querySelectorAll('.mood-selector button');
  const contentSection = document.getElementById('content');
  
  // Curated content for each mood
  const moodContent = {
    happy: {
      message: "😊 Here's a happy quote: 'Happiness is not by chance, but by choice.'",
      movies: [
        { name: "The Pursuit of Happyness", trailer: "https://www.youtube.com/embed/89Kq8SDyvfg" },
        { name: "Zootopia", trailer: "https://www.youtube.com/embed/jWM0ct-OLsM" },
        { name: "Mamma Mia!", trailer: "https://www.youtube.com/embed/lAiwNUrcKr0" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC"
    },
    sad: {
      message: "😢 It's okay to feel sad. Remember, 'This too shall pass.'",
      movies: [
        { name: "The Fault in Our Stars", trailer: "https://www.youtube.com/embed/9ItBvH5J6ss" },
        { name: "Marley & Me", trailer: "https://www.youtube.com/embed/0UMMGNxg1Lg" },
        { name: "Inside Out", trailer: "https://www.youtube.com/embed/seMwpP0yeu4" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVV27DiNWxkR"
    },
    relaxed: {
      message: "🌿 Relax and enjoy this: 'Calm is a superpower.'",
      movies: [
        { name: "Eat Pray Love", trailer: "https://www.youtube.com/embed/mjay5vgIwt4" },
        { name: "The Secret Life of Walter Mitty", trailer: "https://www.youtube.com/embed/HddkucqSzSM" },
        { name: "Soul", trailer: "https://www.youtube.com/embed/xOsLIiBStEs" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
    },
    angry: {
      message: "😡 Take a deep breath. 'Anger is like holding a hot coal and expecting the other person to get burned.'",
      movies: [
        { name: "Whiplash", trailer: "https://www.youtube.com/embed/7d_jQycdQGo" },
        { name: "The Social Network", trailer: "https://www.youtube.com/embed/lB95KLmpLR4" },
        { name: "Gladiator", trailer: "https://www.youtube.com/embed/owK1qxDselE" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/609gQW5ztNwAkKnoZplkao"
    },
    anxious: {
      message: "😰 Breathe in, breathe out. 'Anxiety doesn't define you.'",
      movies: [
        { name: "A Beautiful Mind", trailer: "https://www.youtube.com/embed/aS_d0Ayjw4o" },
        { name: "Silver Linings Playbook", trailer: "https://www.youtube.com/embed/Lj5_FhLaaQQ" },
        { name: "The Perks of Being a Wallflower", trailer: "https://www.youtube.com/embed/n5rh7O4IDc0" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvHZA1zLcjW"
    },
    overwhelmed: {
      message: "😵 Take one step at a time. 'You don't have to do everything at once.'",
      movies: [
        { name: "The Hundred-Foot Journey", trailer: "https://www.youtube.com/embed/Mo9eEkgDzLw" },
        { name: "Forrest Gump", trailer: "https://www.youtube.com/embed/bLvqoHBptjg" },
        { name: "Julie & Julia", trailer: "https://www.youtube.com/embed/ozRK7VXQl-k" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"
    },
    lonely: {
      message: "💔 Reach out to someone. 'You are not alone in this world.'",
      movies: [
        { name: "Her", trailer: "https://www.youtube.com/embed/WzV6mXIOVl4" },
        { name: "Cast Away", trailer: "https://www.youtube.com/embed/PJvosb4UCLs" },
        { name: "The Martian", trailer: "https://www.youtube.com/embed/ej3ioOneTy8" }
      ],
      spotify: "https://open.spotify.com/embed/playlist/5ZGhtJGeJvBZoMnN7fayDU?"
    }
  };
  
  // Generate movie recommendations with trailer links
  function generateMovies(movies) {
    return `
      <p><strong>Movie Recommendations:</strong></p>
      <ul>
        ${movies
          .map(
            movie =>
              `<li><a href="#" onclick="showTrailer('${movie.trailer}')">${movie.name}</a></li>`
          )
          .join('')}
      </ul>
    `;
  }
  
  // Handle mood selection
  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.getAttribute('data-mood');
      const moodData = moodContent[mood];
  
      // Update content with message, movies, and Spotify playlist
      contentSection.innerHTML = `
        <p>${moodData.message}</p>
        ${generateMovies(moodData.movies)}
        <p><strong>Spotify Playlist:</strong></p>
        <iframe src="${moodData.spotify}" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      `;
      contentSection.classList.add('fade-in');
    });
  });
  
  
  
  // Show trailer in a centered modal below recommendations
  function showTrailer(trailerUrl) {
      // Remove any existing modal
      const existingModal = document.querySelector('.trailer-modal');
      if (existingModal) existingModal.remove();
    
      // Create a new modal for the trailer
      const modal = document.createElement('div');
      modal.classList.add('trailer-modal');
      modal.innerHTML = `
        <div class="trailer-content">
          <iframe
            width="560"
            height="315"
            src="${trailerUrl}"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      `;
    
      // Append modal to the content section
      contentSection.appendChild(modal);
    
      // Scroll to the modal
      modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
  
 
  