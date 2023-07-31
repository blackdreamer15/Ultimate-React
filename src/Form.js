export default function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setquantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description: description,
            quantity: quantity,
            packed: false
        }

        onAddItem(newItem);

        setDescription("");
        setquantity(1);
    }


    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>
                What do you need for your trip🤩?
            </h3>

            <select value={quantity} onChange={(e) => (
                setquantity(Number(e.target.value))
            )}>
                {Array.from({ length: 20 }, (_, curr) => (curr + 1)).map((el) => (
                    <option value={el} key={el}>
                        {el}
                    </option>
                ))}
            </select>

            <input type="text" placeholder="Item..."
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }} />

            <button className="button">Add</button>
        </form >
    );
}