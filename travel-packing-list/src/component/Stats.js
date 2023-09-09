export default function Stats({ items }) {
    const numOfItems = items.length;
    const numOfPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round((numOfPackedItems / numOfItems) * 100);

    return (
        <footer className="stats">
            <p>
                {numOfItems ? (
                    <i>
                        {percentage === 100 ?
                            "You got everything! Ready to go ✈️" :
                            `You have ${numOfItems} items on your list, and you have already packed ${numOfPackedItems} (${percentage}%)`}
                    </i>
                ) :
                    "Start adding some items to your packing list 🚀"}
            </p>
        </footer>
    );
}
