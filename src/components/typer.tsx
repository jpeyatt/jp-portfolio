import { useEffect, useState, FunctionComponent } from 'react';

interface ITyperProps {
    textSets: string[],
    typeSpeed: number,
    delSpeed: number,
    pause: number,
    repeat: number
} 

const Typer: FunctionComponent<ITyperProps> = ({textSets, typeSpeed, delSpeed, pause, repeat}) => {
    const [text, setText] = useState('');

    const updateNextChar = (i: number, t: string, s: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(setText(t));
            }, s);
        });
    };

    const pauseBetweenSets = (s: number) => {
        return new Promise((resolve) => {
            setTimeout(() => { 
                resolve(null); 
            }, s);
        });
    };

    const runTypeLoop = async (repeatCount: number) => {
        let t = '';
        for (let i = 0; i < repeatCount; i++) {
            for (let j = 0; j < textSets.length; j++) {
                const textSet = textSets[j];
                const isLastLoop = i === repeatCount - 1 && j === textSets.length - 1;
                for (let i = 0; i < textSet.length; i++) {
                    t += textSet[i];
                    await updateNextChar(i, t, typeSpeed);
                }
                if (!isLastLoop) {
                    await pauseBetweenSets(pause);
                    // Delete textSet
                    for (let i = 0; i < textSet.length; i++) {
                        t = textSet.substring(0, textSet.length - 1 - i);
                        await updateNextChar(i, t, delSpeed);
                    }
                }
            }
        }
    };

    useEffect(() => {
        void runTypeLoop(repeat);
    // eslint-disable-next-line
    }, []);

    return (
        <span>{text}</span>
    );
}

export default Typer;
