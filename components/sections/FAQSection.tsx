"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchFilter, setSearchFilter] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Answers to common questions regarding consignment tracking, dispatch schedules, pickup coordination, and enterprise service tiers."
        />

        {/* FAQ Search Filter */}
        <div className="mb-8 relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search questions (e.g. tracking, rates, pickup)..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1565C0] shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#1565C0] flex-shrink-0 text-xs font-bold">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0B2D4D]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-orange-50 text-orange-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1565C0] bg-blue-50 px-2 py-0.5 rounded">
                        Category: {faq.category}
                      </span>
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-sm text-slate-500">
              No matching questions found. Try searching for &ldquo;tracking&rdquo; or &ldquo;pickup&rdquo;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
