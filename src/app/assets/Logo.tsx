interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Logo = ({ size = 24, onClick, className = "" }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.928 5.83a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Zm-3.302.9a3.301 3.301 0 1 1 4.502 3.076v5.803l3.184-2.092a3.301 3.301 0 1 1 1.577 1.835 1.236 1.236 0 0 1-.05.034l-4.711 3.096v2.612l2.636 2.639a.857.857 0 0 1 0 1.212l-.486.485a.857.857 0 0 1-1.212 0l-7.821-7.83a3.301 3.301 0 1 1 1.757-1.639l2.725 2.729V9.806a3.303 3.303 0 0 1-2.1-3.076Zm10.805 4.802a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Zm-14.406 2.1a.9.9 0 1 0 0 1.801.9.9 0 0 0 0-1.8ZM29.17 22.39c-1.561-.426-3.254-.431-4.882-.196a1.2 1.2 0 1 1-.344-2.376c2.058-.298 4.372-.284 6.555.471a1.2 1.2 0 0 1 .743.744l2.377 6.903a1.2 1.2 0 0 1-1.35 1.572c-1.57-.284-4.172-.52-6.793-.294-2.663.229-5.106.914-6.59 2.264a1.2 1.2 0 0 1-1.611.004c-1.503-1.352-3.975-2.036-6.67-2.262-2.65-.223-5.283.016-6.872.3a1.2 1.2 0 0 1-1.345-1.576l2.4-6.902a1.2 1.2 0 0 1 .746-.742c2.182-.746 4.494-.77 6.556-.483a1.2 1.2 0 1 1-.33 2.378c-1.635-.227-3.335-.216-4.903.21l-1.56 4.482a30.877 30.877 0 0 1 5.51-.06c2.5.21 5.22.808 7.267 2.232 2.028-1.424 4.721-2.025 7.197-2.238a30.205 30.205 0 0 1 5.443.053L29.17 22.39Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
