import SvgIcon from '../SvgIcon';

const icons = import.meta.glob('../../assets/icons/logo-*.svg', { eager: true });
console.log(icons);
const iconUrls = Object.values(icons).map((mod) => {
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  console.log(svgName);
  return svgName;
});

export function Header() {
  return (
    <div>
      {iconUrls.map((item) => (
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
    </div>
  );
}
