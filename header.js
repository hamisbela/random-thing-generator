const headerHTML = `
<header>
    <div class="logo">
        <h1>Random Thing Generator</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#">Generators</a>
                <ul class="dropdown">
                    <li><a href="random-number-generator.html">Random Number</a></li>
                    <li><a href="random-name-generator.html">Random Name</a></li>
                    <li><a href="random-word-generator.html">Random Word</a></li>
                    <li><a href="random-password-generator.html">Random Password</a></li>
                    <li><a href="random-color-generator.html">Random Color</a></li>
                    <li><a href="random-letter-generator.html">Random Letter</a></li>
                    <li><a href="random-animal-generator.html">Random Animal</a></li>
                    <li><a href="random-pokemon-generator.html">Random Pokémon</a></li>
                    <li><a href="random-generator.html">Random Generator</a></li>
                    <li><a href="random-group-generator.html">Random Group</a></li>
                    <li><a href="random-country-generator.html">Random Country</a></li>
                    <li><a href="random-team-generator.html">Random Team</a></li>
                    <li><a href="random-username-generator.html">Random Username</a></li>
                    <li><a href="random-email-generator.html">Random Email</a></li>
                    <li><a href="random-movie-generator.html">Random Movie</a></li>
                    <li><a href="random-nfl-team-generator.html">Random NFL Team</a></li>
                    <li><a href="random-character-generator.html">Random Character</a></li>
                </ul>
            </li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
</header>
`;

// Insert the header into the page
document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
