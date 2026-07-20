import { SignOutIcon } from "@phosphor-icons/react";

function UserCard({ compact, user, onLogout }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="bg-accent text-surface font-miranda flex h-10 w-10 items-center justify-center rounded-full text-xl">
          {user.username[0].toUpperCase()}
        </span>
        {!compact && <p className="text-text">{user.username}</p>}
      </div>
      {!compact && (
        <button
          className="text-error cursor-pointer"
          type="button"
          onClick={onLogout}
        >
          <SignOutIcon size={24} />
        </button>
      )}
    </>
  );
}

export default UserCard;
