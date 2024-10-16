import './Message.css';

type MessageProps = {
    message: string
}

const Message = ({message}:MessageProps) => {
    return (
        <div className="message">
            <h1>{message}</h1>
            <button className="button" onClick={() => window.location.reload()}>Play Again</button>
        </div>
    );
};
export default Message;