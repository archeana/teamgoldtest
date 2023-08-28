
let userName = ""; // To store the user's name
let currentQuestionIndex = 0; // Initialize the current question index
let selectedAnswerIndex = null; // To track the selected answer index


// Function to set up event listeners for answer buttons and feedback

function setupAnswerButton(buttonId, feedbackId, feedbackText, feedbackLink) {
    const button = document.getElementById(buttonId);
    const feedbackElement = document.getElementById(feedbackId);

    button.addEventListener("click", function () {
        const feedbackContent = `<a href="${feedbackLink}">${feedbackText}</a>`;
        feedbackElement.innerHTML = feedbackContent;

        // After setting the feedback, enable the "Next" button
        nextButton.disabled = false;
        selectedAnswerIndex = buttonId; // Store the selected answer for future reference
    });
}

// Set up each answer button with its feedback
function setupAnswerButton(buttonId, feedbackId, buttonText, linkToURL) {
    const button = document.getElementById(buttonId);
    const feedback = document.getElementById(feedbackId);

    feedback.addEventListener("click", () => {
        // Open the link in a new tab/window
        window.open(linkToURL, "_blank");
    });

    button.addEventListener("click", () => {
        // Perform some action here, e.g., showing feedback
        feedback.textContent = buttonText;
    });
}
// Question 1
setupAnswerButton("q1a1", "fbq1a1", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linkfood");
setupAnswerButton("q1a2", "fbq1a2", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linktr");
setupAnswerButton("q1a3", "fbq1a3", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linkat");
setupAnswerButton("q1a4", "fbq1a4", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linkfr");
setupAnswerButton("q1a5", "fbq1a5", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linkcl");
setupAnswerButton("q1a6", "fbq1a6", "Maybe check our tips, here", "https://archeana.github.io/teamgoldtest/#linkhe");

// Question 2
setupAnswerButton("q2a1", "fbq2a1", "consider cooking more meals at home to save on restaurant bills", "https://archeana.github.io/teamgoldtest/#linkfood");
setupAnswerButton("q2a2", "fbq2a2", "Great choice!👏");

// Question 3
setupAnswerButton("q3a1", "fbq3a1", "practice proper meal planning and storage to minimize food waste.", "https://archeana.github.io/teamgoldtest/#linkfood");
setupAnswerButton("q3a2", "fbq3a2", "Well done!👏");

// Question 4
setupAnswerButton("q4a1", "fbq4a1", "consider buying whole produce and preparing it yourself to save money. Tip: Do this once a week to save time.", "https://archeana.github.io/teamgoldtest/#linkfood");
setupAnswerButton("q4a2", "fbq4a2", "Great choice!👏");

// Question 5
setupAnswerButton("q5a1", "fbq5a1", "consider canceling the membership and exploring free or low-cost exercise options.", "https://archeana.github.io/teamgoldtest/#linkat");
setupAnswerButton("q5a2", "fbq5a2", "For now it is a good choice but if you really want it try to find a cheaper one👏");

// Question 6
setupAnswerButton("q6a1", "fbq6a1", "prioritize regular check-ups to catch and address health concerns early, potentially saving money on extensive treatments later.", "https://archeana.github.io/teamgoldtest/#linkhe");
setupAnswerButton("q6a2", "fbq6a2", "Very well!👏");

// Question 7
setupAnswerButton("q7a1", "fbq7a1", "try to switch to healthy alternatives and have a cheat day once a month.", "https://archeana.github.io/teamgoldtest/#linkfood");
setupAnswerButton("q7a2", "fbq7a2", "Great choice👏");

// Question 8
setupAnswerButton("q8a1", "fbq8a1", "Consider taking public transport when possible or using a fuel-saving app.", "https://archeana.github.io/teamgoldtest/#linktr");
setupAnswerButton("q8a2", "fbq8a2", "Great choice! If you need extra tips","https://archeana.github.io/teamgoldtest/#linktr");
setupAnswerButton("q8a3", "fbq8a3", "Great choice!👏");

// Question 9
setupAnswerButton("q9a1", "fbq9a1", "Take a look into trains, buses, car-sharing (e.g. BlaBlaCar), or budget airlines for longer journeys, as these can sometimes be more cost-effective.", "https://archeana.github.io/teamgoldtest/#linktr");
setupAnswerButton("q9a2", "fbq9a2", "Great choice!👏");

// Question 10
setupAnswerButton("q10a1", "fbq10a1", "think about combining errands into fewer trips or using public transportation for such tasks.", "https://archeana.github.io/teamgoldtest/#linktr");
setupAnswerButton("q10a2", "fbq10a2", "Great choice!👏");

// Question 11
setupAnswerButton("q11a1", "fbq11a1", "consider checking your city for free events like concerts in the park, open galleries, and free museum days.", "https://archeana.github.io/teamgoldtest/#linkat");
setupAnswerButton("q11a2", "fbq11a2", "Great choice!👏");


// Question 12
setupAnswerButton("q12a1", "fbq12a1", "consider replacing them with LED or CFL bulbs that are more energy-efficient and longer-lasting.", "https://archeana.github.io/teamgoldtest/#linkfr" );
setupAnswerButton("q12a2", "fbq12a2", "Great choice👏");

// Question 13
setupAnswerButton("q13a1", "fbq13a1", "try to switch to reusable products (e.g., cloth napkins and reusable water bottles) to save money over time.", "https://archeana.github.io/teamgoldtest/#linkfr");
setupAnswerButton("q13a2", "fbq13a2", "Great choice!👏");

// Question 14
setupAnswerButton("q14a1", "fbq14a1", "focus on building a versatile wardrobe with timeless pieces that can be mixed and matched or explore other options.", "https://archeana.github.io/teamgoldtest/#linkcl");
setupAnswerButton("q14a2", "fbq14a2", "Great choice!👏");

// Question 15
setupAnswerButton("q15a1", "fbq15a1", "practice proper clothing care and repair to extend the lifespan of your garments.", "https://archeana.github.io/teamgoldtest/#linkcl");
setupAnswerButton("q15a2", "fbq15a2", "Great choice!👏");

// Question 16
setupAnswerButton("q16a1", "fbq16a1", "Great choice!👏");
setupAnswerButton("q16a2", "fbq16a2", "you should consider going to second-hand clothes shop and find a unique piece", "https://archeana.github.io/teamgoldtest/#linkcl");

// Question 17
setupAnswerButton("q17a1", "fbq17a1", "Great choice!👏");
setupAnswerButton("q17a2", "fbq17a2", "you should consider going to second-hand shop and find a unique piece for your house or even materials for your hobbies.", "https://archeana.github.io/teamgoldtest/#linkat");





// Function to display the current question
function displayQuestion(page, questionIndex) {
    const question = questions[questionIndex];
    const questionElement = page.querySelector('.question');
    const answerContainer = page.querySelector('.answer-container');
    const nextButton = document.getElementById("nextButton");

    // Display the question text
    questionElement.textContent = question.question;

    // Clear the answer container
    answerContainer.innerHTML = '';

    // Iterate through the answers and create buttons for each
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.id = `q${questionIndex + 1}a${index + 1}`;
        button.classList.add('answer-button');
        answerContainer.appendChild(button);

        // Set up event listener for the answer button
        setupAnswerButton(button.id, `fbq${questionIndex + 1}a${index + 1}`, answer.feedback, answer.link);
    });
}

// Display the specified page and hide others
function showPage(pageIndex) {
    const pages = document.querySelectorAll('.page1');
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

// Function to handle "Next" button click
function nextQuestion() {
    if (!userName) {
        return; // If the user's name is not provided, do not proceed
    }

    if (selectedAnswerIndex === null) {
        return; // If no answer is selected, do not proceed
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showPage(currentQuestionIndex);
        displayQuestion(document.querySelector('.page1'), currentQuestionIndex);

        // Clear the selected answer for the next question
        selectedAnswerIndex = null;
        // Disable the "Next" button until a new answer is clicked
        nextButton.disabled = true;
    } else {
        // Handle end of questions
    }
}

// go back
function backQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showPage(currentQuestionIndex);
        displayQuestion(document.querySelector('.page1'), currentQuestionIndex);
    }
}

// Page 0 
function LetsAlert() {
    userName = prompt('Great! Please provide your name: ');
    if (userName) {
        document.getElementById('userMsg').innerText = `Welcome, ${userName}! Scroll a little down👇`;
    }
}

function nextQuestion() {
    if (!userName) {
        return; // If the user's name is not provided, do not proceed
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showPage(currentQuestionIndex);
        displayQuestion(document.querySelector('.page1'), currentQuestionIndex);
    } else {
        // Handle end of questions
    }
}

// Last question thank you 
function LastQuestion() {
    const thankYouMessage = document.querySelector('.pfin');
    thankYouMessage.style.display = 'block'; // Show the message
}

// Display the first page and question-container initially
showPage(0);



// Questions and answers does not work was suppose to populate the html but could not make it work
const questions = [
    {
        question: "1. Which category do you spend more money?",
        answers: [
            {
                text: "Food",
                feedback: "Maybe check our tips",
                link: "https://archeana.github.io/teamgoldtest#linkfood"
            },
            {
                text: "Transport",
                feedback: "Great choice for exploring!",
                link: "https://archeana.github.io/teamgoldtest"
            },
            {
                text: "Activities",
                feedback: "Prioritizing your health is important.",
                link: "https://archeana.github.io/teamgoldtest"
            },
            {
                text: "Household",
                feedback: "Maybe explore other alternatives",
                link: "https://archeana.github.io/teamgoldtest"
            },
            {
                text: "Clothes",
                feedback: "Maybe explore other alternatives",
                link: "https://archeana.github.io/teamgoldtest"
            },
            {
                text: "Health",
                feedback: "Maybe explore other alternatives",
                link: "https://archeana.github.io/teamgoldtest"
            }
        ]
    },
    {
        question: "2. Do you frequently dine out or order takeout for most meals?",
        answers: [
            {
                text: "Yes",
                feedback: "consider cooking more meals at home to save on restaurant bills.",
                link: "#"
            },
            {
                text: "No",
                feedback: "Great choice!",
            },
        ]
    },
    {
        question: "3.Do you throw away leftovers or food that has gone bad?",
        answers: [
            {
                text: "Yes",
                feedback: "practice proper meal planning and storage to minimize food waste.",
                link: "#"
            },
            {
                text: "No",
                feedback: "Well done!",
                link: "#"
            },
        ]
    },
    {
        question: "4. Do you buy pre-cut fruits and vegetables?",
        answers: [
            {
                text: "Yes",
                feedback: "consider buying whole produce and preparing it yourself to save money. Tip: Do this once a week to save time.",
                link: "#"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#"
            },
        ]
    },
    {
        question: "5. Do you have a gym membership but rarely use it?",
        answers: [
            {
                text: "Yes",
                feedback: "consider canceling the membership and exploring free or low-cost exercise options.",
                link: "#"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#k2"
            },
        ]
    },
    {
        question: "6. Do you ignore minor health issues until they become serious?",
        answers: [
            {
                text: "Yes",
                feedback: "prioritize regular check-ups to catch and address health concerns early, potentially saving money on extensive treatments later.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Very well!",
            },
        ]
    },
    {
        question: "7. Are you spending significant money on fast food and unhealthy snacks?",
        answers: [
            {
                text: "Yes",
                feedback: "try to switch to healthy alternatives and have a cheat day once a month.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Great choice",
                link: "#4"
            }
        ]
    },
    {
        question: "8. How often do you drive?",
        answers: [
            {
                text: "Every day",
                feedback: "Consider taking public transport when possible or using a fuel-saving app.",
                link: "#1"
            },
            {
                text: "Only when necessary",
                feedback: "Great choice!",
                link: "#2"
            },
            {
                text: "I don't have a car",
                feedback: "Great choice!",
                link: "#3"
            },
        ]
    },
    {
        question: "9. Do you primarily rely on your car for long-distance travel?",
        answers: [
            {
                text: "Yes",
                feedback: "look into using trains, buses, car-sharing (e.g. BlaBlaCar), or budget airlines for longer journeys, as these can sometimes be more cost-effective.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#2"
            },
        ]
    },
    {
        question: "10. Do you often use your car for errands like grocery shopping or picking up small items?",
        answers: [
            {
                text: "Yes",
                feedback: " think about combining errands into fewer trips or using public transportation for such tasks.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#2"
            },
        ]
    },
    {
        question: "11. Do you participate in expensive recreational activities?",
        answers: [
            {
                text: "Yes",
                feedback: "consider checking your city for free events like concerts in the park, open galleries, and free museum days.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#2"
            },
        ]
    },
    {
        question: "12. Do you use incandescent light bulbs instead of energy-efficient ones?",
        answers: [
            {
                text: "Yes",
                feedback: "Great choice",
                link: "#1"
            },
            {
                text: "No",
                feedback: "consider replacing them with LED or CFL bulbs that are more energy-efficient and longer-lasting.",
                link: "#2"
            },
        ]
    }, {
        question: "13. Do you often purchase single-use items (e.g. paper napkins, plastic water bottles, straws)?",
        answers: [
            {
                text: "Yes",
                feedback: "Great choice!",
                link: "#1"
            },
            {
                text: "No",
                feedback: "try to switch to reusable products (e.g., cloth napkins and reusable water bottles) to save money over time.",
                link: "#2"
            },
        ]
    }, {
        question: "14. Do you frequently buy clothes to keep up with the latest fashion trends?",
        answers: [
            {
                text: "Yes",
                feedback: "focus on building a versatile wardrobe with timeless pieces that can be mixed and matched or explore other options.",
                link: "#1"
            },
            {
                text: "No, I only buy clothes when necessary.",
                feedback: "Great choice!",
                link: "#2"
            },
        ]
    }, {
        question: "15. Do you discard clothes after wearing them just a few times?",
        answers: [
            {
                text: "Yes",
                feedback: "practice proper clothing care and repair to extend the lifespan of your garments.",
                link: "#1"
            },
            {
                text: "No",
                feedback: "Great choice!",
                link: "#2"
            },
        ]
    }, {
        question: "16. Do you buy second-hand clothes instead of buying new ones when possible?",
        answers: [
            {
                text: "Yes",
                feedback: "Great choice!",
                link: "#1"
            },
            {
                text: "No",
                feedback: "you should consider going to second-hand clothes shop and find a unique piece",
                link: "#2"
            },
        ]
    },
    {
        question: "17. Do you buy second-hand itens to your house instead of buying new ones?",
        answers: [
            {
                text: "Yes",
                feedback: "Great choice!",
                link: "#1"
            },
            {
                text: "No",
                feedback: "you should consider going to second-hand shop and find a unique piece for your house or even materials for your hobbies.",
                link: "#2"
            },
        ]
    },
    // Add more questions as needed
];


