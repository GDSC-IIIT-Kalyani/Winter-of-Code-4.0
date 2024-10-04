import { useEffect } from "react";
const JumbleText = ({ text,id }: { text: string ,id:string}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            jumble(text,id);
        }, 500);

        return () => clearTimeout(timeout);
    }, [text, id]);

    const jumble = (text: string,id:string) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval: NodeJS.Timeout | null = null;

        const element = document.getElementById(id) as HTMLElement;
        let iteration = 0;
        if (interval)
            clearInterval(interval);

        interval = setInterval(() => {
            if (!element) return;
            element.innerText = element.innerText
                .split("")
                .map((letter: string, index: number) => {
                    if (element.dataset.value && element.dataset.value[index] == ' ')
                        return ' ';
                    if (index < iteration)
                        return element.dataset.value ? element.dataset.value[index] : '';

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (element.dataset.value && iteration >= element.dataset.value.length && interval)
                clearInterval(interval);

            iteration += 1 / 15;
        }, 30);
    }; 

    return (
        <div id={id} data-value={text}>
            {text}
        </div>
    );
};

export default JumbleText;

