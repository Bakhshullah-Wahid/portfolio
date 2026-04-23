function mySkills(){
    const skillData = [
        {headline:'Flutter',widthInPercent:'75%',proHead:'Software Developement',proHeadPer:'85%'},
        {headline:'Dart',widthInPercent:'80%',proHead:'Web Developement',proHeadPer:'75%'},
        {headline:'Python',widthInPercent:'65%',proHead:'Use Of AI',proHeadPer:'76%'},
        {headline:'C++',widthInPercent:'70%',proHead:'Graphic Designing',proHeadPer:'60%'},
        {headline:'HTML',widthInPercent:'68%',proHead:'Project Management',proHeadPer:'90%'},
        {headline:'JavaScript',widthInPercent:'70%',proHead:'Typing',proHeadPer:'85%'},

    ];
    const baseElement = document.getElementById("skills");
    const paraElement = document.createElement("p");
    paraElement.style="margin: 0; font-size: 48px; font-weight: bold; color: #ffd400; text-align: center; height:0; padding-bottom:7%";
    paraElement.innerText="MY SKILLS";
    baseElement.appendChild(paraElement);
    const divElement = document.createElement("div");
    divElement.className = "skills-container";
    const divLeftElement = document.createElement("div");
    divLeftElement.className = "left";
    const leftElementHeading = document.createElement("p");
    leftElementHeading.innerText="Coding Skills";
    leftElementHeading.style="margin: 0; font-size: 30px; color: #ffd400; text-align: start; font-weight:bold";
    const divRightElement = document.createElement("div");
    divRightElement.className = "right";
    const rightElementHeading = document.createElement("p");
    rightElementHeading.innerText="Professional Skills";
    rightElementHeading.style="margin: 0; font-size: 30px; color: #ffd400; text-align: start;font-weight:bold";
    divRightElement.appendChild(rightElementHeading);
    const innerDivLeftElement = document.createElement("div");
    innerDivLeftElement.className = "nameSection tiny";
    const innerDivRightElement = document.createElement("div");
    innerDivRightElement.className = "nameSection tiny";
    innerDivLeftElement.appendChild(leftElementHeading);
    innerDivRightElement.appendChild(rightElementHeading);
    for(const increment of skillData){
        const innerPLeftElement = document.createElement("div");
        innerPLeftElement.className="skill";
        const createSpan = document.createElement("span");
        createSpan.style.color="white";
        createSpan.innerText=increment.headline;

        const insideDiv=document.createElement("div");
        insideDiv.className="bar";
        const insideAboveDiv = document.createElement("div");
        insideAboveDiv.className="fill";
        insideAboveDiv.style.width=increment.widthInPercent;
        insideDiv.appendChild(insideAboveDiv);
        createSpan.appendChild(insideDiv);
        innerDivLeftElement.appendChild(createSpan);
        
        const innerPRightElement = document.createElement("div");
        innerPRightElement.className="skill";
        const createRightSpan = document.createElement("span");
        createRightSpan.innerText=increment.proHead;
        createRightSpan.style.color="white";
        const insideRightDiv=document.createElement("div");
        insideRightDiv.className="bar"
        const insideAboveRightDiv = document.createElement("div");
        insideAboveRightDiv.className="fill";
        insideAboveRightDiv.style.width=increment.proHeadPer;
        insideRightDiv.appendChild(insideAboveRightDiv);
        createRightSpan.appendChild(insideRightDiv);
        innerDivRightElement.appendChild(createRightSpan);

    }
    divElement.appendChild(innerDivLeftElement);
    divElement.appendChild(innerDivRightElement);
    baseElement.appendChild(divElement);
}
mySkills();