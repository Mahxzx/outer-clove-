document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from JSON file
    fetch('/json/datas.json')
        .then(response => response.json())
        .then(data => {
            // Display data in respective sections
            document.getElementById('overviewContent').innerHTML = data.overview;
            
            const promotionsList = document.getElementById('promotionsList');
            data.promotions.forEach(promotion => {
                const li = document.createElement('li');
                
                // Create an image element
                const img = document.createElement('img');
                img.src = promotion.image;
                img.alt = promotion.text;
                
                // Create a paragraph element for the promotion text
                const textParagraph = document.createElement('p');
                textParagraph.textContent = promotion.text;
                
                // Append the image and text to the list item
                li.appendChild(img);
                li.appendChild(textParagraph);
                
                // Append the list item to the promotions list
                promotionsList.appendChild(li);
            });

            const feedbackList = document.getElementById('feedbackList');
            data.feedback.forEach(feedback => {
                const li = document.createElement('li');
                li.textContent = feedback;
                feedbackList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
