"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, CheckCircle, Info } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 bg-white scroll-mt-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <SectionHeading
          badge="Sample Testimonials"
          title="Conceptual Customer Feedback"
          subtitle="Fictional sample feedback included for this technical assignment; these testimonials do not represent real customers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Top Row: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2D4D] text-white font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2D4D]">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.designation}</p>
                    <p className="text-[11px] text-[#1565C0] font-medium mt-0.5">
                      {t.businessType} &bull; {t.location}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Service: {t.shipmentType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Assignment Notice */}
        <div className="mt-8 text-center text-xs text-slate-600 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#1565C0]" />
          <span>
            <strong>Demo content:</strong> Names, roles, companies, locations, ratings, and testimonials are fictional and created for demonstration purposes.
          </span>
        </div>
      </div>
    </section>
  );
}
