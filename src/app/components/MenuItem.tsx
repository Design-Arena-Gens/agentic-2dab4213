interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

export function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white/80 p-5 shadow-inner shadow-gyros-sand/60 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gyros-blue">{name}</h3>
        <p className="mt-1 text-sm text-gyros-blue/70">{description}</p>
      </div>
      <span className="text-lg font-semibold text-gyros-clay">{price}</span>
    </div>
  );
}
