const add_button = document.querySelector('.button-text');
const updateLsData = () =>{
   const user_input = document.querySelectorAll('textarea');
   let user_data = [];
   user_input.forEach((e) =>{
      user_data.push(e.value)
   })
   localStorage.setItem('notes', JSON.stringify(user_data));
}
// create div with help of java
const addNotes = (text = "") =>{
   const notes = document.createElement('div');
   notes.classList.add('note');
   
   let htmlData =`
   <div class="operation">
            <button class="edit"><i class="fas fa-pen-to-square"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
   `;
   notes.insertAdjacentHTML('afterbegin', htmlData);
   document.body.appendChild(notes);


// getting references
   const del_button = notes.querySelector('.delete');
   const edit_button = notes.querySelector('.edit');
   const main_div = notes.querySelector('.main');
   const textArea = notes.querySelector('textarea');

   
   textArea.value = text;
   main_div.innerHTML = text;

   // onchange function 
   textArea.addEventListener('change', (e) =>{
     let get_text = e.target.value;
     main_div.innerHTML= get_text;
     updateLsData();
   })
   
   // here function for toggle of notes
edit_button.addEventListener('click', () =>{
   main_div.classList.toggle('hidden');
   textArea.classList.toggle('hidden');
})
   // here function for delete notes
   del_button.addEventListener('click', () =>{
      notes.remove();
   })
}
add_button.addEventListener('click', () =>addNotes());
let getLSdata = JSON.parse(localStorage.getItem('notes'));
if(getLSdata){getLSdata.forEach((e) => addNotes(e))};