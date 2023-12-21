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
document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from JSON file
    fetch('/json/datas.json')
        .then(response => response.json())
        .then(data => {
            const promotionTableBody = document.getElementById('promotionTableBody');

            // Display existing promotions in the table
            data.promotions.forEach(promotion => {
                addPromotionToTable(promotionTableBody, promotion);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function addPromotionToTable(tableBody, promotion) {
    const row = tableBody.insertRow();

    const pidCell = row.insertCell(0);
    pidCell.textContent = promotion.pid;
    pidCell.setAttribute('contenteditable', 'true');

    const titleCell = row.insertCell(1);
    titleCell.textContent = promotion.ptitle;
    titleCell.setAttribute('contenteditable', 'true');

    const descriptionCell = row.insertCell(2);
    descriptionCell.textContent = promotion.pdescription;
    descriptionCell.setAttribute('contenteditable', 'true');

    const linkCell = row.insertCell(3);
    linkCell.textContent = promotion.plink;
    linkCell.setAttribute('contenteditable', 'true');

    const imageCell = row.insertCell(4);
    imageCell.innerHTML = `<img src="${promotion.pimage}" alt="Promotion Image">`;

    const actionCell = row.insertCell(5);
    actionCell.innerHTML = `<button onclick="updatePromotion('${promotion.pid}')">Update</button>
                           <button onclick="deletePromotion('${promotion.pid}')">Delete</button>`;
}

function updatePromotion(pid) {
    // Implement update logic based on your requirements
    alert(`Update promotion with ID: ${pid}`);
}

function deletePromotion(pid) {
    // Implement delete logic based on your requirements
    alert(`Delete promotion with ID: ${pid}`);
}
function addPromotion() {
    // Get input values
    const pid = document.getElementById('pid').value;
    const ptitle = document.getElementById('ptitle').value;
    const pdescription = document.getElementById('pdescription').value;
    const plink = document.getElementById('plink').value;
    const pimage = document.getElementById('pimage').value;

    // Check if any field is empty
    if (!ptitle || !pdescription || !plink || !pimage) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new promotion object
    const newPromotion = {
        pid,
        ptitle,
        pdescription,
        plink,
        pimage
    };

    // Add the new promotion to the table and clear the form
    const promotionTableBody = document.getElementById('promotionTableBody');
    addPromotionToTable(promotionTableBody, newPromotion);

    // Clear form fields
    document.getElementById('ptitle').value = '';
    document.getElementById('pdescription').value = '';
    document.getElementById('plink').value = '';
    document.getElementById('pimage').value = '';

    // Generate a new PID (you may implement this based on your needs)
    const newPid = generateNewPid();
    document.getElementById('pid').value = newPid;
}

function generateNewPid() {
    // Implement your logic to generate a new PID (e.g., get the current maximum PID and increment)
    return 'NewPID';
}
