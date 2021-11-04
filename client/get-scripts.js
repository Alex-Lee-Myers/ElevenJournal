// *************************
//!  *** DISPLAY BY USER *** // I MAY HAVE MESSED THIS ONE UP, NEED TO LOOK INTO IT
// **************************
function displayMine() {
    console.log("displayMine Function Called");
    const accessToken = localStorage.getItem('SessionToken');

    fetch(`http://localhost:3000/journal/mine`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response.json())
        .then(data => {
                console.log(data);

                let display = document.getElementById('journals');
                for (i = 0; i = display.childNodes.length; i++) {
                    display.removeChild(display.firstChild)
                }

                if (data.length === 0) { //! get "journals" and "h5"
                    let display = document.getElementById('journals');
                    let header = document.createElement('h5');

                    display.appendChild(header);
                    header.textContent = "You haven't made any posts yet!";
                    header.setAttribute("class", "noPosts")
                } else {
                    for (i = 0; i < data.length; i++) { //! get "journals, div card, div body, h5 header, h6 subtitle, p , edit button, and delete button"
                        let display = document.getElementById('journals');
                        let card = document.createElement('div');
                        let body = document.createElement('div');
                        let header = document.createElement('h5');
                        let subtitle = document.createElement('h6');
                        let para = document.createElement('p');
                        let editBtn = document.createElement('button');
                        let deleteBtn = document.createElement('button');
                        //! current^ data, title, date, and entry
                        let current = data[i];
                        let title = current.title;
                        let date = current.date;
                        let entry = current.entry;
                        //! TEXTCONTENT title, date, entry, Edit Button, Delete Button
                        header.textContent = title;
                        subtitle.textContent = date;
                        para.textContent = entry;
                        editBtn.textContent = "Edit";
                        deleteBtn.textContent = "Delete";
                        //! APPENDALLTHETHINGS to the HTML
                        display.appendChild(card);
                        card.appendChild(body);
                        body.appendChild(header);
                        body.appendChild(subtitle);
                        body.appendChild(para);
                        body.appendChild(editBtn);
                        body.appendChild(deleteBtn);
                        //! SETATTRIBUTE id, card, body, header, subtitle, para
                        card.setAttribute('id', current.id);
                        card.setAttribute('class', 'card');
                        body.setAttribute('class', 'card-body');
                        header.setAttribute('class', 'card-title');
                        subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                        para.setAttribute('class', 'card-text');
                        //! SETATTRIBUTE editBtn
                        editBtn.setAttribute('class', 'btn btn-dark editBtn');
                        editBtn.setAttribute('type', 'button');
                        editBtn.setAttribute('onclick', `editJournal(${current.id})`);
                        //! SETATTRIBUTE deleteBtn
                        deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
                        deleteBtn.setAttribute('type', 'button');
                        deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

                    }
                }
            })
        }
// **************************
//!  ***  DISPLAY ALL ***
// ***************************
function displayAll() {
    console.log("displayAll Function Called");

    fetch(`http://localhost:3000/journal/`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let display = document.getElementById('journals');
            for (i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }

            if (data.length === 0) {
                let display = document.getElementById('journals');
                let header = document.createElement('h5');

                display.appendChild(header);
                header.textContent = "You haven't made any posts yet!";
                header.setAttribute("class", "noPosts")
            } else {
                for (i = 0; i < data.length; i++) {
                    let display = document.getElementById('journals');
                    let card = document.createElement('div');
                    let body = document.createElement('div');
                    let header = document.createElement('h5');
                    let subtitle = document.createElement('h6');
                    let para = document.createElement('p');
                    let editBtn = document.createElement('button');
                    let deleteBtn = document.createElement('button');

                    let current = data[i];
                    let title = current.title;
                    let date = current.date;
                    let entry = current.entry;

                    header.textContent = title;
                    subtitle.textContent = date;
                    para.textContent = entry;
                    editBtn.textContent = "Edit";
                    deleteBtn.textContent = "Delete";

                    display.appendChild(card);
                    card.appendChild(body);
                    body.appendChild(header);
                    body.appendChild(subtitle);
                    body.appendChild(para);
                    body.appendChild(editBtn);
                    body.appendChild(deleteBtn);

                    card.setAttribute('id', current.id);
                    card.setAttribute('class', 'card');
                    body.setAttribute('class', 'card-body');
                    header.setAttribute('class', 'card-title');
                    subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                    para.setAttribute('class', 'card-text');

                    editBtn.setAttribute('class', 'btn btn-dark editBtn');
                    editBtn.setAttribute('type', 'button');
                    ditBtn.setAttribute('onclick', `editJournal(${current.id})`);

                    deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
                    deleteBtn.setAttribute('type', 'button');
                    deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

                }
            }
        })
        .catch(err => {
            console.error(err)
        })
}
// **************************
//! *** DISPLAY BY TITLE ***
// **************************
function displayByTitle() {
    console.log("displayByTitle Function Called");

    let journalTitle = document.getElementById('searchBar').value;
    console.log(journalTitle);

    fetch(`http://localhost:3000/journal/${journalTitle}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let display = document.getElementById('journals');
            for (i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }

            if (data.length === 0) {
                let display = document.getElementById('journals');
                let header = document.createElement('h5');

                display.appendChild(header);
                header.textContent = "You haven't made any posts yet!";
                header.setAttribute("class", "noPosts")
            } else {
                for (i = 0; i < data.length; i++) {
                    let display = document.getElementById('journals');
                    let card = document.createElement('div');
                    let body = document.createElement('div');
                    let header = document.createElement('h5');
                    let subtitle = document.createElement('h6');
                    let para = document.createElement('p');
                    let editBtn = document.createElement('button');
                    let deleteBtn = document.createElement('button');

                    let current = data[i];
                    let title = current.title;
                    let date = current.date;
                    let entry = current.entry;

                    header.textContent = title;
                    subtitle.textContent = date;
                    para.textContent = entry;
                    editBtn.textContent = "Edit";
                    deleteBtn.textContent = "Delete";

                    display.appendChild(card);
                    card.appendChild(body);
                    body.appendChild(header);
                    body.appendChild(subtitle);
                    body.appendChild(para);
                    body.appendChild(editBtn);
                    body.appendChild(deleteBtn);

                    card.setAttribute('id', current.id);
                    card.setAttribute('class', 'card');
                    body.setAttribute('class', 'card-body');
                    header.setAttribute('class', 'card-title');
                    subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                    para.setAttribute('class', 'card-text');

                    editBtn.setAttribute('class', 'btn btn-dark editBtn');
                    editBtn.setAttribute('type', 'button');
                    editBtn.setAttribute('onclick', `editJournal(${current.id})`);

                    deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
                    deleteBtn.setAttribute('type', 'button');
                    deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);

                }
            }
        })
        .catch(err => {
            console.error(err)
        })
}