const setMarqueeClass = (className, direction, interval) => {
    const elements = document.getElementsByClassName(className);

    setInterval(() => {
        for (let i = 0, n = elements.length; i < n; i++) {
            const text = elements[i].textContent;
            elements[i].textContent = direction === 'backwards'
                ? text.substring(1) + text.charAt(0)
                : text.charAt(text.length - 1) + text.substring(0, text.length - 1);
        }
    }, interval);
};

setMarqueeClass('back-marquee', 'backwards', 15);
setMarqueeClass('forw-marquee', 'forwards', 15);

setMarqueeClass('back-moving-banner', 'backwards', 100);
setMarqueeClass('forw-moving-banner', 'forwards', 100);
