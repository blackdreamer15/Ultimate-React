import { useState } from "react";

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
    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className="accordion">
            {
                data.map((faq, index) => (
                    <AccordionItem
                        num={index}
                        title={faq.title}
                        onIsOpen={setCurOpen}
                        curOpen={curOpen}
                        key={index}
                    >
                        {faq.text}
                    </AccordionItem>
                ))
            }
            <AccordionItem
                num={22}
                title={"Thinking in React"}
                onIsOpen={setCurOpen}
                curOpen={curOpen}
                key={"Thinking in React"}
            >
                <p>Allows React developers to:</p>
                <ul>
                    <li>Break UI into components</li>
                    <li>Make components reusable</li>
                    <li>Place state efficiently</li>
                </ul>
            </AccordionItem>
        </div>
    );
}

function AccordionItem({ num, title, onIsOpen, curOpen, children }) {
    const isOpen = num === curOpen;

    function handleClicking() {
        if (isOpen) onIsOpen(null);
        else onIsOpen(num);
    }
    ;
    return (
        <div className={`item ${isOpen ? "open" : ""}`}
            onClick={handleClicking}
        >
            <p className="number">
                {(num < 9) ?
                    `0${num + 1}` : `${num + 1}`
                }
            </p>

            <p className="title">{title}</p>

            <p className="icon">
                {isOpen ? "-" : "+"}
            </p>

            {isOpen &&
                <div className="content-box">
                    {children}
                </div>
            }
        </div >
    );
}