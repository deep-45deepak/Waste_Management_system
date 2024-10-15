document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const wasteTypes = [
        { name: "Plastic", icon: "droplet", color: "text-blue-400" },
        { name: "Paper", icon: "leaf", color: "text-green-400" },
        { name: "Glass", icon: "recycle", color: "text-yellow-400" },
        { name: "Metal", icon: "trash-2", color: "text-red-400" },
        { name: "Organic", icon: "apple", color: "text-orange-400" },
    ];

    const ecoSteps = [
        { title: 'Reduce', icon: 'trash-2', color: 'from-yellow-400 to-orange-500', description: 'Minimize waste generation' },
        { title: 'Reuse', icon: 'recycle', color: 'from-green-400 to-emerald-500', description: 'Find new uses for items' },
        { title: 'Recycle', icon: 'wind', color: 'from-blue-400 to-indigo-500', description: 'Transform waste into new products' },
    ];

    const ecoTips = [
        "Use reusable bags for shopping",
        "Compost your food waste",
        "Switch to energy-efficient light bulbs",
        "Reduce water consumption",
        "Use public transportation or bike",
    ];

    const tips = [
        {
            title: "Composting 101",
            icon: "seedling",
            description: "Turn kitchen scraps and yard waste into nutrient-rich soil for your garden.",
            details: "Start with a mix of 'green' (nitrogen-rich) and 'brown' (carbon-rich) materials. Layer them in your compost bin, keep it moist, and turn it regularly for faster decomposition.",
            comments: [
                { author: "GreenThumb", text: "I've been composting for years, it's amazing for my garden!" },
                { author: "Newbie", text: "Thanks for the tip, I'm excited to start my composting journey." }
            ]
        },
        {
            title: "Upcycling Ideas",
            icon: "refresh-cw",
            description: "Transform old items into new, useful products to reduce waste and save money.",
            details: "Turn old jars into storage containers, use worn-out clothes as cleaning rags, or repurpose wooden pallets into furniture. Get creative and give items a second life!",
            comments: [
                { author: "CraftyCreator", text: "I love turning old t-shirts into reusable shopping bags!" }
            ]
        },
        {
            title: "Proper Recycling",
            icon: "recycle",
            description: "Learn how to sort and prepare materials for effective recycling.",
            details: "Rinse containers before recycling, remove caps and lids, and check local guidelines for accepted materials. Avoid contamination by keeping non-recyclables out of the recycling bin.",
            comments: []
        },
        {
            title: "Zero Waste Shopping",
            icon: "shopping-bag",
            description: "Tips for reducing packaging waste when grocery shopping.",
            details: "Bring reusable bags, containers, and produce bags. Buy in bulk when possible, choose products with minimal packaging, and opt for reusable or recyclable packaging over single-use plastics.",
            comments: [
                { author: "EcoShopper", text: "I always bring my own containers to the bulk section. It's a game-changer!" }
            ]
        },
        {
            title: "E-Waste Management",
            icon: "smartphone",
            description: "Responsibly dispose of electronic devices to minimize environmental impact.",
            details: "Look for e-waste recycling events in your area, or find certified e-waste recyclers. Many electronics stores also offer take-back programs. Always erase personal data before recycling devices.",
            comments: []
        },
        {
            title: "Water Conservation",
            icon: "droplet",
            description: "Simple ways to reduce water waste in your daily routine.",
            details: "Fix leaky faucets, take shorter showers, install water-efficient appliances, and collect rainwater for gardening. Every drop counts in conserving this precious resource.",
            comments: [
                { author: "WaterSaver", text: "I installed a rain barrel last year, and it's been great for watering my plants!" }
            ]
        }
    ];

    const wasteTypesContainer = document.getElementById('wasteTypes');
    const wasteCategoriesContainer = document.getElementById('wasteCategories');
    const ecoStepsContainer = document.getElementById('ecoSteps');
    const ecoTipContainer = document.getElementById('ecoTip');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const activeWasteInfoContainer = document.getElementById('activeWasteInfo');
    const tipsListContainer = document.getElementById('tipsList');
    const commentModal = document.getElementById('commentModal');
    const commentForm = document.getElementById('commentForm');
    const closeModalButton = document.getElementById('closeModal');

    let activeTipIndex = null;

    // Populate waste types
    if (wasteTypesContainer) {
        wasteTypes.forEach(type => {
            const div = document.createElement('div');
            div.className = 'text-xs sm:text-sm bg-white bg-opacity-20 rounded-full px-2 py-1 backdrop-filter backdrop-blur-lg';
            div.textContent = type.name;
            wasteTypesContainer.appendChild(div);
        });
    }

    // Populate waste categories
    if (wasteCategoriesContainer) {
        wasteTypes.forEach(type => {
            const div = document.createElement('div');
            div.className = `bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 md:p-6 text-center backdrop-blur-lg hover:bg-opacity-30 transition-all cursor-pointer`;
            div.innerHTML = `
                <i data-lucide="${type.icon}" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 ${type.color}"></i>
                <h3 class="text-sm sm:text-base md:text-xl font-semibold">${type.name}</h3>
            `;
            div.addEventListener('click', () => showWasteInfo(type.name));
            wasteCategoriesContainer.appendChild(div);
        });
    }

    // Populate eco steps
    if (ecoStepsContainer) {
        ecoSteps.forEach(step => {
            const div = document.createElement('div');
            div.className = `bg-gradient-to-br ${step.color} rounded-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform shadow-lg`;
            div.innerHTML = `
                <i data-lucide="${step.icon}" class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"></i>
                <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">${step.title}</h3>
                <p class="mb-4 text-sm sm:text-base">${step.description}</p>
                <a href="/tips.html" class="inline-block rounded-full text-sm sm:text-base bg-white text-gray-800 px-4 py-2 hover:bg-gray-100 transition-colors">
                    Learn More <i  data-lucide="arrow-right" class="inline-block ml-2 h-4 w-4"></i>
                </a>
            `;
            ecoStepsContainer.appendChild(div);
        });
    }

    // Populate tips
    if (tipsListContainer) {
        tips.forEach((tip, index) => {
            const div = document.createElement('div');
            div.className = 'bg-white bg-opacity-30 rounded-lg p-6 backdrop-filter backdrop-blur-lg hover:bg-opacity-40 transition-all shadow-lg';
            div.innerHTML = `
                <div class="flex items-center mb-4">
                    <span class="p-2 bg-green-500 rounded-full mr-4">
                        <i data-lucide="${tip.icon}" class="w-6 h-6"></i>
                    </span>
                    <h2 class="text-xl font-semibold">${tip.title}</h2>
                </div>
                <p class="mb-4">${tip.description}</p>
                <details class="text-sm mb-4">
                    <summary class="cursor-pointer hover:underline">Learn more</summary>
                    <p class="mt-2">${tip.details}</p>
                </details>
                <div class="mt-6 bg-white bg-opacity-20 rounded-lg p-4">
                    <h3 class="text-lg font-semibold mb-4 flex items-center">
                        <i data-lucide="message-circle" class="w-5 h-5 mr-2"></i>
                        Comments
                    </h3>
                    <div class="space-y-4 mb-4 max-h-60 overflow-y-auto" id="comments-${index}">
                        ${tip.comments.map(comment => `
                            <div class="bg-white bg-opacity-30 rounded p-3 flex items-start">
                                <i data-lucide="user" class="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-300"></i>
                                <div>
                                    <p class="font-semibold text-green-300">${comment.author}</p>
                                    <p class="text-sm text-white">${comment.text}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button
                        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center justify-center w-full transition-colors add-comment-btn"
                        data-tip-index="${index}"
                    >
                        <i data-lucide="message-circle" class="w-4 h-4 mr-2"></i>
                        Add Comment
                    </button>
                </div>
            `;
            tipsListContainer.appendChild(div);
        });

        // Add event listeners to "Add Comment" buttons
        document.querySelectorAll('.add-comment-btn').forEach(button => {
            button.addEventListener('click', () => {
                activeTipIndex = parseInt(button.getAttribute('data-tip-index'));
                commentModal.classList.remove('hidden');
            });
        });
    }

    // Set initial eco tip
    if (ecoTipContainer) {
        setEcoTip(ecoTips[0]);

        // Rotate eco tips
        let currentTipIndex = 0;
        setInterval(() => {
            currentTipIndex = (currentTipIndex + 1) % ecoTips.length;
            setEcoTip(ecoTips[currentTipIndex]);
        }, 5000);
    }

    // Handle comment form submission
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const author = document.getElementById('author').value;
            const text = document.getElementById('text').value;
            if (author && text && activeTipIndex !== null) {
                addComment(activeTipIndex, author, text);
                commentModal.classList.add('hidden');
                commentForm.reset();
            }
        });
    }

    // Close modal
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            commentModal.classList.add('hidden');
        });
    }

    function setEcoTip(tip) {
        ecoTipContainer.querySelector('p').textContent = tip;
    }


    function setActiveWasteCategory(activeCategoryName) {
        const categories = wasteCategoriesContainer.children;
        for (let category of categories) {
            const categoryName = category.querySelector('h3').textContent;
            if (categoryName === activeCategoryName) {
                category.classList.add('ring-4', 'ring-yellow-400', 'bg-opacity-40');
            } else {
                category.classList.remove('ring-4', 'ring-yellow-400', 'bg-opacity-40');
            }
        }
    }

    function addComment(tipIndex, author, text) {
        tips[tipIndex].comments.push({ author, text });
        const commentsContainer = document.getElementById(`comments-${tipIndex}`);
        const newComment = document.createElement('div');
        newComment.className = 'bg-white bg-opacity-30 rounded p-3 flex items-start';
        newComment.innerHTML = `
            <i data-lucide="user" class="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-300"></i>
            <div>
                <p class="font-semibold text-green-300">${author}</p>
                <p class="text-sm text-white">${text}</p>
            </div>
        `;
        commentsContainer.appendChild(newComment);
        lucide.createIcons();
    }

    lucide.createIcons();
});
