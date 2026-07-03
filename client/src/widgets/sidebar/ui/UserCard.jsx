import { SignOutIcon } from "@phosphor-icons/react";

function UserCard({ user, onLogout }) {
  return (
    <div className="glass-40 flex items-center justify-between rounded-4xl px-7 py-3">
      <div className="flex items-center gap-3">
        <div className="bg-accent text-surface flex h-13.5 w-13.5 items-center justify-center rounded-full text-2xl">
          {user.username[0]}
        </div>
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
