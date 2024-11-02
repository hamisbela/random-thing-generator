const headerHTML = `
<header>
    <h1>Random Generators</h1>
    <nav>
        <ul>
            <li><a href="random-number-generator.html">Random Number Generator</a></li>
            <li><a href="random-name-generator.html">Random Name Generator</a></li>
            <li><a href="random-word-generator.html">Random Word Generator</a></li>
            <li><a href="random-password-generator.html">Random Password Generator</a></li>
            <li><a href="random-color-generator.html">Random Color Generator</a></li>
            <li><a href="random-letter-generator.html">Random Letter Generator</a></li>
            <li><a href="random-animal-generator.html">Random Animal Generator</a></li>
            <li><a href="random-pokemon-generator.html">Random Pokémon Generator</a></li>
            <li><a href="random-generator.html">Random Generator</a></li>
            <li><a href="random-group-generator.html">Random Group Generator</a></li>
            <li><a href="random-country-generator.html">Random Country Generator</a></li>
            <li><a href="random-team-generator.html">Random Team Generator</a></li>
            <li><a href="random-username-generator.html">Random Username Generator</a></li>
            <li><a href="random-email-generator.html">Random Email Generator</a></li>
            <li><a href="random-movie-generator.html">Random Movie Generator</a></li>
            <li><a href="random-nfl-team-generator.html">Random NFL Team Generator</a></li>
            <li><a href="random-character-generator.html">Random Character Generator</a></li>
        </ul>
    </nav>
</header>
`;

// Insert the header into the page
document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
