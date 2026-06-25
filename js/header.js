/* ═══════════════════════════════════════════
   HEADER.JS — Hero Section & Brand Coordinates
   ═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
    mapMetaDataInHeader();
    mapSocialLinksData();
    initHeroParallax();
});
function mapMetaDataInHeader() {
    var firstName = "Abhay";
    var lastName = "Maurya";
    var firstNameElement = document.getElementById("first-name");
    if (firstNameElement) firstNameElement.textContent = firstName;
    var lastNameElement = document.getElementById("last-name");
    if (lastNameElement) lastNameElement.textContent = lastName;
    var tagLabelElement = document.getElementById("tag-label");
    if (tagLabelElement) tagLabelElement.textContent = "🚀 Open for Full time role";
}
function mapSocialLinksData() {
    var socials = [
        {
            icon: "fa fa-linkedin-square",
            value: "https://www.linkedin.com/in/abhay-maurya03/"
        },
        {
            icon: "fa fa-github",
            value: "https://github.com/abhay1maurya"
        },
        {
            icon: "fa fa-envelope",
            value: "mailto:abhay.maurya0303@gmail.com"
        }
    ];
    // Icons in hero section
    var socialHandles = document.getElementById("social-handles");
    if (socialHandles) {
        socials.forEach(function (social, index) {
            var anchor = document.createElement("a");
            anchor.className = "social-icon-wrapper";
            anchor.href = socials[index].value;
            anchor.target = "_blank";
            anchor.setAttribute("data-animate", "scale-in");
            anchor.setAttribute("data-delay", String(400 + index * 100));
            var icon = document.createElement("i");
            icon.className = "social-icon " + socials[index].icon;
            anchor.appendChild(icon);
            socialHandles.appendChild(anchor);
        });
    }
    // Icons in contact section
    var contactIcons = document.getElementById("social-contact-icons");
    if (contactIcons) {
        socials.forEach(function (social, index) {
            var anchor = document.createElement("a");
            anchor.className = "social-icon-wrapper";
            anchor.href = socials[index].value;
            anchor.target = "_blank";
            var icon = document.createElement("i");
            icon.className = "social-icon " + socials[index].icon;
            anchor.appendChild(icon);
            contactIcons.appendChild(anchor);
        });
    }
}
function initHeroParallax() {
    var card = document.getElementById("hero-profile-card");
    if (!card) return;
    var img = card.querySelector(".dp");
    var glow = card.querySelector(".profile-glow");
    var ring = card.querySelector(".profile-ring");
    var badgeLeft = card.querySelector(".badge-top-left");
    var badgeRight = card.querySelector(".badge-bottom-right");
    card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = (y - centerY) / centerY * -8; // max 8 degrees
        var rotateY = (x - centerX) / centerX * 8;
        // Apply 3D perspective rotation on wrapper card
        card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        // Parallax shifts on inner visual elements
        if (img) img.style.transform = "translateZ(30px) scale(1.02) translateX(" + (rotateY * 0.5) + "px) translateY(" + (rotateX * -0.5) + "px)";
        if (glow) glow.style.transform = "translateZ(-20px) scale(1.1) translateX(" + (rotateY * -0.8) + "px) translateY(" + (rotateX * 0.8) + "px)";
        if (ring) ring.style.transform = "translateZ(15px) rotate(" + (rotateY * 2) + "deg)";

        // Floating badges move in deeper Z dimensions
        if (badgeLeft) badgeLeft.style.transform = "translateZ(50px) translateX(" + (rotateY * 1.2) + "px) translateY(" + (rotateX * -1.2) + "px)";
        if (badgeRight) badgeRight.style.transform = "translateZ(45px) translateX(" + (rotateY * 1.1) + "px) translateY(" + (rotateX * -1.1) + "px)";
    });
    card.addEventListener("mouseleave", function () {
        // Smoothly reset transformations
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        if (img) img.style.transform = "translateZ(0) scale(1) translateX(0) translateY(0)";
        if (glow) glow.style.transform = "translateZ(0) scale(1) translateX(0) translateY(0)";
        if (ring) ring.style.transform = "translateZ(0) rotate(0deg)";
        if (badgeLeft) badgeLeft.style.transform = "translateZ(0) translateX(0) translateY(0)";
        if (badgeRight) badgeRight.style.transform = "translateZ(0) translateX(0) translateY(0)";
    });
}
