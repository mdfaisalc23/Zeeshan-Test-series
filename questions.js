const subjectName = "General Studies";  // You can change this to any subjec
const questions = [
  { q: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: 0 },
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
  { q: "What part of the cell contains genetic material?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], answer: 0 },
  { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
  { q: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "200°C"], answer: 0 },
  { q: "Which organ pumps blood through the body?", options: ["Heart", "Lungs", "Liver", "Kidney"], answer: 0 },
  { q: "How many planets are in the solar system?", options: ["7", "8", "9", "10"], answer: 1 },
  { q: "What is the nearest star to Earth?", options: ["Sun", "Alpha Centauri", "Proxima Centauri", "Sirius"], answer: 0 },
  { q: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
  { q: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 2 },
  { q: "What gas do humans exhale?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
  { q: "Which blood cells fight infection?", options: ["Red", "White", "Platelets", "Plasma"], answer: 1 },
  { q: "What is the main function of the lungs?", options: ["Pump blood", "Filter blood", "Digest food", "Exchange gases"], answer: 3 },
  { q: "How many bones are in the adult human body?", options: ["206", "208", "201", "210"], answer: 0 },
  { q: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Lead", "Zinc"], answer: 1 },
  { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], answer: 1 },
  { q: "Which sense organ helps us to smell?", options: ["Eyes", "Nose", "Ears", "Skin"], answer: 1 },
  { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: 2 },
  { q: "Which force pulls objects toward Earth?", options: ["Magnetism", "Electricity", "Gravity", "Friction"], answer: 2 },
  { q: "What is the process of water turning into vapor?", options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"], answer: 1 },
  { q: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"], answer: 0 },
  { q: "In which year did India gain independence?", options: ["1947", "1950", "1935", "1962"], answer: 0 },
  { q: "Who founded the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"], answer: 1 },
  { q: "Which movement was launched by Mahatma Gandhi in 1942?", options: ["Dandi March", "Quit India Movement", "Non-Cooperation", "Khilafat"], answer: 1 },
  { q: "Where did the Jallianwala Bagh massacre occur?", options: ["Amritsar", "Delhi", "Mumbai", "Kolkata"], answer: 0 },
  { q: "Who was known as Iron Man of India?", options: ["Rajendra Prasad", "Nehru", "Patel", "Tilak"], answer: 2 },
  { q: "What was the capital of the Mauryan Empire?", options: ["Delhi", "Pataliputra", "Varanasi", "Ujjain"], answer: 1 },
  { q: "When did the battle of Plassey take place?", options: ["1757", "1857", "1761", "1782"], answer: 0 },
  { q: "Who discovered the sea route to India?", options: ["Columbus", "Vasco da Gama", "Magellan", "Cabot"], answer: 1 },
  { q: "Which Mughal emperor built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Babur", "Jahangir"], answer: 1 },
  { q: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: 0 },
  { q: "Which is the longest river in India?", options: ["Ganga", "Brahmaputra", "Yamuna", "Godavari"], answer: 0 },
  { q: "In which state is the Thar Desert located?", options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"], answer: 0 },
  { q: "Which is the largest state in India by area?", options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"], answer: 1 },
  { q: "Where are the Himalayas located?", options: ["North India", "South India", "West India", "East India"], answer: 0 },
  { q: "Which river is known as the 'Sorrow of Bengal'?", options: ["Ganga", "Damodar", "Yamuna", "Kosi"], answer: 1 },
  { q: "Which ocean lies to the south of India?", options: ["Arctic", "Indian", "Atlantic", "Pacific"], answer: 1 },
  { q: "What is the Tropic of Cancer?", options: ["Latitude", "Longitude", "Ocean current", "Plate boundary"], answer: 0 },
  { q: "Which Indian state has the longest coastline?", options: ["Andhra Pradesh", "Gujarat", "Tamil Nadu", "Maharashtra"], answer: 1 },
  { q: "Which is the highest mountain peak in India?", options: ["Kanchenjunga", "Mount Everest", "Nanda Devi", "K2"], answer: 0 },
  { q: "What is 12 x 8?", options: ["96", "86", "108", "112"], answer: 0 },
  { q: "What is the square root of 144?", options: ["11", "12", "13", "14"], answer: 1 },
  { q: "What is the value of pi?", options: ["3.14", "3.41", "2.17", "3.73"], answer: 0 },
  { q: "What is 25% of 200?", options: ["40", "50", "60", "70"], answer: 1 },
  { q: "What is 7 squared?", options: ["14", "49", "21", "28"], answer: 1 },
  { q: "Which is an even number?", options: ["13", "15", "20", "27"], answer: 2 },
  { q: "What comes after 99?", options: ["100", "98", "101", "110"], answer: 0 },
  { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1 },
  { q: "What is 100 divided by 4?", options: ["20", "25", "30", "40"], answer: 1 },
  { q: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1 },
  
  { q: "What is the unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: 2 },
  { q: "What vitamin is produced when sunlight hits the skin?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
  { q: "Which part of the eye controls the amount of light that enters?", options: ["Retina", "Cornea", "Iris", "Lens"], answer: 2 },
  { q: "Which scientist proposed the law of gravity?", options: ["Einstein", "Newton", "Galileo", "Faraday"], answer: 1 },
  { q: "Which metal is liquid at room temperature?", options: ["Mercury", "Gold", "Aluminium", "Silver"], answer: 0 },
  { q: "Which disease is caused by deficiency of iron?", options: ["Scurvy", "Rickets", "Anaemia", "Goitre"], answer: 2 },
  { q: "Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"], answer: 1 },
  { q: "What is the main component of natural gas?", options: ["Butane", "Methane", "Ethane", "Propane"], answer: 1 },
  { q: "Which organ controls the entire human body?", options: ["Heart", "Lungs", "Brain", "Liver"], answer: 2 },
  { q: "What does DNA stand for?", options: ["Dynamic Neural Algorithm", "Deoxyribonucleic Acid", "Diatomic Nucleic Acid", "None of these"], answer: 1 },

  { q: "Who was the first Prime Minister of India?", options: ["Gandhi", "Patel", "Nehru", "Ambedkar"], answer: 2 },
  { q: "Which Indian leader gave the slogan 'Jai Jawan Jai Kisan'?", options: ["Indira Gandhi", "Lal Bahadur Shastri", "Rajiv Gandhi", "Morarji Desai"], answer: 1 },
  { q: "Who led the 1857 revolt in Kanpur?", options: ["Mangal Pandey", "Bahadur Shah Zafar", "Rani Lakshmibai", "Nana Saheb"], answer: 3 },
  { q: "What was the main objective of the Swadeshi Movement?", options: ["Attack Britishers", "Boycott foreign goods", "Conquer Delhi", "Establish military rule"], answer: 1 },
  { q: "When was the Indian Constitution adopted?", options: ["1947", "1950", "1949", "1952"], answer: 2 },
  { q: "Who was known as the ‘Father of Indian Constitution’?", options: ["Gandhi", "Ambedkar", "Nehru", "Tagore"], answer: 1 },
  { q: "Where was the first session of Indian National Congress held?", options: ["Mumbai", "Kolkata", "Delhi", "Chennai"], answer: 0 },
  { q: "Who was the last Governor-General of India?", options: ["C. Rajagopalachari", "Lord Mountbatten", "Wavell", "Curzon"], answer: 0 },
  { q: "In which year did the Battle of Buxar occur?", options: ["1757", "1764", "1857", "1782"], answer: 1 },
  { q: "What was the capital of the Gupta Empire?", options: ["Ujjain", "Kanchi", "Pataliputra", "Mathura"], answer: 2 },

  { q: "What is GDP?", options: ["Gross Domestic Product", "General Debt Plan", "Global Demand Policy", "None"], answer: 0 },
  { q: "Which sector is known as the primary sector?", options: ["Agriculture", "Manufacturing", "IT", "Banking"], answer: 0 },
  { q: "What does RBI stand for?", options: ["Rural Bank of India", "Reserve Bank of India", "Retail Bank of India", "Reform Bank of India"], answer: 1 },
  { q: "What is meant by inflation?", options: ["Decrease in prices", "Increase in prices", "Balanced prices", "None"], answer: 1 },
  { q: "Which tax is collected by the central government in India?", options: ["Property tax", "Income tax", "Sales tax", "Water tax"], answer: 1 },
  { q: "What is the full form of NITI Aayog?", options: ["National Institution for Transforming India", "New India Task Institute", "National Integration and Technology Initiative", "None"], answer: 0 },
  { q: "Which country is India’s largest trading partner?", options: ["China", "USA", "UAE", "Japan"], answer: 1 },
  { q: "Which of the following is not a type of unemployment?", options: ["Structural", "Frictional", "Seasonal", "Normal"], answer: 3 },
  { q: "Which program aims at rural employment?", options: ["MGNREGA", "PM-KISAN", "GST", "UDAY"], answer: 0 },
  { q: "What is disinvestment?", options: ["Buying shares", "Selling shares of government firms", "Tax reduction", "Loan waiver"], answer: 1 },

  { q: "Which is the smallest continent?", options: ["Asia", "Africa", "Australia", "Europe"], answer: 2 },
  { q: "Which river flows through London?", options: ["Seine", "Danube", "Thames", "Rhine"], answer: 2 },
  { q: "Which is the largest island in the world?", options: ["Greenland", "Australia", "New Guinea", "Madagascar"], answer: 0 },
  { q: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },
  { q: "Which country is called the Land of the Rising Sun?", options: ["India", "Japan", "China", "South Korea"], answer: 1 },
  { q: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { q: "What is the currency of the UK?", options: ["Euro", "Pound", "Dollar", "Franc"], answer: 1 },
  { q: "Which continent has no desert?", options: ["Europe", "Asia", "Africa", "South America"], answer: 0 },
  { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
  { q: "Which is the coldest place on Earth?", options: ["Antarctica", "Siberia", "Alaska", "Greenland"], answer: 0 },

  { q: "What is 15 + 36?", options: ["41", "51", "55", "61"], answer: 1 },
  { q: "What is 144 ÷ 12?", options: ["10", "12", "14", "16"], answer: 1 },
  { q: "What is the cube of 3?", options: ["6", "9", "18", "27"], answer: 3 },
  { q: "What is the LCM of 4 and 5?", options: ["10", "15", "20", "25"], answer: 2 },
  { q: "If a = 5, what is a²?", options: ["10", "20", "25", "30"], answer: 2 },
  { q: "What is 8% of 200?", options: ["16", "18", "20", "24"], answer: 0 },
  { q: "Simplify: 3 + 6 x 2", options: ["15", "18", "21", "12"], answer: 0 },
  { q: "Convert 0.75 into fraction.", options: ["1/2", "3/4", "1/3", "2/3"], answer: 1 },
  { q: "What is the perimeter of a square of side 5 cm?", options: ["20", "25", "15", "10"], answer: 0 },
  { q: "What is the average of 10, 20, 30, 40?", options: ["25", "30", "35", "40"], answer: 0 }
];
