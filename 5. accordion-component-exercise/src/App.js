const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {
    return (
        <div className="accordion">
            {
                data.map((faq, index) => (
                    <Item num={index} title={faq.title} text={faq.text} />
                ))
            }
        </div>
    );
}

function Item({ num, title, text }) {
    return (
        <div className="item">
            <p className="number">{num}</p>
            <p className="title">{title}</p>
            <p className="content-box">{text}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
        </div>
    );
}