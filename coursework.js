document.addEventListener("DOMContentLoaded", function() {
    const courseLinks = document.querySelectorAll(".sidebar ul li a");
    const courseDetails = document.querySelectorAll(".course-details");

    courseLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const courseId = this.getAttribute("href").substring(1);
            courseDetails.forEach(course => {
                if (course.id === courseId) {
                    course.classList.add("active");
                } else {
                    course.classList.remove("active");
                }
            });
        });
    });
});
