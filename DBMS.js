body {
    padding: 20px;
}

h1 {
    font-size: 2rem;
}

h2 {
    font-size: 1.5rem;
}

/* Responsive PDF container with increased height */
object {
    width: 100%;
    height: 650px; /* Increased height */
}

/* Media Query for small screens */
@media only screen and (max-width: 200px) {
    h1 {
        font-size: 1.2rem;
    }

    h2 {
        font-size: 1rem;
    }

    object {
        width: 180px;
        height: 350px; /* Adjusted height for smaller screens */
    }
}