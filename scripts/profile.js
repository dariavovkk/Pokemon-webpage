// Collapsed menu
document.addEventListener('DOMContentLoaded', function () {
    const navbarTogglerBtn = document.getElementById('navbarTogglerBtn');
    const navbarCollapse = document.getElementById('navbarNav');

    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        navbarTogglerBtn.classList.add('collapsed');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navbarTogglerBtn.classList.remove('collapsed');
    });
});


// Check if the user is logged in
const userLoggedIn = true;

const profileLink = document.getElementById("profile-link");
const collectionLink = document.getElementById("collection-link");
const logoutNavItem = document.getElementById("logoutNavItem");

if (userLoggedIn) {
    profileLink.style.display = 'block';
    collectionLink.style.display = 'block';
    logoutNavItem.style.display = 'block';
} else {
    profileLink.style.display = 'none';
    collectionLink.style.display = 'none';
    logoutNavItem.style.display = 'none';
}

// Funkcja logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
}

//User info
const storedData = JSON.parse(localStorage.getItem('user'));
    if (storedData) {
        document.getElementById('username').textContent = storedData.username;
        document.getElementById('age').textContent = storedData.age;
        document.getElementById('email').textContent = storedData.email;
        document.getElementById('interests').textContent = storedData.interests.join(', ');
    } else {
        document.getElementById('profileInfo').innerHTML = '<p>No user data found.</p>';
    }

// Edit form info
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('profileInfo').style.display = 'none';
    document.getElementById('editProfileForm').style.display = 'block';

    if (storedData) {
        document.getElementById('editName').value = storedData.username;
        document.getElementById('editAge').value = storedData.age;
        document.getElementById('editEmail').value = storedData.email;
        
        document.getElementById('interest1').checked = storedData.interests.includes('porady');
        document.getElementById('interest2').checked = storedData.interests.includes('gra');
        document.getElementById('interest3').checked = storedData.interests.includes('news');
    }
});

//Update profile info
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const updatedData = {
        username: document.getElementById('editName').value,
        age: document.getElementById('editAge').value,
        email: document.getElementById('editEmail').value,
        interests: [
            document.getElementById('interest1').checked ? 'porady' : null,
            document.getElementById('interest2').checked ? 'gra' : null,
            document.getElementById('interest3').checked ? 'news' : null
        ].filter(Boolean)
    };

    localStorage.setItem('user', JSON.stringify(updatedData));

    // Update displayed profile information
    document.getElementById('username').textContent = updatedData.username;
    document.getElementById('age').textContent = updatedData.age;
    document.getElementById('email').textContent = updatedData.email;
    document.getElementById('interests').textContent = updatedData.interests.join(', ');

    document.getElementById('profileInfo').style.display = 'block';
    document.getElementById('editProfileForm').style.display = 'none';
});

//Delete profile 
document.getElementById('deleteProfileBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to delete your profile?')) {
        localStorage.removeItem('user');
        window.location.href = '../index.html';
    }
});