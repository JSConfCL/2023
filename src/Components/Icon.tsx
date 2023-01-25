import * as Icons from "react-feather";

type IconName = keyof typeof Icons;

export default function Icon({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  const IconComponent = Object.keys(Icons).includes(name)
    ? // eslint-disable-next-line import/namespace
      Icons[name as IconName]
    : Icons.ExternalLink;

  return <IconComponent size={size} />;
}
