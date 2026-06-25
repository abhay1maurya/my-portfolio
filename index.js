/* ═══════════════════════════════════════════
   INDEX.JS — Core Application Logic
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initNavbar();
    initScrollAnimations();
    initMouseGlow();
    initParticles();
});

/* ═══════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════ */

function initScrollToTop() {
    var upBtn = document.getElementById("up");
    var brand = document.getElementById("brand");

    if (upBtn) {
        upBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Show/hide based on scroll
        window.addEventListener("scroll", function () {
            if (window.scrollY > 600) {
                upBtn.classList.add("visible");
            } else {
                upBtn.classList.remove("visible");
            }
        });
    }

    if (brand) {
        brand.parentElement.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/* ═══════════════════════════════════════════
   NAVBAR — Active Section + Mobile Toggle
   ═══════════════════════════════════════════ */

function initNavbar() {
    var navbar = document.getElementById("app-navbar");
    var toggle = document.getElementById("navbar-toggle");
    var menu = document.getElementById("navbar-menu");
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = [];

    // Collect sections for scroll spy
    navLinks.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            var section = document.querySelector(href);
            if (section) {
                sections.push({ link: link, section: section });
            }
        }
    });

    // Scroll spy — highlight active section
    function updateActiveNav() {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (item) {
            var top = item.section.offsetTop;
            var bottom = top + item.section.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(function (l) { l.classList.remove("active"); });
                item.link.classList.add("active");
            }
        });

        // Navbar background on scroll
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    // Mobile hamburger toggle
    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            toggle.classList.toggle("open");
            menu.classList.toggle("open");
        });

        // Close menu on link click
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                toggle.classList.remove("open");
                menu.classList.remove("open");
            });
        });
    }

    // Smooth scroll for nav links with offset
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            var href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    var offset = 80; // navbar height
                    var top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: top, behavior: "smooth" });
                }
            }
        });
    });
}

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS — IntersectionObserver
   ═══════════════════════════════════════════ */

function initScrollAnimations() {
    var animElements = document.querySelectorAll("[data-animate]");

    if (!animElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var delay = parseInt(entry.target.getAttribute("data-delay")) || 0;
                setTimeout(function () {
                    entry.target.classList.add("is-visible");
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animElements.forEach(function (el) {
        observer.observe(el);
    });
}

/* ═══════════════════════════════════════════
   MOUSE GLOW EFFECT
   ═══════════════════════════════════════════ */

function initMouseGlow() {
    var glow = document.getElementById("mouse-glow");
    if (!glow) return;

    // Only enable on desktop
    if (window.innerWidth < 768) return;

    var mouseX = 0, mouseY = 0;
    var glowX = 0, glowY = 0;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add("active");
    });

    document.addEventListener("mouseleave", function () {
        glow.classList.remove("active");
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + "px";
        glow.style.top = glowY + "px";
        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

/* ═══════════════════════════════════════════
   PARTICLE MESH BACKGROUND
   ═══════════════════════════════════════════ */

function initParticles() {
    var canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var mousePos = { x: -1000, y: -1000 };
    var particleCount = window.innerWidth < 768 ? 40 : 80;
    var connectionDistance = 120;
    var mouseRadius = 200;

    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    canvas.parentElement.addEventListener("mousemove", function (e) {
        var rect = canvas.getBoundingClientRect();
        mousePos.x = e.clientX - rect.left;
        mousePos.y = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener("mouseleave", function () {
        mousePos.x = -1000;
        mousePos.y = -1000;
    });

    // Create particles
    for (var i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update & draw particles
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Mouse interaction - gentle push
            var dx = mousePos.x - p.x;
            var dy = mousePos.y - p.y;
            var dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius) {
                var force = (mouseRadius - dist) / mouseRadius * 0.02;
                p.vx -= dx * force;
                p.vy -= dy * force;
            }

            // Dampen velocity
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(33, 243, 176, " + p.opacity + ")";
            ctx.fill();

            // Draw connections
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var cdx = p.x - p2.x;
                var cdy = p.y - p2.y;
                var cdist = Math.sqrt(cdx * cdx + cdy * cdy);

                if (cdist < connectionDistance) {
                    var alpha = (1 - cdist / connectionDistance) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = "rgba(34, 211, 238, " + alpha + ")";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ═══════════════════════════════════════════
   DOWNLOAD RESUME
   ═══════════════════════════════════════════ */

function downloadResume() {
    window.open("https://drive.google.com/file/d/1bNTHljW9SsK9-TNGwnuATb2yUyLWa1TK/view?usp=sharing", "_blank");
}