document.addEventListener("DOMContentLoaded", function () {
    const groups = document.querySelectorAll(".group-title");

    groups.forEach(group => {
        group.addEventListener("click", function () {
            const subgroup = this.nextElementSibling;
            subgroup.style.display = subgroup.style.display === "block" ? "none" : "block";
        });
    });
});
