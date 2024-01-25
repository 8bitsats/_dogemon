// Populate the Dogemon card select dropdown
const dogemonCardSelect = document.getElementById('dogemonCardSelect');
const dogemonCards = ['Flarepup', 'Aquadog', 'Terrapooch', ...]; // Add card names

dogemonCards.forEach(card => {
    let option = document.createElement('option');
    option.value = card;
    option.text = card;
    dogemonCardSelect.appendChild(option);
});

// Handle the tweet button click
document.getElementById('tweetButton').addEventListener('click', function() {
    const selectedCard = dogemonCardSelect.value;
    const walletAddress = document.getElementById('walletAddress').value;

    if (selectedCard && walletAddress) {
        const tweetText = `My favorite Dogemon card is ${selectedCard}! Check out my Dogecoin wallet too: ${walletAddress}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(twitterUrl, '_blank');
    } else {
        alert('Please select a Dogemon card and enter your Dogecoin wallet address.');
    }
});
