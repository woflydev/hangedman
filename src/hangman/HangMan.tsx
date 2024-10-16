import './HangMan.css';

type HangManProps = {
    numberOfWrongGuesses: number
}

const HangMan = ({numberOfWrongGuesses}: HangManProps) => {


    const head = (
        <div className="head"/>
    )
    const body = (
        <div className="body"/>
    )
    const rightArm = (
        <div className="right_arm"/>
    )
    const leftArm = (
        <div className="left_arm"/>
    )
    const rightLeg = (
        <div className="right_leg"/>
    )
    const leftLeg = (
        <div className="left_leg"/>
    )

    const hangManParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

    return (
        <div className="hang_container">
            {hangManParts.slice(0, numberOfWrongGuesses).map((part, index) => (
                <div key={index}>
                    {part}
                </div>
            ))}
            <div className="hanger"/>
            <div className="ceiling"/>
            <div className="rod"/>
            <div className="floor"/>
        </div>
    );
};

export default HangMan;