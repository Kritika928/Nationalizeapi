let html = "";

const searchBtn = document.getElementById('search-btn');
const meallist = document.getElementById('meal');
searchBtn.addEventListener('click', getMeal);


function getMeal()
{
    let searchinputtext = document.getElementById('search-input').value.trim();

    const fetching=async ()=>{
        let res=await fetch(`https://api.nationalize.io?name=${searchinputtext}`)
    let data =await res.json();
    console.log(data);
data((values)=>{then(response => response.json()).then(data => {
      
        if(data.meals){
            data.meals.forEach(meal => {
                html+= `  <div class ="meal-result">
                <h2 class ="title">Your search results:</h2>
                     <div id="meal">
                        <div class = "meal-item">
                            <div class="meal-name">
                                <h3>Country Name:${meal.country.country_id} </h3>
                                <h3>Probability Value: ${meal.country.probability}</h3>
                            </div>
                        </div>
    
                     </div>
            </div>`;
            });
        }
        meallist.innerHTML = html;
        });
})