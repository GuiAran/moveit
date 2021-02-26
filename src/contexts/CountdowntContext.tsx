import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdonw: () => void;
    resetCountdonw: () => void;

}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdounTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdonw() {
        setIsActive(true);
    }

    function resetCountdonw() {
        clearTimeout(countdounTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdounTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])



    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdonw,
                resetCountdonw,

            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}