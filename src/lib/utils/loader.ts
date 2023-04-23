import { afterNavigate, beforeNavigate } from '$app/navigation';
import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

const navigaton = (canStartApp: boolean) => {

    const navigationLimit = 500;
    const showPage = writable(canStartApp);
    let timeout: NodeJS.Timeout;
    let timeStarted: number | undefined;

    //FIXME : Should be disabled if the page is already loaded
    beforeNavigate((nav) => {
        if (nav?.to?.route.id !== nav.from?.route.id) {
            showPage.set(false);
            clearTimeout(timeout);
            timeStarted = new Date().getTime();
        }
    });
    afterNavigate((nav) => {
        if (!nav.from || nav?.to?.route.id !== nav.from?.route.id) {
            const timeTook = new Date().getTime() - (timeStarted || 0);

            if (timeTook > navigationLimit) {
                clearTimeout(timeout);
                timeStarted = undefined;
                showPage.set(true)
            } else {
                timeout = setTimeout(() => {
                    showPage.set(true)
                }, navigationLimit - timeTook);
            }
        }
    });

    onDestroy(() => {
        clearTimeout(timeout);
    });


    return showPage
}

export default navigaton