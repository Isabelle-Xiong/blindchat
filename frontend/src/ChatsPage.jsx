import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="background">
            <PrettyChatWindow
                projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID = '4366fbfc-a3ca-415b-a112-532cd9e8a83d'}
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage;