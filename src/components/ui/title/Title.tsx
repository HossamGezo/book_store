// Styles
import "./title.css";
// Types
type TitleType = {
  title: string;
};
// Main Component
const Title = ({title}: TitleType) => {
  return (
    <div className="main-title relative text-3xl mb-10 font-bold bg-linear-to-r from-primary via-primary/ to-primary text-shadow-2xs font-jetbrains text-transparent bg-clip-text select-none">
      {title}
    </div>
  );
};

export default Title;
