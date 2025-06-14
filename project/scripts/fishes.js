const fishes = [
    {
        id: "001",
        name: "Clownfish",
        img: "images/clownfish.jpg",
        description: "Clownfish are small and brightly colored fish. They are most famous for their unique symbiotic relationship with sea anemones. Clownfish are immune to the anemone's stinging tentacles due to a special mucus coating, finding protection from predators within the anemone's embrace."
    },
    {
        id: "002",
        name: "Lysmata Amboinensis",
        img: "images/lysmata.jpg",
        description: "Lysmata amboinensis is a popular and beneficial invertebrate in marine aquariums. These vividly colored shrimp typically have a pale amber body with a distinctive white stripe running down their back. They are renowned for their symbiotic cleaning behavior."
    },
    {
        id: "003",
        name: "Ecsenius Bicolor",
        img: "images/bicolor.jpg",
        description: "These blennies are small, and have an elongated body with characteristic comb-like teeth used for grazing algae. They are primarily herbivores, feeding on algae and detritus from rocks and substrate in their natural habitat of clear lagoon and seaward reefs."
    },
    {
        id: "004",
        name: "Juvenile Emperor",
        img: "images/emperor.jpg",
        description: "Juveniles are typically found sheltering in reef cavities, under ledges, and in more protected areas of the reef, sometimes even acting as cleaner fish by removing parasites from larger fish."
    },
    {
        id: "005",
        name: "Starfish",
        img: "images/starfish.jpg",
        description: "Most species typically have five arms radiating from a central disk, giving them their characteristic star shape, though some can have many more arms (up to 40 or 50!). Their bodies are covered in a tough, often spiny, calcified skin for protection."
    },
    {
        id: "006",
        name: "Yellow Sponge",
        img: "images/sponge.jpg",
        description: "As filter feeders, sponges play a vital role in reef ecosystems by drawing in large volumes of water through tiny pores, trapping microscopic particles like plankton, bacteria, and detritus for food, and then expelling filtered water. This process helps to maintain water clarity and nutrient cycling."
    },
    {
        id: "007",
        name: "Xenia",
        img: "images/xenia.jpg",
        description: "Is a genus of soft corals highly prized in marine aquariums for their unique and mesmerizing 'pulsing' motion, where their feathery polyps rhythmically open and close. While the exact reason for this pulsing isn't fully understood, it's believed to aid in gas exchange and nutrient absorption."
    },
    {
        id: "008",
        name: "Entacmaea Quadricolor",
        img: "images/entacmea.jpg",
        description: "Its most distinctive feature is the bulbous or 'bubble-like' tips on its tentacles, though these bubbles can vary significantly in appearance and may not always be present, depending on factors like light intensity, water flow, and whether the anemone is hosting clownfish. Their coloration is also highly variable, ranging from shades of green, brown, rose, orange, and red."
    }
];

function displayData() {
    let div = document.getElementById('fishes');
    fishes.forEach(fish => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('fishes-card');
        newDiv.innerHTML = `
        <h2>${fish.name}</h2>
        <img src="${fish.img}" alt="${fish.name}" loading="lazy">
        <p>${fish.description}</p>
        `;
        div.appendChild(newDiv);
    });
}

displayData();