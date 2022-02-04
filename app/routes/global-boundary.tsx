/*
    I am forcing this page to crash.
    Since there is no Boundary Handler in this page, the Root Boundary will be called
*/
export const loader = async () => {
    /* 
        loader must return a value or null. 
        retuning nothing will force the app to crash
    */
    return;
}

export default function GlobalBoundary() {
    return (
        <>
            <div>
                CRASH
            </div>
        </>
    );
}
