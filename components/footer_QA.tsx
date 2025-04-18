import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function QA({ q, a }: { q: string; a: string }) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="QA">
          <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
            <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
              <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                {q}
              </h3>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 px-0">
            <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
              <p className="text-wrap text-sm">{a}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
