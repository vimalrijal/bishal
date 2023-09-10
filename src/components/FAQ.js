import React, { useState } from "react";

// FAQ data
const faqData = [
  // Child Insurance
  {
    question: "Is child life insurance necessary?",
    answer: `Child life insurance can provide financial protection in the event of a child’s unexpected death. While it is not typically considered a necessity, some parents choose to purchase it as a way to cover funeral costs and create savings for the child’s future.`,
  },
  {
    question: "What does child life insurance cover?",
    answer:
      "Child life insurance generally covers funeral expenses and may also accumulate cash value over time. Some policies may offer additional benefits, such as the ability to convert the policy into an adult policy when the child reaches a certain age.",
  },

  // Adult Insurance
  {
    question: "How much life insurance do I need as an adult?",
    answer:
      "The amount of life insurance needed as an adult depends on various factors, including your income, debts, and the financial needs of your dependents. A financial advisor can help you determine the appropriate coverage amount.",
  },
  {
    question: "Is term or whole life insurance better for adults?",
    answer:
      "The choice between term and whole life insurance for adults depends on your financial goals and budget. Term life insurance is more affordable and provides coverage for a specified term, while whole life insurance offers lifetime coverage with a cash value component.",
  },

  // Couple Insurance
  {
    question: "Should couples get joint life insurance policies?",
    answer:
      "Couples can choose to get individual policies or a joint life insurance policy, depending on their needs. Joint policies typically cover both individuals and pay out upon the first death. Individual policies provide separate coverage for each person.",
  },
  {
    question: "Can couples have different types of life insurance?",
    answer:
      "Yes, couples can choose different types of life insurance based on their preferences and needs. For example, one partner may opt for term life insurance, while the other may prefer whole life insurance.",
  },

  // Parent-Child Insurance
  {
    question: "What is parent-child life insurance?",
    answer: `Parent-child life insurance is a policy that covers both a parent and their child. It provides financial protection in case of the parent or child's death and may also include features like cash value accumulation.`,
  },
  {
    question: "How does parent-child life insurance work?",
    answer: `Parent-child life insurance typically pays out upon the death of either the parent or child, depending on the policy's terms. Some policies allow for the conversion of the child's coverage into an adult policy when they reach a certain age.`,
  },

  // Elderly Insurance
  {
    question: "Can elderly individuals get life insurance?",
    answer:
      "Yes, elderly individuals can obtain life insurance coverage, although it may be more expensive than coverage for younger individuals. There are specialized policies designed for seniors, such as final expense or burial insurance.",
  },
  {
    question: "What is the purpose of final expense insurance?",
    answer: `Final expense insurance is designed to cover the costs associated with a person's funeral and burial. It is a type of life insurance policy that provides peace of mind to elderly individuals and their families.`,
  },
];

function AccordionItem({
  question,
  answer,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const isActive = index === activeIndex;

  return (
    <div className="border-t border-gray-300 text-cyan-800">
      <button
        className="w-full flex justify-between items-center py-4 px-4 focus:outline-none hover:bg-gray-100"
        onClick={() => setActiveIndex(isActive ? null : index)}
      >
        <span className="font-semibold">{question}</span>
        <span
          className={`transform ${
            isActive ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          &#9660;
        </span>
      </button>
      {isActive && (
        <div className="p-4 bg-gray-100">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="mx-auto max-w-4xl mt-10">
      <h1 className="text-3xl font-semibold mb-4 text-cyan-800">
        Frequently Asked Questions
      </h1>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

export default FAQ;
