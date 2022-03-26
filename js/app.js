window.onload = () => {
    let textBox = document.getElementById(`text-box`),
    numberBox = document.getElementById(`number-box`),
    body = document.getElementsByTagName(`body`)[0],
    sproutedCalifronia = 2,
    sproutedCaliforniaSoft = 5.5,
    whiteRice = 2,
    errorStyles = `background-color: red; padding: 2px;
        color: white; font-family: monospace; border-radius: 4px;`,
    resetErrorStyles = `background-color: inherit; padding: inherit;
        color: inherit; font-family: inherit; border-radius: none;`;

    function getRiceCupCalculator (value){
        let x,y;
        x = 2 * value;
        y = 5.5 * value;
        document.getElementById('number-box-1') = x;
        document.getElementById('number-box-2') = y;
    }
    
    if (null !== number-Box-1) {
        document.onkeydown = (e) => {
            console.info(e.code);

            if (`ArrowUp` === e.code) {
                document.getElementById('number-box-1');

                r
            } else {
                if (e.code === `ArrowDown`) {
                    ddocument.getElementById('number-box-1');
                }
            }
        };
    } else {
        console.error(
            `A reference to ID %c number-box %c could not be established.`,
            errorStyles, resetErrorStyles);
    }
}
