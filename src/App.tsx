/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Monitor, Smartphone, Star } from 'lucide-react';

const STEPS = [
  "Click \"Claim Now\"",
  "Enter your email and basic info",
  "Complete 4–5 sponsored deals",
  "Enjoy your $750 voucher!"
];

const FAQS = [
  {
    question: "How long do the deals take?",
    answer: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered."
  },
  {
    question: "What are deals?",
    answer: "Deals are sponsored offers from partner brands like free trials, discount sign-ups, or sample requests. They're how the voucher is funded."
  },
  {
    question: "How many deals do I have to do?",
    answer: "We recommend completing 4 to 5 deals to qualify. The more you complete, the higher your voucher value climbs \u2014 up to $750."
  },
  {
    question: "When will I receive my voucher?",
    answer: "Once your deals are verified, your Ulta Beauty voucher code will be delivered to your email within 24\u201348 hours."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-[10px] shadow-sm overflow-hidden mb-2.5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-3 text-left focus:outline-none"
      >
        <span className="font-bold text-[13px] text-black pr-3">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-black shrink-0" /> : <ChevronDown className="w-4 h-4 text-black shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-3.5 pb-3.5 text-[12px] text-gray-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Desktop Blocker */}
      <div className="hidden sm:flex min-h-screen bg-[#f8f8f5] items-center justify-center p-4">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
              <Monitor className="w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-transparent border-2 border-[#123624] rounded-xl flex items-center justify-center text-[#123624]">
              <Smartphone className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-[22px] font-extrabold text-black mb-3">Please Visit on Mobile</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            This site is optimized for mobile devices. Please visit this page on your phone for the best experience.
          </p>
        </div>
      </div>

      {/* Main App Container */}
      <div className="sm:hidden min-h-screen bg-[#f8f8f5] flex flex-col font-sans text-black">
      {/* Top Banner */}
      <div className="w-full bg-[#f26a21] text-white text-center py-2 text-[11px] font-bold tracking-widest uppercase">
        3,500+ People Already Claimed
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full max-w-[400px] mx-auto px-4 pt-6 pb-8">

        {/* Logo */}
        <div className="h-[56px] mb-5 mt-1 flex justify-center w-full">
          <svg
            className="h-full object-contain text-[#f26a21] fill-current"
            viewBox="0 0 387.5 156.7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M153.8,113.5c0-3.2-0.1-5.4-0.2-7.9c0.7,0,6.3,0,8,0c3.7,0,6.2,1.3,6.2,4.4c0,3.1-3.1,4.5-5,4.7v0 c1.9,0.1,5.5,1.3,5.5,4.8c0,4.1-3.5,5.7-7.1,5.7c-1.7,0-6.9,0-7.6,0c0.1-2.6,0.2-4.7,0.2-7.9L153.8,113.5L153.8,113.5z M159.9,107.2c-0.9,0-1,0-1.5,0.1c0,1.4-0.1,3-0.1,4c0,1,0,2,0,2.9h1.4c1.8,0,3.5-1.2,3.5-3.6C163.2,108.7,162.4,107.2,159.9,107.2 z M159.7,115.8c-0.5,0-0.9,0-1.3,0c0,0.8-0.1,1.6-0.1,2.8c0,1.7,0.1,4,0.1,5c0.5,0,1,0,1.7,0c1.8,0,3.4-1.3,3.4-3.9 C163.5,117.1,162.2,115.8,159.7,115.8z" />
              <path d="M198.8,113.5c0-3.2-0.1-5.4-0.2-7.9c1.9,0,11.1,0,11.9,0c-0.1,0.3-0.1,2,0,2.5c-2.3-0.2-6.2-0.2-7.1-0.2 c-0.1,2.1,0,4,0,6c2.7,0,4.7-0.1,7-0.2c-0.1,0.7-0.1,1.8,0,2.5c-2.3-0.1-4.7-0.3-7-0.3c0,1.2,0,2.4,0,3.7c0,1.2,0,2.2,0.1,3.3 c2.3,0,4.7,0.1,7-0.1c-0.1,0.4-0.1,2.2,0,2.6c-1.1,0-11.2,0-11.9,0c0.2-2.6,0.2-4.7,0.2-7.9V113.5z" />
              <path d="M257.9,125.3c-1,0-4.5,0-5.3,0c-0.7-1.9-1.4-3.9-2.2-5.8c-1.3,0-6,0-7.1,0c-0.9,1.9-1.5,3.9-2.2,5.9 c-0.4,0-2.3,0-2.9,0c1.4-3.2,6-13.4,8.8-19.8c0.4,0,1.9,0,2.3,0C251.9,111.9,255.5,120.7,257.9,125.3z M249.7,117.8 c-0.9-2.3-1.7-4.6-2.7-6.8c-1.1,2.3-2,4.5-2.9,6.8H249.7z" />
              <path d="M282.2,118.2c0-3.1,0.1-4.7,0.1-6.7c0-3.1-0.1-4.9-0.1-5.9c0.9,0,1.7,0.1,2.5,0.1c0.8,0,1.7,0,2.5-0.1 c-0.4,3.7-0.4,6.7-0.4,10c0,7,2.2,8.1,6.1,8.1c4.9,0,5.3-5,5.3-10.3c0-2.6-0.1-5.2-0.3-7.8c0.5,0.1,1.1,0.1,1.6,0.1 c0.6,0,1.1,0,1.5-0.1c-0.2,1.7-0.4,5.8-0.4,10.8c0,6.6-3.1,9.3-9.1,9.3C286.3,125.7,282.2,123.6,282.2,118.2z" />
              <path d="M332.9,110.2c0-1,0.1-2,0-2.4c-1.1,0-3.8,0-5.6,0.2c0.1-0.4,0.1-2,0-2.5c2.8,0,13.1,0,15.8,0 c-0.1,0.5-0.1,2.1,0,2.5c-1.6-0.1-4.4-0.1-5.5-0.1c0,0.4,0,1.3,0,2.3v7.1c0,3.2,0.1,5.3,0.2,7.9c-0.7,0-4.4,0-5,0 c0.2-2.6,0.2-4.7,0.2-7.9C332.9,117.4,332.9,110.2,332.9,110.2z" />
              <path d="M379.9,114.2c1.7-2.2,3.3-5.8,4.6-8.6c0.5,0,2.4,0,3,0c-1.4,2.2-4.5,7.6-6.5,11.2c0,0.9,0,1.6,0,2.6 c0,1.9,0,3.9,0.3,6c-0.9,0-4.3,0-5.2,0c0.1-1.8,0.4-3.7,0.4-5.5c0-0.9,0-1.8-0.1-2.6c-2.2-3.8-5.7-10-6.6-11.6c1,0,4.6,0,5.5,0 C376.7,108.4,379,112.9,379.9,114.2L379.9,114.2z" />
              <g>
                <g>
                  <path d="M76.2,11.4c-0.5,10.7-0.5,24.3-0.5,36.4c0,22.5,0.3,27.5,4.5,33.1c4.2,5.5,12.1,8.6,22.2,8.6 c11.8,0,21.1-5.9,24.3-14.5c1.2-3.1,1.9-7.4,1.9-19c0-18.4-0.2-36.8-1.3-55.2c2,0.3,11.2,0.3,13.4,0l-0.5,6.7 c-0.7,12.2-1.1,41.2-1.4,55.5c-0.3,16.7-5.2,24.3-14.8,30.2c-6.9,4.2-16.6,6.1-24.5,6.1C82.1,99.2,61.1,93.9,58,72 c-0.3-2-0.3-6.2-0.3-7.4V26.1c0-7.2-0.3-18.2-0.7-25.4c3.4,0.4,16.7,0.4,19.6,0L76.2,11.4z" />
                  <path d="M162.6,39.5c0-6.2,0-7.6-0.4-20.1c-0.2-3-0.4-15.7-0.6-18.3c3.7,0.7,16.6,0.6,20.2,0 c-1,21.2-1.5,39-1.5,60.6c0,9.8,0.3,19,0.5,26.7h2.6c4.2,0,25.2,0,33.8-1.3c-0.5,1.5-0.6,8.6,0,10.4c-7.4-0.2-19.9-0.8-27.8-0.8 c-9.4,0-17.2,0.3-27.8,0.8c0-2.2,1-34.8,1-38.4V39.5z" />
                  <path d="M257.9,78.3c0,10.7,0.6,15.3,1,19.2c-4.2-0.4-15.3-0.5-20.6,0c0.6-10.7,1.4-21.5,1.4-32.2l-0.1-39.2 c0-5.2-0.1-10.1-0.4-15.6H232c-1.3,0-15.2,0.3-22.7,1c0.5-1.6,0.8-9.5,0.3-11.2C221.1,1,237,1,248.2,1c12.1,0,25.1-0.2,38.9-1 c-0.4,2.5-0.6,9.3-0.1,11.5c-8.6-0.8-19-1-29-1c-0.1,5.1-0.2,10.4-0.2,15.7V78.3z" />
                </g>
                <path d="M343.8,82.2l-6.1-14.9c-6.2-0.2-30.2-0.2-35.9,0c-4.7,10.8-9.3,22.4-11.6,30.4c-1.9-0.2-11.5-0.2-13.6,0 l16.9-36.1c14.7-31.6,23.1-49.9,26.5-60.8h9.5c7,18.6,15.6,38.3,20.9,50.1c5.5,12.2,15.1,33.3,21.6,46.9c-2.1-0.1-19.4-0.1-22,0 L343.8,82.2z M319.8,24.1L305,58.6c5.1,0.2,10,0.4,15.1,0.4c2.9,0,7.3,0,13.4-0.4L319.8,24.1z" />
              </g>
              <g>
                <g>
                  <g>
                    <path d="M36,5C13.3,20.5,0,39.7,0,63.4c0,53.6,64.7,93.3,157.1,93.3c41.4,0,76-10.7,101.5-23.9h-1.6 c-30.8,9.3-62.1,13.2-94.3,13.2C70,145.9,6.1,102.3,6,62.1C6,39.7,16.3,20.5,36,6.4V5z" />
                  </g>
                </g>
              </g>
              <path d="M360.5,0.6c3.1,0,5.8,2.5,5.8,5.8s-2.6,5.8-5.8,5.8c-3.1,0-5.9-2.5-5.9-5.8C354.6,3.1,357.4,0.6,360.5,0.6z M360.5,11.4c2.7,0,4.8-2.1,4.8-5c0-2.8-2.1-4.9-4.8-4.9c-2.8,0-4.8,2.1-4.8,4.9C355.8,9.2,357.8,11.4,360.5,11.4z M358.2,3h2.6 c1.6,0,2.4,0.7,2.4,2c0,1.2-0.8,1.7-1.8,1.8l2,3h-1.2l-1.8-3h-1.2v3h-1V3z M359.2,6h1.1c0.9,0,1.8-0.1,1.8-1.1c0-1-0.9-1.1-1.6-1.1 h-1.3V6z" />
            </g>
          </svg>
        </div>

        {/* Headers */}
        <h1 className="text-[20px] font-extrabold text-center mb-1 text-black">
           Ulta Beauty Voucher
        </h1>
        <p className="text-gray-600 text-center mb-6 text-[13px]">
          Claim your <span className="font-bold text-black">$750</span> Ulta Beauty voucher
        </p>

        {/* Steps */}
        <div className="w-full flex flex-col gap-2.5 mb-7">
          {STEPS.map((step, index) => (
             <div
              key={index}
              className="bg-white rounded-[10px] py-3 flex items-center shadow-sm border border-transparent"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#f26a21] border-[1.5px] border-[#f26a21] flex items-center justify-center font-bold text-[13px] shrink-0 ml-3.5 mr-3.5">
                {index + 1}
              </div>
              <span className="font-bold text-[13px] pr-4 text-black">{step}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
           onClick={() => window.location.href = atob('aHR0cHM6Ly9naWZ0Y2xpY2sub3JnL2FmZl9jP29mZmVyX2lkPTExODEmYWZmX2lkPTE0NDc2MA==')}
          className="w-full bg-[#f26a21] hover:bg-[#e05b14] active:bg-[#c94b0b] transition-colors text-white font-bold text-[15.5px] py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(242,106,33,0.39)] hover:shadow-[0_6px_20px_rgba(242,106,33,0.23)] active:scale-[0.98] text-center block"
        >
          CLAIM NOW
        </button>

        {/* Footer */}
        <p className="text-[10px] text-gray-400 text-center mt-3.5 mb-7">
          Completion of sponsored deals is required to claim your voucher.
        </p>

        {/* FAQs */}
        <div className="w-full pb-6">
          <h2 className="text-[16px] font-bold text-black mb-3">Frequently Asked Questions</h2>
          <div className="flex flex-col">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-2">
            <span className="text-[#333] font-medium text-[15px]">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-[2px] rounded-sm">
                  <Star className="w-[14px] h-[14px] text-white fill-white" strokeWidth={1} />
                </div>
              ))}
            </div>
            <span className="text-[#666] text-[15px]">4.9 / 5</span>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
