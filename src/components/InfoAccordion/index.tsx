import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function InfoAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='fixed bottom-0 min-w-[65ch]'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>What is the Pomodoro Technique?</AccordionTrigger>
        <AccordionContent>
          <p>
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. It uses a timer to break work
            into intervals, typically 25 minutes in length, separated by short
            breaks.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          <ol>
            <li>
              Decide on the task to be done. Set the Pomodoro timer (typically
              for 25 minutes).
            </li>
            <li>Work on the task.</li>
            <li>
              End work when the timer rings and take a short break (typically
              5–10 minutes)
            </li>
            <li>
              Go back to Step 2 and repeat until you complete four pomodoros.
            </li>
            <li>
              After four pomodoros are done, take a long break (typically 20 to
              30 minutes) instead of a short break.
            </li>
            <li>Once the long break is finished, return to step 2.</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Why is a Pomodoro only 25 minutes?</AccordionTrigger>
        <AccordionContent>
          It was created after a typical cooking alarm of 25 minutes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
