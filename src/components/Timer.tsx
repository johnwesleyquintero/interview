import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Timer as TimerIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TimerProps {
  targetTime?: string;
}

export default function Timer({ targetTime }: TimerProps) {
  const { theme } = useTheme();
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const targetSeconds = parseTarget(targetTime);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setSeconds(0);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressColor = () => {
    if (!targetSeconds) return theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
    const ratio = seconds / targetSeconds;
    if (ratio < 0.7) return 'text-emerald-500';
    if (ratio < 1.0) return 'text-amber-500';
    return 'text-red-500';
  };

  const getProgressBg = () => {
    if (!targetSeconds) return theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300';
    const ratio = seconds / targetSeconds;
    if (ratio < 0.7) return 'bg-emerald-500';
    if (ratio < 1.0) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const isDark = theme === 'dark';

  return (
    <div className={`border rounded-xl p-4 mb-6 ${
      isDark
        ? 'bg-[#2f2f2f]/50 border-[#3a3a3a]'
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TimerIcon className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <div>
            <div className={`text-3xl font-mono font-bold ${getProgressColor()}`}>
              {formatTime(seconds)}
            </div>
            {targetTime && (
              <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Target: {targetTime}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={isRunning ? pause : start}
            className={`p-2.5 rounded-lg transition-colors ${
              isDark
                ? 'bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            title={isRunning ? 'Pause' : 'Start'}
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={reset}
            className={`p-2.5 rounded-lg transition-colors ${
              isDark
                ? 'bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
      {targetSeconds > 0 && (
        <div className={`mt-3 h-1.5 rounded-full overflow-hidden ${
          isDark ? 'bg-[#3a3a3a]' : 'bg-gray-200'
        }`}>
          <div
            className={`h-full rounded-full transition-all duration-1000 ${getProgressBg()}`}
            style={{ width: `${Math.min((seconds / targetSeconds) * 100, 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}

function parseTarget(target?: string): number {
  if (!target) return 0;
  const match = target.match(/(\d+)[–-](\d+)\s*(seconds?|minutes?)/i);
  if (!match) return 0;
  const upper = parseInt(match[2]);
  const unit = match[3].toLowerCase();
  if (unit.startsWith('minute')) return upper * 60;
  return upper;
}
