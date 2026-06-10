// SOS Button

function triggerSOS(){

    alert(
        "🚨 SOS ACTIVATED\n\n" +
        "Location captured.\n" +
        "Trusted contacts notified.\n" +
        "Emergency services alerted."
    );

    // TODO:
    // Connect Django API
    // Send SMS
    // Store SOS Alert
}


// LOCATION

function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            function(position){

                document.getElementById(
                    "locationText"
                ).innerHTML =

                "Latitude: " +
                position.coords.latitude +

                "<br>Longitude: " +
                position.coords.longitude;

                // TODO:
                // Send location to Django backend

            }
        );

    }else{

        alert("Geolocation not supported");
    }
}


// CONTACT STORAGE

function addContact(){

    const name =
    document.getElementById(
        "contactName"
    ).value;

    const phone =
    document.getElementById(
        "contactPhone"
    ).value;

    if(name === "" || phone === ""){

        alert("Fill all fields");
        return;
    }

    let contacts =
    JSON.parse(
        localStorage.getItem("contacts")
    ) || [];

    contacts.push({
        name,
        phone
    });

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    loadContacts();

    document.getElementById(
        "contactName"
    ).value="";

    document.getElementById(
        "contactPhone"
    ).value="";
}

function loadContacts(){

    let contacts =
    JSON.parse(
        localStorage.getItem("contacts")
    ) || [];

    const list =
    document.getElementById(
        "contactList"
    );

    list.innerHTML="";

    contacts.forEach(contact=>{

        list.innerHTML += `
        <li>
            ${contact.name}
            - ${contact.phone}
        </li>`;
    });
}

loadContacts();


// DARK MODE

document.getElementById(
    "darkBtn"
).addEventListener(
    "click",
    ()=>{

        document.body.classList.toggle(
            "dark"
        );
    }
);