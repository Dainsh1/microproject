document.getElementById("loadDataBtn").addEventListener("click", async () => { // by clicking the button this function fetches data from data.json file
    const apiURL = 'http://localhost:3333/api/products';  // URL on which fetched data will be displayed
    try {  // try and catch function helps in managing errors
        const response = await fetch(apiURL);
        const data = await response.json();  // asynchronous function

        let ulContent = '<ul>';
        for (const item of data) {
            ulContent += `<li>${item.name}: $${item.price}<br>${item.description}</li>`;
        }
        ulContent += '</ul>';
        
        document.getElementById("dataContainer").innerHTML = ulContent; 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
