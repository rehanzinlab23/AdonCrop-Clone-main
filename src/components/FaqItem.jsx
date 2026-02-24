const FaqItem = ({ index, question, answer, activeIndex, toggleFAQ }) => {
    return (
        <div className={`faq-item ${activeIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <p className="faq-title">{question}</p>
            </div>
            <div className="faq-answer">
                <p itemprop="text">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
