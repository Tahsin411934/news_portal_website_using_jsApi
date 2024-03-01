const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    console.log(data.data.news_category);
    data.data.news_category.forEach(element => {
        const itenContainer = document.getElementById('itenContainer');
        const button = document.createElement('button');
        button.innerHTML = element.category_name;
        button.addEventListener('click', () => {
            showData(element.category_id)
        });
        
        itenContainer.appendChild(button)
        console.log(element.category_name);

    });

}

const showData = async (items) => {
    const arr=[0,9];
    const divContainer = document.getElementById('divContainer');
    divContainer.innerHTML = '';
    console.log(items)


    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${items}`);
    const data = await res.json();
    console.log(data.data)
    console.log('length is', data.data.length)
    const itemFound = document.getElementById('itemFound');
    itemFound.innerHTML = `${data.data.length}  items found for category Entertainment`

    data.data.sort((a, b) => b.total_view - a.total_view);



    data.data.forEach(id => {
        arr.push(id.total_view)
        console.log(arr);
        console.log(id._id)
        console.log(id.author)

        const divContainer = document.getElementById('divContainer');
        const div = document.createElement('div');
        div.classList = 'card w-96 bg-base-100 shadow-xl';
        div.innerHTML = `
        <figure><img src="${id.image_url}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
               '${id.title}'
            </h2>
            <p>'${id.details.slice(0, 200)}'</p>
            <div class="flex justify-between">
                <div class="flex gap-1">
                    <div class="w-10 h-10 ">
                        <img class="rounded-full" src="${id.author.img}" alt="">
                    </div>
                    <div> 
                       <h4>${id.author.name}</h4>
                       <p>${id.author.published_date}</p>
                    </div>
                    
                </div>
                <div>
                    <h2>${id.total_view}</h2>
                </div>
                <div>
                    <h2>ratting</h2>
                </div>
            </div>
    
        </div>`;
        divContainer.appendChild(div);



    });

}


// for (let index = 0; index < 10; index++) {
//     console.log('for index is', index);
    
//     const home= document.getElementById('home');
//     const div = document.createElement('div');
//     div.classList = 'card w-96 bg-base-100 shadow-xl image-full';
//     if (index==0) {
//         div.classList = '';
//         div.classList = 'card w-96 bg-base-100 shadow-xl image-full col-span-3'; 
//     }
//     div.innerHTML=`
//     <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//     <div class="card-body">
//       <h2 class="card-title">Shoes!</h2>
//       <p>If a dog chews shoes whose shoes does he choose?</p>
//       <div class="card-actions justify-end">
//         <button class="btn btn-primary">Buy Now</button>
//       </div>
//     </div>
//   </div>`;
//   home.appendChild(div)
    
// }








loadData()