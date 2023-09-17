'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import InfoAccordion from '@/components/InfoAccordion';

export default function Home() {
  const [seconds, setSeconds] = React.useState(1500);
  const [timerType, setTimerType] = React.useState('25');
  const [isTimerActive, setIsTimerActive] = React.useState(false);
  const { toast } = useToast();

  const leadingZeros = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  });

  function handleTabChange(e: string) {
    setIsTimerActive(false);
    setSeconds(parseInt(e) * 60);
    setTimerType(e);
  }

  useEffect(() => {
    if (!isTimerActive) return;
    if (seconds <= 0) {
      setIsTimerActive(false);
      setSeconds(parseInt(timerType));
      toast({
        description: 'Timer complete!',
      });
    }

    const timeoutId = setTimeout(timer, 1000);

    function timer() {
      setSeconds((s) => s - 1);
      if (seconds <= 0) {
        setIsTimerActive(false);
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [seconds, isTimerActive, timerType, toast]);

  return (
    <>
      <Progress
        value={(1 - seconds / parseInt(timerType)) * 100}
        className='sticky top-0'
      />
      <main className='center flex min-h-[75vh] flex-col'>
        <Tabs
          value={timerType}
          defaultValue='25'
          className={`center flex flex-col rounded-lg border p-4 shadow-md transition-all ${
            isTimerActive
              ? 'border-blue-100 dark:border-blue-400'
              : 'border-slate-300 dark:border-slate-800'
          }`}
          onValueChange={(e: string) => handleTabChange(e)}
        >
          <TabsList className='shadow-sm'>
            <TabsTrigger value='25'>Timer</TabsTrigger>
            <TabsTrigger value='5'>Short Rest</TabsTrigger>
            <TabsTrigger value='15'>Long Rest</TabsTrigger>
          </TabsList>
          <TabsContent className='tabs_content' value='25'>
            <span>
              {leadingZeros.format(Math.floor(seconds / 60))}:
              {leadingZeros.format(seconds % 60)}
            </span>
          </TabsContent>
          <TabsContent className='tabs_content' value='5'>
            <span>
              {leadingZeros.format(Math.floor(seconds / 60))}:
              {leadingZeros.format(seconds % 60)}
            </span>
          </TabsContent>
          <TabsContent className='tabs_content' value='15'>
            <span>
              {leadingZeros.format(Math.floor(seconds / 60))}:
              {leadingZeros.format(seconds % 60)}
            </span>
          </TabsContent>
          <Button
            variant='secondary'
            className='shadow-sm'
            onClick={() => {
              setIsTimerActive(!isTimerActive);
              toast({
                description: isTimerActive ? 'Timer stopped' : 'Timer started',
              });
            }}
          >
            {isTimerActive ? 'Pause' : 'Start'}
          </Button>
        </Tabs>
        <InfoAccordion />
      </main>
    </>
  );
}
