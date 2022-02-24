// h/w ex7: onClick in React#
// This is mostly a revision of previous sessions.
//  Mixing vanillaJS concepts with ReactJS for 7.1 and watch https://youtu.be/Icr3pGbz3iE?t=5848 if you’re unable to do 7.2.

// challenge
// 7.1 Create a button in React and print the event
// Can you print the button text from this event?
// 7.2 Create a list in React. Use array of objects. Use map to render the list
// On every list there should be an onClick handler. Clicking on this should print the details of the object.

//7.1
const handleClick = (e) => {
    console.log("Event: ", e.type);
    console.log("Button text: ", e.target.value);
};

export default function App() {
    return (
        <div className="App">
            <input onClick={(e) => handleClick(e)} type="button" value="Click me" />
        </div>
    );
}

//7.2
const items = [
    {
        name: "Book",
        id: 1,
        price: 500,
        availability: "In stock."
    },
    {
        name: "Photoframe",
        id: 2,
        price: 350,
        availability: "Out of stock."
    }
];

const printDetails = (e) => {
    console.log(e.availability);
};

export default function App() {
    return (
        <div className="App">
            {items.map((e) => {
                return (
                    <div onClick={(ele) => printDetails(e)} key={e.id}>
                        {e.name}
                    </div>
                );
            })}
        </div>
    );
}


