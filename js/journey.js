

// my journey starts here
function myJourney(){
    const listJourneyData = 
    [
        {
            experience:"AUTOMATIC TIMETABLE MANAGEMENT",details:"Developed and managed a Term Project at University of Turbat. (Automatic Timetable Management System)",
            headline:"MATRICULATION",describe:"SSC [General Science] 2016-2018  "
        },
        {
            experience:"SHUNAKT APPLICATION",details:"Developed Shunakth Application for Turbat Balochistan,Pakistan Police for keeping and fast accessing criminals records.",
            headline:"INTERMEDIATE",describe:"ICS [Computer Science] 2018-2020  "
        },
        {
            experience:"2018-2020	BACHELOR OF SCIENCE",
            details:"Developed an app for Iftikhar Medical Store to track medicines quantity and reorder the important least stocks by listing them automatically",
            headline:"Bachelors",
            describe:"BS [Computer Science] 2021-2024"
        }
    ];
    const baseElement = document.getElementById("journey");
    const paraElement = document.createElement("p");
    paraElement.style="margin: 0; font-size: 48px; font-weight: bold; color: #ffd400; text-align: center; height:0";
    paraElement.innerText="MY JOURNEY";
    baseElement.appendChild(paraElement);
    const divElement = document.createElement("div");
    divElement.className = "skills-container";
    const divLeftElement = document.createElement("div");
    divLeftElement.className = "left";
    const leftElementHeading = document.createElement("p");
    leftElementHeading.innerText="Education";
    leftElementHeading.style="margin: 0; font-size: 30px; color: #ffd400; text-align: start; font-weight:bold";
    const divRightElement = document.createElement("div");
    divRightElement.className = "right";
    const rightElementHeading = document.createElement("p");
    rightElementHeading.innerText="Experience";
    rightElementHeading.style="margin: 0; font-size: 30px; color: #ffd400; text-align: start;font-weight:bold";
    divRightElement.appendChild(rightElementHeading);
    const innerDivLeftElement = document.createElement("div");
    innerDivLeftElement.className = "nameSection tiny";
    const innerDivRightElement = document.createElement("div");
    innerDivRightElement.className = "nameSection tiny";
    innerDivLeftElement.appendChild(leftElementHeading);
    innerDivRightElement.appendChild(rightElementHeading);
    for(const increment of listJourneyData)
        {
        const innerPLeftElement = document.createElement("p");
        innerPLeftElement.style.padding="0";
        innerPLeftElement.style.margin = "0";
        innerPLeftElement.innerText=increment.headline;
        const innerPAnotherElement = document.createElement("p");
        innerPAnotherElement.style = "color:white";
        innerPAnotherElement.style.padding="0";
        innerPAnotherElement.style.margin = "0";
        innerPAnotherElement.innerText = increment.describe;
        innerDivLeftElement.appendChild(innerPLeftElement);
        innerDivLeftElement.appendChild(innerPAnotherElement);
        divLeftElement.appendChild(innerDivLeftElement);
        
        const innerPRightElement = document.createElement("p");
        innerPRightElement.style.padding="0";
        innerPRightElement.style.margin = "0";
        innerPRightElement.innerText=increment.experience;
        const innerPRElement = document.createElement("p");
        innerPRElement.style = "color:white";
        innerPRElement.style.padding="0";
        innerPRElement.style.margin = "0";
        innerPRElement.innerText = increment.details;
        innerDivRightElement.appendChild(innerPRightElement);
        innerDivRightElement.appendChild(innerPRElement);
        divRightElement.appendChild(innerDivRightElement);
    }
    divElement.appendChild(divLeftElement);
    divElement.appendChild(divRightElement);
    baseElement.appendChild(divElement);
}


myJourney();

 