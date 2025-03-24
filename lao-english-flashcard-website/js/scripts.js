const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');
const progress = document.getElementById('progress');
const total = document.getElementById('total');

const flashcards = [
    { lao: 'ສະບາຍດີ', english: 'Hello' },
    { lao: 'ເຈົ້າ', english: 'Yes / you' },
    { lao: 'ບໍ່', english: 'No' },

{ lao: 'ຂອບໃຈ', english: 'Thank you' },

{ lao: 'ຂໍໂທດ', english: 'Excuse me / Sorry' },

{ lao: 'ລາກ່ອນ', english: 'Goodbye' },

{ lao: 'ສະບາຍດີຕອນເຊົ້າ', english: 'Good morning' },

{ lao: 'ສະບາຍດີຕອນສວາຍ', english: 'Good afternoon' },

{ lao: 'ສະບາຍດີຕອນແລງ', english: 'Good evening' },

{ lao: 'ຝັນດີ', english: 'Good night' },
{ lao: 'ທ່ານຊື່ຫຍັງ?', english: 'What is your name?' },

{ lao: 'ຂ້ອຍຊື່___', english: 'My name is ___' },

{ lao: 'ທ່ານຢູ່ໃສ?', english: 'Where are you from?' },

{ lao: 'ຂ້ອຍມາຈາກ___', english: 'I am from ___' },

{ lao: 'ທ່ານເວົ້າພາສາອັງກິດໄດ້ບໍ?', english: 'Do you speak English?' },

{ lao: 'ຂ້ອຍບໍ່ເຂົ້າໃຈ', english: 'I don’t understand' },

{ lao: 'ທ່ານເວົ້າຊ້າຍໆໄດ້ບໍ?', english: 'Can you speak slowly?' },

{ lao: 'ນີ້ແມ່ນຫຍັງ?', english: 'What is this?' },

{ lao: 'ນັ້ນແມ່ນຫຍັງ?', english: 'What is that?' },

{ lao: 'ທ່ານເຮັດວຽກຫຍັງ?', english: 'What do you do for work?' },
{ lao: 'ຫນຶ່ງ', english: 'One' },

{ lao: 'ສອງ', english: 'Two' },

{ lao: 'ສາມ', english: 'Three' },

{ lao: 'ສີ່', english: 'Four' },

{ lao: 'ຫ້າ', english: 'Five' },

{ lao: 'ຫົກ', english: 'Six' },

{ lao: 'ເຈັດ', english: 'Seven' },

{ lao: 'ແປດ', english: 'Eight' },

{ lao: 'ເກົ້າ', english: 'Nine' },

{ lao: 'ສິບ', english: 'Ten' },
{ lao: 'ມື້ນີ້', english: 'Today' },

{ lao: 'ມື້ອື່ນ', english: 'Tomorrow' },

{ lao: 'ມື້ວານນີ້', english: 'Yesterday' },

{ lao: 'ເວລາ', english: 'Time' },

{ lao: 'ຊົ່ວໂມງ', english: 'Hour' },

{ lao: 'ນາທີ', english: 'Minute' },

{ lao: 'ວັນຈັນ', english: 'Monday' },

{ lao: 'ວັນອັງຄານ', english: 'Tuesday' },

{ lao: 'ວັນພຸດ', english: 'Wednesday' },

{ lao: 'ວັນພະຫັດ', english: 'Thursday' },

{ lao: 'ວັນສຸກ', english: 'Friday' },

{ lao: 'ວັນເສົາ', english: 'Saturday' },

{ lao: 'ວັນອາທິດ', english: 'Sunday' },
{ lao: 'ເຂົ້າ', english: 'Rice' },

{ lao: 'ນ້ຳ', english: 'Water' },

{ lao: 'ເຂົ້າປຽກ', english: 'Sticky rice' },

{ lao: 'ປາ', english: 'Fish' },

{ lao: 'ຊີ້ນ', english: 'Meat' },

{ lao: 'ຜັກ', english: 'Vegetables' },

{ lao: 'ໝາກໄມ້', english: 'Fruit' },

{ lao: 'ເບຍ', english: 'Beer' },

{ lao: 'ກາເຟ', english: 'Coffee' },

{ lao: 'ຊາ', english: 'Tea' },

{ lao: 'ເຂົ້າຈີ່', english: 'Bread' },

{ lao: 'ເຂົ້າຫນົມ', english: 'Dessert' },
{ lao: 'ເມືອງ', english: 'City' },

{ lao: 'ບ້ານ', english: 'Village' },

{ lao: 'ທາງ', english: 'Road' },

{ lao: 'ຂວາ', english: 'Right' },

{ lao: 'ຊ້າຍ', english: 'Left' },

{ lao: 'ຊື່', english: 'Straight' },

{ lao: 'ໄປ', english: 'Go' },

{ lao: 'ຢຸດ', english: 'Stop' },

{ lao: 'ໃກ້', english: 'Near' },

{ lao: 'ໄກ', english: 'Far' },

{ lao: 'ທີ່ນັ່ງ', english: 'Seat' },

{ lao: 'ຮ້ານຄ້າ', english: 'Shop' },

{ lao: 'ຕະຫຼາດ', english: 'Market' },

{ lao: 'ທະນາຄານ', english: 'Bank' },

{ lao: 'ໂຮງແຮມ', english: 'Hotel' },
{ lao: 'ຄອບຄົວ', english: 'Family' },

{ lao: 'ພໍ່', english: 'Father' },

{ lao: 'ແມ່', english: 'Mother' },

{ lao: 'ລູກ', english: 'Child' },

{ lao: 'ອ້າຍ', english: 'Older brother' },

{ lao: 'ເອື້ອຍ', english: 'Older sister' },

{ lao: 'ນ້ອງຊາຍ', english: 'Younger brother' },

{ lao: 'ນ້ອງສາວ', english: 'Younger sister' },

{ lao: 'ຫມົດ', english: 'Husband' },

{ lao: 'ເມຍ', english: 'Wife' },
{ lao: 'ດີໃຈ', english: 'Happy' },

{ lao: 'ໂສກເສົ້າ', english: 'Sad' },

{ lao: 'ເຈັບປວດ', english: 'Pain' },

{ lao: 'ຢ້ານ', english: 'Afraid' },

{ lao: 'ຕື່ນເຕັ້ນ', english: 'Excited' },

{ lao: 'ເບື່ອ', english: 'Bored' },

{ lao: 'ຮ້ອນ', english: 'Hot' },

{ lao: 'ໜາວ', english: 'Cold' },

{ lao: 'ຫິວ', english: 'Hungry' },

{ lao: 'ຢາກນ້ຳ', english: 'Thirsty' },
{ lao: 'ກິນ', english: 'Eat' },

{ lao: 'ດື່ມ', english: 'Drink' },

{ lao: 'ນອນ', english: 'Sleep' },

{ lao: 'ຍ່າງ', english: 'Walk' },

{ lao: 'ແລ່ນ', english: 'Run' },

{ lao: 'ຂຽນ', english: 'Write' },

{ lao: 'ອ່ານ', english: 'Read' },

{ lao: 'ຟັງ', english: 'Listen' },

{ lao: 'ເບິ່ງ', english: 'Watch' },

{ lao: 'ຮຽນ', english: 'Study' },
    // Add more flashcards here
];

let currentCardIndex = 0;
let reviewedCards = 0;

function updateCard() {
    cardFront.textContent = flashcards[currentCardIndex].lao;
    cardBack.textContent = flashcards[currentCardIndex].english;
}

function updateProgress() {
    progress.textContent = reviewedCards;
    total.textContent = flashcards.length;
}

flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

nextButton.addEventListener('click', () => {
    flashcard.classList.remove('flipped');
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    reviewedCards++;
    updateCard();
    updateProgress();
});

// Initialize the first card and progress
updateCard();
updateProgress();