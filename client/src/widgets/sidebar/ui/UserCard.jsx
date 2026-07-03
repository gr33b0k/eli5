import { SignOutIcon } from "@phosphor-icons/react";

function UserCard({ user, onLogout }) {
  return (
    <div className="glass-40 flex min-h-19.5 items-center justify-between rounded-4xl px-7 py-4">
      <div className="flex items-center gap-3">
        <span className="bg-accent text-surface font-miranda flex h-10 w-10 items-center justify-center rounded-full text-xl">
          {user.username[0]}
        </span>
        <p className="text-text">{user.username}</p>
      </div>
      <button
        className="text-error cursor-pointer"
        type="button"
        onClick={onLogout}
      >
        <SignOutIcon size={24} />
      </button>
    </div>
  );
}

export default UserCard;
