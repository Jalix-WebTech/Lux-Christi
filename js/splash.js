/*
 * Splash page script
 *
 * This code waits for the splash page to load,
 * then keeps the splash visible for a set period.
 * After the timer completes, it sends the user
 * to the homepage.
 */
document.addEventListener("DOMContentLoaded", function () {
    const splashDuration = 5000; // Show splash for 5 seconds.

    window.setTimeout(function () {
        window.location.replace("index.html");
    }, splashDuration);
});
