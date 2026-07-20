function UserMessage({ message }) {
  return (
    <div className="bg-accent text-surface max-w-[80%] self-end rounded-4xl px-4 py-3">
      <p>{message.content}</p>
    </div>
  );
}

export default UserMessage;
