import Icon from "./Icon";

export interface Message {
  icon?: string;
  message: string;
}

export default function FlagMessage({ message }: { message: Message }) {
  return (
    <div>
      {message.icon ? <Icon name={message.icon} size={32} /> : null}
      <span
        key={message.message}
        dangerouslySetInnerHTML={{ __html: message.message }}
      />
    </div>
  );
}
