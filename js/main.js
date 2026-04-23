function myFunction() {
    const container = document.getElementById("navigationBar");
    const menuItems = [
        {id:"h",name: "HOME",href:"#home"},
        {id:"a",name: "ABOUT",href:"#about"},
        {id:"j",name:"JOURNEY",href:"#journey"},
        {id:"s",name:"SKILLS",href:"#skills"},
    ];

    menuItems.forEach(item => {
        const lis = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.name;

        // Hover effect
        link.addEventListener("mouseenter", () => {
            link.style.color = "#ffd400";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = ""; // Reset when mouse leaves
        });

        lis.appendChild(link);
        container.appendChild(lis);
    });
}

myFunction();